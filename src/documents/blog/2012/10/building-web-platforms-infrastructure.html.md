---
author: Ryan Lane
comments: false
date: 2012-10-10 18:44:42+00:00
layout: blog
slug: building-web-platforms-infrastructure
title: Building Web Platform's Infrastructure
wordpress_id: 13
categories:
- Infrastructure
- Site News
path:
  - href: '/blog/'
    inner: blog
  - href: '/blog/2012/'
    inner: 2012
  - href: '/blog/2012/10/'
    inner: October
---

For the initial launch of Web Platform, we decided to go for an alpha release with a small and concrete set of platform goals. We used open source software, and we kept the initial set of applications small, to focus on preparing them to handle the initial launch load.


## Applications targeted


The initial set of applications targeted were those that launched with the alpha: [MediaWiki](http://www.mediawiki.org) (docs), [Wordpress](http://wordpress.org) (blog),  [Piwik](http://piwik.org) (stats), [Question2Answer](http://www.question2answer.org) (talk/forums), [qwebirc](http://qwebirc.org) (talk/chat), and [LumberJack](http://curtis.lassam.net/software/lumberjack/) (chat logging). The first four are PHP applications, qwebirc is Python, and LumberJack is Python, PHP, and JavaScript.


## Scaling targets


Our upper-bound targets for launch day were:




  * 100,000 visitors


  * 200 anonymous requests per second


  * 10 logged-in requests per second.


Our use case assumes 95+% of requests will be reads.

We wanted to be well-prepared for whatever the Internet would throw at us.


## Launch statistics


Our actual statistics for the launch day were:




  * 86,000 visitors


  * 720,000 page views


  * 300 requests per second during the US peak


  * 350 requests per second during the Europe peak.


Our application servers combined CPU load was steady between 10-20%. Memory usage was steady between 20-30%. Database wait-io (the only statistic that really showed a blip) was between 5-10%. The storage servers showed no statistics worth mentioning.

Here's how we managed this...

<!-- more -->


## Approach


I'm going to describe the backend infrastructure in this post. We'll talk more about the different applications in later posts.


### Platform


One of our goals was to limit the amount of infrastructure used as much as possible, so cloud services was the way to go. We used [HP Cloud](https://www.hpcloud.com/) for our platform. We're currently using their compute and block storage services. HP Cloud uses [OpenStack](http://www.openstack.org) as their infrastructure stack, which fits well with our goal of using open source solutions or hosted solutions based on open source products where possible.

Our platform currently has the following instances:




  * 5 application servers, with specs:


    * 8GB RAM, 240GB disk, 4 VCPUs





  * 2 database servers, with specs:


    * 16GB RAM, 480GB disk, 4 VCPUs





  * 2 storage servers, with specs:


    * 2GB RAM, 50GB disk (volume storage), 2 VCPUs





  * 1 deployment server, with specs:


    * 2GB RAM, 60GB disk, 2 VCPUs





  * 1 monitoring server, with specs:


    * 2GB RAM, 60GB disk, 2 VCPUs





  * 1 backup server, with specs:


    * 2GB RAM, 50GB disk (volume storage), 2 VCPUs





  * 1 bots server, with specs:


    * 1GB RAM, 30GB disk, 1 VCPU





All instances run Ubuntu Linux (either lucid or precise).


### Automation, deployment and configuration management


Every infrastructure project should start with configuration management. Everything should be kept in a repository and everything that's put into production should be automated.

For configuration management, deployment and remote execution we use [Salt Stack](http://saltstack.org/). For configuration management we use salt states. For deployment we use a combination of salt states, salt modules, and salt runners. For remote execution we use salt modules. We keep everything in a number of git repositories.

Automation is done by building instances using the OpenStack compute API, injecting a bootstrapping script into user data, and using cloud-init to install the salt minion and point it at the master. Instances are named by role, which allows us to use globs to pre-define an instance's role; for instance: app* -> application server, db* -> database server, etc.. Instances come up completely configured and ready to be added to a pool.


### Frontend cache


The use case of our applications is almost totally based on reads. To scale our use case, we simply need to increase the number of reads we can handle. This is effectively handled by frontend caching.

For our frontend caching service, we use [Fastly](http://www.fastly.com/), which specializes in dynamic long-tail content, like MediaWiki. Fastly was a top choice because it can purge caches globally in a very, very short period of time. MediaWiki's use case assumes instant purging for editing, so this was a fairly hard requirement for any CDN chosen. Fastly also uses Varnish, which suits our goals of using open source solutions well.

To use Fastly, we created CNAME DNS entries for [docs.webplatform.org](http://docs.webplatform.org), [talk.webplatform.org](http://talk.webplatform.org), [blog.webplatform.org](http://blog.webplatform.org), and [stats.webplatform.org](http://stats.webplatform.org). Each Fastly service load balances our set of application servers, with health checks.

No infrastructure plan survives contact with the audience. Upon launch, we had scaling issues with our static content at [webplatform.org](http://webplatform.org). webplatform.org must be an A record, so we couldn't point it at Fastly. We had pointed www.webplatform.org as a CNAME to webplatform.org with a fairly long TTL, so we created a www1.webplatform.org CNAME, and pointed it at Fastly. After doing so, we redirected webplatform.org to www1.webplatform.org, as a temporary hack to deal with the load balancing. DNS for www.webplatform.org was expired globally the following day, so we pointed requests back to www.webplatform.org at that point.


### Backend cache


MediaWiki and Wordpress must do generation of some of their content, which is expensive. MediaWiki, for instance, must convert wiki markup into HTML output; for some of our very long articles this can take 5-15 seconds. Using a backend cache, it's possible to avoid regenerating the content.

Additionally, PHP is an interpreted language and it must be converted into bytecode each run. It's possible to cache the bytecode result.

We use memcache for our backend cache, and APC for our PHP bytecode cache. Two of our application servers run memcache with 2GB of cache per node; combined that can hold all of our content plus more. APC is installed on all application servers with a shared memory size of 240MB.


### Horizontal scaling


Even with good frontend caching, we still have a fair number of requests hit the backend. To handle this we deploy all applications on all application servers. We put sessions in memcache and used our frontend caches to load balance between the application servers.

Though we deploy all applications to all application servers, we are still able to move the traffic for the applications around to specific application servers, if needed. We split the applications into separate subdomains. Each subdomain is a separate service in our frontend cache. If Question2Answer starts eating too many resources and affects the performance of the site, we could move it to a single application server, and move the other services away from that server.

We handle different services on the application servers using a fairly generic virtual host configuration in Apache.

Having generic application servers also allows us to quickly scale if we need to add application servers. We can launch new application servers, deploy the code to them, then add them to the Fastly configuration.


### Shared storage


MediaWiki and Wordpress require storage of user uploaded files. Since we have loadbalanced application servers, we can't store the uploads locally.

We have two storage nodes, running glusterfs with a replicated volume. We share the volume to the application servers, which mount the shares via the fstab.


### Database replication with read/write separation


Assuming 5% of our traffic will be writes, and we expect 10 logged-in requests per second, we expect a very low number of writes per second to our database.

We're using the standard lucid install of MySQL with replication enabled. Very little tuning has been done since the writes per second are relatively low.

MediaWiki is the only special configuration. It's using db2 for reads and db1 for writes.


### Email


We avoided setting up mail services. We're using [SendGrid](http://sendgrid.com/) for mail delivery and accept no incoming mail. This may change in the future.


### Monitoring


We only needed a basic amount of monitoring for launch. We're using ganglia to monitor resource usage. For ganglia's configuration, we have a single [monitoring server](http://monitor.webplatform.org/ganglia/). That server has a gmond process per cluster. gmond on every server talks to the appropriate gmond service on the monitoring server. gmetad subscribes to each of those processes locally. We're using the ganglia-webfrontend package from Ubuntu's precise repository.


### system Logging


We're using three services for logging: rsyslog, syslog-ng, and udp2log.

We're using rsyslog and syslog-ng for Apache error logs. Apache is configured to send its logs to syslog:local1. rsyslog on the application servers is configured to send its local1 logs to the deployment server. The deployment server uses syslog-ng to send udp logs to a combined error file.

We're also using a service called udp2log, which was written by and is maintained by the Wikimedia Foundation. udp2log is a simple service. It takes udp messages and sends them to a set of pipes. We have a pipe configured that is a python script called demux.py. demux splits the messages received into a file name and a message. MediaWiki is configured to send messages per log group to udp2log. This allows us to see exception messages, pages that parse slowly, memcache errors, etc.. Like syslog-ng, udp2log runs on the deployment system, allowing developers and operations people to see all logs on a centralized system.


### Backups


We're using a very simple mechanism for backups. The deployment server runs crons to backup software repos, uploaded files, etc.. The database servers run crons to backup the databases. We have a backup system that rsyncs the local backup copies from the deployment server and database servers onto a volume service mounted disk. We keep backups for 30 days. We use LVM for the backup disk and keep LVM snapshots for a week.


## Future infrastructure changes


There's a few things that we didn't get to implement for launch that would be nice to have from an infrastructure point of view:




  * Object storage. We're using glusterfs right now, but it's not ideal. Mounting shared storage is a great way to have a really bad outage, especially on virtualized infrastructure. Object storage is more reliable and handled by the cloud provider. The support for object storage in MediaWiki is currently mostly undocumented. In the future we'll switch away from using glusterfs to using HP Cloud's object storage (which is based on OpenStack Swift). This would eliminate two servers from our infrastructure.


  * Database as a Service. Our database usage is tiny. It's really wasteful to have two xlarge instances handling this. It would be more effective for us to run on HP Cloud's database service. This would eliminate two servers from our infrastructure.


  * Offisite backup to an object store. All of our backups are in the same datacenter, currently. We thankfully have backups on volume storage and a second copy on instance storage, on different intances, but it would be better to have the backups in another datacenter in object storage.


  * LVM snapshots of the database disks. Backups are nice, but LVM snapshots of database disks are much nicer for more instant recovery.


  * Fastly API. We can further our automation setup by automatically adding new application servers into services by using the Fastly API. By doing so we could auto-expand and auto-shrink our application server cluster as needed.


  * Releasing our salt configuration management repository. Our repository isn't really in a state that's currently releasable. It has some embedded passwords and other sensitive things. We also don't have a reasonable way to host it currently. Relying on GitHub for deployment is terrifying, since we don't have proper control of the repositories. We'll likely host a Gerrit instance and replicate to GitHub for this.

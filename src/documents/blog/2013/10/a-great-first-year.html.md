---
author: scottrowe
comments: false
date: 2013-10-17 17:50:54+00:00
layout: blog
slug: a-great-first-year
title: A Great First Year!
wordpress_id: 729
categories:
- Site News
---

Forty-thousand some odd page edits on 8,740 total pages by 23,939 registered users summarizes a year of effort toward creating the web's definitive source for technical documentation. Web Platform Docs, is still just a baby, yet to emerge from pre-alpha into beta release, and there's a lot of work to do before we can lend it the car keys, but it's off to a great start!

![ ](//static.webplatform.org/wpd-blog/2013/10/Birthday1.png)


The community, armed to the teeth, heads out to document the web.*





## Content, and lots of it


At this time last year we launched the site with a huge pile of content donated by Microsoft, Mozilla, Opera, the W3C, and Google. It _had_ to be huge, and, consequently, it needed a lot of work. Updating and organizing the content was and is the most important activity on the site.

Thanks to the invaluable efforts of [Dave Gash](http://docs.webplatform.org/wiki/User:Dgash), [Mike Sierra](http://docs.webplatform.org/wiki/User:Sierra), [Lance Leonard](http://docs.webplatform.org/wiki/User:Lleonard), and many others, we reorganized the [API Reference](http://docs.webplatform.org/wiki/apis), updating 9 imported API documents and adding 13 new documents, in over 730 pages. This provides the web with an excellent reference for many of the main HTML5 APIs, including a few that are documented nowhere else, like the [WebAudio API](http://docs.webplatform.org/wiki/apis/webaudio).

We've also developed a comprehensive [CSS properties reference](http://docs.webplatform.org/wiki/css/properties). This reference is almost (over 275 properties) finished - well, almost finished enough to let Adobe Brackets and Chrome DevTools cross-reference the content so that it is available to users right in those tools. Too many of you to name here have contributed to this effort, but this project would be nowhere without the unflagging leadership of [Julee Burdekin](http://docs.webplatform.org/wiki/User:Julee), and she would like to thank you all - you know who you are - for helping out on this. Keep up the good work, we're almost done!

While the API reference and the CSS properties were the big content areas we could hold up and point to for this retrospective, there was a lot of work on the content generally, especially early on, just after it was imported. We quickly realized that we needed structures in which to organize all of the pages and landing pages for each area. [Chris Mills](http://docs.webplatform.org/wiki/User:Cmills) did a lot of work on these, and [Seb Desbenoit](http://docs.webplatform.org/wiki/User:Desbenoit) created the icons that neatly describe each of the content areas.

It is the _world-wide_ web, and we've had a lot of help from some great translators like [Nestor Rojas](http://docs.webplatform.org/wiki/User:Nestorrojas), with renditions of WPD pages in Spanish, [Crotel](http://docs.webplatform.org/wiki/User:Crotel) who has provided many Chinese translations, and [Hooney](http://docs.webplatform.org/wiki/User:Hooney) who translated several pages to Korean.


## Infrastructure, to enable us


The daunting the task of wrangling the content was made less so when the community rallied to build better tools and processes to support WPD.

[Jonathan Garbee](http://docs.webplatform.org/wiki/User:Garbee), wiz-kid extraordinaire developed [project.webplatform.org](http://project.webplatform.org/), our beloved issue tracking system. This was a huge improvement over the old Bugzilla implementation we started with, and it made building the site way, way easier.

One day in April, Search was suddenly working. We had launched with the Search functionality largely undeveloped. [Denis Ah-Kang](http://docs.webplatform.org/wiki/User:Denis) came to the rescue, fixed our Search, and thereby saved the community fistfuls of hair.

Enhancements to the templates and forms that deliver and present the content were needed across the wiki. A special shout out to [Frozenice](http://docs.webplatform.org/wiki/User:Frozenice), [Alex Komoroske](http://docs.webplatform.org/wiki/User:Jkomoros), and the [Template Corps](http://docs.webplatform.org/wiki/WPD:Template_Corps) for expertly developing the guts of Semantic Media Wiki forms and templates.

This site is all about code. We badly needed a way for users to play with code in real-time, and [Lea Verou](http://docs.webplatform.org/wiki/User:Lea) built the codelet tool, [code.webplatform.org](http://code.webplatform.org/) just in time for us to use with the CSS properties documentation.

Down in the engine room, we've benefitted from the expertise of [Ryan Lane](http://docs.webplatform.org/wiki/User:Ryan_Lane), who fixed the pernicious Session Timeout Bug, among many other invaluable contributions, and [Renoir Boulanger](http://docs.webplatform.org/wiki/User:Renoirb), who, since he joined us as a full-time Operations Engineer, has been making enormous improvements in site performance.

Also, Renoir and [Patrick D'Souza](http://docs.webplatform.org/wiki/User:Pdsouza) have been busy developing the analytics infrastructure to keep track of all this, and recently deployed [Piwik](http://piwik.org/), an open-source analytics engine.


## Community, for the win!


Web Platform Docs is community-driven as well as a community _destination_. We also engage with the community through e-mail, the IRC channel, and blog posts (shameless plug). But when we need to do some heavy-lifting, we hold a [Web Platform Doc Sprint](http://docs.webplatform.org/wiki/WPD:Doc_Sprint).

These little get-togethers have proven to be the highlights of the year, helping build content, the site, and the community in a fun, productive forum. We've held eight Doc Sprints this year, both in the U.S. and in Europe. [Peter Lubbers](http://docs.webplatform.org/wiki/User:Peterlubbers) of Google, has administered Doc Sprints in San Francisco and Mountain View; [Julee Burdekin](http://docs.webplatform.org/wiki/User:Julee) of Adobe ran two Doc Sprints in San Francisco, [Andre Jay Meissner](http://docs.webplatform.org/wiki/User:Klickass) of Adobe put on the Berlin and Zurich Doc Sprints, [Eliot Graff](http://docs.webplatform.org/wiki/User:Eliot-MSFT) of Microsoft ran the Seattle Doc Sprint, and [Paul Verbeek](http://docs.webplatform.org/wiki/User:Paulv) did the Amsterdam Doc Sprint. These Doc Sprints are hard work, yes, but so worth it!


## So, what's next?


We have a birthday party to tell you about: next blog post (coming soon!). But if you're still with me here you might want to know what we plan for next year.

Beta release - We expect to have completed the [requirements](http://docs.webplatform.org/wiki/WPD:Project_Status) for our first official release. Many of the items on this list are complete already (and celebrated above).

JavaScript - Microsoft has donated another big batch of content, a JavaScript reference, and [Max Polk](http://docs.webplatform.org/wiki/User:Maxpolk) and [Eliot Graff](http://docs.webplatform.org/wiki/User:Eliot-MSFT) are getting ready to import it into WPD. We can't wait to get started with updates and examples for this content.

DOM/Elements/Attributes - We need to develop an architecture that allows users to work with HTML elements, their attributes, and their DOM interfaces in a cogent, complete model. This will require new templates and forms as well as a thorough overhaul of the content.

There is a lot to do, and with any luck, we'll NEVER be done. But if this last year demonstrates anything, it is that we can do it. Together, we have accomplished something important and valuable for the community. Thanks to all of you who have contributed to Web Platform Docs, and happy birthday!

* Image, _The Night Watch_ or _The Militia Company of Captain Frans Banning Cocq_ by Rembrandt Harmenszoon van Rijn courtesy of the [Rijksmuseum](https://www.rijksmuseum.nl).

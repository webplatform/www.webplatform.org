---
author: julee
comments: false
date: 2013-05-01 18:34:25+00:00
layout: blog
slug: web-platform-docs-in-brackets
title: Web Platform Docs API used in Brackets
wordpress_id: 351
categories:
- Community
- Content
- Infrastructure
path:
  - href: '/blog/'
    inner: blog
  - href: '/blog/2013/'
    inner: 2013
  - href: '/blog/2013/05/'
    inner: May
---

A basic goal of WebPlatform.org is to be the site where you can come for answers to your trickiest (and simplest) development and design questions about the Open Web Platform. Along with being a site, we also want to be a service -- or really to be of service, as the saying goes. Besides being a central location where you can get information, we want the information to get to you. So we've provided APIs for retrieving the content in-context.




You've seen it before in editors. You select "Help" and documentation pertaining to the code you're typing shows up in your editing window. It's referred to on Wikipedia as "[Context-sensitive help](http://en.wikipedia.org/wiki/Context-sensitive_help)". And it's great, because, right as you're coding, you can check a method signature, or get an explanation or a sample. The key is the content: Is the feature proprietary? Widely adopted? Is the help current? If Web Platform Docs are being pulled in, you know where you stand: it's documenting the open web. And you're getting the latest content we have.




Being on the [MediaWiki](http://www.mediawiki.org/wiki/MediaWiki) platform means that we can provide an interface for structured information reuse. You can try it now. In your browser address bar, just type:





    <a href="http://docs.webplatform.org/w/api.php?action=parse&page=css/properties/box-shadow" target="_blank" title="box-shadow article via WPD API">http://docs.webplatform.org/w/api.php?action=parse&page=css/properties/box-shadow</a>




OK, it's not pretty, but you get the idea -- or actually, the xml result. Adding a format parameter [&format=json](http://docs.webplatform.org/w/api.php?action=parse&page=css/properties/box-shadow&format=json) gives you the results back as a JSON object. You can read more about the default calls in the[ MediaWiki developer documentation](http://www.mediawiki.org/wiki/API:Query).




So, the API was lying fallow, when Adobe’s Alan Greenblatt ([@agreenblatt](https://twitter.com/agreenblatt)) decided he wanted to contribute something useful to the [Brackets](http://blattchat.com/2013/05/01/web-platform-docs-in-brackets/) project. If you aren't already using [Brackets](http://brackets.io/), you should check it out: it's an “open-source code editor built _with_ the web _for_the web,” which is a great match for what we're doing at WPD. WebPlatform.org individual contributor, David Kirstein (aka: [frozenice](https://twitter.com/_frozenice)) worked with Alan to explore and adjust the API. The result is in the latest release of [Brackets](http://blog.brackets.io/2013/04/30/brackets-sprint-24-build/). With a simple Command/Control K, the reference content for a CSS property appears in the context of your CSS code!




As it stands, it's a pretty neat little API, but there are considerations when using services. Mindful plugin models should be employed when implementing a documentation-as-a-service. For example, we're still working on our infrastructure, and so there was a concern about having a lot of individuals hitting the site. Also, the Brackets team wanted to take some basic security measures. So, for this early implementation, he decided to preprocess and package the results.




The Brackets implementation includes a "Read more" button, which sends the user to the full page in the browser. And that's where the details lie: Right now, we're working on getting key content up to beta quality. So that button should say: "Read more, and if you think you know better, please don't hesitate to edit the page, and make it better." Because after all, WebPlatform Docs is "Your web, documented." For more information on registering for the site, talking with the community, and contributing, select[ Editing](http://docs.webplatform.org/wiki/WPD:Editors_Guide) from the top menu on any page.




That's the scenario: You're in the throes of a project; you need a reminder or an explanation or some sample code; you get WebPlatform.org content within your working context; and if you can, you leave that page a little bit better for the next developer.

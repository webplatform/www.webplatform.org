---
author: Magister
comments: false
date: 2013-04-23 14:42:09+00:00
layout: blog
slug: new-msdn-js-docs
title: New JavaScript Docs from MSDN!
wordpress_id: 335
categories:
- Community
- Content
- Site News
path:
  - href: '/blog/'
    inner: blog
  - href: '/blog/2013/'
    inner: 2013
  - href: '/blog/2013/04/'
    inner: April
---

Let's face it, a site for Web documentation that doesn't have solid JavaScript docs is like a browser that doesn't have JavaScript. Up to now, the [JavaScript topic](http://docs.webplatform.org/wiki/javascript) on Web Platform Docs has been sparsely populated, especially our reference articles. That's why we were so thrilled when [Microsoft offered us their excellent](http://lists.w3.org/Archives/Public/public-webplatform/2013Apr/0238.html)[ JavaScript documentation ](http://msdn.microsoft.com/en-us/library/ie/yek4tbz0(v=vs.94).aspx)from [MSDN](http://msdn.microsoft.com/en-us/library/ie/yek4tbz0(v=vs.94).aspx).

These 400+ articles will give Web Platform Docs a foundation to build up a robust library describing the use of JavaScript in modern web development. The donation is substantial, but it leaves room for a expansion and enhancement from our community. But the first step is integrating these articles into WPD.

So, this is where you come in!

<!-- more -->


## **Help us transform the MSDN donation into WPD content**


Last week, Microsoft's Kathy Shoesmith and her team exported the whole JavaScript branch of their MSDN content from their CMS as well-structured HTML; they also provided some support files, including a hierarchy index in XML, and an Excel file with the correspondence table between file names, like “1b512146-1e8a-44a4-89da-6cc5338d15cb.htm” _(shudder)_, and article titles like “getMilliseconds Method (Date) (JavaScript)”.

We converted that spreadsheet file to a JSON object, and used [Node.js](http://nodejs.org/) to rename all the files (e.g. “getMilliseconds-Method__Date.html”) and convert the XML hierarchy index to an HTML nested list to serve as a [table of contents](https://github.com/webplatform/msdn-js/blob/master/js_toc.html), then pushed everything to WebPlatform's [Github msdn-js repo](https://github.com/webplatform/msdn-js).

So, there’s where we are. Where we go next is up to the community as a whole, because Webplatform is a community-based and community-driven project. Microsoft donated the source content, but it will be the community that takes this donation and builds WPD with it. And let’s face it, content integration is not a trivial task. It’s not difficult, either, but there are lots of moving parts.




  * First, we have to settle what on the URL structure. How do we want to organize the different pages within our information hierarchy, so that it's consistent, easy to find and reference, and avoids naming clashes?


  * Second, we have to make MediaWiki templates. We need to define how each page type (object, property, method, etc.) is structured, again for consistency and to make it easy for an API to extract just the information needed.


  * Third, we have to come up with a methodology to convert the HTML content into the wiki. Converting 400+ pages by hand would be tedious, but an automated import script is likely to be error-prone, even with consistent and well-structured HTML like the export from MSDN. Which sections do we use? What do we do if we need to add structure that doesn't exist in the original? How shall we review all the converted documents? Should we import first into our [test wiki instance](http://docs.webplatform.org/test/), then transfer into the main wiki? In some cases, there may be duplicates of content already in the wiki; how shall we resolve that? What import script should we use (and can we revise and reuse the script from our original MSDN mass-import back in October)? _Phew!_




## What can I do?


For starters, you can help us answer these questions, and ask questions we didn't think about. If you don't already have an account, go [create one](http://docs.webplatform.org/t/index.php?title=Special:UserLogin&returnto=Main+Page&type=signup), and feel free to participate in one or more of our general content [meetings](http://docs.webplatform.org/wiki/WPD:Community/Meetings/Content). You can volunteer to help do the conversion, review migrated content, or help out with other parts of the project. All our work is public, and to help manage this process, we created a special sub-project, [MSDN-JS](http://project.webplatform.org/msdnjs), in our issue tracker/project management tool. Once you have an account, [subscribe to our public-webplatform mailing list ](mailto:public-webplatform-request@w3.org?subject=subscribe)and introduce yourself, and we'll help get you started.

JavaScript is still evolving (rapidly!), so WPD community engagement by JavaScript experts will help us evolve our content along with it. You want to future-proof our documentation by adding a tutorial and examples on JavaScript Futures? Go for it!

Don’t feel intimidated by all these open questions! We’ve already got a skilled community, like Alex Komoroske (Google) who authored most of the site templates, Eliot Graff (Microsoft) who helped design WPD’s information architecture, and content drivers like Chris Mills (Opera and W3C), Julee Burdekin (Adobe), and Scott Rowe (Google), as well as many other folks who can lead the integration… or step aside to let new leaders take the initiative!


## What about other donations?


We've gotten this type of donation before. We’ve received large transfers of content files from nearly all of our [stewards](http://www.webplatform.org/stewards/). To cite a few examples, [Google](http://www.html5rocks.com) and [MDN](https://developer.mozilla.org/) have donated many articles and tutorials; [Opera](http://dev.opera.com/) donated a great deal of their developer education materials; [Adobe](http://www.adobe.com/devnet/html5.html) offered wonderful content from their site; and Microsoft had donated reference pages previously. It’s been a wonderful and cooperative effort to get the seed content in place for this project.

For each content topic, sometimes there are multiple sources that we’d like to use, with overlap in coverage. For example, MDN, the Mozilla Developer Network, already has great JavaScript documentation, and Mozilla is one of the Web Platform stewards. Why didn’t we just reuse their JavaScript content, too? As Mozilla's [Janet Swisher explains](https://hacks.mozilla.org/2012/12/how-mdn-and-web-platform-docs-align/), that content was contributed to MDN under the CC-BY-SA (Creative Commons Attribution Share-Alike) license, rather than the more permissive and reusable CC-BY license that WPD offers, so for the long-term goal of making and keeping WPD as open as possible, we needed another solution. Microsoft donating their content is an ideal starting point for comprehensive community-driven documentation. Having the option to select the best choices from different sources is another strength of WPD.


## You really need me?


Yes. Even with big content contributions like this one from Microsoft, this site will never succeed in our mission without consistent contributions and engagement from our community. So, consider your effort in integrating these documents a “matching donation” and help us make WPD the documentation site we all need.


##

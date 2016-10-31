---
author: jen
comments: true
date: 2014-04-09 17:53:07+00:00
layout: blog
slug: a-new-home-page
title: A New Home Page
wordpress_id: 955
categories:
- Site News
path:
  - href: '/blog/'
    inner: blog
  - href: '/blog/2014/'
    inner: 2014
  - href: '/blog/2014/04/'
    inner: April
---

You may have noticed, we recently launched a new homepage for [www.webplatform.org](http://www.webplatform.org). The recently-retired homepage was doing its job, but looking at it more closely, we realized that wanted to provide users with much more information right from the first introduction.


![a screenshot of the new web platform.org homepage](//static.webplatform.org/blog/2014/04/2014-04-07-13-19-57-2014-04-07-13-20-03-1024x818.png)


The new home page starts with telling the story of the project as directly as possible. What is this project? Who is involved? Why is this a great idea? What's unique to this set of web documentation?

We made this page 100% responsive — it resizes to fit any size screen. And we moved the video so that you can play it right from this page, instead of having to click and wait for a lightbox to load before being able to watch.


## The Docs List


We added a section listing the major sections of the Docs, showing which ones are ready to use, which ones are being worked on, and what ideas we have planned for the future. We hope this will make it easier for people to understand the state of the project, figure out where to jump in and help, and most of all, what documentation is already on the site, ready to use.

This list is a work in progress. The plan is to continuously update it with new links, and move links from column to column as the status of things change. People should be able to come to this list to quickly see exactly what's on the site.

As I've gotten involved with Web Platform Docs, and dug into researching what's going on, I've found that there's a lot of great stuff going on that people just don't know about. It's my goal to make it much easier to find such treasures, and this section is a start.


![a screenshot of the middle of the new homepage, highlighting the list of Docs](//static.webplatform.org/blog/2014/04/2-1024x804.png)


The lower part of the page is dedicated to explaining exactly how to get involved. Rather than asking people to read many pages in the Editor's Guide, we wanted to put the most important information right up front where it's easy to find and follow.

![a screenshot of the bottom page of the homepage, with the information about how to contribute](//static.webplatform.org/blog/2014/04/3-1024x804.png)

I'll be overhauling the Editor's Guide, likely renaming it Contributor's Guide next, to reflect what I've discovered about how to get involved, and to better match the message that's now on the home page. Since Web Platform Docs is relying heavily on the contributions of volunteers to update and improve the documents that have been imported from MSDN, we need people to be able to join the effort with as little friction or confusion as possible.


## A new platform


Lastly, we also changed the technology that's driving this and other pages on the www.webplatform.org domain. Most of the Web Platform website is handled by MediaWiki hosted at docs.webplatform.org, while this blog is driven by WordPress at static.webplatform.org. The home page, along with several other static HTML pages, are hosted separately at www.webplatform.org. These were hand-coded pages that used a bit of php includes to handle the header and footer.

We revisited this set-up when we were getting ready to launch the new home page design, and decided to implement a static site generator. While there are many (Jekyll perhaps being the most popular), the team wanted to use something built on Node.js, since Node.js is JavaScript and JavaScript is part of the web platform. Renoir Boulanger researched and tested quite a few node.js-based static site generators, and settled on [DocPad](http://docpad.org). We wanted something that would create a file structure that would be easy for anyone to understand — that way the source files could be shared in [a new public GitHub repo](https://github.com/webplatform/www.webplatform.org), where anyone could submit a pull request with changes. We want everyone involved with the Web Platform project to have an easy way to submit suggestions for updating the content on the homepage and other pages.

[![a screenshot of the new GitHub repo that hosts the static pages from www.webplatform.org](//static.webplatform.org/blog/2014/04/webplatformwww.webplatform.org-2014-04-08-16-54-18-2014-04-08-16-54-22-1024x877.png)](http://static.webplatform.org/blog/2014/04/webplatformwww.webplatform.org-2014-04-08-16-54-18-2014-04-08-16-54-22.png)This is just one more step in improving the Web Platform project. We will keep improving both the design and content of this homepage, bit by bit. Let us know if you have any suggestions or ideas for how to keep improving things.

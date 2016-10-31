---
author: julee
comments: false
date: 2013-01-31 21:16:23+00:00
layout: blog
slug: documenting-the-future-css-regions
title: 'Documenting the Future: CSS Regions'
wordpress_id: 172
categories:
- Site News
path:
  - href: '/blog/'
    inner: blog
  - href: '/blog/2013/'
    inner: 2013
  - href: '/blog/2013/01/'
    inner: January
---

Web Platform Docs is an ambitious project. It is challenging enough to document all the features that work across browsers today, without delving into experimental features. But it's also critical for web developers to learn what's coming up next. Such features are not as widely documented elsewhere, and getting early feedback on them helps make sure they are done right.

So when an important CSS layout feature like CSS Regions gets experimental support from two major browser engines, WebKit (Chrome and Safari) and Trident (Internet Explorer), we felt it was important to document it on Web Platform Docs. (You will have to [enable experimental features](http://blogs.adobe.com/cantrell/archives/2012/07/all-about-chrome-flags.html) to see how CSS Regions works.) CSS Regions helps solve a long-standing fundamental design problem: allowing content to flow smoothly from one layout element to another without forcing a position. With CSS Regions, you can create complex magazine-style designs in which content flows through freely positioned layout elements.

[Mike Sierra](http://docs.webplatform.org/wiki/User:Sierra) wrote up a [tutorial](http://docs.webplatform.org/wiki/css/tutorials/css-regions) that shows how flows work, how to arrange a layout, enable it, control region breaks, style fragments, trim content, and create adaptive layouts with media queries. The new API starts with the [css-regions](http://docs.webplatform.org/wiki/apis/css-regions) package, and includes APIs, such as [CSSRegionStyleRule](http://docs.webplatform.org/wiki/apis/css-regions/CSSRegionStyleRule), [NamedFlow](http://docs.webplatform.org/wiki/apis/css-regions/NamedFlow), and [Region](http://docs.webplatform.org/wiki/apis/css-regions/Region). New CSS property pages have also been added, such as [flow-from](http://docs.webplatform.org/wiki/css/properties/flow-from), [flow-into](http://docs.webplatform.org/wiki/css/properties/flow-into), [region-fragment](http://docs.webplatform.org/wiki/css/properties/region-fragment), and the [@region](http://docs.webplatform.org/wiki/css/atrules/@region) rule.

Mike also posted an example he describes here:

[http://letmespellitoutforyou.com/samples/region_mq_sample.html](http://letmespellitoutforyou.com/samples/region_mq_sample.html)

Resize the window to see the simplified mobile layout the tutorial describes.

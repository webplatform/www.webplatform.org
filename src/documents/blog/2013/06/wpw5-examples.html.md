---
author: Magister
comments: false
date: 2013-06-05 19:32:23+00:00
layout: blog
slug: wpw5-examples
title: 'Web Platform Wednesdays #5: Examples!'
wordpress_id: 416
categories:
- Web Platform Wednesday
---

It's a busy week for a lot of students, and for us here at WebPlatform.org, so we're taking it easy on ourselves this week and doing the fun stuff: example code!

For each CSS property we've done so far, we want to make sure we have a simple, clear, canonical example for all the possible value types. For example (no pun intended), `[font-size](http://docs.webplatform.org/wiki/css/properties/font-size)` allows the author to specify the size several different ways:` absolute-size`, `relative-size`, `length`, or `percentage`.

What does all that mean? That's where an example will really help out.
<!-- more -->


## Example examples




### `absolute-size`


One of a set of keywords, ranging from `xx-small` to `xx-large`. An example might be:

    
    <code>font-size: large; // 20% larger than parent's font-size</code>




### `relative-size`


One of a set of keywords, either `smaller` or `larger`. An example might be:

    
    <code>font-size: <code><code>smaller</code></code>; // 1 increment (20%) lower than parent font-size</code>




### `length`


A number followed by a unit, such as:

    
    <code>font-size: 15px;</code>


or:

    
    <code>font-size: 2em;</code>




### `percentage`


A percentage of the parent element's font-size, like

    
    <code>font-size: 75%; // 25% smaller than parent's font-size</code>




## Links to tutorials


In addition to adding simple examples in the articles, linking to great examples and tutorials in the wild will also be helpful.

Tweet us [@webplatform](https://twitter.com/webplatform/) to tell us what examples you're doing. And while you're at it, ask your friends and followers to send you links to the best advice on the web.


## Making articles useful


Let's face it, when you're rushed on a task and you can't recall the syntax for a property, you don't want to understand it in depth... you just want something you can copy and paste, and the more relevant the better. So having these quick snippets will really come in useful for folks on the go, and the comprehensiveness will make it easier for everyone to understand as they are learning CSS.

So head over to the [Web Platform Wednesdays wiki page](http://docs.webplatform.org/wiki/Meta:web_platform_wednesday#05_June_2013) and write up some quick examples for the pages listed there.

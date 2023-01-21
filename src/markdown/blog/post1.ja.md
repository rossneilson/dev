---
title: Migrating to JamStack and Gatsby
location: Javascript
category: Technology
date: 2020-10-17T14:56:59.267Z
image: ../../images/jam.jpg
path: blog/migrating-to-jamstack
locale: ja
SEO: Advantages and disadvantages of react, jamstack, gatsby and netlify for freelance web development stack
---

###### 目次
```toc
# This code block gets replaced with the TOC
```

---
当分、このブログは英語だけですが。すみません、いつか翻訳するかもしれません。

At work I use a react node stack for web development and honestly, I really enjoy using it. So when it came to side projects it was an obvious option and so without much consideration, I went with it. But that's where the problems started. There is a lot I love about react, the freedom it fives to build dynamic native-like apps is truly powerful, however not necessarily needed for every use case.
As I began building personal projects (TabiTraveler) as well as building out a technology stack for my freelance business I ran into some issues:
* SEO
* Performance
* Usability

So I began looking for solutions to these issues and that's when I stumbled upon the JAM stack. In case you aren't aware this stands for Javascript, APIs and markup, and funnily enough, this addresses almost all of the qualms I had with my react stack. The JAM stack is more an architecture and philosophy with a number of different implementations as opposed to a set technology list.
### SSG & SEO
At the core of this stack is static site generators, in my case gatsby, these are essentially pre-rendered server-side rendering without the usual pain of manual re-hydration that comes with the server-side rendering of react. In most cases, this involves some collection of markdown files that are used with templates to generate the content of multiple pages at build time. This results in normal static files you would expect from a standard HTML CSS static site. So why is this better than client-side rendering? you may be asking, well for starters, google. Like it or not Google and how it sees your site is important. Unless you are building an internal tool, the SEO performance likely matters and is key to potential clients. So with static site generators, google sees a properly formatted HTML file with all headers and content filled in as opposed to a messy unreadable javascript file that react would normally output.
But SSG like gatsby don't just provide SEO advantages they also offer some performance gains since hosting and serving up static files can be for more efficient than heavy javascript files. However, this is still far from perfect since packages still add up and can result in some package phobia as the page load times start increasing. So, if this serves up static files great, but doesn't that remove all the great app like feel react offered in the first place. Well, no, if anything it provides a nice middle ground. Parts of the site can still rely on dynamic client-side javascript by calling APIs on the client-side as opposed to during the build process. It can be difficult to get your head around the server-side nature of gatsby and you need to properly think about where the data for a page needs to come from and how often it needs updating.
This is by no means a one size fits all solution. Where this works well for smaller scale blogs, apps or e-commerce there are obvious issues for larger-scale dynamic applications like amazon or Reddit. If amazon or Reddit were to be built in this style the entire application would need to be rebuilt for every new item or post. However, for applications with only select people updating content every couple of days, it can be a perfect fit.
### Netlfify
Another nice service that I found to work perfectly with this stack is Netlify. This is not necessary for JAMstack, you could easily upload these static files to a server (I initially used firebase). However, what netlify offers is a build pipeline that takes every new push, builds the site and deploys in on their great CDN. This means everything is automatic, synced with Github and ready within minutes. In addition, the provide functions, node js backend for writing your own API. I used these tp host processing of my stripe store. And all of this in a great free plan I have yet to need more of, but of course scaling is available.
### User experience (content admin)
But wait, I mentioned 3 issues I had with react, what about user experience? Well, with the use of markdown files comes CMS, and by extension headless CMS. These have been becoming more popular recently and for good reason. They provide a nice UI for non-technical users to edit site data and content, which is a great feature for client work. There are many options available but I have found the basic GitHub based netlify CMS to be enough for my use cases.
So anything else? Oh yes, more gatsby specific, plugins. The community-driven plugins available to gatsby are truly amazing and offer amazing automation for greater performance features, and really anything. But these are an article on their own.
### Conclusion
The actual technical work switching over existing applications was relatively simple, most of my time was spent just learning the new technology. Switching to a JAM style stack took some getting used to and certainly has its issues, but I am so glad I did as it has made my services and confidence in them so much greater. But it is of course, like everything in web development, always changing.

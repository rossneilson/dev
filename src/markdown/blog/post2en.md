---
title: Building an E-commerce Store on JAMstack
location: Javascript
category: Technology
date: 2020-12-20T14:56:59.267Z
image: /static/store.png
path: blog/store-on-jamstack
locale: en
SEO: Architectural overview of technologies used to build e-commerce store on jamstack with gatsby stripe and netlify with useful tips

---

###### Table of Contents
```toc
# This code block gets replaced with the TOC
```

---

This won't be an exhaustive tutorial since there are many of those out there already, for which I will link some below. Instead, this is meant to be more of a starting architectural overview and explanation of what a full production implementation of an e-commerce store looks like on the Jamstack.

This article is based off of my experiences creating a fully automated photography print store over at <https://www.tabitraveler.com>
### Gatsby and CMS
The base technology being used for this website is GatsbyJs so that is where we shall start. You can check out to my [previous article](https://rossneilson.dev/blog/migrating-to-jamstack)  for more detailed information about gatsby and static site generators (SSG). Since this is built on an SSG it only makes sense for the item pages to be built using markdown. Mine is essentially just frontmatter metadata about title, image and then an array of objects detailing product information such as SKUs (product ids) and pricing. Since I don't have much use for a full complex CMS that seem to be all the rage, and rather confusing when wrapping your head around the JAMstack, I am instead opting for the underrated netlify CMS. This is like most other CMS in that it provides a great UI to interact with your modelled markdown and JSON but, unlike other options, files are stored in Github. Some more on this later.

![item page and md](/../../images/tabiPrintItem.png "item page and md")

### Stripe Checkout
So now we have an item page generated but how does the user buy the product. Do we need a checkout page and complex backend? No, stripe to the rescue. Stripe checkout is a fantastic payment form leveraging the secure simple stripe API as well as a prebuilt hosted UI giving users a clean, simple, secure checkout experience. 

Stripe works on a pay as you go pricing model, so each transaction gets charged a percentage fee. This makes it perfect for starting up a small idea sicne there is no monthly fee. Also from what I can tell the percentage is relatively small and very competitive. It depends on your location as well as your cutomer's location but seems to range between 1.4%-3% with a 20p charge per transaction. And if you are a student it gets better, with the github student pack you get 0 transaction fees on your first $1000 in revenue processed.
On top of checkout you get access to the easy to use stripe dashboard giving you analytics and control over your business. From here you can also access developer settings and get test keys to use during development, a key feature for testing your system end to end.

There are many fantastic tutorials to implement this but from the frontend perspective, the UI just calls a function then the user gets redirected to a clean wonderful checkout page with all correct pricing, multiple payment options and peace of mind. Unfortunately, nothing in life is ever this simple and you may have forgotten the golden rule of web development. **Never trust the client.**

![stripe checkout](/../../images/store.png "stripe checkout")

### Netlify functions
Although Stripe checkout is marketed as being hosted by stripe (not untrue), this is only for the form UI and all actual payment processing as expected from Stripe. We do unfortunately still need a backend to ensure proper calculation of prices to generate the checkout session. So where do we host a backend? Obviously, there is a host (see what I did there) of cloud platforms out there and if you are crazy enough, setting up your own server is even an option. However, you are likely already hosting on netlify (if not, you probably should be). So Netlify functions is a great, essentially free, option. So long as you are under 125,000 requests a month you can use them for free and then after that they scale automatically. Netlify functions are really just a nice wrapping around AWS lambda serverless compute, but they provide key functionality and advantages for this use case. 

All that's needed to get started with functions is a folder named "functions" then a js file exporting a function and netlify takes care of the rest. These functions are picked up automatically and from the code, endpoints are generated after the name of the file allowing the UI or other backends to call them to run your code, all from one little folder in the same repo as your website. For me, this means a function called "purchase" that main purpose is to generate a stripe checkout session for the user. However, a bit more has to happen. Since we can't trust the data coming from the client we can only really accept user choices such as the item they want and their location. So this means we need to re-calculate the price and shipping on the client-side so no cheeky person can buy things for £0.01. So we somehow need access to the original document specifying what prices are set at, in this case, the markdown. Because I am using netlify cms this file is in Github and can be accessed through GitHubs lovely API then parsed for the pricing information for calculation. Also, the printing service I am using for my products has an API for ordering that I can use to fully automate the selling process, from user pressing purchase through to delivery of the product without me manually processing anything. And so I also create a draft order in the function and hide it's Id in the checkout session metadata.

At this point, everything could be finished if you are ok with manually fulfilling orders. In session creation, you can simply specify a success URL to let the user know everything was successful and thank them. However, if you want to call more code after purchase is complete then this is possible too. With stripe, you can use webhooks to call an additional endpoint when an event is fired like checkout.session.completed. For me, this means another netlify function called "handlePurchase" in the functions folder. This time it gets the completed session object data and calls the printing API again to complete all order details filled out in the checkout form. The order is then submitted and all going well the customer receives their print in a few days.

### Security & Reliability
It goes without saying, but this is an important piece of any application and deals with money and products changing hands so should be thoroughly tested before ever reaching production. I used test keys throughout and then completed an order right from start to end and do so with all new products. 

Another invaluable tool (not a sponsor) is sentry. Sentry is error tracking software that can send you an email the instant any errors occur in your system as well as providing important debugging data such as stack trace as well as client actions and metadata such as browser version etc. This is all completed through a simple wrapping npm library so when an error occurs it pings sentry to let it know. I have this set up in both my frontend as well as both backend functions. The implementation I arrived at for node is not extremely majestic as I had to wrap the entire function in a large try-catch, however, since it is small this is not an issue and serves its function. The far more elegant since it just initiates at the root level. At the basic developer-level, this service is free and seems to have very reasonable quotas.

### Business side
Just some business-related points I wanted to mention when it comes to this sort of e-commerce store and issues I encountered. 

I found shipping to be one of the most complex parts of the implementation since I ship worldwide and the printing API does not, unfortunately, handle this for me. Although my final implementation is still quite complex for larger framed products I found the best option for smaller items to be free shipping. It may mean increasing-price slightly but simplifies most orders and can help convert potential customers into purchasing.

Although you could certainly throw together a quick site, integrate with an API for drop shipping service and never even see the product you are selling, I would highly advise against this. If you are selling a product you should at least be confident enough with the process and quality of it to do so yourself. For me, I went through multiple paper types and prints before deciding to put anything up for sale. then when I was ready I bought the full print to do my own QA, hang on my wall as well as to take real pictures of the product and not just photoshopped versions of it for the site.

It is also worth having a proper contact form on your page for if anything comes up and a customer feels they need to contact you, this should never be difficult for a customer to do. An up to date FAQ section can also be a valuable resource to reduce support requests and questions and to appear more professional.

### Conclusion
JAMstack continues to amaze me for how useful and versatile a stack it can be even for e-commerce applications. If I missed anything or you have any questions, please feel free to contact me. It was a lot of fun creating a store like this and I am pleased with the architecture I ended up with.


### Useful Links
* [Gatsby docs - Stripe](https://www.gatsbyjs.com/docs/how-to/adding-common-features/processing-payments-with-stripe/)
* [Stripe checkout docs](https://stripe.com/docs/payments/checkout)
* [Stripe implementation guide - Learn with Jason](https://www.learnwithjason.dev/build-an-ecommerce-site-using-stripe-gatsby)
* [Netlify functions](https://www.netlify.com/products/functions/)
* [Printing Service](https://www.prodigi.com/)
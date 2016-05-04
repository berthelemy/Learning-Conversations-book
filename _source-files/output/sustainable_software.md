# Sustainable software {#sustainable-software}

_Date posted: 9 September 2009_

All my working life I have setup software systems for people. That might mean writing code, but more often it means configuring applications and tweaking existing code to meet client requirements. I enjoy the challenge of working out what system is really going to solve a particular problem and then making that system work in as simple a way as possible. Over the years I have learnt a number of key lessons when it comes to designing & implementing software. In most cases the design is treated as all important, with very little attention paid to how the software is to be implemented. There are two scenarios I'd like to explore here:

1.  When software is designed and delivered that meets all the needs only to find that very little of its potential is used by the organisation.
2.  When an organisation begins to rely on the software.

So we're looking at two basic issues:

*   Getting the most out of the software
*   Supporting the software appropriately

### Getting the most out of the software {#getting-the-most-out-of-the-software}

You would have thought that the most important thing is to make sure the software is easy to use and well-designed. From what I've seen that just isn't true. There is a lot of software in place that is poorly designed and hard to use, yet it still gets widely adopted. Conversely, there are even more well-designed systems that get implemented but just sit dormant until they get scrapped. The common factor in all these tends to be buy-in, of the lack of it.

#### What's in it for me? {#what-s-in-it-for-me}

If the managers or decision makers in an organisation cannot see the point of a system then they are unlikely to get behind it. Only if it directly supports their **real business needs** (eg. increase efficiency, sell more widgets, get better exam results etc) will they invest in it, promote it or even mandate its use. Similarly, the end-users of the system will always ask "What's in it for me?". If it's not immediately obvious then they will often ignore the system. Anyone implementing any new system or initiative (not just software) must always consider what is going to motivate the end-users to adopt it. That might be factors such:

*   "It's the only way I'll get my expenses paid"
*   "It will let me find information more easily".
*   "I have to use it so I can get this qualification"
*   "I will save time if I use this software."
*   "I will be able to do my job better"

Many people describe [motivation](http://en.wikipedia.org/wiki/Motivation) as having two types: intrinsic and extrinsic. Extrinsic includes things that come from outside the person. Things like money, qualifications, promotion etc. Intrinsic motivation is internal; things like professional pride, personal interest. The motivating factors that you need to consider will depend very much on the target audience, on their confidence with the technology, on their perceived needs, and on the things that drive them. You can only understand that if you **know your users**. Get as close to them as you can. Try not to rely on the rose-tinted views of experts and senior managers.

#### Sell, sell, sell {#sell-sell-sell}

Once you've understood the drivers behind the decision makers and the users, and you're sure that the software you've got will meet those needs, you need to sell the key messages. One part of any successful software implementation is a **clear communication plan** that identifies the features and benefits of the new software and puts them across in a way that a) persuades people that they want to use it and b) encourages people to use it better. Here we need to take our lead from the consumer marketplace. What is it about [Apple's](http://www.apple.com/) marketing that makes it so memorable? (See below) How do [Mindjet](http://www.mindjet.com/) highlight the benefits of mind-mapping with their software and also communicate how to use it more effectively? [youtube]6dfTf-FsLtc[/youtube] If there is an internal communications team then work with them. If not, then look at what already works with your target audience and use that.

#### Hardware, software and training are equal partners {#hardware-software-and-training-are-equal-partners}

I've always subscribed to the view that the funding for most IT projects should be split equally between hardware, software and training. Where training includes all the people-centred activity that is not directly related to purchasing boxes or writing code. Those training & communication activities are often left as an afterthought, whereas successful implemtations build them in from the start. One of the great things about using Open Source software is that it allows you to spend more on training and the other "softer" things that will make the project successful. Just look at the [Moodle project in Buckinghamshire schools](http://moodlea.blogspot.com/2007/10/moodle-training-and-some-tools-to-help.html) to see how focussing on training and CPD has made a real difference to how well the software has been adopted. It's not just training per se. Any software implementation should consider:

*   User documentation
*   Local champions
*   Context sensitive help
*   Telephone support (tools like TeamViewer are invaluable here)
*   Ongoing hints and tips
*   User forums

Not all of the above are appropriate in every situation. User forums, in particular, depend very much on the IT confidence and the size of your userbase. There's been a lot of research and thinking around encouraging adoption. Here are some starting points. Wikipedia is a good place to start, by looking at the article on [Diffusion of Innovations](http://en.wikipedia.org/wiki/Diffusion_of_innovations). As always with Wikipedia, follow the links to the source documents.

### Supporting the software appropriately {#supporting-the-software-appropriately}

Once the software is in place, and being used, everything is OK, yes? No. As soon as the organisation begins to rely on it that's when your headaches really begin. I've made the mistake too many times in the past of setting up software for people who come to me because I can help them at that stage, but then find that one person on his own just isn't sustainable in the long term. Any system that is going to become mission-critical in any way needs a long term strategy, with the right teams in place. Anyone implementing software needs to ask these sorts of questions:

*   What would be the impact if the software stopped working?
*   How will the software handle large amounts of usage?
*   How often will the software need to be updated?
*   How will updates be tested and released?
*   Where will users go for support?
*   How will changes to the IT infrastructure affect the way people use the software?
*   How will changes to other systems impact on the way the software works?

All this requires an IT and application support infrastructure that is appropriate to the size of the organisation. You may need to make sure you've considered:

*   Server hardware - including setting up appropriate levels of monitoring, load-bearing, redundancy and disaster recovery
*   Network infrastructure - looking at bandwidth and firewall setup and monitoring usage
*   Database administration - focussing on optimising the database server and monitoring its capacity
*   Platform software - maintaining all the underlying software that your application relies on, eg. web servers, scripting languages
*   Application support - focussing on the software you've put in, making sure it's working properly, talking to the other systems it should be talking to and dealing with user queries.
*   Software development - focussing on the maintaining the software with new releases and testing those new releases before they go live.
*   Coordination - making sure that all the relevant parties talk to each other before making any changes.

That's the problem with Open Source software; it's often too easy to setup. The low cost (ie. free) of the software itself makes it very simple to implement. That's great if you're just trying it out, but if it's going to scale up you must make sure you have planned for that, and are prepared for the costs involved. With proprietary software many of those costs are subsumed into the licence cost. With Open Source software they become explicit and part of your (or your provider's) responsibility.
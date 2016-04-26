# Information systems management workshop {#information-systems-management-workshop}

_Date posted: 8 July 2011_

I'm shortly to be leading a short workshop on information systems management. Topics under discussion will be:

*   database design
*   user interface design
*   information architecture
*   collaborative information management
*   working with suppliers

I've put some notes below about the sorts of things I'm likely to cover - but I'd welcome any additional input on useful points or resources.

### Database design {#database-design}

Write once - read many. There should only be one place you put each piece of data. This is the difference between a spreadsheet and a relational database. When designing your database, try to [normalise](http://en.wikipedia.org/wiki/Database_normalization) it as much as possible. Normalisation tries to ensure that:

*   No data is unnecessarily duplicated
*   Data is consistent throughout the database
*   Queries can be created to easily pull out data from related tables

(from: http://www.youtube.com/watch?v=fg7r3DgS3rA) Then use lookups or relationships to pull those pieces of data in when they are required.

### User Interface design {#user-interface-design}

Too big a topic to cover fully in one workshop. But I'll highlight Steve Krug's book: [Don't make me think](http://www.sensible.com/dmmt.html) - probably the best introduction to usability I've come across. Two key principles:

*   Consistency: follow conventions where possible. Where not, make sure you keep your own conventions
*   Simplicity: focus on the user's need at that point in time

[User-centred design](http://en.wikipedia.org/wiki/User-centered_design) is key, such as personas, use cases and ongoing usability testing. Much depends on whether the system will be mandated or optional. If it's optional, you really need to make an effort on interface design, otherwise people will go elsewhere.

### Information architecture {#information-architecture}

Will your information be hierarchical - in separate silos to organise - or flat - using metadata tags. Hierarchies allow for drilling down, and for visualising data. Tags allow information to sit in more than one place and connections to be made between different information elements. Combining the two brings in the concept of [Faceted Search](http://en.wikipedia.org/wiki/Faceted_search) - often seen in ecommerce sites, eg. http://www.johnlewis.com

### Collaborative information management {#collaborative-information-management}

Examples include Wikipedia and [Delicious](http://www.delicious.com/). By allowing information users to generate, tag and refine information - the final result can become more useful. See James Suroweicki's book - [The Wisdom of Crowds](http://www.randomhouse.com/features/wisdomofcrowds/) Examples include Google's approach to tagging and finding expertise. You are tagged by your peers with your expertise - rather than telling your peers what you are an expert in. Questions include: What controls and feedback loops need to be put in place that allow the process to happen, yet reduce the risk of mis-information.

### Working with suppliers {#working-with-suppliers}

Here you need to be considering issues such as data protection, information security, cost, time, project management processes etc. It's a matter of finding the supplier who has a similar attitude to risk that you have. But being prepared to pay for high quality and low risk.
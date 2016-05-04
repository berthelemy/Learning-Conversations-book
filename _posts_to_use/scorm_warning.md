# SCORM warning {#scorm-warning}

_Date posted: 30 April 2009_

Often a potential client will specify that they want their elearning to be "SCORM compliant". When asked why they want this, and to what level of compliance, they often find it difficult to answer.

### What is SCORM? {#what-is-scorm}

SCORM stands for Shareable Content Object Reference Model. Its history is based firmly in the US Department of Defense's need for learning materials to be able to "work" in many different platforms. The DoD, and now [ADL (Advanced Distributed Learning)](http://www.adlnet.gov/index.aspx), looked at the range of different specifications and standards available for learning materials (each one known as a "book") and brought them together in the reference model now known as SCORM. SCORM 1.2 (with which I'm most familiar) brings together:

*   The IMS content packaging specification - which describes a way of collecting together learning resources into one file (a simple zip package), accompanied by an XML file (called imsmanifest.xml) that describes the structure of the resources. It's this that allows a learning management system (LMS) to upload one file build a navigation structure for learners and track their usage of the navigation.
*   The IEEE Learning Object Metadata standard - which specifies a way of describing the content of the learning object in a machine-readable format. It's this that allows teachers/learners to search for specific learning objects inside the LMS.
*   The AICC run-time specification - which describes how the learning resources should communicate with the host LMS. It's this that allows learning resources to display the user's name, or the LMS to take final scores from quizzes built in to the resources.

SCORM 2004 builds on 1.2 by tightening up on what it means to be conformant with SCORM, and also adding in a book known as "Sequencing and Navigation". This new book allows designers to programme different routes through the materials based on user behaviour.

### The benefits of SCORM {#the-benefits-of-scorm}

In theory...

1.  Designers should be able to create materials independently of the host LMS's in-built authoring tools
2.  Content is not locked into the host LMS. It can be ported to another LMS with no loss of functionality
3.  Learning materials can come from many suppliers and will just "work" in the host LMS
4.  Learners will be able to find materials from a catalogue that is populated by the metadata

### The reality {#the-reality}

Different content suppliers, authoring tools and LMS's have different interpretations of what SCORM means. There is a lowest common denominator (the IMS content packaging specification), but if you want to be sure of interoperability, then you need to stick with that, and that only. SCORM-packaged learning content knows nothing about the functionality available in your LMS. So, if you're using an LMS that has collaborative features like forums and wikis, or functions like polls, surveys and sophisticated assessments, all of that will have to be handled outside of the SCORMed content. If you make use of that LMS functionality, you can almost guarantee that the rich information it contains will not be exportable to another LMS. SCORM is just about delivering content, tracking its use and providing an overall pass/fail score. It's a model that works for Defence training. Whether it works in other contexts is [debatable](http://zope.cetis.ac.uk/content/20021002000737). The SCORM run-time (and now the Sequencing and Navigation book) are extremely complex to make work well. Often you find run-time information will only get passed between the package and the LMS if you use a particular browser. Very few of the data calls are compulsory in the specification, so you can't guarantee the data you're expecting is going to be available. The tracking and score information that comes via the SCORM run-time is of extremely limited use. Yes, it can tell you that someone went into a particular piece of learning, whether they viewed all or some of it, and how long they spent doing so. But a) does it tell you whether they've learnt anything, and b) who is going to be doing the checking up to make sure everyone spent the requisite 10 minutes? There are some examples of extremely sophisticated SCORM-based simulations, which work well with a particular LMS, provide useful information to managers, and offer a valid learning experience for learners. Such examples are difficult to come across though.

### A simple alternative for interoperability {#a-simple-alternative-for-interoperability}

I would always [argue that a content management system (CMS) is the best place for content to sit](http://www.learningconversations.co.uk/main/index.php/2008/08/06/courses-and-content?blog=5). It's much more learner-friendly. Yes, the content is "locked into" the CMS's database, but if you choose the right CMS there will be an export function or the ability to create one. If you really need to make sure you can move your content around from one system to another, then there is a simple answer...

*   Create your learning materials as a mini-website - any authoring tool will do this
*   Package them into a simple zip file - nothing complicated. Just add them to a compressed folder in Windows, Create Archive on Mac OSX, or tell your authoring tool to zip up the output (Articulate can certainly do this)
*   Upload your zip file to your LMS and unzip it there. Moodle can certainly do this. It's so simple I expect other LMS's should be able to?
*   Create a link to the home page of your mini website from within the LMS. Again, this is built into Moodle. Do other LMS do this as well?

if your LMS can't handle simple zip files without the content packaging imsmanifest.xml file, then you can use the [manifest maker](http://www.adobe.com/cfusion/exchange/index.cfm?event=extensionDetail&extid=1012681) extension for Dreamweaver, or the open-source [Reload editor](http://www.reload.ac.uk/), which is slightly more complex to use but very powerful.

### In Conclusion {#in-conclusion}

If you're tempted to specify SCORM as a requirement for your elearning project, make sure you understand clearly which bits of SCORM are important to you, and why.

### Further reading {#further-reading}

Click2Learn's [Brief Introduction to SCORM 1.2](http://www.scorm.com/resources/cookbook/SCORM%201_2%20Overview.htm) ADL's [The SCORM 1.2 Run-Time](http://xml.coverpages.org/SCORM-12-RunTimeEnv.pdf) Blog post: [The King is dead, long live the King](http://www.learningconversations.co.uk/main/index.php/2007/08/07/the_king_is_dead_long_live_the_king?blog=5) Blog post: [Looking for a learner support system](http://www.learningconversations.co.uk/main/index.php/2007/12/14/looking_for_a_learner_support_system?blog=5)
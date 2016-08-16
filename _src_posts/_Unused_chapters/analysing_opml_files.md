# Analysing OPML files {#analysing-opml-files}

_Date posted: 5 February 2007_

Warning: these are just notes to help me remember what I'm doing...

One of the tasks I'm going to attempt during this dissertation year is a network analysis of as many edublogger's blogrolls as possible.

This is an outline of the process I'm expecting to use behind the scenes to do the analysis:

1.  Collect each person's blogroll in the form of an OPML file (exported from their feedreader, eg. Bloglines, Google Reader, BlogBridge etc)
2.  Collect contextual information about each person sending in an OPML file;
3.  Give each person a unique ID;
4.  Extract the URLs contained within each OPML, by using the [Saxon XML parser](http://saxon.sourceforge.net/), with the XSLT from: [http://martinjansen.com/2005/10/19/opml2text.html](http://martinjansen.com/2005/10/19/opml2text.html). The XSLT processing should create a CSV file containing the sender's ID attached to the URL's they read.
5.  Each CVS file will be added to a database (probably Access - as it's just a rapid development tool I need)
6.  Once all the data is input into the database I will use it to create a file that can be read by the [Network Workbench software](http://nwb.slis.indiana.edu/software.html) - using the format described at: [http://nwb.slis.indiana.edu/NWB_File_Format_v02.html](http://nwb.slis.indiana.edu/NWB_File_Format_v02.html)
7.  Then I just need to analyse the connections... to see if it's a [scale-free network](http://en.wikipedia.org/wiki/Scale-free_network).

That's just stage 1 (I think). The next stage will be to find out what it is about the hubs that makes them hubs.

The aim is to find out what makes the network tick, so that organisations such as teacher CPD agencies can make best use of it.

That's a very waffly, and indeterminate description of the project so far. It will firm up over the course of the next few days & weeks. (I hope!)
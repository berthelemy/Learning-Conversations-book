# fusion94.org: Firefox Memory Leaks/Other Issues. {#fusion94-org-firefox-memory-leaks-other-issues}

_Date posted: 7 October 2005_

[http://fusion94.org/archives/2005/07/firefox_memory.html](http://fusion94.org/archives/2005/07/firefox_memory.html)

I thought there might be a problem when everything started slowing down during a day spent working on the web. Turns out that Firefox has a bit of a memory leak . It can be controlled using the instructions below (from the fusion94 website):

> 1)Type about:config into the location bar and press enter 2)Right click any line to bring up a sub-menu 3)Choose "new">"integer" 4)paste this into the dialogue that appears: browser.cache.memory.capacity 5)Next click Okay 6)Specify the amount in kb (about 60000 should do) in the next dialogue that appears 7)Restart Firefox and happy surfing.
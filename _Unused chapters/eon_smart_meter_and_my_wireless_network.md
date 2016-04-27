# Eon smart meter and my wireless network {#eon-smart-meter-and-my-wireless-network}

_Date posted: 21 May 2008_

We've had one of Eon's new smart meters installed today. It means our energy suppliers can take meter readings remotely, and also they provide a power display so we can see how much energy we're using.![Smart meter image](./exportlc.php_files/Smartmetertitle.jpg)

From [Eon](http://www.eonenergy.com/At-Home/ExistingCustomers/smart-meters.htm)

The only problem is, as soon as the meter was switched back on my wireless network went haywire. Under Mac OS X the connection dropped to a crawl. Under Windows XP the connection just kept dropping out. I tried all the usual tricks - reboot everything. Then reboot again. The thing that clinched it was when I noticed a new connection in my list of preferred wireless networks. It was called **2Wire64**. Of course! The smart meter must be using some sort of wireless network to communicate. (Well that's what it seemed anyway) I removed that connection and changed the channel setting on my wireless adapter to channel 7 (it had been at Auto). And, as if by magic, everything started working again. Let's hope it lasts.
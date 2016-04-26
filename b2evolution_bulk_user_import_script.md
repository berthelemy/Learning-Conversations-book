# b2evolution bulk user import script {#b2evolution-bulk-user-import-script}

_Date posted: 19 January 2011_

[b2evolution](http://b2evolution.net/) is a superb multi-user, multi-blogging tool - far easier to setup than WordpressMU for multi-blog sites. At the moment, though, users have to be added manually - either through self-registration or through the admin backend. I was looking for a script to help automate this for a corporate blogging site I'm working on. There was nothing in the b2evolution forums, but I found one on the Mambo forum - written by Wayne Stewart: [http://forum.mamboserver.com/showthread.php?t=17358](http://forum.mamboserver.com/showthread.php?t=17358) I've adapted it for b2evolution, and added some more code to test whether the users already exist. If they do, then the script exits and asks you to check the existing users in the PHP file. Otherwise you'd end up with multiple users with the same username - bad news! The attached zip file contains a php file and a sample csv file. The PHP file should be placed alongside the CSV file in your b2evolution folder structure, and run directly from the browser address bar. Please note:

*   This is alpha software. There are no warranties, and I can't guarantee I'll be able to support you if you try it out.
*   For security, please remove the CSV file and the import script from your server after each run

Things that would improve it...

1.  Integrate the script more fully with b2evolution's authentication and permissions system, so only admins can run it
2.  Incorporate a browse function to allow CSV files to be uploaded
3.  Make the preset variables populatable from a form
4.  Make the testing mode switchable from a form

I've tried to make the code as fully commented as possible (keeping most of Wayne's original comments). If there are any questions, give me a shout. [Update: v0.2 uploaded with Testing Mode on by default] [Download the import script](http://www.learningconversations.co.uk/main/media/blogs/mark//b2evoImportScript_v_0_2.zip)
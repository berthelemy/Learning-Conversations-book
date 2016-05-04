# Workshop: getting to grips with WAMP {#workshop-getting-to-grips-with-wamp}

_Date posted: 2 January 2008_

These notes support a workshop that I'm going to be running this month. It's designed to help participants understand how browsers, webservers, script interpreters and databases work together to produce webpages. It is designed for people who have HTML/CSS experience, but little knowledge of script-driven sites. By the end of the workshop, participants will:

1.  Have installed [EasyPHP](http://www.easyphp.org/?lang=en) and [SQLyog (Community Edition)](http://www.webyog.com/en/) on their local machines, and setup a space on their Data drive for local websites;
2.  Be able to create a MySQL database using SQLyog;
3.  Be able to install "standard" PHP/MySQL applications, such as [Etomite](http://www.etomite.org/), [Joomla](http://www.joomla.org/), [Wordpress](http://wordpress.org/) and [Moodle](http://moodle.org/) on their local machines;
4.  Know how to transfer a local site to a web-based (eg. [Dreamhost](http://www.dreamhost.com/) or [Hasweb](http://www.hasweb.com/)) server, using the control panel tools available on the server.

> Remember, all we're doing here is setting up test sites. These instructions should **not** be used for production websites, which need far more configuring to keep them secure.

### The Big Picture {#the-big-picture}

The video presentation below (very 1970's Open University I know!) provides a simplified explanation of how the different components work together to produce webpages. [blip]Berthelemy-WhereDoWebpagesComeFrom415.flv[/blip]

### Practicalities {#practicalities}

It is possible to do this workshop entirely using a memory stick (which would make it very portable). You'd just need a number of USB sticks with either [Server2Go](http://www.server2go-web.de/) or [Web Server on a Stick](http://www.chsoftware.net/en/useware/wos/wos.htm) pre-installed. However, the aim is to leave people with an expandable, working system and with the skills to be able to use it. So the process of installing & configuring the software is an essential part of the workshop.

### Getting started {#getting-started}

You will need to download two pieces of software:

*   [Easyphp](http://www.easyphp.org/?lang=en) - which is a single application that contains the three components of a script-driven website: the **Apache** webserver, the **PHP** script interpreter, and the **MySQL** database manager.
*   [Sqlyog - Community Edition](http://www.webyog.com/en/) - a Windows graphical interface for MySQL (it saves having to use the command line to control the databases)

#### Installing & configuring Easyphp {#installing-configuring-easyphp}

The EasyPHP installer will set itself up in your Program Files folder. It will create a www sub-folder which will be where your webpages are served from. It will also create a mysql/data folder where the data for MySQL is stored. This is not ideal. It's far better to have your data & your script files served from within your My Documents space (which hopefully is on a different partition to your Windows Operating System!). That way it's far easier to keep it backed up. It also means that your Program Files folder doesn't become bloated. There are two configuration files to change. Run EasyPHP, so that you see the ![EasyPHP icon](./assets/easyphp.png "EasyPHP icon") with the red dot flashing in your task bar. Right click on the icon and select "Configuration".![EasyPHP configuration menu](./assets/easyphp_configuration.png "EasyPHP configuration menu")These configuration options allow you to control Apache, PHP and MySQL.

#### Configuring MySQL {#configuring-mysql}

Open the MySQL configuration file (it will open it up in your text editor), and change the line which says:

> `datadir=${path}/mysql/data`

to...

> `datadir=[path_to_data_directory]`

where the [path_to_data_directory] must be an absolute reference (ie. not relative to your current position in the file structure), and the new data folder **must** already exist. This is where your data will be stored.

#### Configuring Apache {#configuring-apache}

Then you need to do a similar thing to Apache, the webserver, to tell it where to find your websites. I simply have a folder in My Documents called _"websites"_. Then each website is contained within a separate sub-folder. Your browser will then get to the site by using the address: _"http://localhost/[sub-folder]"_

> Note: you may need to change settings in your browser if you are using a proxy server - so that it ignores the proxy server for local addresses.

To change where localhost gets its webpages from, go to the EasyPHP configuration menus and choose Apache. Find the line that starts _DocumentRoot_ and change the text in quotes to the path of the folder where your websites will be stored. Mine now says:

> `DocumentRoot "E:/websites"`

#### The moment of truth {#the-moment-of-truth}

To test that everything is working:

1.  Create a new text file called phpinfo.php
2.  Copy & paste the following code into that file:``
3.  Save the file into your websites folder
4.  Open the address _http://localhost/phpinfo.php_ in your browser

You should see something like the following:![PHPinfo screenshot](./assets/phpinfo_screenshot.png "PHPinfo screenshot")PHPinfo screenshotIf you don't it's probably because I've forgotten a particular instruction. Let me know & I'll see what needs to be done.

### Installing web applications {#installing-web-applications}

That's the hard bit over. The easy bit is setting up the applications you want to work with. There are a few common stages for every application:

1.  Copy the applications files into your websites folder
2.  Create a database for it to use
3.  Run the installation file (if it's a nicely designed application it will have one) where you will tell the application where the database is, the database name, and the database user
4.  The application would then ideally create a configuration file containing all that information

You should now be ready to run! Try this on more than one application, and you will begin to see how simple the process is.

> Remember, all we're doing here is setting up test sites. These instructions should not be used for production websites, which need far more configuring to keep them secure.
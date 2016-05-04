# Your admins can't login to ExponentCMS? {#your-admins-can-t-login-to-exponentcms}

_Date posted: 5 March 2009_

If you're using [ExponentCMS](http://www.exponentcms.org/) to drive your website, and you suddenly find that your admins can't login, then do the following (this is only tested on version 0.96.6):

*   Use PHPMyAdmin or similar to explore the database
*   Under the Structure tab, look for the table **exponent_sessionticket**
*   Does it say "in use" next to it?
*   If so, then try to repair it - tick the box, and select Repair from the drop-down at the bottom
*   Try to login to ExponentCMS again
*   If you still can't login, then you'll need to DROP the table and rebuild it using the SQL code below. [Be careful that you only drop the sessionticket table!]
*   Try to login again

I've no idea why this table gets corrupted, but it's one to watch out for. Here's the SQL code to rebuild the table: `CREATE TABLE IF NOT EXISTS `exponent_sessionticket` ( `ticket` varchar(23) NOT NULL DEFAULT '', `uid` int(11) NOT NULL DEFAULT '0', `last_active` int(14) NOT NULL DEFAULT '0', `refresh` tinyint(1) NOT NULL DEFAULT '0', `ip_address` varchar(15) NOT NULL DEFAULT '', `start_time` int(14) NOT NULL DEFAULT '0', `browser` varchar(250) NOT NULL DEFAULT '', PRIMARY KEY (`ticket`) ) ENGINE=MyISAM DEFAULT CHARSET=latin1;` Forum discussions that helped fix this: http://www.exponentcms.org/index.php?action=view_thread&id=8928&module=bbmodule http://www.exponentcms.org/index.php?action=view_thread&id=7481&module=bbmodule http://www.exponentcms.org/index.php?module=bbmodule&section=75&action=view_thread&id=7975
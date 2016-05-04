# Exporting all your b2evolution posts {#exporting-all-your-b2evolution-posts}

_Date posted: 26 May 2010_

I'm going through the process of looking through all my old posts, to see if I can make some sort of coherent resource (perhaps even a book!) out of them. I wanted to put them all into a Google Doc where I could pull the text around. I started off just copying and pasting from this blog into the doc, but that was going to take an age with over 500 posts. [B2evolution](http://b2evolution.net/) doesn't provide a simple way of displaying all the posts on one page, so I knocked up a quick bit of code to do this. It takes every **published** post and displays its title, any associated url, and the content of that post. There's nothing fancy about this code; no styling, or proper html commands to set up the page. But it works... At the moment it takes every post in your database. There's no way of setting it to only pick up posts from one particular blog (b2evolution lets you create as many blogs as you want). I didn't need that, but if anyone can point me in the right direction I'll add it in. To use the code, copy it to a new php file, set up the username, password and database name and add the file to your webserver. For safety's sake (and speed), I did this by taking a copy of the database and running the file locally. But you'll need to make sure you've got a webserver, php & MySQL running on your PC/Mac/netbook etc.

```

<?php
$username = "your_database_username";
$password = "your_database_password";
$hostname = "localhost";
$database = "your_database";
$table = "evo_items__item";

//connection to the database
$dbhandle = mysql_connect($hostname, $username, $password)
  or die("Unable to connect to MySQL");
echo "Connected to MySQL<br />";

//select a database to work with
$selected = mysql_select_db($database,$dbhandle)
  or die("Could not select ".$database);
echo "Connected to ".$database;

//execute the SQL query and return records
$result = mysql_query("SELECT post_ID, post_title, post_content, post_url, post_status FROM $table WHERE post_status='published'");
//fetch the data from the database
while ($row = mysql_fetch_array($result)) {
	$content = $row{'post_content'};
	$content = nl2br($content);
	$url = $row{'post_url'};
//	preg_replace('!([\r\n]+)!', '\\\$1', $content);
	echo "<h1>".$row{'post_title'}."</h1>";
	echo "<p><a href='".$url."'>".$url."</a></p>";
	echo "<div class='post'>";
	echo $content;
	echo "</div>";

}

//close the connection
mysql_close($dbhandle);
?>

```
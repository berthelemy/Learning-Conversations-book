# Changing css stylesheets using Javascript and a URL parameter {#changing-css-stylesheets-using-javascript-and-a-url-parameter}

_Date posted: 18 February 2011_

OK, this is a very boring post. It's all about code. But, if you ever have a single website which you need to rebrand for a specific client, and you can't use a content management system, then here's how to do it. Basically, the code looks for a parameter in the URL (eg. www.mywebsite.co.uk?client=myclient), switches to the alternate stylesheet that matches that client name, then stores a browser cookie so that every subsequent page will also use the same stylesheet. There are four stages to making this work: 1) Get a copy of [JQuery](http://jquery.com/). It's a mature javascript framework that makes it a lot easier to write clever code without having to worry about cross-browser incompatabilities and all the difficult stuff. 2) Set up two CSS style sheets. You can do more, but let's leave it with just two for now. One is the main one, the other is the alternate. Try not to replicate the CSS too much, as both sheets will be downloaded. So make the alternate stylesheet just have the bits that will need to change. 3) Create a separate javascript file that will do the switching and cookie setting. 4) Link the CSS sheets and your javascript into your HTML pages Here's the custom javascript you'll need:

```

// Always put this in when using JQuery as IE tends to cache Ajax
$.ajaxSetup ({
    cache: false
});

// Extend JQuery to get variables from URL
$.extend({
  getUrlVars: function(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  },
  getUrlVar: function(name){
    return $.getUrlVars()[name];
  }
});

// Function to create cookie
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

// Function to read cookie
function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

// Function to delete cookie
function eraseCookie(name) {
	createCookie(name,"",-1);
}

// Function to switch style
function switchStylestyle(styleName) {

      // check styles against title attribute - disable all those that don't match

      $('link[@rel*=style][title]').each(function(i) 
      {
         this.disabled = true;
         if (this.getAttribute('title') == styleName) this.disabled = false;
      });
      createCookie('client', styleName, 365); // Set cookie - for a year
   }

//  
// code to execute when page ready - vital for any JQuery driven site
//

$(document).ready(function(){
//
//	Set style
//
    var c = readCookie('client'); // Check if this browser already has the 'client' cookie
    var stylesheet = $.getUrlVar('client'); // Check for a variable in the URL

    if (stylesheet!=null) { // If there's a new variable in the URL then reset the style
	switchStylestyle(stylesheet);
		} else {
		switchStylestyle(c); // otherwise set it based on the cookie
	  }

 }); // End of Document Ready function

```

And here are the relevant parts of the HTML:

```

<html>
    <head>
    <title>My website</title>

    <!-- Bring in the primary stylesheet -->
    <link rel="stylesheet" type="text/css" href="main.css" media="all" />

    <!-- Bring in the alternate stylesheet -->
    <link rel="alternate stylesheet" type="text/css" href="sheet2.css" title="myclient" />

    <!-- Bring in the JQuery framework -->
    <script type="text/javascript" src="scripts/jquery.js"></script>

    <!-- Bring in the custom javascript you've written -->
    <script type="text/javascript" src="scripts/customscripts.js"></script>

    </head>
    <body>

     This is where the bulk of your HTML will go.

    </body>
</html>     

```

Credits: JQuery howto: [Get URL parameters and values with JQuery](http://jquery-howto.blogspot.com/2009/09/get-url-parameters-values-with-jquery.html) A List Apart: [Working with alternate style sheets](http://www.alistapart.com/articles/alternate/) Kelvin Luck: [Switch stylesheets with Jquery](http://www.kelvinluck.com/2006/05/switch-stylesheets-with-jquery/)
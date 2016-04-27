# Creating a new theme for Moodle 2.0 {#creating-a-new-theme-for-moodle-2-0}

_Date posted: 7 January 2011_

The following instructions are my reference notes, used when creating a new theme from an existing Moodle theme. They should be used in conjunction with [http://docs.moodle.org/en/Development:Themes_2.0](http://docs.moodle.org/en/Development:Themes_2.0)

1.  Make a copy of the original theme, call the folder a new name, eg. new_theme
2.  Open up new_theme/config.php in a text editor
3.  Change $THEME->name = 'old_theme'; to $THEME->name = 'new_theme';
4.  Open up new_theme/lang/en/theme_old_theme.php
5.  Save as new_theme/lang/en/theme_new_theme.php
6.  Change $string['pluginname'] = 'old_theme'; to $string['pluginname'] = 'new_theme';

Once you've done that you can follow the developer's instructions to modify the CSS etc.
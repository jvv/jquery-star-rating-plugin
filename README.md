# jquery-star-rating-plugin
Rating plugin jQuery

A simple star rating plugin which uses Googles Materialize Icons.

# Demo

A demo can be seen on: http://joost.in/ternet/javascript/jquery-star-rating-plugin, or in the example HTML file.

# Requirements

- jQuery
- Access to Google Materialize icons (http://www.google.com/design/icons/). See the example HTML file.

# Usage

Add the plugin to your source, call it by using:

    $('-your-selector-').addRating();

# Options

    icon : star | favorite

Star is a star, favorite is a heart

    max : 5

How many stars you want / max rating.

    fieldName : 'rating'

Specific name for the hidden input field.

    fieldId : 'rating'

ID attribute of the hidden input field, so you can retrieve the contents easily.

    click : function(obj,count) {}

Click function is response function

# Override Styles

Change the fill color by overriding the "selected" class in your css.

# License

Creative Commons  / Free to use or alter - leave the

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/InteractiveResource" property="dct:title" rel="dct:type">jQuery Star Rating plugin</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="http://joostvanvelzen.net/" property="cc:attributionName" rel="cc:attributionURL">Joost van Velzen</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/jvv/jquery-star-rating-plugin" rel="dct:source">https://github.com/jvv/jquery-star-rating-plugin</a>.

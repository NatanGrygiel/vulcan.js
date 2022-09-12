/* ███████████████████████████████████ */
/* █  V U L C A N . J S - F O L L Y  █ */
/* ███████████████████████████████████ */
/* █ This is a Vulcan.js theme file. █ */
/* █ You can use this file to create █ */
/* █  your own theme for vulcan.js.  █ */
/* ███████████████████████████████████ */
/* (  Vulcan.js is an extension for  ) */
/* (  all browsers that allows you   ) */
/* (  to change the look of your     ) */
/* (  electronic gradebook, it uses  ) */
/* (  a CSS injection method to make ) */
/* (  the website look better.       ) */

/* change the document title to vulcan.js */
/* make the custom title stay even if the page tries to change it */
document.title = "vulcan.js";
document.addEventListener("DOMSubtreeModified", function() {
    document.title = "vulcan.js";
    }
);

/* change the favicon to vulcan.js */
var favicon = document.createElement('link');
favicon.type = 'image/x-icon';
favicon.rel = 'shortcut icon';
favicon.href = 'https://natangrygiel.pl/assets/icon.png';
document.getElementsByTagName('head')[0].appendChild(favicon);

/* start changing the website */
/* we will do it the easy way, by changing the CSS */
/* I grabbed the original CSS from the website so it should be easy to change */
/* next, I will change the CSS so it will look different, as is the point of this theme extension */
/* So now, we will be able to inject our own CSS into the website */


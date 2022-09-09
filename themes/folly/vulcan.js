/* ███████████████████████████████████ */
/* █  V U L C A N . J S - F O L L Y  █ */
/* ███████████████████████████████████ */
/* █ This is a Vulcan.js theme file. █ */
/* █ You can use this file to create █ */
/* █  your own theme for vulcan.js.  █ */
/* ███████████████████████████████████ */


/* change the document title to vulcan.js */
/* make the custom title stay even if the page tries to change it */
document.title = "vulcan.js";
document.addEventListener("DOMSubtreeModified", function() {
    document.title = "vulcan.js";
}
);
/* change the favicon to logo128.png */
/* make the custom favicon stay even if the page tries to change it */
var favicon = document.createElement("link");
favicon.rel = "icon";
favicon.href = "https://natangrygiel.pl/assets/logo128.png";
document.head.appendChild(favicon);
document.addEventListener("DOMSubtreeModified", function() {
    document.head.appendChild(favicon);
}
);


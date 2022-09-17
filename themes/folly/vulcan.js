/* ███████████████████████████████████ */
/* █  V U L C A N . J S - F O L L Y  █ */
/* ███████████████████████████████████ */
/* █ This is a Vulcan.js theme file. █ */
/* █ You can use this file to create █ */
/* █  your own theme for vulcan.js.  █ */
/* ███████████████████████████████████ */


/* this is a web extension, so we will use the web extension API */
/* https://developer.mozilla.org/en-US/Add-ons/WebExtensions */

/* let's start by making sure that the extension is working */
/* we will use the console.log() function to print a message to the console */
console.log("Vulcan.js loaded!");
/* if you open the browser console, you should see the message */

/* the user may not be as tech-savvy to know how to open the console, */
/* so we will also change the document title to "Vulcan.js" and the favicon to the Vulcan.js logo */
document.title = "Vulcan.js";
document.querySelector("link[rel='shortcut icon']").href = "https://raw.githubusercontent.com/NatanGrygiel/vulcan.js/master/logo/icon.png";
/* javascript doesn't allow to href local files, so we use the icon from the github repository */

/* define our custom CSS */
const CSS = "body { border: 20px solid red; }";
/* insert the CSS into the page using insertCSS() */
/* this is really dumb, but it works */
if (1 == 1) {
    browser.tabs.insertCSS({code: CSS});
}
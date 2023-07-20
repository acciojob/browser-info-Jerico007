//your JS code here. If required.
const newElement = document.createElement("div");

newElement.id = "browser-info";

newElement.innerHTML = "You are using " + navigator.appName + " version " + navigator.appVersion
const body = document.getElementsByTagName("body")[0];

body.appendChild(newElement);
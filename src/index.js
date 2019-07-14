const Router = require("./router.js");
const Inbox = require("./inbox.js");
const Sent = require("./sent.js");
const Compose = require('./compose.js');

const routes = {
  inbox: Inbox,
  sent: Sent,
  compose: Compose
};

window.addEventListener("DOMContentLoaded", (event) => {
  let content = document.querySelector(".content");
  let router = new Router(content, routes);
  router.start();
  let navs = document.querySelectorAll(".sidebar-nav li")
  for(let i = 0; i < navs.length; i++){
    navs[i].addEventListener("click", () => {
      let location_name = navs[i].innerText.toLowerCase();
      window.location.hash = location_name;
    });
  };
  window.location.hash = "inbox";
});

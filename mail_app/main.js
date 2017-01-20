let Router = require("./router.js");
let Inbox = require("./inbox.js");


let routes = {
  // compose: Compose,
  inbox: Inbox,
  // send: Send
};


document.addEventListener("DOMContentLoaded", () => {
  let content = document.querySelector(".content");
  let router = new Router(content, routes);
  router.start();
  window.location.hash = "#inbox";

  let navItems = Array.from(document.querySelectorAll(".sidebar-nav li"));
  navItems.forEach(navItem => {
    navItem.addEventListener("click", () => {
      let hashLocation = navItem.innerText.toLowerCase();
      window.location.hash = hashLocation;
    });
  });
});

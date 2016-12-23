

document.addEventListener("DOMContentLoaded", () => {
  let content = document.querySelector(".content");
  let navItems = Array.from(document.querySelectorAll(".sidebar-nav li"));
  navItems.forEach(navItem => {
    navItem.addEventListener("click", () => {
      let hashLocation = navItem.innerText.toLowerCase();
      window.location.hash = hashLocation;
    });
  });
});

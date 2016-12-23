class Router {
  constructor(node) {
    this.node = node;
  }

  start() {
    this.render();
    window.addEventListener("hashchange", () => this.render());
  }

  activeRoute() {
    let hashFragment = window.location.hash;
    return hashFragment.slice(1);
  }

  render() {
    this.node.innerHTML = "";
    let newP = document.createElement("p");
    newP.innerHTML = this.activeRoute();
    this.node.appendChild(newP);
  }
}





module.exports = Router;

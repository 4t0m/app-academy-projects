class Router {
  constructor(node, routes) {
    this.node = node;
    this.routes = routes;
  }

  start() {
    this.render();
    window.addEventListener("hashchange", () => this.render());
  }

  activeRoute() {
    let hashFragment = window.location.hash;
    hashFragment = hashFragment.slice(1);
    return this.routes[hashFragment];
  }

  render() {
    this.node.innerHTML = "";
    let component = this.activeRoute();
    if (component) {
      let componentDOM = component.render();
      this.node.appendChild(componentDOM);
    }
  }
}





module.exports = Router;

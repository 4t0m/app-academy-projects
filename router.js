class Router {
  constructor(node) {
    this.node = node;
  }

  start() {
    this.render();
    window.addEventListener("hashchange", () => this.render());
  }

  activeRoute() {

  }

  render() {

  }
}





module.exports = Router;

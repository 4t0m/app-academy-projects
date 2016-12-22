class DOMNodeCollection {
  constructor(htmlElements) {
    this.elements = htmlElements;
  }

  each(callback) {
    this.elements.forEach(callback);
  }

  html(string = undefined) {
    if (string === undefined) {
      return this.elements[0].innerHTML;
    }
    else {
      this.each( (node) => node.innerHTML = string)
    }
  }

  empty() {
    this.html("");
  }

  append(argument) {
    switch(typeof argument) {
      case "string":
        this.each( (node) => node.innerHTML = node.innerHTML.concat(argument));
      case "object":
        if (argument instanceof HTMLElement) {
          this.each( (node) => node.innerHTML = node.innerHTML.concat(argument.outerHTML));
        } else if (argument instanceof DOMNodeCollection) {
          this.each( (node) => {
            argument.each( (argNode) => {
              node.appendChild(argNode.cloneNode(true));
            });
          });
        }
    }
  }

  attr() {

  }

  addClass() {

  }

  removeClass() {

  }

}

module.exports = DOMNodeCollection;

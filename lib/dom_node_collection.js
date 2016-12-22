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
        break;
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

  attr(attributeName, value = undefined) {
    if (value === undefined) {
      return this.elements[0].getAttribute(attributeName);
    } else {
      this.each( node => node.setAttribute(attributeName, value) );
    }
  }

  addClass(classStr) {
    this.each(node => node.classList.add(classStr));
  }

  removeClass(classStr) {
    this.each(node => node.classList.remove(classStr));
  }

  children() {
    let childElements = [];
    this.each(node => {
      const currentChildren = node.children;
      childElements = childElements.concat(Array.from(currentChildren));
    });
    return new DOMNodeCollection(childElements);
  }

  parent() {
    let parentElements = [];
    this.each(node => parentElements.push(node.parentNode));

    return DOMNodeCollection(parentElements);
  }
}

module.exports = DOMNodeCollection;

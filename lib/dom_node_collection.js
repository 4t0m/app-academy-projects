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

  find(selector) {
    let selectedElements = [];
    this.each(node => {
      let matchingChildren = Array.from(node.querySelectorAll(selector));
      selectedElements = selectedElements.concat(matchingChildren);
    });

    return selectedElements;
  }

  remove() {
    this.each(node => node.parentNode.removeChild(node));
  }

  on(type, callback) {
    this.each( node => {
      node.addEventListener(type, callback);
      if (typeof node[type] === "undefined") {
        node[type] = [];
      }
      node[type].push(callback);
    });


  }

  off(type) {
    this.each( node => {
      let callbacks = node[type];
      if (callbacks) {
        callbacks.forEach( (callback) => node.removeEventListener(type, callback));
      }
      node[type] = [];
    });
  }
}

module.exports = DOMNodeCollection;

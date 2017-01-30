let DOMNodeCollection = require("./dom_node_collection.js");

function $l(arg) {
  switch(typeof(arg)){
    case "string":
      let htmlElements = Array.from(document.querySelectorAll(arg));
      return new DOMNodeCollection(htmlElements);
    case "object":
      if (arg instanceof HTMLElement) {
        return new DOMNodeCollection([arg]);
      }
    }
}

window.$l = $l;

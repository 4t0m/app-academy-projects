/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	let DOMNodeCollection = __webpack_require__(1);

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


/***/ },
/* 1 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);
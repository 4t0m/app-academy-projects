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

	let Router = __webpack_require__(1);

	document.addEventListener("DOMContentLoaded", () => {
	  let content = document.querySelector(".content");
	  let router = new Router(content);
	  router.start();
	  
	  let navItems = Array.from(document.querySelectorAll(".sidebar-nav li"));
	  navItems.forEach(navItem => {
	    navItem.addEventListener("click", () => {
	      let hashLocation = navItem.innerText.toLowerCase();
	      window.location.hash = hashLocation;
	    });
	  });
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);
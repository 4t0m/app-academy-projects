class DOMNodeCollection {
  constructor(htmlElements) {
    this.elements = htmlElements;
  }

  html(string = undefined) {
    if (string === undefined) {
      return this.elements[0].innerHTML;
    }
    else {
      this.elements.forEach( (el) => el.innerHTML = string)
    }
  }

}

module.exports = DOMNodeCollection;

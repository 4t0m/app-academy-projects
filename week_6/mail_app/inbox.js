module.exports = {
  render() {
    let emailList = document.createElement("ul");
    emailList.className = "messages";
    emailList.innerHTML = "An Inbox Message";

    return emailList;
  }


};

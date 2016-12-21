const APIUtil = require('./api_util.js');

class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.$input = this.$el.find("input");
    this.$ul = this.$el.find("ul");
    this.$input.on("input", this.handleInput.bind(this));
  }

  handleInput(e) {
    let val = this.$input.val();

    const success = items => {
      console.log(items);
      this.$ul.empty();
      items.forEach( item => this.$ul.append(`<li>${item.username}</li>`));
    };

    APIUtil.searchUsers(val, success);
  }
}

module.exports = UsersSearch;

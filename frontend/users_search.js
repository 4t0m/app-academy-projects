const APIUtil = require('./api_util.js');
const FollowToggle = require('./follow_toggle.js');

class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.$input = this.$el.find("input");
    this.$ul = this.$el.find("ul");
    this.$input.on("input", this.handleInput.bind(this));
  }

  handleInput(e) {
    let val = this.$input.val();

    APIUtil.searchUsers(val, this.renderResults.bind(this));
  }

  renderButton(user) {

    let $button = $(`<button type="button"
            name="button"
            class="follow-toggle"
            data-user-id="${user.id}"
            data-initial-follow-state=
              ${user.followed ? "Followed" : "Unfollowed"}>
    </button>`);

    new FollowToggle($button);
    return $button;
  }

  renderResults(users) {
    console.log(users);
    this.$ul.empty();
    users.forEach( user => {
      let $link = $(
        `<li><a style="margin-right: 10px"
                href="/users/${user.id}">${user.username}</a></li>`);
      $link.append(this.renderButton(user));
      this.$ul.append($link);
    });
  }
}

module.exports = UsersSearch;

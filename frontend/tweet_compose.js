const APIUtil = require("./api_util.js");

class TweetCompose {
  constructor(el) {
    this.$el = $(el);
    this.$el.on("submit", (e) => this.submit(e));
    this.$textarea = this.$el.find('textarea.user-input');
    this.$textarea.on("input", (e) => this.updateCount(e));
  }

  updateCount(e) {
    $('.chars-left').text(140 - e.currentTarget.value.length);
  }

  clearInput() {
    this.$el.find('.user-input').val("");
  }

  handleSuccess(tweet) {
    this.clearInput();
    let $feed = $(this.$el.attr("data-tweets-ul"));
    let $li = $("<li>");
    $li.append(JSON.stringify(tweet));
    $feed.prepend($li);
  }

  submit(e) {
    e.preventDefault();

    let form = $('.tweet-compose').serializeJSON();

    APIUtil.createTweet(form).then((tweet) => this.handleSuccess(tweet));
  }
}

module.exports = TweetCompose;

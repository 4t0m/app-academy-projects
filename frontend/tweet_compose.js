const APIUtil = require("./api_util.js");

class TweetCompose {
  constructor(el) {
    this.$el = $(el);

    this.$el.on("submit", this.submit.bind(this));
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

    APIUtil.createTweet(form, this.handleSuccess.bind(this));
  }
}

module.exports = TweetCompose;

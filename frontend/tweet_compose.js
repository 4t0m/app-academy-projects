const APIUtil = require("./api_util.js");

class TweetCompose {
  constructor(el) {
    this.$el = $(el);

    this.$el.on("submit", this.submit.bind(this));
  }

  submit(e) {
    e.preventDefault();
    // console.log(e.currentTarget[1].value);
    // console.log(e.currentTarget);
    // console.log(e);
    let $li = $("<li>");
    let text = e.currentTarget[1].value;
    let mentionId = e.currentTarget[2].value;
    $li.text(text);

    if (mentionId) {
      let $anchor = $("<a>");
      $anchor.attr("href", `/users/${mentionId}`);
      $anchor.text("mentioned user");
      $li.append($anchor);
    }

    APIUtil.createTweet($li);
  }
}

module.exports = TweetCompose;

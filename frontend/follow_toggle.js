const APIUtil = require('./api_util.js');

class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data("userId");
    this.followState = this.$el.data("initialFollowState");
    this.$el.text(this.render());
    this.$el.on("click", this.handleClick.bind(this));
  }

  render() {
    if (this.followState === "Following") {
      this.followState = "Followed";
      this.$el.prop("disabled", true);
      return "Following";
    } else if (this.followState === "Unfollowing") {
      this.followState = "Unfollowed";
      this.$el.prop("disabled", true);
      return "Unfollowing";
    } else {
      this.$el.prop("disabled", false);
      if (this.followState === "Unfollowed") {
        return "Follow!";
      } else {
        return "Unfollow!";
      }
    }

  }

  handleClick(e) {
    e.preventDefault();

    let nf = this.followState === "Followed" ? "Unfollowed" : "Followed";
    this.followState = nf === "Followed" ? "Following" : "Unfollowing";
    this.$el.text(this.render());

    const updateButton = () => {
      this.followState = nf;
      this.$el.text(this.render());
    };

    console.log(this.followState);
    if (this.followState === "Followed")
      APIUtil.followUser(this.userId).then(updateButton);
    else
      APIUtil.unfollowUser(this.userId).then(updateButton);
  }
}

module.exports = FollowToggle;

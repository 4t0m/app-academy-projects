class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data("userId");
    this.followState = this.$el.data("initialFollowState");
    this.$el.text(this.render());
    this.$el.on("click", this.handleClick.bind(this));
  }

  render() {
    if (this.followState === "Unfollowed") {
      return "Follow!";
    } else {
      return "Unfollow!";
    }
  }

  handleClick(e) {
    e.preventDefault();
    let type = this.followState === "Unfollowed" ? "POST" : "DELETE";
    let nf = this.followState === "Followed" ? "Unfollowed" : "Followed";
    let success = () => {
      this.followState = nf;
      this.$el.text(this.render());
    }

    $.ajax({
      type: type,
      dataType: "JSON",
      url: `/users/${this.userId}/follow`,
      success: success
    });
  }
}

module.exports = FollowToggle;

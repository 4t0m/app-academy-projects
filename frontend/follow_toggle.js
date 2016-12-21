class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data("userId");
    this.followState = this.$el.data("initialFollowState");
  }
}

module.exports = FollowToggle;

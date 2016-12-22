const APIUtil = {
  followUser: id => {
    return $.ajax({
      type: "POST",
      dataType: "JSON",
      url: `/users/${id}/follow`
    });
  },

  unfollowUser: id => {
    return $.ajax({
      type: "DELETE",
      dataType: "JSON",
      url: `/users/${id}/follow`
    });
  },

  searchUsers: (queryVal, success) => {
    $.ajax({
      url: "/users/search",
      type: "GET",
      data: { query: queryVal},
      dataType: "JSON"
    }).then(success);
  },

  createTweet: (tweet, success) => {
    $.ajax({
      url: "/tweets",
      type: "POST",
      dataType: "JSON",
      data: tweet
    }).then(success);
  }
};

module.exports = APIUtil;

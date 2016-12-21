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
    }).then(success, (fail) => console.log(fail));
  },

  createTweet: (tweet) => {
    let $feed = $("#feed");
    $feed.append(tweet);
  }
};

module.exports = APIUtil;

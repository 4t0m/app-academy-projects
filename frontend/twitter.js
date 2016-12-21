const FollowToggle = require("./follow_toggle.js");
const UsersSearch = require("./users_search.js");

$( () => {
  $(".follow-toggle").each( (index, el) => {
    let followToggle = new FollowToggle(el);
  });
  let usersSearch = new UsersSearch($('.users-search'));
}
);

const FollowToggle = require("./follow_toggle.js");

$( () => $(".follow-toggle").each( (index, el) => {
  let followToggle = new FollowToggle(el);
})
);

export const fetchUser = id => (
  $.ajax({type: "GET",
          url: `/api/users/${id}`
  })
);

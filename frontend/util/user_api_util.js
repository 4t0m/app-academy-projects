export const fetchUser = id => (
  $.ajax({type: "GET",
          url: `/api/users/${id}`
  })
);

export const updateUser = data => (
  $.ajax({
    type: 'PATCH',
    url: `/api/users/_`,
    data,
    processData: false,
    contentType: false,
  })
);

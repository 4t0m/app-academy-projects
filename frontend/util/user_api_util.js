export const fetchUser = id => (
  $.ajax({type: "GET",
          url: `/api/users/${id}`
  })
);

export const updateUser = (data, id) => (
  $.ajax({
    type: 'PATCH',
    url: `/api/users/${id}`,
    data,
    processData: false,
    contentType: false,
  })

);

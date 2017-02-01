export const signup = (user) => (
  $.ajax({type: "POST",
          url: "/api/users",
          data: { user } })
);


export const login = (user) => (
  $.ajax({type: "POST",
          url: "/api/session",
          data: { user } })
);

export const guestLogin = () => (
  $.ajax({type: "POST",
          url: "/api/session",
          data: { user: { email: "guest@domain.com", password: "password"} } })
);

export const logout = () => (
  $.ajax({type: "DELETE",
          url: "/api/session"})
);

export const signup = (user) => (
  $.ajax({type: "POST",
          url: "api/user",
          data: user})
);


export const login = (user) => (
  $.ajax({type: "POST",
          url: "api/session",
          data: user})
);

export const logout = () => (
  $.ajax({type: "DELETE",
          url: "api/session"})
);

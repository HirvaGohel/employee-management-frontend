export const loginUser = (user) => {
  localStorage.setItem("isAuth", "true");
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const logoutUser = () => {
  localStorage.clear();
};

export const isAuthenticated = () => {
  return localStorage.getItem("isAuth") === "true";
};

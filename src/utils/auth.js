const TOKEN_KEY = "jwt";

export const signin = () => {
  localStorage.setItem(TOKEN_KEY, "testLogin.test.123");
};

export const signout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const isLogin = () => {
  if (localStorage.getItem(TOKEN_KEY)) {
    return true;
  }
  return false;
};

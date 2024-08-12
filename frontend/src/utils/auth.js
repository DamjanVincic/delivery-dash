import api from "./api";

const login = async (username, password) => {
  try {
    const response = await api.post("api-token-auth/", { username, password });
    return {
      success: true,
      ...response.data,
    };
  } catch (error) {
    const { status, data } = error.response;
    if (status === 400) {
      return {
        success: false,
        error: data.non_field_errors[0],
      };
    }
    console.log({ ...status, ...data });
    return error;
  }
};

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

const isLoggedIn = () => {
  return localStorage.getItem("token") !== null;
};

const getLoggedInUser = () => {
  return localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
};

export { login, logout, isLoggedIn, getLoggedInUser };

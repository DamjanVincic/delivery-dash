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

export { login };

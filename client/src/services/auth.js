import api from "./api-config";

export const getUsers = async () => {
  try {
    let res = await api.get("/users");
    return res.data;
  } catch (e) {
    return { errors: e };
  }
};
export const loginUser = async (loginData) => {
  const res = await api.post("/api/sign-in", loginData);
  localStorage.setItem("authToken", res.data.token);
  api.defaults.headers.common.authorization = `Bearer ${res.data.token}`;
  return res.data;
};

export const registerUser = async (registerData) => {
  const res = await api.post("api/sign-up", registerData);
  localStorage.setItem("authToken", res.data.token);
  api.defaults.headers.common.authorization = `Bearer ${res.data.token}`;
  return res.data;
};

export const verifyUser = async () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const res = await api.get("/auth/verify");
    return res.data;
  }
  return null;
};

export const updateUser = async () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const res = await api.put("/api/user");
    return res.data;
  }
  return null;
};
export const removeToken = () => {
  localStorage.removeItem("token");
  api.defaults.headers.common.authorization = null;
};

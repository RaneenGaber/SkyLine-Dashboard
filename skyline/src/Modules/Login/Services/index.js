import axiosApi from "../../../Globals/Api/axios";

export const login = async ({ email, password }) => {
  const response = await axiosApi.post(`api/v1/users/login`, {
    email,
    password,
  });
      console.log("res",response);

  if (response.data.token) {
    localStorage.setItem("user", response.data.token);
  }
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("user");
};
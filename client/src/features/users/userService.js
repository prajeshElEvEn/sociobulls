import { authInstance, fileInstance } from "../../utils";

const URL = "/users";

const getUserService = async (formData) => {
  const response = await authInstance.get(URL + "/profile/" + formData.id);

  return response.data;
};

const updateUserService = async (formData) => {
  const response = await fileInstance.put(
    URL + "/profile/" + formData.id + "/update",
    formData
  );

  return response.data;
};

const deleteUserService = async (formData) => {
  const response = await authInstance.put(
    URL + "/profile/" + formData.id + "/delete"
  );

  return response.data;
};

export { getUserService, updateUserService, deleteUserService };

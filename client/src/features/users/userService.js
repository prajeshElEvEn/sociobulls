import { authInstance, fileInstance } from "../../utils";

const URL = "/users";

const getUserService = async (id) => {
  const response = await authInstance.get(URL, "/profile/", id);

  return response.data;
};

const updateUserService = async (formData) => {
  const response = await fileInstance.put(
    URL,
    "/profile/",
    formData.id,
    "/update",
    formData
  );

  return response.data;
};

const deleteUserService = async (id) => {
  const response = await authInstance.put(URL, "/profile/", id, "/update");

  return response.data;
};

export { getUserService, updateUserService, deleteUserService };

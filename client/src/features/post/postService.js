import { authInstance } from "../../utils";
const URL = "/posts";

const getPostsService = async () => {
  const response = await authInstance.get(URL);

  return response.data;
};

const getUserPostService = async (formData) => {
  const response = await authInstance.get(URL + "/user/" + formData.id);

  return response.data;
};

const getUserLikedPostService = async (formData) => {
  const response = await authInstance.get(
    URL + "/user/" + formData.id + "/liked"
  );

  return response.data;
};

const getUserBookmarkedPostService = async (formData) => {
  const response = await authInstance.get(
    URL + "/user/" + formData.id + "/bookmarked"
  );

  return response.data;
};

const createPostService = async (formData) => {
  const response = await authInstance.post(URL, formData);

  return response.data;
};

const updatePostService = async (formData) => {
  const response = await authInstance.put(URL + "/" + formData.id, formData);

  return response.data;
};
const deletePostService = async (formData) => {
  const response = await authInstance.delete(URL + "/" + formData.id);

  return response.data;
};

export {
  getPostsService,
  getUserPostService,
  getUserLikedPostService,
  getUserBookmarkedPostService,
  createPostService,
  updatePostService,
  deletePostService,
};

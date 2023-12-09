// Import necessary dependencies
import { authInstance } from "../../utils";

// Define the base URL for posts
const URL = "/posts";

// Service function to get all posts
const getPostsService = async () => {
  const response = await authInstance.get(URL);
  return response.data;
};

// Service function to get posts for a specific user
const getUserPostService = async (formData: { id: string }) => {
  const response = await authInstance.get(`${URL}/user/${formData.id}`);
  return response.data;
};

// Service function to get liked posts for a specific user
const getUserLikedPostService = async (formData: { id: string }) => {
  const response = await authInstance.get(`${URL}/user/${formData.id}/liked`);
  return response.data;
};

// Service function to get bookmarked posts for a specific user
const getUserBookmarkedPostService = async (formData: { id: string }) => {
  const response = await authInstance.get(
    `${URL}/user/${formData.id}/bookmarked`
  );
  return response.data;
};

// Service function to create a new post
const createPostService = async (formData: FormData) => {
  const response = await authInstance.post(URL, formData);
  return response.data;
};

// Service function to update a post
const updatePostService = async (formData: { id: string }) => {
  const response = await authInstance.put(`${URL}/${formData.id}`, formData);
  return response.data;
};

// Service function to delete a post
const deletePostService = async (formData: { id: string }) => {
  const response = await authInstance.delete(`${URL}/${formData.id}`);
  return response.data;
};

// Export all service functions
export {
  getPostsService,
  getUserPostService,
  getUserLikedPostService,
  getUserBookmarkedPostService,
  createPostService,
  updatePostService,
  deletePostService,
};

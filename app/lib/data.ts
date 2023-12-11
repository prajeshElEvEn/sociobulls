import axios from "axios";

export async function getPosts() {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        numberOfElements: 5,
      },
    };
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      config
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts");
  }
}

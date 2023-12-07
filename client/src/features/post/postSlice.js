import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createPostService,
  deletePostService,
  getPostsService,
  getUserBookmarkedPostService,
  getUserLikedPostService,
  getUserPostService,
  updatePostService,
} from "./postService";

const initialState = {
  posts: [],
  postIsLoading: false,
  postIsError: false,
  postMessage: "",
};

export const getPosts = createAsyncThunk(
  "post/getPosts",
  async (_, thunkAPI) => {
    try {
      return await getPostsService();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getUserPosts = createAsyncThunk(
  "post/getUserPosts",
  async (formData, thunkAPI) => {
    try {
      return await getUserPostService(formData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getUserLikedPosts = createAsyncThunk(
  "post/getUserLikedPosts",
  async (formData, thunkAPI) => {
    try {
      return await getUserLikedPostService(formData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getUserBookmarkedPosts = createAsyncThunk(
  "post/getUserBookmarkedPosts",
  async (formData, thunkAPI) => {
    try {
      return await getUserBookmarkedPostService(formData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const createPost = createAsyncThunk(
  "post/createPost",
  async (formData, thunkAPI) => {
    try {
      return await createPostService(formData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updatePost = createAsyncThunk(
  "post/updatePost",
  async (formData, thunkAPI) => {
    try {
      return await updatePostService(formData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deletePost = createAsyncThunk(
  "post/deletePost",
  async (formData, thunkAPI) => {
    try {
      return await deletePostService(formData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders
      .addCase(getPosts.pending, (state) => {
        state.postIsLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.postIsLoading = false;
        state.postIsError = false;
        state.postMessage = "";
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.posts = [];
        state.postMessage = action.payload;
        state.postIsLoading = false;
        state.postIsError = true;
      })
      .addCase(getUserPosts.pending, (state) => {
        state.postIsLoading = true;
      })
      .addCase(getUserPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.postIsLoading = false;
        state.postIsError = false;
        state.postMessage = "";
      })
      .addCase(getUserPosts.rejected, (state, action) => {
        state.posts = [];
        state.postMessage = action.payload;
        state.postIsLoading = false;
        state.postIsError = true;
      })
      .addCase(getUserLikedPosts.pending, (state) => {
        state.postIsLoading = true;
      })
      .addCase(getUserLikedPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.postIsLoading = false;
        state.postIsError = false;
        state.postMessage = "";
      })
      .addCase(getUserLikedPosts.rejected, (state, action) => {
        state.posts = [];
        state.postMessage = action.payload;
        state.postIsLoading = false;
        state.postIsError = true;
      })
      .addCase(getUserBookmarkedPosts.pending, (state) => {
        state.postIsLoading = true;
      })
      .addCase(getUserBookmarkedPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.postIsLoading = false;
        state.postIsError = false;
        state.postMessage = "";
      })
      .addCase(getUserBookmarkedPosts.rejected, (state, action) => {
        state.posts = [];
        state.postMessage = action.payload;
        state.postIsLoading = false;
        state.postIsError = true;
      })
      .addCase(updatePost.pending, (state) => {
        state.postIsLoading = true;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.posts = state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        );
        state.postIsLoading = false;
        state.postIsError = false;
        state.postMessage = "";
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.postIsError = true;
        state.postIsLoading = false;
        state.postMessage = action.payload;
      })
      .addCase(deletePost.pending, (state) => {
        state.postIsLoading = true;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter(
          (post) => post._id !== action.payload._id
        );
        state.postMessage = action.payload;
        state.postIsLoading = false;
        state.postIsError = false;
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.postIsError = true;
        state.postMessage = action.payload;
        state.postIsLoading = false;
      });
  },
});

export default postSlice.reducer;

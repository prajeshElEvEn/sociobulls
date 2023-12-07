import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  deleteUserService,
  getUserService,
  updateUserService,
} from "./userService";

const initialState = {
  user: null,
  userIsLoading: false,
  userIsError: false,
  userMessage: "",
};

export const getUser = createAsyncThunk(
  "user/getUser",
  async (formData, thunkAPI) => {
    try {
      return await getUserService(formData);
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

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (formData, thunkAPI) => {
    try {
      return await updateUserService(formData);
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

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (formData, thunkAPI) => {
    try {
      return await deleteUserService(formData);
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

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builders) => {
    builders
      .addCase(getUser.pending, (state, action) => {
        state.userIsLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.userIsLoading = false;
        state.user = action.payload;
        state.userIsError = false;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.userIsLoading = false;
        state.user = null;
        state.userIsError = true;
        state.userMessage = action.payload;
      })
      .addCase(updateUser.pending, (state, action) => {
        state.userIsLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.userIsLoading = false;
        if (state.user._id === action.payload._id) {
          state.user = action.payload;
        }
        state.userMessage = action.payload;
        state.userIsError = false;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.userIsLoading = false;
        state.user = null;
        state.userIsError = true;
        state.userMessage = action.payload;
      })
      .addCase(deleteUser.pending, (state, action) => {
        state.userIsLoading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.userIsLoading = false;
        if (state.user._id === action.payload._id) {
          state.user = null;
        }
        state.userMessage = action.payload;
        state.userIsError = false;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.userIsLoading = false;
        state.user = null;
        state.userIsError = true;
        state.userMessage = action.payload;
      });
  },
});

export const { reset } = userSlice.actions;

export default userSlice.reducer;

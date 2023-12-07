import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { registerService, loginService, logoutService } from "./authService";
import Cookies from "js-cookie";

const token = Cookies.get("token");
const id = Cookies.get("id");

const initialState = {
  status: token ? true : false,
  id: id ? id : null,
  token: token ? token : null,
  authIsLoading: false,
  authIsError: false,
  authMessage: "",
};

export const register = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
      return await registerService(formData);
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

export const login = createAsyncThunk(
  "auth/login",
  async (formData, thunkAPI) => {
    try {
      return await loginService(formData);
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

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    return await logoutService();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.authIsLoading = false;
      state.authIsError = false;
      state.authMessage = "";
    },
  },
  extraReducers: (builders) => {
    builders
      .addCase(register.pending, (state, action) => {
        state.authIsLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = true;
        state.token = action.payload.token;
        state.id = action.payload.id;
        state.authIsLoading = false;
        state.authIsError = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = false;
        state.token = null;
        state.id = null;
        state.authIsLoading = false;
        state.authIsError = true;
        state.authMessage = action.payload;
      })
      .addCase(login.pending, (state, action) => {
        state.authIsLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = true;
        state.token = action.payload.token;
        state.id = action.payload.id;
        state.authIsLoading = false;
        state.authIsError = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = false;
        state.token = null;
        state.id = null;
        state.authIsLoading = false;
        state.authIsError = true;
        state.authMessage = action.payload;
      })
      .addCase(logout.pending, (state, action) => {
        state.authIsLoading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.status = false;
        state.token = null;
        state.id = null;
        state.authIsLoading = false;
        state.authIsError = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.authIsLoading = false;
        state.authIsError = true;
        state.authMessage = action.payload;
      });
  },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;

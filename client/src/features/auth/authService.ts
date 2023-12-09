import Cookies from "js-cookie";
import { instance } from "../../utils";

const URL = "/auth";

interface AuthResponse {
  id: string;
  token: string;
  // Add other properties if there are more in the response
}

const registerService = async (formData: FormData): Promise<AuthResponse> => {
  const response = await instance.post<AuthResponse>(
    URL + "/register",
    formData
  );

  const { id, token } = response.data;

  Cookies.set("id", id, { expires: 7 });
  Cookies.set("token", token, { expires: 7 });

  return response.data;
};

const loginService = async (formData: FormData): Promise<AuthResponse> => {
  const response = await instance.post<AuthResponse>(URL + "/login", formData);

  const { id, token } = response.data;

  Cookies.set("id", id, { expires: 7 });
  Cookies.set("token", token, { expires: 7 });

  return response.data;
};

const logoutService = async (): Promise<void> => {
  Cookies.remove("id", { path: "" });
  Cookies.remove("token", { path: "" });
};

export { registerService, loginService, logoutService };

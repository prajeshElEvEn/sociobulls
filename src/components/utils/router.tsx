import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { AuthLayout, RootLayout } from "../";
import {
  Bookmarks,
  Error,
  Feed,
  Likes,
  Posts,
  Profile,
  SignIn,
  SignUp,
} from "../../pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Feed />} />
        <Route path="likes" element={<Likes />} />
        <Route path="bookmarks" element={<Bookmarks />} />
        <Route path="posts" element={<Posts />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="auth" element={<AuthLayout />}>
        <Route index element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Route>
  )
);

export default router;

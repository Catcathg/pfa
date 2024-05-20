import App from "./App";
import Layout from "../Pages/Layout.tsx";
import SignIn from "./authentication/SignIn.tsx";
import Login from "./authentication/Login.tsx";
import SignOut from "./authentication/SignOut.tsx";


export default [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <App /> },
      { path: "/sign-in", element: <SignIn /> },
      { path: "/test", element: <Login /> },
      { path: "/sign-out", element: <SignOut /> },
    ],
  },
];

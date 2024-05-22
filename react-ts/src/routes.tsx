import App from "./App";
import Layout from "../Pages/Layout.tsx";
import SignIn from "./authentication/SignIn.tsx";
import ChantierList from "./chantiers/ChantierList.tsx";
import AddNewChantier from "./chantiers/AddNewChantier.tsx";


export default [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/sign-in", element: <SignIn /> },
      { path: "/home", element: <ChantierList /> },
      { path: "/chantier", element: <AddNewChantier /> },
    ],
  },
];

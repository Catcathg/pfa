import './index.css';
import {createBrowserRouter} from 'react-router-dom';
import ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router";
import React from 'react';
import routes from "./routes.tsx"

const router = createBrowserRouter(routes);
// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

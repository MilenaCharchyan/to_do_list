import * as React from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link
} from "react-router-dom";
import { Task } from "../pages/Tasks";
import { Layout } from "../pages/Layout";
import { AddTask } from "../pages/AddTask";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Task />,
            },
            {
                path: "add-task",
                element: <AddTask />,
            },
        ]
    }
]);
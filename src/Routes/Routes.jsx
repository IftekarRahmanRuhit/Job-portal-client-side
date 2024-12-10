import {createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../Layout/MainLayout";


export const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }
      ]
    },
  ])


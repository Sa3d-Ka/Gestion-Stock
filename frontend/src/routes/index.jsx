import { createBrowserRouter } from "react-router-dom";

// Layout
import Layout from "../layout/layout";

// Pages
import Home from "../pages/Home";
import Products from "../pages/Products";
import Categories from "../pages/Categories";
import Suppliers from "../pages/Suppliers";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/categories",
                element: <Categories />
            },
            {
                path: "/suppliers",
                element: <Suppliers />
            }
        ]
    }
])
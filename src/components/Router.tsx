import {createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Recipes from "../pages/Recipes";
import Donation from "../pages/Donation";
import App from "../App";
import Newsletter from "../pages/Newsletter";

const Router = createBrowserRouter([
    { path: "/",
    element: <App />,
    children: [
        {
        index: true,
        path: "/",
        element: <Home />,
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/recipes",
            element: <Recipes />,
        },
        {
            path: "/donation",
            element: <Donation />,
        },
        {
            path: "/newsletter",
            element: <Newsletter/>
        }
    ],
    },
]);

export default Router;
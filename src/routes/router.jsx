import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../home/home/home/Home";
import CoveredArea from "../pages/Covered/CoveredArea";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayouts,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path:"coverage",
                Component:CoveredArea
            }
        ]
    },
]);
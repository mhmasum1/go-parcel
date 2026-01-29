import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../home/home/home/Home";
import CoveredArea from "../pages/Covered/CoveredArea";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Rider from "../pages/Rider/Rider";
import SendParcel from "../pages/sendParcel/SendParcel";
import DashboardLayout from "../layouts/Dashboard/DashboardLayout";
import MyPercel from "../pages/MyPercel/MyPercel";
import Payment from "../layouts/Dashboard/Payment/Payment";

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
                path: "rider",
                element: <PrivateRoute><Rider></Rider></PrivateRoute>
            },
            {
                path: "send-parcel",
                element: <PrivateRoute><SendParcel></SendParcel></PrivateRoute>,
                loader: () => fetch("CentersArea.json").then(res => res.json())
            },
            {
                path: "coverage",
                Component: CoveredArea
            }
        ]
    },
    {
        path: "/",
        Component: AuthLayout,
        children: [
            {
                path: "login",
                Component: Login
            },
            {
                path: "register",
                Component: Register
            }
        ]

    },
    {
        path: "dashboard",
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: "my-percels",
                Component: MyPercel
            },
            {
                path: "payment/:parcelId",
                Component: Payment
            }
        ]
    }
]);
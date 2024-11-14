import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import MobileCards from "../components/MobileCards";
import MobileCardDetails from "../components/MobileCardDetails";


const routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('../data.json'),
                children: [
                    {
                        path:'/mobile',
                        element: <MobileCards></MobileCards>,
                        loader: () => fetch('../categories.json')
                    }
                ]
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>,
                loader: () => fetch('../data.json')
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
                loader: () => fetch('../data.json')
            },
            {
                path: '/mobile/:id',
                element: <MobileCardDetails></MobileCardDetails>,
                loader: () => fetch('../data.json')
            }
        ]
    }

])

export default routes;
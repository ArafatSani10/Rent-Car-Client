import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AddCar from "../Pages/Home/AddCar";
import CarDetails from "../Components/RentCar/CarDetails";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Vehicles from "../Pages/Vehicles/Vehicles";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('http://localhost:5000/car')
            },
            {
                path:'/addcar',
                element:<AddCar></AddCar>
            },
            {
                path:'/car/:id',
                element:<CarDetails></CarDetails>,
                loader:({params})=>fetch(`http://localhost:5000/car/${params.id}`)
            },

            {
                path:'/contactus',
                element:<ContactUs></ContactUs>
            },
            {
                path:'/about',
                element:<AboutUs></AboutUs>
            },
            {
                path:'/vehicles',
                element:<Vehicles></Vehicles>,
                loader:()=>fetch('http://localhost:5000/car')
            },
        ]
    },
]);

export default router;
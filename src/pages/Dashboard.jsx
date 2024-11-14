import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCartList } from "../utility/addtoDb";
import DashboardList from "../components/dashboardList";


const Dashboard = () => {
    const [dash, setDash] = useState([])
    const data = useLoaderData();

    useEffect(()=> {
        const storedCartList = getStoredCartList();
        const storedCartListInt = storedCartList.map(id => parseInt(id));

        const cartList = data.filter(mobile => storedCartListInt.includes(mobile.product_id))

        setDash(cartList)
    },[])

    return (
        <>
           <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl py-40 lg:py-44 md:px-10 lg:px-20 text-center text-white flex flex-col justify-center items-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-thin">Dashboard</h1>
            <p className="text-gray-200 lg:text-lg">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            <br />
            <div className="flex justify-center items-center gap-3">
            <button className="btn px-8 py-3 rounded-3xl bg-white text-gray-700 hover:text-white">Cart</button>
            <button className="btn px-8 py-3 rounded-3xl bg-transparent  text-white hover:text-white">Wishlist</button>
            </div>
        </div>
            <div className="my-2">
                {
                    dash.map(product => <DashboardList key={product.product_id} product={product}></DashboardList>)
                }
            </div>
        </>
    );
};

export default Dashboard;
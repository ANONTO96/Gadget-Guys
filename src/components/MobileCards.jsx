import { useLoaderData } from "react-router-dom";
import MobileCard from "./MobileCard";
import Categories from "./Categories";



const MobileCards = () => {
    const data = useLoaderData();
    
    return (
        <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center my-8">Explore Cutting-Edge Gadgets</h1>
                <Categories></Categories>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8">
            {
                data.map(mobile =><MobileCard key={mobile.product_id} mobile={mobile}></MobileCard>)
            }
        </div>
        </div>
    );
};

export default MobileCards;
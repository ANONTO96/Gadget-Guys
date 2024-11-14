import { Link } from "react-router-dom";


const DashboardList = ({product}) => {
    const {product_image, product_title, price, description} = product;
    console.log(product_image)
    return (
        <div className="sm:flex justify-center items-center border border-gray-300 rounded-xl md:w-[90%] lg:w-[70%] mx-auto">
            <div className="w-[30%] place-items-center">
                <img className="w-[170px] p-3" src={product_image} alt="" />
            </div>
            <div className="w-[70%] p-3 flex justify-between items-center">
                <div>
                <h1 className="text-gray-600 font-semibold md:text-lg">{product_title}</h1>
                <h3 className="text-gray-600">{description}</h3>
                <p className="font-semibold">Price : {price}$</p>
                </div>
                <Link>
                    <img className="w-14" src="https://img.icons8.com/?size=100&id=102550&format=png&color=000000" alt="" />
                </Link>
            </div>
        </div>
    );
};

export default DashboardList;
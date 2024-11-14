import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { addToStoredCartList, addToStoredWishList } from "../utility/addtoDb";


const MobileCardDetails = () => {
    const {id} = useParams()
    const data = useLoaderData()
    const [mobile, setMobile] = useState({})
    const {product_image, product_title, price, availability, description, rating, specification,} = mobile

    useEffect(() => {
        const singleData = data.find(mobile => mobile.product_id == id)
        setMobile(singleData)
    },[data,id])

    const cartNotify = () => toast.success("Product added to your cart");
    const wishlistNotify = () => toast.info("Product added to your wishlist");

    const handleCart = (id) => {
        addToStoredCartList(id)
    }
    const handleWishlist = (id) => {
        addToStoredWishList(id)
    }


    return (
        <div>
            <div className="bg-gradient-to-r from-purple-600 to-pink-500 sm:rounded-2xl py-20 lg:py-40 md:px-10 lg:px-20 text-center text-white flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl">Product Details</h1>
            <p className="text-gray-200 lg:text-lg">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
           </div>
        {/* details */}
        <div className="sm:flex justify-between items-center border-2 rounded-2xl sm:w-[85%] lg:w-[75%] mx-auto">
            <div className="w-[50%] place-items-center">
                <img className="lg:w-[400px]" src={product_image} alt="" />
            </div>
            <div className="p-2 w-[50%]">
                <h1 className="text-xl sm:text-2xl md:text-3xl">{product_title}</h1>
                <h3 className="text-gray-600 font-semibold md:text-lg">Price: ${price}</h3>
                
                {availability?(<button className="border border-green-400 bg-green-100 rounded-3xl px-2 text-green-400">In Stock</button>):(<button className="border border-red-400 bg-red-100 rounded-3xl px-2 text-red-400 ">Stock out</button>)}
                
                <p className="text-gray-600">{description}</p>
                <br />
                <h3 className="text-gray-600 font-semibold md:text-lg">Specification:</h3>
                <br />
                <h3 className="text-gray-600 font-semibold md:text-lg">Rating: {rating}</h3>
                <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
               </div>
               <div className="flex justify-start gap-2 items-center">
               <button onClick={() => { cartNotify; handleCart(id)}} className="flex btn bg-purple-500 rounded-3xl text-white">Add To Cart <img className="w-5" src="https://img.icons8.com/?size=100&id=85080&format=png&color=FFFFFF" alt="" /></button>
               <button onClick={() => { wishlistNotify; handleWishlist(id)}} className="border-2 border-gray-400 p-2 rounded-full"><img className="w-6 h-6 " src="https://img.icons8.com/?size=100&id=86721&format=png&color=000000" alt="" /></button>
               </div>
            </div>
        </div>
        </div>
    );
};

export default MobileCardDetails;
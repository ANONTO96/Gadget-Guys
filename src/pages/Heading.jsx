import { Link } from "react-router-dom";


const Heading = () => {
    return (
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl py-40 lg:py-44 md:px-10 lg:px-20 text-center text-white flex flex-col justify-center items-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
            <p className="text-gray-200 lg:text-lg">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            <br />
            <Link to={'/mobile'}><button className="btn px-8 py-3 rounded-3xl bg-white text-gray-700 hover:text-white">Shop Now</button></Link>
        </div>
    );
};

export default Heading;
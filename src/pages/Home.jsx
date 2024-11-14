import Banner from "../components/Banner";
import MobileCards from "../components/MobileCards";
import Heading from "./Heading";


const Home = () => {
    return (
        <div>
            <div className="border-2 p-2 rounded-3xl border-purple-400">
            <Heading></Heading>
            </div>
            <div className="mb-[350px] lg:mb-[450px]">
            <Banner></Banner>
            </div>
            <div className="lg:w-[90%] mx-auto">
            <MobileCards></MobileCards>
            </div>
        </div>
    );
};

export default Home;
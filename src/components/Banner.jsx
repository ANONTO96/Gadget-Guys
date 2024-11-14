import banner from '../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="border-2 p-2 rounded-3xl border-purple-300 absolute top-[480px] lg:top-[500px] left-6 right-6 md:left-10 md:right-10 lg:left-24 lg:right-24 w-[80%] md:w-[65%] lg:w-[50%] mx-auto">
            <img className='rounded-2xl lg:h-[550px] w-full object-cover' src={banner} alt="" />
        </div>
    );
};

export default Banner;
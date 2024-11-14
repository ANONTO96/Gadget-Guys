import { Link } from "react-router-dom";


const MobileCard = ({ mobile }) => {
    const {product_image, product_title, price, rating, product_id} = mobile
    return (
        <Link to={`/mobile/${product_id}`}>
        <div className="card card-compact bg-base-100 w-96 h-[500px] shadow-2xl">
  <figure className="border-2 h-[65%]">
    <img className="object-cover"
      src={product_image}
      alt="mobiles" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{product_title}</h2>
    <p>Price : {price}</p>
    <p>Rating : {rating}</p>
    <div className="card-actions justify-start">
      <button className="btn border-purple-400 rounded-3xl text-black">See Details</button>
    </div>
  </div>
</div>
        </Link>
    );
};

export default MobileCard;
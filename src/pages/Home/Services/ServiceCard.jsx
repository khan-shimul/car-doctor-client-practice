import PropTypes from "prop-types";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card bg-base-100 w-full shadow-md">
      <figure className="px-5 pt-5">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-semibold">{title}</h2>
        <div className="flex">
          <p className="text-[#FF3811]">Price: ${price}</p>
          <Link to={`/service/${_id}`}>
            <button>
              <FaArrowRightLong className="text-xl text-[#FF3811]" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
};

export default ServiceCard;

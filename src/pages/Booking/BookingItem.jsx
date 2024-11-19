import PropTypes from "prop-types";

const BookingItem = ({ bookingItem, handleDelete, handleConfirm }) => {
  const { _id, img, title, price, message, date, status } = bookingItem;
  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center gap-5">
          <div className="avatar">
            <div className="mask h-28 w-28 rounded-md">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-sm opacity-50">{message}</div>
          </div>
        </div>
      </td>
      <td>
        <h5 className="font-medium">${price}</h5>
      </td>
      <td className="font-medium">{date}</td>
      <th>
        {status === "confirm" ? (
          <button className="btn btn-ghost btn-xs text-blue-700">
            Confirmed
          </button>
        ) : (
          <button
            onClick={() => handleConfirm(_id)}
            className="btn btn-ghost btn-xs text-red-600"
          >
            Pending
          </button>
        )}
      </th>
    </tr>
  );
};

BookingItem.propTypes = {
  bookingItem: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func.isRequired,
};

export default BookingItem;

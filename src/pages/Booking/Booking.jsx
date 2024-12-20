import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import BookingItem from "./BookingItem";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Booking = () => {
  const { user } = useAuth();
  const [booking, setBooking] = useState([]);
  const axiosSecure = useAxiosSecure();
  // Get booking by query
  useEffect(() => {
    axiosSecure
      .get(`/booking?email=${user?.email}`)
      .then((res) => {
        setBooking(res.data);
      })
      .catch((error) => console.log(error));
  }, [user, axiosSecure]);

  //   Booking Item Delete Handler
  const bookingItemDeleteHandler = (id) => {
    axiosSecure
      .delete(`/booking/${id}`)
      .then((res) => {
        if (res.data.deletedCount) {
          alert("Deleted");
          const remaining = booking.filter((item) => item._id !== id);
          setBooking(remaining);
        }
      })
      .catch((error) => console.log(error));
  };

  //   Make confirm Status
  const confirmHandler = (id) => {
    axiosSecure
      .patch(`/booking/${id}`, { status: "confirm" })
      .then((res) => {
        if (res.data.modifiedCount) {
          const remaining = booking.filter((item) => item._id !== id);
          const updatedBooking = booking.find((item) => item._id === id);
          updatedBooking.status = "confirm";
          const newBooking = [updatedBooking, ...remaining];
          setBooking(newBooking);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2 className="text-xl font-medium">Your Booking: {booking.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Service</th>
              <th>Price</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {booking.map((item) => (
              <BookingItem
                key={item._id}
                bookingItem={item}
                handleDelete={bookingItemDeleteHandler}
                handleConfirm={confirmHandler}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;

import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Checkout = () => {
  const { title, price } = useLoaderData();
  const { user, loading } = useAuth();
  if (loading)
    return (
      <span className="loading loading-spinner loading-lg flex mx-auto"></span>
    );

  return (
    <div>
      <div className="hero bg-base-200 mb-10 min-h-screen rounded-md">
        <div className="hero-content w-full p-10">
          <div className="card bg-base-100 w-full">
            <form className="card-body">
              <div className="flex flex-col md:flex-row gap-7">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Service</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={title}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Date</span>
                  </label>
                  <input
                    type="date"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-7">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={price}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    defaultValue={user.email}
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="form-control">
                  <div className="label">
                    <span className="label-text">Message</span>
                  </div>
                  <textarea
                    className="textarea textarea-bordered h-28"
                    placeholder="message"
                  ></textarea>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#FF3811] text-white hover:text-black">
                  Booking Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

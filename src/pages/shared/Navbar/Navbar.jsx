import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import Button from "../Button/Button";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, logoutUser } = useAuth();

  const logoutHandler = () => {
    logoutUser()
      .then(() => {
        console.log("Logged out the user");
      })
      .catch((error) => console.log(error.message));
  };
  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/booking">My Booking</Link>
      </li>
      <li>
        <Link to="/">Blog</Link>
      </li>
      <li>
        <Link to="/">Contact</Link>
      </li>
    </>
  );
  return (
    <nav className="navbar bg-base-100 mb-10 py-7">
      <div className="navbar-start">
        <div className="dropdown z-20">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-lg"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-medium">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div onClick={logoutHandler}>
            <Button
              className={
                "btn hover:bg-orange-600 btn-outline text-[#FF3811] hover:bg-none hover:scale-105 transition-transform duration-300 hover:border-none mr-2"
              }
            >
              Logout
            </Button>
          </div>
        ) : (
          <Link to="login">
            <Button
              className={
                "btn hover:bg-orange-600 btn-outline text-[#FF3811] hover:bg-none hover:scale-105 transition-transform duration-300 hover:border-none mr-2"
              }
            >
              Login
            </Button>
          </Link>
        )}
        <Link to="/">
          <Button
            className={
              "btn bg-orange-600 text-white hover:bg-transparent hover:text-[#FF3811] hover:border hover:border-[#FF3811] hover:scale-105 transition-transform duration-300"
            }
          >
            Appointment
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

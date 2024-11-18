import { Link } from "react-router-dom";
import loginImg from "../../../assets/images/login/login.svg";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { loginUser } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        console.log("successfully login", result.user);
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex flex-col lg:flex-row gap-5 w-full">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img className="w-3/5" src={loginImg} alt="" />
        </div>
        <div className="card bg-base-100 w-full lg:w-1/2 border">
          <form onSubmit={handleLogin} className="card-body">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-bold text-center">Login</h1>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#FF3811] text-white hover:text-black">
                Login
              </button>
              <div>
                <p className="text-center mt-3">Or sign in with</p>
                <div className="flex gap-x-3 justify-center my-4">
                  <div className="bg-[#f5f5f8] w-[45px] h-[45px] flex items-center justify-center rounded-full">
                    <button>
                      <FaFacebookF className="text-xl" />
                    </button>
                  </div>
                  <div className="bg-[#f5f5f8] w-[45px] h-[45px] flex items-center justify-center rounded-full">
                    <button>
                      <FcGoogle className="text-xl" />
                    </button>
                  </div>
                  <div className="bg-[#f5f5f8] w-[45px] h-[45px] flex items-center justify-center rounded-full">
                    <button>
                      <FaLinkedinIn className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-center mt-3">
                <p>
                  Dont have an account?{" "}
                  <Link to="/register">
                    <span className="font-medium text-[#ff3811]">Register</span>
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import axios from "axios";
import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Providers/AuthProvider";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        // console.log("error in the interceptor", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          console.log("Log out the user");
          signOut(auth)
            .then(() => {
              console.log("logged out");
            })
            .catch((error) => console.log(error.message));
        }
      }
    );
  }, []);

  return axiosSecure;
};

export default useAxiosSecure;

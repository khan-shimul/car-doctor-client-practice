import PropTypes from "prop-types";
import { AuthContext } from "../Context/AuthContext";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import axios from "axios";

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  //   console.log("user state", user);
  const [loading, setLoading] = useState(true);

  //   Register a new user
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   Login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   Logout user
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // observe user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log("Observing current user", currentUser);
      // const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: currentUser?.email };
      // Request for jwt token for a user if user exist
      if (currentUser) {
        axios
          .post("http://localhost:5000/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          })
          .catch((error) => console.log(error));
      } else {
        axios
          .post("http://localhost:5000/logout", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => console.log(err));
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const userInfo = {
    user,
    loading,
    registerUser,
    loginUser,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;

import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const ProtectRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  console.log(location);

  if (loading) {
    return (
      <span className="loading loading-spinner loading-lg flex mx-auto"></span>
    );
  }
  if (user) return children;

  return <Navigate to={"/login"} state={{ from: location }}></Navigate>;
};

ProtectRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectRoute;

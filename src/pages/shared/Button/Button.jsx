import PropTypes from "prop-types";

const Button = ({ className, children }) => {
  return (
    <button className={`px-5 py-2 font-semibold btn ${className}`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;

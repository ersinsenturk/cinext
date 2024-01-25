"use client";
const Button = ({ children, handleClick }) => {
  return (
    <button onClick={handleClick} className="btn-primary">
      {children}
    </button>
  );
};

export default Button;

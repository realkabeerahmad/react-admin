import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({
  children,
  action,
  type = "BUTTON",
  icon,
  iconOnly = false,
  customClass = "",
  variant = "button-original",
}) => {
  const content = iconOnly ? (
    <span className="icon-only">{icon}</span>
  ) : (
    <>
      {icon && <span className="icon">{icon}</span>}
      <span className="text">{children}</span>
    </>
  );

  if (type === "LINK") {
    return (
      <Link to={action} className={`button ${variant} ${customClass}`}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={action} className={`button ${variant} ${customClass}`}>
      {content}
    </button>
  );
};

export default Button;

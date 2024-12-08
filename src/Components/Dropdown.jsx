import React from "react";
import Button from "./Button/Button";

const Dropdown = () => {
  return (
    <div className="dropdown">
      <Button action={() => false} type="BUTTON">
        More Options
      </Button>
      <div className="dropdown-content">
        <Button action={() => false} type="BUTTON">
          Settings
        </Button>
      </div>
    </div>
  );
};

export default Dropdown;

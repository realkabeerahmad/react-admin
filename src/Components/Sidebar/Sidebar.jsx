import React, { useState } from "react";
import Button from "../Button/Button";
import "./Sidebar.css";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

const Sidebar = ({ links }) => {
  const [collaps, setCollaps] = useState(false);
  const onCollaps = () => {
    collaps
      ? (document.getElementById("bottom").style.gridTemplateColumns =
          "250px auto")
      : (document.getElementById("bottom").style.gridTemplateColumns =
          "80px auto");
    setCollaps(!collaps);
  };
  return (
    <aside className={`sidebar ${collaps ? "sidebar-colapsed" : ""}`}>
      {links.map((link) => {
        return link.visible === "Y" ? (
          <Button
            key={link.id}
            children={link.label}
            action={link.path}
            type="LINK"
            icon={link.icon}
            iconOnly={collaps}
          />
        ) : (
          <></>
        );
      })}
      <Button
        children="Collaps Button"
        action={onCollaps}
        type="BUTTON"
        icon={collaps ? <ArrowRight /> : <ArrowLeft />}
        iconOnly={true}
        varient="button-inverted"
        customClass="collaps-button"
      />
    </aside>
  );
};

export default Sidebar;

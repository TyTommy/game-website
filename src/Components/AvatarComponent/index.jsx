import React from "react";
import "./index.css";

function AvatarComponent() {
  return (
    <div className="avatar-container">
      <div className="avatar">
        <img src="/images/Admin.png" alt="Avatar" />
        <h4>William Johnson</h4>
      </div>
      <img src="/icons/bell.svg" alt="Bell icon" />
    </div>
  );
}

export default AvatarComponent;

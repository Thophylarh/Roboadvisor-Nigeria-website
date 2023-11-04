import React from "react";
import "animate.css";

export const SideDrawerWrapper = ({ children }: { children: JSX.Element }) => {
  return (
    <div
      style={{ background: "rgba(0,0,0,0.5)" }}
      className="z-10 flex justify-end    w-full fixed top-0 right-0 h-full font-Quiet_sans"
    >
      <div className="h-full animate__animated animate__fadeInRight animate__fast">
        {children}
      </div>
    </div>
  );
};

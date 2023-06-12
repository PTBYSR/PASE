import React from "react";

const Apostrophe = ({w = 1,h = 1,fill, className}) => {
  return (
    <svg
      width={`190` * w}
      height={`69` * h}
      viewBox="0 0 109 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0.302734 65L35.3027 0H108.303L56.3027 65H0.302734Z"
        fill="#99B3FF"
      />
    </svg>
  );
};

export default Apostrophe;

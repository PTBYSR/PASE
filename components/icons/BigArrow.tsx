import React from "react";

const BigArrow = ({ w, h, fill }) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 14 18"
      fill="none"
      className="md:w-auto md:h-auto w-10 h-10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 2L6.29289 1.29289L7 0.585786L7.70711 1.29289L7 2ZM8 17C8 17.5523 7.55229 18 7 18C6.44772 18 6 17.5523 6 17L8 17ZM0.292893 7.29289L6.29289 1.29289L7.70711 2.70711L1.70711 8.70711L0.292893 7.29289ZM7.70711 1.29289L13.7071 7.29289L12.2929 8.70711L6.29289 2.70711L7.70711 1.29289ZM8 2L8 17L6 17L6 2L8 2Z"
        fill={fill}
      />
    </svg>
  );
};

export default BigArrow;

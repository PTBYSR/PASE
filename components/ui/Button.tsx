import ArrowRight from "components/icons/ArrowRight";
import React from "react";
import clsx from "clsx";
import Link from "next/link";

const Button = ({label, className, border, arrow, href, target }) => {
  return (
    <Link href={href || "/"} target={target}>
      <div className={clsx(["flex  items-center"], [className])}>
        <p className="uppercase inter font-semibold opacity-[.8] text-sm">
          {label}
        </p>
        <div className={clsx(["border border-gray border-opacity-[.2] h-5 rounded-full w-11 flex items-center justify-end pr-2"], [border] )}>
          <ArrowRight w="14" h="10" fill={arrow}/>
        </div>
      </div>
    </Link>
  );
};

export default Button;

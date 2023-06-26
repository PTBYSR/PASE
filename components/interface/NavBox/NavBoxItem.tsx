import ArrowRight from "components/icons/ArrowRight";
import React from "react";
import Link from "next/link";
import clsx from "clsx";


const NavBoxItem = ({label, url, variant = "normal"}) => {
  return (
    <Link href={url || "/"}>
      <li className={clsx("pt-5 ", 
        variant === "cta" && ["animate-pulse "]
      )}>
        <div className="">
          <div className="flex  items-center justify-between">
            <p className="uppercase text-gray inter font-semibold opacity-[.8] text-sm">
              {label || "link"}
            </p>
            <div className={clsx(" border border-gray  h-5 rounded-full w-11 flex items-center justify-end pr-2" ,
              variant === "cta" && ["border-opacity-"],
              variant === "normal" && ["border-opacity-[.2]"],
            )}>
              <ArrowRight w="14" h="10"  />
            </div>
          </div>
          <div className="bg-gray h-[0.8px] opacity-[.2] mt-4"></div>
        </div>
      </li>
    </Link>
  );
};

export default NavBoxItem;


// className={clsx(
//   " mt-20 flex md:h-[500px] relative",
//   variant === "left" && ["md:justify-start"],
//   variant === "right" && ["md:justify-end"],
//   label === "soups" && ["md:h-[150px]"],
//   label === "rice" && ["md:h-[300px]"],
//   label === "spagetti" && ["md:h-[150px]"],
//   label === "yam" && ["md:h-[250px]"],
// )}
// >

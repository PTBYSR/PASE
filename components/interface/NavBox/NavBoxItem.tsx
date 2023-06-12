import ArrowRight from "components/icons/ArrowRight";
import React from "react";
import Link from "next/link";

const NavBoxItem = ({label, url}) => {
  return (
    <Link href={url || "/"}>
      <li className="mt-5">
        <div className="">
          <div className="flex  items-center justify-between">
            <p className="uppercase text-gray inter font-semibold opacity-[.8] text-sm">
              {label || "link"}
            </p>
            <div className="border border-gray border-opacity-[.2] h-5 rounded-full w-11 flex items-center justify-end pr-2">
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

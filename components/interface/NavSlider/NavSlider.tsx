import React from "react";
import { NavItem } from "utils/nav/NavItem";
import Link from "next/link";

const NavSlider = () => {
  return (
    <div className="bg-light-midnight top-0 left-[0px] w-screen h-screen z-[100] pl-10 pt-14 absolute ">
      <ul className="flex flex-col gap-14 mt-20 pl-6">
        {NavItem.map((item) => (
          <Link href={item.url}>
            <div className="border-b-2 border-gum  pb-5">
              <li className="text-gray uppercase space text-xl font-semibold leading-10 pr-5">
                {" "}
                {item.label}
              </li>
            </div>
          </Link>
        ))}
      </ul>
      <Link href="/contact">
        <div className="border-b-2 border-gum  pb-5 ml-14">
          <div className="text-gray uppercase space text-xl font-semibold leading-8 mt-14 ">hire us</div>
        </div>
      </Link>
    </div>
  );
};

export default NavSlider;

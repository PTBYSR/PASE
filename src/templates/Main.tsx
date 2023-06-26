import NavBox from "components/interface/NavBox/NavBox";
import NavSlider from "components/interface/NavSlider/NavSlider";
import Footer from "components/layouts/Footer/Footer";
import Link from "next/link";
import type { ReactNode } from "react";
import React, { useState } from "react";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const [navSlider, setNavSlider] = useState(false);

  const onSlider = () => {
    setNavSlider(!navSlider);
  };
  return (
    <div className="relative inter bg-midnight">
      <div className="sticky top-0 z-[10000]">
        <div className="relative">
          <button
            onClick={onSlider}
            className="top-0 sticky z-[10000] text-gray uppercase space text-[2rem] px-6 pt-10 md:hidden  font-semibold leading-8"
          >
            {!navSlider ? "menu" : "close"}
          </button>
          <div className="md:hidden">{navSlider ? <NavSlider /> : null}</div>
        </div>
      </div>
      {/* <div className="md:hidden block px-4 md:px-14 pt-10 mb-10">
        <NavBox />
      </div> */}
      {props.meta}
      <main className="bg-midnight pt-10">{props.children}</main>
      <Footer />
    </div>
  );
};

export { Main };

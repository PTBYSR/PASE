
import NavBox from "components/interface/NavBox/NavBox";
import Footer from "components/layouts/Footer/Footer";
import type { ReactNode } from "react";
import React from "react";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="inter bg-midnight">
      <div className="md:hidden block px-6 md:px-14 pt-10 mb-10">
        <NavBox />
      </div>
      {props.meta}
        <main className="bg-midnight">{props.children}</main>
        <Footer />
  </div>
);

export { Main };

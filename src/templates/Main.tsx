
import Footer from "components/layouts/Footer/Footer";
import type { ReactNode } from "react";
import React from "react";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="inter">
      
      {props.meta}
        <main className="bg-midnight">{props.children}</main>
        <Footer />
  </div>
);

export { Main };

import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import Landing from "components/home/Landing";
import AboutBanner from "components/home/AboutBanner";
import Works from "components/home/Works";
import Services from "components/home/Services";
import React, { useEffect, useRef, useState } from "react";



// export const loaderAtom = atom(true);

const Index = () => {
  // if (!loaderAtom) {
  //   console.log("work mffffffffff");
  // }

  const [isLoading, setIsLoading] = useState(true);

 

  return (
    <Main
      meta={
        <Meta
          title="Pase Digital"
          description="A Web Design Agency"
        />
      }
    >
      <Landing />
      <AboutBanner />
      <Works />
      <Services />
    </Main>
  );
};

export default Index;

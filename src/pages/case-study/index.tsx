import React from "react";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import Button from "components/ui/Button";
import Image from "next/image";
import case1 from "../../../public/500chow-case1.png";
import case2 from "../../../public/500chow-case2.png";
import mockup from "../../../public/500chowmockup.png";
import WorksGallery from "components/interface/Works/WorksGallery";

const CaseStudies = () => {
  return (
    <Main meta={<Meta title="Our Solutions" description="" />}>
      <div>
        <section id="" className="bg-midnight pt-12 md:p-14 px-4">
          <h2 className="text-gray text-xl space font-bold uppercase leading-10 mb-20">
            building 
            <br /> revenue monsters
            <br /> for our clients <span className="text-gum">.</span>
          </h2>
          <div className=" flex flex-col ">
            <div className="h-1/2 w-full flex flex-col md:flex-row-reverse md:justify-end md:items-end pb-9 border-b-gray border-b border-opacity-[.2] ">
              <div className="mb-2">
                <h1 className="text-gum space text-xs uppercase ml-2 md:ml-10 ">
                  {" "}
                  projects
                </h1>
              </div>
              <div className=" text-gray text-5xl space uppercase font-bold leading-[5.5rem]">
                works
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="px-4 md:px-14 mt-20">
        <WorksGallery className={"flex-col-reverse"}/>
        <WorksGallery className={"flex-col-reverse mt-20"} variant="ecom"/>
      </div>
    </Main>
  );
};

export default CaseStudies
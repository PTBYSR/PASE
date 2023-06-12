import WorksGallery from "components/interface/Works/WorksGallery";
import React from "react";

const Works = () => {
  return (
    <section className="bg-midnight">
      <div className="px-14">
        <div className="border-t-gray w-full border-t mb-14 pt-2 border-opacity-[.2] ">

        <p className="text-base text-gray space">Works</p>
        </div>
        <WorksGallery />
      </div>
    </section>
  );
};

export default Works;

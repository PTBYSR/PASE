import ArrowRight from "components/icons/ArrowRight";
import React from "react";
import Link from 'next/link'
import Button from "components/ui/Button";

const WorkCard = ({label, url, src, desc}) => {
  return (
    <div className="aspect-video border w-full bg-gum flex items-end">
      <div className=" w-full md:h-28 md:px-14 px-6 flex md:pb-0 pb-2 items-center md:items-start">
        <div className=" h-full w-1/2 flex items-center ">
          <p className="text-gray text-lg space font-bold uppercase">{ label || "500 CHOW"}</p>
        </div>
        <div className=" h-full md:w-1/2 md:items-center md:justify-start items-end justify-end flex">
          <p className="space text-gray text-base leading-6 md:block hidden">
            {" "}
            {desc || ""}
          </p>

          <div className="md:w-1/2">
           <Button label="visit site" className="text-gray gap-5"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;

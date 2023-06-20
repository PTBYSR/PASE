import ArrowRight from "components/icons/ArrowRight";
import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import Button from "components/ui/Button";

const WorkCard = ({label, url, src, desc, route}) => {
  return (
    <div className="mb-20">
      <div className="aspect-video relative border w-full bg-gum flex items-end ">
        <Image src={src} />
      </div>
        <div className=" mt-8 w-full md:h-28  flex flex-col md:pb-0  md:items-start">
          <div className=" h-full md:w-1/2 flex  ">
            <div className="text-gray text-xl space font-bold uppercase">{ label || "500 CHOW"}</div>
          </div>
          <div className="h-full flex flex-col">
            <p className="space text-gray  md:text-lg md:leading-6 block ">
              {" "}
              {desc || ""}
            </p>
            <div className="mt-10 flex gap-5 flex-col ">
             <Button label="visit site" className="text-gray gap-5" href={url}/>
             <Button label="go to case study" className="text-gray gap-5" href={route}/>
            </div>
          </div>
        </div>
    </div>
  );
};

export default WorkCard;

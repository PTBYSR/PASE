import ArrowRight from "components/icons/ArrowRight";
import React from "react";
import Link from 'next/link'

const WorkCard = ({label, url, src, desc}) => {
  return (
    <div className="h-[500px] border w-full bg-gum flex items-end">
      <div className=" w-full h-28 px-14 flex">
        <div className=" h-full w-1/2 flex items-center">
          <p className="text-gray text-lg space font-bold uppercase">{ label || "500 CHOW"}</p>
        </div>
        <div className=" h-full w-1/2 items-center flex">
          <p className="space text-gray text-base leading-6">
            {" "}
            {desc || ""}
          </p>

          <div className="w-1/2">
            <Link href={url || "/"}>
              <div className="flex  items-center justify-end gap-5">
                <p className="uppercase text-gray inter font-semibold opacity-[.8] text-sm">
                  visit site
                </p>
                <div className="border border-gray border-opacity-[.2] h-5 rounded-full w-11 flex items-center justify-end pr-2">
                  <ArrowRight w="14" h="10" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;

import Button from "components/ui/Button";
import React from "react";

const Services = () => {
  return (
    <section className="bg-midnight pb-28">
      <div className="pt-14">
        <div className="px-6 md:px-14 mb-36">
          <div className= " border-t-gray w-full border-t mb-14 pt-2 border-opacity-[.2] ">
            <p className=" text-base text-gray space ">Our Solutions</p>
          </div>
        </div>

        <div className="border-b-gray border-b w-fit relative border-opacity-[.2] ">
          <h2 className="pl-11 md:px-14  text-gray uppercase space font-bold md:text-5xl text-[3rem]">
            websites
          </h2>
          <div className="text-gray space font-bold absolute right-0">
            01
          </div>
        </div>
        <div className="border-b-gray border-b w-fit relative border-opacity-[.2] mt-10">
          <h2 className="pl-11 md:px-14  text-gray uppercase space font-bold md:text-5xl text-[3rem]">
            ecommerce        </h2>
          <div className="text-gray space font-bold absolute right-0">
            02
          </div>
        </div>
        <div className="border-b-gray border-b w-fit relative border-opacity-[.2] mt-10">
          <h2 className="pl-11 md:px-14  text-gray uppercase space font-bold md:text-5xl text-[3rem]">
            SEO        </h2>
          <div className="text-gray space font-bold absolute right-0">
            03
          </div>
        </div>


        <div className="md:px-14 px-10 flex justify-end md:mt-40 mt-24">
          <div className="md:w-1/2">
            <p className="text-gray text-lg inter mb-5">
            Experience exceptional design and web development services that leave a lasting impact. Discover the difference today.</p>
              <Button label="learn more" className="gap-5 text-gray" href="/solutions"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
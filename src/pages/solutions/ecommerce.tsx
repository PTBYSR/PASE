import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import WorksGallery from "components/interface/Works/WorksGallery";
import Button from "components/ui/Button";
import React from "react";
import { solutions } from "./index";

const Ecommerce = () => {
  return (
    <Main meta={<Meta title="Our Solutions - Ecommerce" description="" />}>
      <section id="" className="bg-midnight pt-12 md:p-14 p-6">
        <div className="md:h-[670px] flex flex-col ">
          <div className="h-1/2 w-full flex md:flex-row-reverse  flex-col justify-end md:items-end pb-9 border-b-gray border-b border-opacity-[.2] ">
            <div className="mb-2">
              <div className="text-gum space text-xs uppercase md:ml-10 ml-2">
                {" "}
                our <br />
                solutions
              </div>
            </div>
            <h1 className=" text-gray md:text-5xl text-xl space uppercase font-bold md:leading-[5.5rem] leading-10">
              Ecommerce <br /> web development
            </h1>
          </div>
          <div className="md:h-1/2 w-full pt-9 flex md:flex-row flex-col">
            <div className="md:w-1/2">
              <div className="text-gray inter ">
                In today's digital era, having a strong online presence is
                crucial for businesses looking to expand their customer base and
                increase their profits. At Páse Digital, our e-commerce solutions
                combine attractive designs with impeccable functionality to
                create online stores that engage your desired audience and drive
                sales. We place a high emphasis on creating user-friendly
                shopping experiences, optimizing them for both mobile and
                desktop users. Additionally, we integrate secure payment
                gateways to ensure a smooth and secure customer journey
              </div>
            </div>
            <div className="md:w-1/2 flex justify-end items-end md:mt-0 mt-20">
              <div className="w-[400px]">
                <div className="border-b-gray border-b border-opacity-[.2]  pb-2">
                  <div className=" text-gray text-lg uppercase space ">
                    {" "}
                    Customized Business Solutions
                  </div>
                </div>
                <div className="border-b-gray border-b border-opacity-[.2]  pb-2 mt-5">
                  <div className=" text-gray text-lg uppercase space ">
                    {" "}
                    Seamless Mobile Experience
                  </div>
                </div>
                <div className="border-b-gray border-b border-opacity-[.2]  pb-2 mt-5">
                  <div className=" text-gray text-lg uppercase space ">
                    {" "}
                    Secure Payment Processing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="md:px-14 px-4 md:mt-0  pt-20 md:pt-40">
        <div className=" md:w-[60%] mx-auto">
          <div>
            <h2 className="mb-8 uppercase space text-3xl font-semibold text-gray leading-8">
              Unlock Your Online Potential with Expertly Crafted Ecommerce
              Solutions
            </h2>
            <p className=" text-gray">
              We specialize in crafting exceptional ecommerce stores that fuel
              success in the digital realm. With our expertise in web design and
              ecommerce development, we create tailored solutions to meet our
              clients' unique needs. By leveraging cutting-edge technologies,
              intuitive interfaces, and seamless functionality, we deliver
              captivating shopping experiences that drive conversions. Our
              dedicated team collaborates closely with clients to ensure their
              ecommerce store aligns with their brand identity and target
              audience. From stunning designs to robust back-end systems, we
              optimize every element for enhanced user experience and
              streamlined operations. Choose us as your trusted partner to
              unlock your online potential and thrive in the competitive digital
              landscape.
            </p>
          </div>
          <div className="mt-20">
            <div className="border-2 border-gum bg-gum h-full mb-16"></div>
            <h4 className="mb-6 underline decoration-gum decoration-4 uppercase space text-2xl font-semibold text-gray leading-8">
              Customized Business Solutions
            </h4>
            <div className="ml-5">
              <p className="text-gray">
                At Páse Digital, we provide a comprehensive selection of
                ecommerce website development services that are custom-tailored
                to meet your specific needs.
              </p>
            </div>
          </div>
          <div className="mt-14">
            <h4 className="mb-6 decoration-gum decoration-4  uppercase space text-2xl font-semibold text-gray leading-8 underline">
            Secure Payment Processing
            </h4>
            <p className="ml-5 text-gray">
            We prioritize secure payment processing, integrating trusted and encrypted gateways to ensure a safe and confident shopping experience for your customers.
            </p>
          </div>
          <div className="mt-14">
            <h4 className="mb-6  uppercase space text-2xl font-semibold text-gray underline leading-8 decoration-gum decoration-4">
              Seamless Mobile Experience
            </h4>
            <p className="ml-5 text-gray">
            We specialize in creating responsive and mobile-friendly ecommerce stores that provide a consistent and enjoyable browsing experience across devices. Reach a wider audience, enhance engagement, and drive conversions with our optimized mobile responsiveness.
            </p>
          </div>
        </div>

        <div className="mt-40">
          <h2 className="text-gray text-xl space font-bold uppercase leading-10 md:mb-40 mb-20">Examples of <br className="md:block hidden" /> our work in<br className="md:block hidden"/> Ecommerce<br className="md:block hidden"/> development<span className="text-gum">.</span></h2>
          <WorksGallery />
        </div>
      </section>
    </Main>
  );
};

export default Ecommerce;

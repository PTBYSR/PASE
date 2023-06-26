import React from "react";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import Button from "components/ui/Button";
import Image from "next/image";
import case1 from "../../../public/lagcase1.png";
import case2 from "../../../public/lagcase2.png";
import mockup from "../../../public/lagmockup.png";
import WorksGallery from "components/interface/Works/WorksGallery";

const Laguru = () => {
  return (
    <Main meta={<Meta title="Our Case Study" description="" />}>
      <div>
        <section id="" className="bg-midnight pt-12 md:p-14 p-6">
          <h2 className="text-gray text-xl space font-bold uppercase leading-10 mb-20">
            our Process from
            <br /> research to
            <br /> finished product<span className="text-gum">.</span>
          </h2>
          <div className=" flex flex-col ">
            <div className="h-1/2 w-full flex flex-col md:flex-row-reverse md:justify-end md:items-end pb-9 border-b-gray border-b border-opacity-[.2] ">
              <div className="mb-2">
                <h1 className="text-gum space text-xs uppercase md:ml-10 ml-2">
                  {" "}
                  case study
                </h1>
              </div>
              <div className=" text-gray text-xl md:text-5xl  space uppercase font-bold leading-10 md:leading-[5.5rem]">
                Laguru Barbers
              </div>
            </div>
            <div className="h-1/2 w-full pt-9 flex flex-col md:flex-row md:mt-0 mt-20">
              <div className="md:w-1/2">
                <h2 className="mb-8 underline decoration-gum decoration-4 uppercase space text-3xl font-semibold text-gray leading-8">
                  Assignment
                </h2>
                <div className="text-gray inter ">
                  Laguru Barbers, a famous barbershop in Abuja, relies heavily
                  on Instagram for their online presence. However, Instagram has
                  limitations for service-based businesses like barbershops. It
                  lacks comprehensive information about services, pricing,
                  hours, location, and contact details. To overcome this,
                  creating a dedicated website is crucial for providing
                  centralized and detailed information. Additionally,
                  integrating an online booking system into the website caters
                  to customers who prefer booking appointments conveniently and
                  outside of operating hours. By offering online booking, Laguru
                  Barbers can attract and retain customers who value the
                  convenience and efficiency of this streamlined process. By
                  addressing these limitations through a well-designed website
                  and online booking functionality, Laguru Barbers can enhance
                  their online presence, reach a broader audience, and provide a
                  seamless and convenient experience for customers.
                </div>
              </div>
              <div className="md:w-1/2 flex justify-end items-end md:px-0  md:mt-0 mt-20">
                <div className="md:w-[400px] w-full ">
                  <div className="border-b-gray border-b border-opacity-[.2]  pb-2">
                    <div className=" uppercase space ">
                      <span className="text-gray opacity-[.7]">category</span>{" "}
                      <span className="text-base text-gray  ml-5">website</span>
                    </div>
                  </div>
                  <div className="border-b-gray border-b border-opacity-[.2]  pb-2 mt-5">
                    <div className=" uppercase space flex">
                      <div className="text-gray opacity-[.7]">scope</div>{" "}
                      <div className="text-base text-gray  ml-5">
                        <ul>
                          <li>UI/UX design</li>
                          <li>fullstack development</li>
                          <li></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-40">
          <Image src={case1} />
          <div className="flex md:flex-row flex-col  md:mt-40 mt-20 items-center">
            <div className="md:w-1/2 px-4 md:px-14  ">
              <h2 className="mb-8 underline decoration-gum decoration-4 uppercase space text-3xl font-semibold text-gray leading-8">
                Approach
              </h2>
              <p className="text-gray inter ">
                To overcome these limitations, we implemented a user-friendly
                booking system and enhanced the website's copy. Our custom
                booking system allows customers to conveniently schedule
                appointments online, even outside of operating hours.
                Additionally, we emphasized detailed and informative copy on the
                website, providing comprehensive information about services,
                pricing, operating hours, location, and contact details. This
                strategic approach provides a dedicated online platform for
                Laguru Barbers, enabling convenient bookings and attracting a
                wider customer base.
              </p>
            </div>
            <div className="md:w-1/2 w-2/3 md:mt-0 mt-40 flex justify-center items-center">
              <Image src={mockup} height={700} />
            </div>
          </div>
          <div className="mt-40">
            <Image src={case2} />
          </div>
          <div className="px-4 md:px-14 mt-20">
            <h2 className="mb-8 uppercase space underline decoration-gum decoration-4 text-3xl font-semibold text-gray leading-8">
              Implementation
            </h2>
            <p className="text-gray inter md:w-1/2">
              For the implementation of the user-friendly booking system and
              optimized website copy for Laguru Barbers, we utilized a
              combination of technologies commonly employed in web development.
              This includes frontend technologies such as Typescript, TailwindCSS, and Next.js to create the website's visual layout and interactive
              elements. We may have used frameworks and libraries such as React
              or Vue.js for efficient frontend development. For the backend we used Firebase. Overall, the specific
              technologies used may vary depending on the preferences and
              expertise of our web design agency, but the mentioned technologies
              are commonly employed in web development for implementing booking
              systems and optimizing website copy.
            </p>
          </div>
        </section>
      </div>
      <div className="px-4 md:px-14 mt-40">
        <h2 className="text-gray text-xl space font-bold uppercase leading-10 mb-20">
          check out other
          <br /> case studies<span className="text-gum">.</span>
        </h2>
        <WorksGallery className={"flex-col-reverse"} />
      </div>
    </Main>
  );
};

export default Laguru;

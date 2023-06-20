import React from "react";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import Button from "components/ui/Button";
import Image from "next/image";
import case1 from "../../../public/500chow-case1.png";
import case2 from "../../../public/500chow-case2.png";
import mockup from "../../../public/500chowmockup.png";
import WorksGallery from "components/interface/Works/WorksGallery";

const Chow = () => {
  return (
    <Main meta={<Meta title="Our Solutions" description="" />}>
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
              <div className=" text-gray text-5xl space uppercase font-bold leading-[5.5rem]">
                500 chow
              </div>
            </div>
            <div className="h-1/2 w-full pt-9 flex flex-col md:flex-row md:mt-0 mt-20">
              <div className="md:w-1/2">
                <h2 className="mb-8 underline decoration-gum decoration-4 uppercase space text-3xl font-semibold text-gray leading-8">
                  Assignment
                </h2>
                <div className="text-gray inter ">
                  500 Chow is a food delivery service in Lagos Island. Although
                  they already had a running website, it had two major flaws.
                  Firstly, the old website failed to accurately reflect the
                  company's brand. Secondly, they placed more emphasis on
                  completing purchases directly on the website instead of
                  guiding users towards initiating one-on-one contact with
                  customer service on WhatsApp or Instagram ( which was there
                  main marketing platform ). The call-to-action (CTA) did not
                  address this need, resulting in a missed opportunity for
                  personalized customer interaction.
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
                          <li>front end development</li>
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
            <div className="md:w-1/2 px-6 md:px-14  ">
              <h2 className="mb-8 underline decoration-gum decoration-4 uppercase space text-3xl font-semibold text-gray leading-8">
                Approach
              </h2>
              <p className="text-gray inter ">
                To address the flaws in 500 Chow's existing website, we will
                implement a comprehensive solution. Firstly, we will revamp the
                website's design and content to align with the company's brand
                identity, ensuring a cohesive and professional representation.
                Secondly, we will optimize the user experience by prominently
                featuring the option to connect with customer service through
                WhatsApp Business and Instagram DMs for personalized assistance.
                This will involve strategically placing CTAs throughout the
                website that redirect users to initiate direct conversations on
                WhatsApp. By integrating these changes, we will create a
                visually appealing and user-friendly website that not only
                reflects the brand but also facilitates seamless communication
                with customers, ultimately enhancing their overall experience
                and driving increased engagement and conversions.
              </p>
            </div>
            <div className="md:w-1/2 md:mt-0 mt-40 flex justify-center items-center">
              <Image src={mockup} height={700} />
            </div>
          </div>
<div className="mt-40">
  <Image src={case2} />
</div>
          <div className="px-6 md:px-14 mt-20">
            <h2 className="mb-8 uppercase space underline decoration-gum decoration-4 text-3xl font-semibold text-gray leading-8">
              Implementation
            </h2>
            <p className="text-gray inter md:w-1/2">
              Throughout the entire implementation process, we prioritized three
              key aspects. Firstly, we emphasized the importance of humanizing
              the website by incorporating branding elements, taking inspiration
              from their Instagram presence. This approach aimed to create a
              cohesive and authentic experience for users, aligning the website
              with the company's established brand identity. <br /> Secondly, we
              focused on writing efficient and optimized code to ensure the
              website's speed and performance were top-notch. By employing best
              practices and leveraging cutting-edge technologies, we aimed to
              deliver a seamless browsing experience for visitors. <br />{" "}
              Lastly, we dedicated significant attention to making the website
              perfectly responsive across various mobile devices. This involved
              meticulous design and development techniques to guarantee that
              users could access and navigate the site effortlessly on
              smartphones and tablets. <br /> By addressing these three core
              areas, we strived to create a website that not only reflected the
              brand's personality but also provided an exceptional user
              experience, resulting in increased engagement and customer
              satisfaction.
            </p>
          </div>
        </section>
      </div>
      <div className="px-6 md:px-14 mt-40">
      <h2 className="text-gray text-xl space font-bold uppercase leading-10 mb-20">
            check out other<br /> case studies<span className="text-gum">.</span>
          </h2>
        <WorksGallery className={"flex-col-reverse"}/>
      </div>
    </Main>
  );
};

export default Chow;

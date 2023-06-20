import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import WorksGallery from "components/interface/Works/WorksGallery";
import Button from "components/ui/Button";
import React from "react";
import { solutions } from "./index";

const Websites = () => {
  return (
    <Main meta={<Meta title="Websites" description="" />}>
      <section id="" className="bg-midnight pt-12 md:p-14 p-6">
        <div className="md:h-[670px] flex flex-col ">
          <div className="h-1/2 w-full flex md:flex-row-reverse flex-col justify-end md:items-end pb-9 border-b-gray border-b border-opacity-[.2] ">
            <div className="mb-2">
              <div className="text-gum space text-xs uppercase md:ml-10 ml-2">
                {" "}
                our <br className=" md:block hidden"/>
                solutions
              </div>
            </div>
            <h1 className=" text-gray md:text-5xl text-xl space uppercase font-bold leading-10 md:leading-[5.5rem]">
              Web design and <br className="md:block hidden"/> web development
            </h1>
          </div>
          <div className="md:h-1/2 w-full pt-9 flex md:flex-row flex-col">
            <div className="md:w-1/2">
              <div className="text-gray inter ">
                In today's digital landscape, your company website serves as the
                modern equivalent of a brick and mortar store, often being the
                first interaction potential customers have with your business.
                To maximize this opportunity, it is essential to invest in
                custom web design that seamlessly integrates captivating
                aesthetics with reliable functionality. As a prominent custom
                web design agency, Pase Digital excels in creating websites that stand
                out from the competition by combining exceptional design and
                high performance
              </div>
            </div>
            <div className="md:w-1/2 flex justify-end items-end md:mt-0 mt-20">
              <div className="w-[400px]">
                <div className="border-b-gray border-b border-opacity-[.2]  pb-2">
                  <div className=" text-gray text-lg uppercase space ">
                    {" "}
                    Responsive Design
                  </div>
                </div>
                <div className="border-b-gray border-b border-opacity-[.2]  pb-2 mt-5">
                  <div className=" text-gray text-lg uppercase space ">
                    {" "}
                    High Performance
                  </div>
                </div>
                <div className="border-b-gray border-b border-opacity-[.2]  pb-2 mt-5">
                  <div className=" text-gray text-lg uppercase space ">
                    {" "}
                    Search Engine Optmization
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 md:px-14 pt-20 md:pt-40">
        <div className="md:w-[60%] mx-auto">
          <div>
            <h2 className="mb-8 uppercase space text-3xl font-semibold text-gray leading-8">Delivering a website design that captivates and brings joy to your audience</h2>
            <p className=" text-gray">Pase Digital takes immense pride in our expertise in selecting and mastering cutting-edge web technologies. We leverage these technologies to create scalable and high-performing websites and web applications. Our custom web designs are bolstered by a robust support network and a thriving community, guaranteeing ongoing growth and advancement for your business. Our unwavering commitment to future-proof web design solutions ensures that your custom website remains at the forefront of innovation and performance.</p>
          </div>
          <div className="mt-20">
              <div className="border-2 border-gum bg-gum h-full mb-16"></div>
            <h4 className="mb-6 underline decoration-gum decoration-4 uppercase space text-2xl font-semibold text-gray leading-8">Responsive Design</h4>
            <div className="ml-5">
            <p className="text-gray">We create visually stunning, mobile-responsive designs that provide seamless and user-friendly experiences across different devices. Our meticulous attention to detail ensures optimal display and navigation, maximizing user engagement and driving business growth.</p>
            </div>
            
          </div>
          <div className="mt-14">
            <h4 className="mb-6 decoration-gum decoration-4  uppercase space text-2xl font-semibold text-gray leading-8 underline">High Performance</h4>
            <p className="ml-5 text-gray">We place great emphasis on optimizing your website for speed and performance, guaranteeing a seamless and enjoyable user experience that encourages repeat visits from your site's visitors.</p>
          </div>
          <div className="mt-14">
            <h4 className="mb-6  uppercase space text-2xl font-semibold text-gray underline leading-8 decoration-gum decoration-4">Search Enginer Optimization</h4>
            <p className="ml-5 text-gray">Our design process incorporates top-notch SEO practices at every stage. By offering comprehensive SEO services, we guarantee that your website is well-positioned to achieve high rankings in search engine results and attract a consistent flow of organic traffic.</p>
          </div>
        </div>

        <div className="mt-40">
          <h2 className="text-gray text-xl space font-bold uppercase leading-10 md:mb-40 mb-20">Examples of <br className="md:block hidden"/> our work in<br className="md:block hidden"/> website design<br className="md:block hidden"/> and development<span className="text-gum">.</span></h2>
          <WorksGallery />
        </div>
      </section>
    </Main>
  );
};

export default Websites;

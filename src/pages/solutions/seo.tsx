import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import WorksGallery from "components/interface/Works/WorksGallery";
import Button from "components/ui/Button";
import React from "react";
import { solutions } from "./index";

const Seo = () => {
  return (
    <Main meta={<Meta title="Our Solutions - SEO" description="" />}>
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
            <h1 className=" text-gray md:text-5xl space  text-xl uppercase font-bold leading-10 md:leading-[5.5rem]">
              Search Engine Optimization
            </h1>
          </div>
          <div className="md:h-1/2 w-full pt-9 flex md:flex-row flex-col">
            <div className="md:w-1/2">
              <div className="text-gray inter ">
              Your website acts as a digital gateway for your business,
                  making SEO (Search Engine Optimization) a critical component
                  for success. At Pase Digital, we specialize in optimizing
                  websites to increase visibility, attract organic traffic, and
                  outrank competitors in search engine results. Our SEO
                  strategies are meticulously tailored to your specific business
                  needs, targeting relevant keywords, optimizing website
                  structure, and improving overall performance. With our
                  expertise, your website can climb the search engine rankings,
                  driving more targeted traffic and maximizing your online
                  presence. Partner with us to unlock the full potential of SEO
                  and propel your business to new heights.
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
      <section className="md:px-14 px-4 md:mt-0  pt-20 md:pt-40">
        <div className="md:w-[60%] mx-auto">
          <div>
            <h2 className="mb-8 uppercase space text-3xl font-semibold text-gray leading-8">Delivering a website design that captivates and brings joy to your audience</h2>
            <p className=" text-gray">Pase Digital takes immense pride in our expertise in selecting and mastering cutting-edge web technologies. We leverage these technologies to create scalable and high-performing websites and web applications. Our custom web designs are bolstered by a robust support network and a thriving community, guaranteeing ongoing growth and advancement for your business. Our unwavering commitment to future-proof web design solutions ensures that your custom website remains at the forefront of innovation and performance.</p>
          </div>
          <div className="mt-20">
              <div className="border-2 border-gum bg-gum h-full mb-16"></div>
            <h4 className="mb-6 underline decoration-gum decoration-4 uppercase space text-2xl font-semibold text-gray leading-8">Keyword Research and Optimization</h4>
            <div className="ml-5">
            <p className="text-gray">Boost website visibility and attract targeted organic traffic with our advanced keyword research and optimization services. We identify high-performing keywords and strategically integrate them into your website's content, meta tags, headings, and URLs to improve search engine rankings. Drive qualified traffic, increase online visibility, and enhance website performance.</p>
            </div>
            
          </div>
          <div className="mt-14">
            <h4 className="mb-6 decoration-gum decoration-4  uppercase space text-2xl font-semibold text-gray leading-8 underline">Technical SEO</h4>
            <p className="ml-5 text-gray">Optimize website performance and user experience with our technical SEO expertise. We improve speed, responsiveness, crawlability, and indexability, ensuring your website excels in search engine rankings.</p>
          </div>
          <div className="mt-14">
            <h4 className="mb-6  uppercase space text-2xl font-semibold text-gray underline leading-8 decoration-gum decoration-4">Continuous Monitoring and Optimization</h4>
            <p className="ml-5 text-gray">Ensure continuous performance and visibility with our monitoring and optimization services. Our team tracks key metrics, adapts to industry trends, and implements strategic improvements to keep your website competitive.</p>
          </div>
        </div>

        <div className="mt-40">
          <h2 className="text-gray text-xl space font-bold uppercase leading-10 md:mb-40 mb-20">Examples of <br className="md:block hidden" /> our work in<br className="md:block hidden"/> website design<br className="md:block hidden"/> and development<span className="text-gum">.</span></h2>
          <WorksGallery />
        </div>
      </section>
    </Main>
  );
};

export default Seo;

import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import Button from "components/ui/Button";
import React from "react";




// export const solutions = [
//   {
//       id: 1,
//       label: "Ecommerce Website Development",
//       labelSubHeading: "In today's digital landscape, your company website serves as the modern equivalent of a brick and mortar store, often being the first interaction potential customers have with your business. To maximize this opportunity, it is essential to invest in custom web design that seamlessly integrates captivating aesthetics with reliable functionality. As a prominent custom web design agency, Pase Digital excels in creating websites that stand out from the competition by combining exceptional design and high performance",
//       labelFeatures: [
//         "Responsive Design",
//         "High Performance",
//         "Search Engine Optimization"
//       ],
//       bodyHeading: "Delivering a website design that captivates and brings joy to your audience",
//       bodySubHeading: "Pase Digital takes immense pride in our expertise in selecting and mastering cutting-edge web technologies. We leverage these technologies to create scalable and high-performing websites and web applications. Our custom web designs are bolstered by a robust support network and a thriving community, guaranteeing ongoing growth and advancement for your business. Our unwavering commitment to future-proof web design solutions ensures that your custom website remains at the forefront of innovation and performance.",
//       bodyFeatures: [
//         {
//           label: "Responsive Design",
//           labelHeading: "We create visually stunning, mobile-responsive designs that provide seamless and user-friendly experiences across different devices. Our meticulous attention to detail ensures optimal display and navigation, maximizing user engagement and driving business growth."
//         },
//         {
//           label: "High performance",
//           labelHeading: "We place great emphasis on optimizing your website for speed and performance, guaranteeing a seamless and enjoyable user experience that encourages repeat visits from your site's visitors."
//         },
//         {
//           label: "Search Engine Optimization",
//           labelHeading: "Our design process incorporates top-notch SEO practices at every stage. By offering comprehensive SEO services, we guarantee that your website is well-positioned to achieve high rankings in search engine results and attract a consistent flow of organic traffic."
//         },
//       ]

//   }
// ]

const Solutions = () => {
  return (
    <>
    
    <Main
        meta={<Meta title="Our Solutions" description="" />}
      >
        <section id="" className="bg-midnight pt-12 md:p-14 p-6">
          <div className="h-[670px] flex flex-col ">
            <div className="h-1/2 w-full flex md:flex-row-reverse flex-col justify-end md:items-end pb-9 border-b-gray border-b border-opacity-[.2] ">
              <div className="mb-2 ">
                <h1 className="text-gum space text-xs uppercase md:ml-10 ml-2">
                  {" "}
                  Web design and <br className="md:hidden block"/>Web development solutions
                </h1>
              </div>
              <div className=" text-gray md:text-5xl text-xl space uppercase font-bold leading-10 md:leading-[5.5rem]">
                our
                <br /> solutions
              </div>
            </div>
            <div className="md:h-1/2 w-full pt-9 flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <div className="text-gray inter ">
                  At our holistic web agency, we bring together a diverse range
                  of strengths to optimize every digital aspect of your
                  business. From crafting powerful strategies to implementing
                  SEO techniques, designing data-driven UI/UX, leveraging
                  advanced technology, and delivering ongoing support, we've got
                  you covered.
                </div>
                <div className="text-gray inter">
                  Our mission is simple: to enhance your revenue and brand
                  engagement online. With a focus on tactical growth marketing,
                  cutting-edge technologies, and decades of experience, we
                  track, optimize, and amplify your web presence for exponential
                  growth.
                </div>
              </div>
              <div className="md:w-1/2 flex justify-end items-end md:mt-0 mt-20">
                <div className="w-[400px]">
                  <div className="border-b-gray border-b border-opacity-[.2]  pb-2">
                    <div className=" text-gray text-lg uppercase space ">
                      {" "}
                      Websites
                    </div>
                  </div>
                  <div className="border-b-gray border-b border-opacity-[.2]  pb-2 mt-5">
                    <div className=" text-gray text-lg uppercase space ">
                      {" "}
                      Ecommerce
                    </div>
                  </div>
                  <div className="border-b-gray border-b border-opacity-[.2]  pb-2 mt-5">
                    <div className=" text-gray text-lg uppercase space ">
                      {" "}
                      SEO
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </section>






<section className="bg-midnight mt-60 md:mt-0">
          <div className=" md:mt-0">
            {/* ------------------WEBSITES */}

            <div className="bg-light-midnight mt-28 md:h-[600px] p-14 flex md:px-0 px-4 md:ml-14 md:flex-row flex-col gap-20">
              <div className=" md:w-1/2 flex flex-col md:justify-between ">
                <h2 className="text-xl text-gray space uppercase font-bold ">
                  Websites
                </h2>
                <div>
                  <div className="mt-20 md:mt-0 md:w-1/2 flex md:justify-end md:items-end ">
                    <div className="md:w-[400px]">
                      <div className=" border-b-gray border-b border-opacity-[.2] md:text-end pb-2">
                        <div className=" text-gray text-lg  inter ">
                          {" "}
                          Responsive Design
                        </div>
                      </div>
                      <div className="border-b-gray border-b border-opacity-[.2] md:text-end pb-2 mt-5">
                        <div className=" text-gray text-lg  inter ">
                          {" "}
                          High Performance
                        </div>
                      </div>
                      <div className="border-b-gray border-b border-opacity-[.2] md:text-end pb-2 mt-5">
                        <div className=" text-gray text-lg  inter ">
                          {" "}
                          Search Engine Opitmization
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" md:w-1/2">
                <div className="inter text-gray text-base">
                  The digital representation of your business lies in your
                  website, serving as a crucial tool to attract and retain
                  customers. At Pase Digital, we offer customized website design
                  and development solutions that aim to establish a strong
                  online presence, setting you apart from your competitors. Our
                  meticulous approach ensures that your website reflects your
                  unique identity and effectively engages your target audience.
                </div>
                <Button label="check out our process" className="text-gray gap-5 mt-20" href={"/solutions/websites"}/>
              </div>
            </div>

            {/* ------------------ECOMMERCE */}

            <div className="bg-light-midnight mt-28 md:h-[600px] p-14 md:px-0 px46 md:p-14 flex md:mr-14 md:flex-row flex-col gap-20">
              <div className=" md:w-1/2 flex flex-col md:justify-between">
                <h2 className="text-xl text-gray space uppercase font-bold">
                  ECOMMERCE
                </h2>
                <div>
                  <div className="mt-20 md:mt-0 md:w-1/2 flex justify-end items-end ">
                    <div className="md:w-[400px]">
                      <div className=" border-b-gray border-b border-opacity-[.2] md:text-end pb-2">
                        <div className=" text-gray text-lg  inter ">
                          {" "}
                          Seamless Mobile Experience
                        </div>
                      </div>
                      <div className="border-b-gray border-b border-opacity-[.2] md:text-end pb-2 mt-5 ">
                        <div className=" text-gray text-lg  inter ">
                          {" "}
                          Customized Business Solutions
                        </div>
                      </div>
                      <div className="border-b-gray border-b border-opacity-[.2] md:text-end pb-2 mt-5">
                        <div className=" text-gray text-lg  inter ">
                          {" "}
                          Secure Payment Processing
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="inter text-gray text-base">
                  In today's digital era, having a strong online presence is
                  crucial for businesses looking to expand their customer base
                  and increase their profits. At Pase Digital, our e-commerce
                  solutions combine attractive designs with impeccable
                  functionality to create online stores that engage your desired
                  audience and drive sales. We place a high emphasis on creating
                  user-friendly shopping experiences, optimizing them for both
                  mobile and desktop users. Additionally, we integrate secure
                  payment gateways to ensure a smooth and secure customer
                  journey
                </div>
                <Button label="how we build online stores" className="text-gray gap-5 mt-20" href={"/solutions/ecommerce"}/>

              </div>
            </div>

            {/* ------------------SEO */}

            <div className="bg-light-midnight mt-28 md:h-[600px] p-14 px-4 md:px-0 flex md:ml-14 md:flex-row flex-col gap-20">
              <div className="md: w-1/2 flex flex-col md:justify-between">
                <h2 className="text-xl text-gray space uppercase font-bold">
                  SEO
                </h2>
                <div>
                  <div className="mt-20 md:mt-0 md:w-1/2 flex md:justify-end md:items-end ">
                    <div className="md:w-[400px]">
                      <div className=" border-b-gray border-b border-opacity-[.2] md:text-end pb-2">
                        <div className=" text-gray text-lg  inter ">
                          {" "}
                          Keyword Research and Optimization
                        </div>
                      </div>
                      <div className="border-b-gray border-b border-opacity-[.2] md:text-end pb-2 mt-5">
                        <div className=" text-gray text-lg  inter ">
                          {" "}
                          Technical SEO
                        </div>
                      </div>
                      <div className="border-b-gray border-b border-opacity-[.2] md:text-end pb-2 mt-5">
                        <div className=" text-gray text-lg  inter ">
                          {" "}
                          Continuous Monitoring and Optimization
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" md:w-1/2">
                <div className="inter text-gray text-base">
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
                <Button label="check out our seo strategy" className="text-gray gap-5 mt-20" href={"/solutions/seo"}/>

              </div>
            </div>
          </div>
        </section>
        
      </Main>
    </>
  );
};

export default Solutions;

import Apostrophe from "components/icons/Apostrophe";
import Header from "components/icons/HeaderIcon";
import NavBox from "components/interface/NavBox/NavBox";
import React from "react";

const Landing = () => {
  return (
    <section id="landing" className="bg-midnight pt-12 md:p-14 p-6">
      <div className="md:h-[670px] flex flex-col">
        <div className="md:h-1/2  border-b-gray border-b border-opacity-[.2] flex md:flex-row flex-col">
          <div className="md:hidden block">
            <p className="roboto md:text-base leading-5 text-gray inter md:w-auto w-2/3">
            Páse Digital is a collective of skilled <br className="hidden md:block"/> developers and 
                designers dedicated <br className="hidden md:block"/>
                <span className="text-gum  ">
                  {" "}
                  to crafting extraordinary digital <br className="hidden md:block"/> masterpieces for your audience.
                </span>
            </p>
          </div>
          <div className="header-svg-mobile h-full flex items-end relative justify-start md:w-2/3 pb-9">
            <Header />
            <div className="md:text-base text-xs text-gum md:ml-10  space">
              2024
            </div>
          </div>
          <div className=" md:flex hidden w-1/3 justify-end  h-fit">
            <NavBox />
          </div>
        </div>
        <div className="md:h-1/2 flex pt-9">
          <div className="w-1/2 md:flex hidden justify-start items-center">
            <div className="">
              <div className="roboto text-base text-gray inter">
                We are a collective of skilled <br /> developers and 
                designers dedicated <br />
                <span className="text-gum  ">
                  {" "}
                  to crafting extraordinary digital <br /> masterpieces for your audience.
                </span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 ">
            <div>
              <h1 className=" roboto md:text-lg text-gray inter">
                We build websites tailored<br /> for your target audience!
              </h1>
            </div>
          </div>
        </div>
        <div className="mb-28 pt-16 md:hidden block">
          <NavBox />
        </div>
      </div>
      {/* <div className="aspect-video w-full bg-gum"> </div> */}
    </section>
  );
};

export default Landing;




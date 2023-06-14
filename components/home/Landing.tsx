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
              Páse Digital a collective of skilled web developers and
              designers dedicated
              <span className="text-gum  ">
                {" "}
                to crafting extraordinary digital masterpieces.
              </span>
            </p>
          </div>
          <div className="header-svg-mobile h-full flex items-end relative justify-start md:w-2/3 pb-9">
            <Header />
            <p className="md:text-base text-xs text-gum md:ml-10  space">
              WEB DEVELOPMENT WEB DESIGN
            </p>
          </div>
          <div className=" md:flex hidden w-1/3 justify-end  h-fit">
            <NavBox />
          </div>
        </div>
        <div className="md:h-1/2 flex pt-9">
          <div className="w-1/2 md:flex hidden justify-start items-center">
            <div className="">
              <p className="roboto text-base text-gray inter">
                Páse Digital <br />a collective of skilled developers and
                designers dedicated
                <span className="text-gum  ">
                  {" "}
                  to crafting extraordinary digital masterpieces.
                </span>
              </p>
            </div>
          </div>
          <div className="md:w-1/2 ">
            <div>
              <p className="roboto text-base text-gray inter">
                Hey, I'm Paul-Simon,
                <br /> Head Developer and <br className="md:hidden block" />{" "}
                founder of Páse Digital
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className="mb-28 pt-16 md:hidden block">
          <NavBox />
        </div>
      </div>
      <div className="aspect-video w-full bg-gum"> </div>
    </section>
  );
};

export default Landing;

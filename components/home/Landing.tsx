import Apostrophe from "components/icons/Apostrophe";
import Header from "components/icons/HeaderIcon";
import NavBox from "components/interface/NavBox/NavBox";
import React from "react";

const Landing = () => {
  return (
    <section id="landing" className="bg-midnight pt-12 md:p-14 p-6">
      <div className="md:h-[670px] flex flex-col">
        <div className="md:h-1/2  border-b-gray border-b border-opacity-[.2] flex md:flex-row flex-col">
          <div>
            <p className="roboto text-base text-gray inter">
              Páse Digital <br />a collective of skilled developers and
              designers dedicated
              <span className="text-gum  ">
                {" "}
                to crafting extraordinary digital masterpieces.
              </span>
            </p>
          </div>
          <div className="header-svg-mobile h-full flex items-end relative justify-start md:w-2/3 pb-9">
            <Header />
            <p className="text-base text-gum md:ml-10  space">
              DEVELOPMENT DESIGN
            </p>
          </div>
          <div className="flex md:block hidden w-1/3 justify-end">
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
        <div className="mb-28 pt-7">
          <NavBox />
        </div>
      </div>
      <div className="h-[400px] w-full bg-gum"> </div>
    </section>
  );
};

export default Landing;

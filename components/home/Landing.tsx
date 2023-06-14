import Apostrophe from "components/icons/Apostrophe";
import Header from "components/icons/HeaderIcon";
import NavBox from "components/interface/NavBox/NavBox";
import React from "react";

const Landing = () => {
  return (
    <section id="landing" className="bg-midnight pt-12 p-14">
      <div className="h-[670px] flex flex-col">
        <div className="h-1/2  border-b-gray border-b border-opacity-[.2] flex">
          <div className=" h-full flex items-end relative justify-start w-2/3 pb-9">
            <Header />
            <p className="text-base text-gum ml-10 space">DEVELOPMENT DESIGN</p>
          </div>
          <div className="flex  w-1/3 justify-end">
            <NavBox />
          </div>
        </div>
        <div className="h-1/2 flex pt-9">
          <div className="w-1/2 flex justify-start items-center">
            <div className="">
              <p className="roboto text-base text-gray inter">
                Páse Digital <br />
                a collective of skilled developers and designers dedicated
                <span className="text-gum  ">{" "}
                to crafting extraordinary digital masterpieces.
                </span>
              </p>
            </div>
          </div>
          <div className="w-1/2 ">
            <div>
              <p className="roboto text-base text-gray inter">
                Hey, I'm Paul-Simon,<br/> Head Developer and founder of Páse Digital<br/>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[400px] w-full bg-gum"> </div>
    </section>
  );
};

export default Landing;

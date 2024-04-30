import BigArrow from "components/icons/BigArrow";
import Button from "components/ui/Button";
import React from "react";
import Marquee from "react-fast-marquee";

const Footer = () => {
  return (
    <footer className="bg-midnight  md:mt-40">
      <div className="flex md:h-[600px] flex-col bg-gray md:mx-8  rounded-tl-md rounded-tr-md">
        <div className=" h-1/2  flex justify-center items-center">
          <div className=" w-full">
            <Marquee autoFill speed={20} play>
              <p className="md:text-[10rem]  text-5xl font-bold space mr-10 text-midnight">
                LET'S TALK{" "}
              </p>
            </Marquee>
          </div>
        </div>
        <div className=" h-1/2 flex flex-col-reverse md:flex-row  px-3 md:px-10  gap-10">
          {/* <div className=" md:w-1/2 flex md:justify-center md:items-center border-t-midnight border-t border-opacity-[.2] py-[2.5rem]">
            <BigArrow fill="#99B2FF" w={14 * 10} h={19 * 10} />
          </div> */}
          <div className="md:w-1/2 ">
            <p className=" text-midnight md:text-base leading-5">
           LET'S GET TO WORK!
            </p>
            <Button
              label="HIRE US"
              className="gap-5 text-midnight mt-11"
              border="border-midnight"
              arrow="#1E2C54"
              href={"/contact"}
              target={""}
            />
          </div>
        </div>
        <div className=" h-1/2 flex flex-col-reverse md:flex-row px-3 md:px-10 gap-10">
          {/* <div className=" md:w-1/2 flex md:justify-center md:items-center border-t-midnight border-t border-opacity-[.2] py-[2.5rem]">
            <BigArrow fill="#99B2FF" w={14 * 10} h={19 * 10} />
          </div> */}
          <div className="md:w-1/2 ">
            {/* <p className=" text-midnight md:text-base leading-5">
            WhatsApp or Email us to get started.<br /> Let's bring your digital vision to life.<br /> Contact us now!
            </p> */}
            <Button
              label="text us on whatsapp"
              className="gap-5 text-midnight mt-11"
              border="border-midnight"
              arrow="#1E2C54"
              href={"https://wa.me/message/5V5COS7GSQP5K1"}
              target={"_blank"}
            />
            <Button
              label="send us an email"
              className="gap-5 text-midnight mt-5"
              border="border-midnight"
              arrow="#1E2C54"
              href={"mailto:paul.emechebe.co@gmail.com"}
              target={"_blank"}
            />
          </div>
        </div>
        <div className="text-xs mt-10 mb-4 px-3 md:px-10 text-[#bababa]">All rights reserved ©2024.Páse Digital</div>
      </div>
    </footer>
  );
};

export default Footer;

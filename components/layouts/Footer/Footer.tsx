import BigArrow from "components/icons/BigArrow";
import Button from "components/ui/Button";
import React from "react";
import Marquee from "react-fast-marquee";

const Footer = () => {
  return (
    <footer className="bg-midnight ">
      <div className="flex md:h-[600px] flex-col bg-gray md:mx-8 mx-5 rounded-md">
        <div className=" h-1/2  flex justify-center items-center">
          <div className=" w-full">
            <Marquee autoFill speed={45} play>
              <p className="md:text-[10rem]  text-5xl font-bold space mr-10 text-midnight">
                GET IN TOUCH{" "}
              </p>
            </Marquee>
          </div>
        </div>
        <div className=" h-1/2 flex flex-col-reverse md:flex-row  px-6 gap-10">
          <div className="md:w-1/2 flex md:justify-center md:items-center border-t-midnight border-t border-opacity-[.2] py-[2.5rem]">
            <BigArrow fill="#99B2FF" w={14 * 10} h={19 * 10} />
          </div>
          <div className="md:w-1/2 ">
            <p className="text-base text-midnight">
            WhatsApp or Email us to get started.<br /> Let's bring your digital vision to life.<br /> Contact us now!
            </p>
            <Button
              label="text us on whatsapp"
              className="gap-5 text-midnight mt-11"
              border="border-midnight"
              arrow="#1E2C54"
            />
            <Button
              label="send us an email"
              className="gap-5 text-midnight mt-5"
              border="border-midnight"
              arrow="#1E2C54"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

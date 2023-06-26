import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import ArrowRight from "components/icons/ArrowRight";
import Header from "components/icons/HeaderIcon";
import NavBox from "components/interface/NavBox/NavBox";
import Button from "components/ui/Button";
import Link from "next/link";
import React, { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";

const Contact = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [scope, setScope] = useState("");
  const [timing, setTiming] = useState("");
  const [budget, setBudget] = useState("");

  const [submit, submitting] = useFormspark({
    formId: "qzAP78mP",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    await submit({ name, company, email, scope, timing, budget });
    alert("Form submitted");
  };

  return (
    <Main meta={<Meta title="Our Solutions" description="" />}>
      <section id="landing" className="bg-midnight pt-12 md:p-14 p-6">
        <div className="md:h-[670px] flex flex-col">
          <div className="md:h-1/2  border-b-gray border-b border-opacity-[.2] flex md:flex-row flex-col">
            <div className="hidden block">
              <p className="roboto md:text-base leading-5 text-gray inter md:w-auto w-2/3">
                Pase Digital is a collective of skilled{" "}
                <br className="hidden md:block" /> developers and designers
                dedicated <br className="hidden md:block" />
                <span className="text-gray  ">
                  {" "}
                  to crafting extraordinary digital{" "}
                  <br className="hidden md:block" /> masterpieces for your
                  audience.
                </span>
              </p>
            </div>
            <div className=" h-full flex items-end relative justify-start md:w-2/3 pb-9">
              <div className=" text-gray md:text-5xl text-xl space uppercase font-bold leading-10 md:leading-[5.5rem]">
                contact
              </div>

              <p className="md:text-base uppercase text-xs text-gum md:ml-10  space">
                let's work
              </p>
            </div>
            <div className=" md:flex hidden w-1/3 justify-end  h-fit">
              <NavBox />
            </div>
          </div>
          <div className="md:h-1/2 flex pt-9">
            <div className="w-1/2 md:flex hidden justify-start items-center">
              <div className="">
                <div className="hidden roboto text-base text-gray inter">
                  We are a collective of skilled <br /> developers and designers
                  dedicated <br />
                  <span className="text-gray  ">
                    {" "}
                    to crafting extraordinary digital <br /> masterpieces for
                    your audience.
                  </span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 ">
              <div>
                <p className=" roboto md:text-lg text-gray inter">
                  Whether you have a specific project in mind, seek guidance on
                  unleashing your digital potential, or are simply curious,
                  don't hesitate to reach out and get in touch. We are here to
                  help and provide assistance.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="mb-28 pt-16 md:hidden block">
            <NavBox />
          </div> */}
        </div>
      </section>

      <section className="flex md:flex-row flex-col md:px-14 px-6 mb-20 mt-10 md:mt-0">
        
        <div className="md:w-1/2">
          <form
            className="max-w-md mx-auto bg-white md:p-6 "
            onSubmit={onSubmit}
          >
            <div className="mb-9">
              <label
                className="block mb-2 text-xs text-gray space uppercase "
                htmlFor="name"
              >
                Name
              </label>
              <input
                required
                className="w-full px-4 py-4 border border-gray-300 rounded outline-1 outline-gum"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-9">
              <label
                className="block mb-2 text-xs text-gray space uppercase "
                htmlFor="company"
              >
                Company/Organization
              </label>
              <input
                required
                className="w-full px-4 py-4 outline-gum border border-gray-300 rounded"
                type="text"
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div className="mb-9">
              <label
                className="block mb-2 text-xs text-gray space uppercase "
                htmlFor="email"
              >
                Email
              </label>
              <input
                required
                className="w-full px-4 py-4 outline-gum border border-gray-300 rounded"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-9">
              <label
                className="block mb-2 text-xs text-gray space uppercase "
                htmlFor="scope"
              >
                Project Scope
              </label>
              <textarea
                required
                className="w-full px-4 py-4 outline-gum border border-gray-300 rounded"
                id="scope"
                value={scope}
                onChange={(e) => setScope(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-9">
              <label
                className="block mb-2 text-xs text-gray space uppercase "
                htmlFor="timing"
              >
                Timing
              </label>
              <select
                required
                className="w-full px-4 py-4 outline-gum border border-gray-300 rounded"
                id="timing"
                value={timing}
                onChange={(e) => setTiming(e.target.value)}
              >
                <option value="">Select Timing</option>
                <option value="Option 1">1 - 3 months</option>
                <option value="Option 2">3 - 6 months</option>
                <option value="Option 3">greater than 6 months</option>
              </select>
            </div>
            <div className="mb-9">
              <label
                className="block mb-2 text-xs text-gray space uppercase "
                htmlFor="budget"
              >
                Budget
              </label>
              <select
                required
                className="w-full px-4 py-4 outline-gum border border-gray-300 rounded"
                id="budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              >
                <option value="">Select Budget</option>
                <option value="Option 1">₦250k - ₦500k</option>
                <option value="Option 2">₦500k to ₦950k</option>
                <option value="Option 3">₦950k to ₦1.5m</option>
              </select>
            </div>

            <button type="submit" className="mt-5">
              <div className="flex gap-5  items-center">
                <div className="uppercase inter text-gray font-semibold opacity-[.8] text-sm">
                  submit
                </div>
                <div className="border border-gray border-opacity-[.2] h-5 rounded-full w-11 flex items-center justify-end pr-2">
                  <ArrowRight w="14" h="10" fill="" />
                </div>
              </div>
            </button>
          </form>
        </div>
        <div className="flex justify-start md:w-1/2">
          {/* <div className="bg-light-midnight w-96 h-96"></div> */}
        </div>
      </section>

      <section className="bg-midnight pb-28">
        <div className="pt-14">
          <div className="px-4 md:px-14 mb-36">
            <div className=" border-t-gray w-full border-t mb-14 pt-2 border-opacity-[.2] ">
              <p className=" text-base text-gray space ">Socials</p>
            </div>
          </div>

          <Link href="https://www.instagram.com/pasedigital.co/" target="_blank">
            <div className="border-b-gray border-b w-fit relative border-opacity-[.2] ">
              <h2 className="pl-11 md:px-14  text-gray uppercase space font-bold md:text-5xl text-[3rem]">
                instagram
              </h2>
              <div className="text-gray space font-bold absolute right-0">
                01
              </div>
            </div>
          </Link>
          <Link href="https://www.linkedin.com/company/92485126/" target="_blank">
            <div className="border-b-gray border-b w-fit relative border-opacity-[.2] mt-10">
              <h2 className="pl-11 md:px-14  text-gray uppercase space font-bold md:text-5xl text-[3rem]">
                linkedin{" "}
              </h2>
              <div className="text-gray space font-bold absolute right-0">
                02
              </div>
            </div>
          </Link>

          <Link href="">
            <div className="md:px-14 px-10 flex justify-end md:mt-40 mt-24">
              <div className="md:w-1/2">
                <p className="text-gray text-lg inter mb-5">
                  Let’s build your next big idea
                </p>
                {/* <Button label="learn more" className="gap-5 text-gray" href="/solutions"/> */}
              </div>
            </div>
          </Link>
        </div>
      </section>
    </Main>
  );
};

export default Contact;

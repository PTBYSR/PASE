import React from 'react'

const ServiceCards = () => {
  return (
    <div className="bg-light-midnight h-[600px] p-14 flex">
            <div className=" w-1/2 flex flex-col justify-between">
              <h2 className="text-xl text-gray space uppercase font-bold">
                Websites
              </h2>
              <div>
                <div className="w-1/2 flex justify-end items-end ">
                  <div className="w-[400px]">
                    <div className=" border-b-gray border-b border-opacity-[.2] pb-2">
                      <div className=" text-gray text-lg  inter ">
                        {" "}
                        Responsive Design
                      </div>
                    </div>
                    <div className="border-b-gray border-b border-opacity-[.2] pb-2 mt-5">
                      <div className=" text-gray text-lg  inter ">
                        {" "}
                        High Performance
                      </div>
                    </div>
                    <div className="border-b-gray border-b border-opacity-[.2] pb-2 mt-5">
                      <div className=" text-gray text-lg  inter ">
                        {" "}
                        Search Engine Opitmization
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-1/2">
              <div className="inter text-gray text-base">
                The digital representation of your business lies in your
                website, serving as a crucial tool to attract and retain
                customers. At Páse Digital, we offer customized website design and
                development solutions that aim to establish a strong online
                presence, setting you apart from your competitors. Our
                meticulous approach ensures that your website reflects your
                unique identity and effectively engages your target audience.
              </div>
            </div>
          </div>
  )
}

export default ServiceCards
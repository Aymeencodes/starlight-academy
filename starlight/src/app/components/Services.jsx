import React from "react";

function Services() {
  return (
    <div>
      <div id="services" className="our-services container mx-auto section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div
              className="col-span-1 lg:col-span-1 flex items-center justify-center lg:justify-start wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div className="left-image md:mr-[45px] ">
                <img src="/images/services.png" alt="" />
              </div>
            </div>
            <div className="col-span-1 lg:col-span-1 wow fadeInRight">
              <div className=" md:mr-[100px]  section-heading">
                <h2 className="text-2xl  lg:text-3xl font-bold">
                  "Discover Our Starlight <em className="text-blue-500">school</em>{" "}
                  Services &amp; <span className="text-purple-900">Project</span>{" "}
                  Ideas "
                </h2>
                <p className="text-gray-700">
                  Achieve excellence with Starlight School's tailored services.
                  From language exam prep to hackathon support and science
                  competition training, our expert guidance equips you for
                  success in your chosen field. Unlock your potential with us.
                </p>
              </div>
              <div className=" flex lg:block items-center flex-col">
                <div className="  mb-5 flex gap-3 flex-col">
                  <label htmlFor="progress">
                    <span className=" text-purple-900 text-xl font-bold">
                      90%
                    </span>
                    <span className=" font-bold text-xl text-blue-500">
                      {" "}
                      Ielts
                    </span>
                  </label>
                  <progress
                    id="progress"
                    className="progress progress-info  w-72 md:w-96"
                    value="90"
                    max="100"
                  ></progress>
                </div>
                <div className=" mb-5 flex gap-3 flex-col">
                  <label htmlFor="progress">
                    <span className=" text-purple-900 text-xl font-bold">
                      100%
                    </span>
                    <span className=" font-bold text-xl text-blue-500">
                      {" "}
                      Delf
                    </span>
                  </label>
                  <progress
                    id="progress"
                    className="progress progress-info w-72 md:w-96"
                    value="100"
                    max="100"
                  ></progress>
                </div>
                <div className=" mb-5 flex gap-3 flex-col">
                  <label htmlFor="progress">
                    <span className=" text-purple-900 text-xl font-bold">
                      85%
                    </span>
                    <span className=" font-bold text-xl text-blue-500">
                      {" "}
                      hackathons
                    </span>
                  </label>
                  <progress
                    id="progress"
                    className="progress progress-info w-72 md:w-96"
                    value="85"
                    max="100"
                  ></progress>
                </div>
                <div className=" mb-5 flex gap-3 flex-col">
                  <label htmlFor="progress">
                    <span className=" text-purple-900 text-xl font-bold">
                      80%
                    </span>
                    <span className=" font-bold text-xl text-blue-500">
                      {" "}
                      science competitions
                    </span>
                  </label>
                  <progress
                    id="progress"
                    className="progress progress-info w-72 md:w-96"
                    value="80"
                    max="100"
                  ></progress>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

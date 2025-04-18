import React from "react";

const ContactForm = () => {
  return (
    <form >
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            {/* Left Side */}
            <div className="lg:mb-0 mb-10">
              <div className="group w-full h-full">
                <div className="relative h-full">
                  <img
                    src="https://pagedone.io/asset/uploads/1696488602.png"
                    alt="Contact Us"
                    className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700"
                  />
                  <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11">
                    Contact us
                  </h1>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
              <h2 className="text-indigo-600 font-manrope text-4xl font-semibold leading-10 mb-11">
                Send Us A Message
              </h2>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              />
              <div className="mb-10">
                <h4 className="text-gray-500 text-lg font-normal leading-7 mb-4">
                  Preferred method of communication
                </h4>
                <div className="flex">
                  <div className="flex items-center mr-11">
                    <input
                      id="radio-email"
                      type="radio"
                      name="contact_method"
                      value="email"
                      className="peer hidden"
                    />
                    <label
                      htmlFor="radio-email"
                      className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6"
                    >
                      <span className="border border-gray-300 rounded-full mr-2 w-4 h-4 ml-2 peer-checked:border-blue-500 peer-checked:bg-blue-500"></span>
                      Email
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="radio-phone"
                      type="radio"
                      name="contact_method"
                      value="phone"
                      className="peer hidden"
                    />
                    <label
                      htmlFor="radio-phone"
                      className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6"
                    >
                      <span className="border border-gray-300 rounded-full mr-2 w-4 h-4 ml-2 peer-checked:border-blue-500 peer-checked:bg-blue-500"></span>
                      Phone
                    </label>
                  </div>
                </div>
              </div>
              <input
                type="text"
                name="message"
                placeholder="Message"
                className="w-full h-12 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              />
              <button
                type="submit"
                className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-indigo-800 bg-indigo-600 shadow-sm"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
};

export default ContactForm;

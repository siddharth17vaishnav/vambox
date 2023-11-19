

import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="w-full  px-4 overflow-hidden ">
  
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 lg:mx-[140px]">
      <div className="lg:col-span-2 my-4">
        <h1 className="md:text-6xl text-gray-600 sm:text-6xl text-4xl font-semibold py-2">
          We listen.
        </h1>
        <div>
        <p className=" text-gray-600"> Message your suggestion or issue with this plateform. Your feedback matters to us.</p>
        </div>
      </div>
      <div className="my-10">
        <form
          method="POST"
          action="https://getform.io/f/4792cffe-75f1-4e26-bbd2-dc83a2850b55"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-2 flex w-full rounded-md text-gray-600 outline outline-2  outline-offset-2"
              type="email"
              placeholder="Enter your message"
              name="email"
              id="email"
            />
            <button
              className="bg-slate-300 text-gray-600 font-semibold rounded-md w-[200px]  ml-4 my-4 px-6 py-2"
              type="submit"
            >
              Send 
            </button>
          </div>
        </form>
      </div>
    </div>

</div>
  );
};

export default Contact;
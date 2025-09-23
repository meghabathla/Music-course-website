import { Meteors } from "@/components/ui/meteors";
import React from "react";

const MeteorsDemo = () => {
  return (
    <div className=" w-full ">
      <div className="absolute inset-0 h-full w-full scale-[0.30] transform" />
      <div className="relative h-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-900 px-4 py-8 shadow-xl">
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-1 text-white py-20">
          Contact Us
        </h1>

        <p className="relative z-50 mb-4 w-140 text-base font-normal text-slate-500 text-center">
          We are here to help you with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>
        <input
          className="w-150 h-10 bg-black border border-black rounded-md text-slate-200 mb-4 px-2  "
          placeholder="Your email address"
          type="email"
        />
        <textarea
          className="w-150 h-50 bg-black border border-black rounded-md text-slate-200 mb-4 px-2 py-1"
          placeholder="Your message"
        />

        <button className="rounded-lg border border-green-500 px-4 py-1 text-white bg-green-600">
          Send Message
        </button>

        {/* Meaty part - Meteor effect */}
        <Meteors number={30} />
      </div>
    </div>
  );
};
export default MeteorsDemo;

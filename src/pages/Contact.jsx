import React from "react";
import { ArrowSvg } from "../components/Svg";
import EmailSvg from "../assets/icons/email.svg";
import PhoneSvg from "../assets/icons/phone.svg";

const Contact = () => {
  return (
    <div>
      <section className="px-7 md:px-15 xl:px-30 py-15">
        <div className="grid lg:grid-cols-2 gap-y-10">
          <div className="lg:pr-10 xl:pr-20 order-2 lg:order-1">
            <form>
              <div className="mb-2">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  className="rounded-xl px-2 outline-0 bg-[#1E1E1E05] py-0.5 w-full border border-[#1E1E1E14]"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  className="rounded-xl px-2 outline-0 bg-[#1E1E1E05] py-0.5 w-full border border-[#1E1E1E14]"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="companyName">Company Name</label>
                <input
                  id="companyName"
                  type="text"
                  className="rounded-xl px-2 outline-0 bg-[#1E1E1E05] py-0.5 w-full border border-[#1E1E1E14]"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  className="rounded-xl px-2 outline-0 bg-[#1E1E1E05] py-0.5 w-full border border-[#1E1E1E14]"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="products">Interested Products</label>
                <input
                  id="products"
                  className="rounded-xl px-2 outline-0 bg-[#1E1E1E05] py-0.5 w-full border border-[#1E1E1E14]"
                />
              </div>
              <button type="submit" className="pointer-events-none bg-[#A5EB14] text-sm rounded-3xl py-2 mt-5 px-5 flex gap-3 items-center">
                Message <ArrowSvg />
              </button>
            </form>
          </div>
          <div className="order-1 lg:order-2">
            <h1
              className="
                          relative px-7 before:content-[''] before:absolute before:left-[7px] before:top-1/2 before:-translate-y-1/2 before:w-[11px] before:h-[11px] before:rounded-full before:bg-[#CDFF66] 
                          after:content-[''] after:absolute after:right-[7px] after:top-1/2 after:-translate-y-1/2 after:w-[11px] after:h-[11px] after:rounded-full after:bg-[#CDFF66]
                          text-sm mb-5 bg-[#1E1E1E] w-max rounded-2xl py-1 text-white"
            >
              Contact Us
            </h1>
            <h1 className=" text-5xl font-bold leading-14 mb-3">
              Let’s Power Your <span className="text-[#A5EB14]">Fintech</span>{" "}
              Journey
            </h1>
            <button className="border pointer-events-none text-sm border-black rounded-3xl py-2 px-5 flex gap-3 items-center">
              Book a Demo <ArrowSvg />
            </button>
            <div className="flex flex-wrap gap-5 lg:gap-10 my-8 items-center">
              <div className="flex items-center gap-3">
                <div className="bg-[#0A0C33] rounded-full p-2.5 flex items-center justify-center">
                  <img
                    src={EmailSvg}
                    alt="Phone no"
                    className="h-[11px] object-contain"
                  />
                </div>
                <p>hello@bridg.money</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#0A0C33] rounded-full p-2.5 flex items-center justify-center">
                  <img
                    src={PhoneSvg}
                    alt="Phone no"
                    className="h-[12px] object-contain"
                  />
                </div>
                <p>+91-XXXXXXXXXX</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

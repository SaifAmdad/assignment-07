import React from "react";
import FooterImg from "../assets/Footer.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-[#244D3F]">
      <div className="w-[90%] md:w-[80%] lg:w-[75%] mx-auto ">
        <div className="flex flex-col justify-center items-center pt-20">
          <img src={FooterImg} alt="" srcSet="" className="mb-4" />
          <p className="text-[16px] font-normal leading-6 text-white text-center ">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <h4 className="font-medium text-[20px] leading-7 text-white text-center mt-6">
            Social Links
          </h4>
          <div className="flex gap-3 mt-4 mb-10">
            <div className="p-3 bg-white rounded-4xl h-10 w-10">
              <FaInstagram />
            </div>
            <div className="p-3 bg-white rounded-4xl h-10 w-10">
              <FaFacebook />
            </div>
            <div className="p-3 bg-white rounded-4xl h-10 w-10">
              <FaXTwitter />
            </div>
          </div>
        </div>
        <hr className="bg-[#1A8862] border-[0.5px] border-[#1A8862] w-full" />
        <div className="py-8 text-white font-normal text-[16px] leading-6 flex flex-col justify-center items-center gap-3 md:flex-row md:justify-between md:items-center ">
          <p> &copy; 2026 KeenKeeper. All rights reserved.</p>
          <p className="flex gap-3">
            <span> Privacy Policy </span> <span> Terms of Service </span>
            <span> Cookies </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const InsurancePage = () => {
  const cardData = [
    { id: 1, png: "/life.svg", text: "Income Continuation" },
    { id: 2, png: "/education.svg", text: "Education Continuation" },
    { id: 3, png: "/job.svg", text: "Major Medical Illness Cover" },
    { id: 4, png: "/protection.svg", text: "Accidental Death Cover" },
  ];

  return (
    <div className="h-screen w-full flex flex-col font-sans">
      {/* Top gradient header */}
      <div className="h-[22%] sm:h-[25%] w-full bg-gradient-to-br from-[#2B2678] to-[#7E1030] relative">
        {/* White pill */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-[70%] max-w-[200px] h-[65px] rounded-[14px] bg-white shadow-md flex items-center px-3">
          <Image
            src="/EFU.svg"
            alt="EFU Logo"
            width={32}
            height={32}
            className="mr-3"
          />
          <p className="text-[#057D8C] text-[9px] sm:text-[10px] leading-tight text-center">
            Get&nbsp;Insured&nbsp;by<span className="font-bold">Jazz&nbsp;Hifazat</span>{" "}
            <br />
            Program&nbsp;powered&nbsp;by<span className="font-bold">EFU&nbsp;Life</span>
          </p>
        </div>
      </div>

      {/* Platinum Card */}
      <div className="flex flex-col items-center justify-start -mt-12 z-10 px-4">
        <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-4 relative">
          <div className="flex items-center justify-between relative mb-3">
            <div className="flex items-center">
              <Image
                src="/lifeinsurance.svg"
                alt="lifeinsurance"
                width={22}
                height={22}
                className="mr-2"
              />
              <div>
                <h2 className="text-sm sm:text-base font-semibold text-[#677294] leading-snug">
                  Muqammal Tahaffuz Platinum
                </h2>
                <p className="text-[10px] sm:text-[11px] text-[#677294] mt-0.5">
                  In Just <span className="font-semibold">8.80/- PKR</span>{" "}
                  Avail Now
                </p>
              </div>
            </div>
            <div className="absolute -top-2 right-0 text-white px-2.5 py-0.5 rounded-l-md font-bold text-[9px] sm:text-[10px] bg-gradient-to-r from-[#97133B] to-[#343EA0] shadow-md">
              Best Value
            </div>
          </div>

          {/* Cover Info */}
          <div className="mt-2 mb-2">
            <h3 className="text-xs text-[#677294] font-medium mb-1">
              Cover Information
            </h3>
            <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-[#677294]">
              <div>
                <p className="text-[10px] sm:text-[11px]">
                  Income Continuation
                </p>
                <p className="text-xs font-semibold">12 months 20,000</p>
              </div>
              <div>
                <p className="text-[9px]">Accidental Death Sum Assured</p>
                <p className="text-xs font-semibold">500,000</p>
              </div>
              <div>
                <p className="text-[10px] sm:text-[11px]">
                  Education Continuation
                </p>
                <p className="text-xs font-semibold">12 months 5,000</p>
              </div>
              <div>
                <p className="text-[9px]">Major Medical Illness Covers</p>
                <p className="text-xs font-semibold">50,000</p>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="absolute inset-x-0 bottom-0 flex justify-center translate-y-1/2">
            <Link
              href="/tahafuzplatainium"
              className="w-11/12 text-white font-bold py-2 rounded-md shadow-md 
             bg-gradient-to-br from-[#2B2678] to-[#7E1030] text-xs text-center block"
            >
              Get insured in 3 clicks
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex-1 w-full bg-white mt-4 flex flex-col justify-between">
        {/* Covers */}
        <div className="text-[#677294] font-semibold text-lg mt-6 px-4">
          What Hifazat Program Covers
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-6 py-4">
          {cardData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center space-y-1"
            >
              <div className="w-12 h-12 rounded bg-gradient-to-br from-[#97133B] to-[#343EA0] flex items-center justify-center shadow-md">
                <Image src={item.png} alt={item.text} width={22} height={22} />
              </div>
              <p className="text-[9px] sm:text-[10px] font-semibold text-[#677294] leading-snug">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="w-10/12 max-w-xs h-[45px] text-[#677294] font-semibold border border-[#677294] rounded-[5px] shadow-md text-xs">
            Browse All Products
          </button>
        </div>

        {/* Gold Card */}
        <div className="px-4">
          <div className="flex flex-col items-center justify-start mt-6 rounded-xl shadow-xl/30">
            <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-4 relative">
              <div className="flex items-center justify-between relative mb-3 pr-20">
                <div className="flex items-center">
                  <Image
                    src="/protection.png"
                    alt="lifeinsurance"
                    width={22}
                    height={22}
                    className="mr-2"
                  />
                  <h2 className="text-sm sm:text-base font-semibold text-[#677294] leading-snug">
                    Muqammal Tahaffuz Gold
                  </h2>
                </div>

                {/* Floating Circle Badge */}
                <div className="absolute top-6 right-0 translate-x-1/3 flex flex-col items-center justify-center h-20 w-20 sm:h-24 sm:w-24 rounded-full text-white font-bold text-[10px] sm:text-xs bg-gradient-to-r from-[#6D1133] to-[#4E1C59] shadow-md">
                  <span className="text-[7px]">Get Insured Now In</span>
                  <span className="text-lg sm:text-2xl">6.20</span>
                  <span className="text-[7px] font-normal text-center leading-tight">
                    (Daily Charging)
                  </span>
                </div>
              </div>

              {/* Cover Info */}
              <div className="mt-2 pr-20">
                <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[#677294]">
                  <div>
                    <p className="text-[10px] sm:text-[11px]">
                      Income Continuation
                    </p>
                    <p className="text-xs font-semibold">
                      15,000 for 12 months
                    </p>
                  </div>
                  <div>
                    <p className="text-[9px]">Accidental Death Sum Assured</p>
                    <p className="text-xs font-semibold">500,000</p>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-[11px]">
                      Education Continuation
                    </p>
                    <p className="text-xs font-semibold">3,000 for 12 months</p>
                  </div>
                  <div>
                    <p className="text-[9px]">Major Medical Illness Covers</p>
                    <p className="text-xs font-semibold">50,000</p>
                  </div>
                </div>
                <h2 className="text-[8px] mt-3 text-[#677294] mb-2 text-center sm:text-left">
                  Additional Subscriber can avail Online Consultation on <br />
                  EFU mHealth Application for Entire Family.
                </h2>
              </div>

              {/* Button */}
              <div className="absolute inset-x-0 bottom-0 flex justify-center translate-y-1/2">
                <button className="w-11/12 text-white font-bold py-2 rounded-md shadow-md bg-gradient-to-br from-[#2B2678] to-[#7E1030] text-xs">
                  Get Insured Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Final Button */}
        <div className="px-4 pb-6">
          <div className="font-bold text-[#677294] text-base mb-3 text-center sm:text-left">
            Get Your Claim Processed Now
          </div>
          <button className="w-full max-w-xs mx-auto sm:mx-0 h-[45px] text-[#677294] font-semibold border border-[#677294] rounded-[5px] shadow-md text-xs block">
            Submit Claim Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsurancePage;

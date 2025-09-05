"use client";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import EFU from "../components/efu";
import Image from "next/image";

const Page = () => {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan") || "Default Plan"; // fallback

  const cardData = [
    { id: 1, png: "/life.svg", text: "Income Continuation" },
    { id: 2, png: "/education.svg", text: "Education Continuation" },
    { id: 3, png: "/death.svg", text: "Major Medical Illness Cover" },
    { id: 4, png: "/job.svg", text: "Accidental Death Cover" },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#511C57] to-[#7E1030]">
      <EFU />
      <div className="flex flex-col items-center justify-center pt-20 space-y-2">
        {/* Image */}
        <Image src="/protection.svg" alt="Guard" width={90} height={90} />

        {/* Title */}
        <h1 className="text-xl font-bold text-center pt-4">
          {plan}
        </h1>

        <p className="text-center text-xs">
          Hifazat&nbsp;Program&nbsp;is&nbsp;Providing&nbsp;Multiple&nbsp;Option&nbsp;for&nbsp;Adopted
          <br />
          Insurance&nbsp;Like&nbsp;Haafiz&nbsp;and&nbsp;Haafiz&nbsp;Plus
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 px-6 py-4">
          {cardData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center space-y-1"
            >
              <div className="w-30 h-30 rounded bg-[#521B56] flex items-center justify-center shadow-md">
                <Image src={item.png} alt={item.text} width={87} height={22} />
              </div>
            </div>
          ))}
        </div>

        {/* Details */}
        <div className="bg-transparent text-white text-center p-6 rounded-xl space-y-4 max-w-sm">
          <div>
            <p className="text-xs">Income&nbsp;Continuation</p>
            <p className="text-sm font-bold">
              10,000<span className="font-normal text-lg">for&nbsp;12&nbsp;months</span>
            </p>
          </div>
          <div>
            <p className="text-xs">Education Continuation</p>
            <p className="text-sm font-bold">
              2,000 <span className="font-normal text-lg">for 12 months</span>
            </p>
          </div>
          <div>
            <p className="text-xs">Accidental Cover Death Cover</p>
            <p className="text-sm font-bold">250,000</p>
          </div>
          <p className="text-xs mt-6">EFU&nbsp;mHealth&nbsp;Unlimited&nbsp;Subscription*</p>
        </div>

        {/* Subscribe Button */}
        <button className="w-full max-w-xs mx-auto sm:mx-0 h-[45px] text-[#7f1d53] font-semibold border border-[#7f1d53] bg-white rounded-[5px] shadow-md text-lg block">
          Subscribe Now
        </button>
        <p className="text-xs mt-1">Note:&nbsp;All&nbsp;amounts&nbsp;are&nbsp;in&nbsp;PKR</p>
      </div>
    </div>
  );
};

export default Page;

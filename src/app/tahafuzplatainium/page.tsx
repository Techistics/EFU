"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Card = {
  title: string;
  income: string;
  deathCover: string;
  education: string;
  illness?: string; // 👈 optional
  badgeValue: string;
  image: string;
};

const Platinum = () => {
  // Two arrays of cards
  const tahafuzData: Card[] = [
    {
      title: "Tahafuz Silver",
      income: "10,000 for 12 months",
      deathCover: "250,000",
      education: "2,000 for 12 months",
      badgeValue: "3.15",
      image: "/protection.png",
    },
    {
      title: "Tahafuz Gold",
      income: "15,000 for 12 months",
      deathCover: "350,000",
      education: "3,000 for 12 months",
      badgeValue: "4.40",
      image: "/protection.png",
    },
    {
      title: "Tahafuz Platinum",
      income: "12,000 for 12 months",
      deathCover: "500,000",
      education: "5,000 for 12 months",
      badgeValue: "5.98",
      image: "/protection.png",
    },
  ];

  const muqammalData: Card[] = [
    {
      title: "Muqammal Tahaffuz Silver",
      income: "10,000 for 12 months",
      deathCover: "250,000",
      education: "2,000 for 12 months",
      illness: "25,000", // 👈 here it exists
      badgeValue: "4.40",
      image: "/protection.png",
    },
    {
      title: "Muqammal Tahaffuz Gold",
      income: "15,000 for 12 months",
      deathCover: "350,000",
      education: "3,000 for 12 months",
      illness: "35,000",
      badgeValue: "6.20",
      image: "/protection.png",
    },
    {
      title: "Muqammal Tahaffuz Platinum",
      income: "20,000 for 12 months",
      deathCover: "500,000",
      education: "5,000 for 12 months",
      illness: "50,000",
      badgeValue: "8.80",
      image: "/protection.png",
    },
  ];

  const [activeTab, setActiveTab] = useState<"tahafuz" | "muqammal">("tahafuz");

  const cardsData = activeTab === "tahafuz" ? tahafuzData : muqammalData;
  const router = useRouter(); // ✅ define here

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-b from-[#511C57] to-[#7E1030]">
      {/* Header pill */}
      <div className="pb-4 relative">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-[70%] max-w-[200px] h-[65px] rounded-[14px] bg-white shadow-md flex items-center px-3">
          <Image
            src="/EFU.svg"
            alt="EFU Logo"
            width={32}
            height={32}
            className="mr-3"
          />
          <p className="text-[#057D8C] text-[9px] sm:text-[10px] leading-tight text-center">
            Get Insured by <span className="font-bold">Jazz Hifazat</span>{" "}
            <br />
            Program powered by <span className="font-bold">EFU Life</span>
          </p>
        </div>
      </div>

      {/* Cards wrapper */}
      <div className="flex-1 px-4 pt-28 space-y-10">
        {/* Top Buttons (Tabs) */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab("tahafuz")}
            className={`px-12 py-2 text-sm font-semibold rounded-md shadow-md transition ${
              activeTab === "tahafuz"
                ? "bg-white text-[#2B2678] border border-[#2B2678]"
                : "border-[#7F1D53] border text-white"
            }`}
          >
            Tahafuz
          </button>
          <button
            onClick={() => setActiveTab("muqammal")}
            className={`px-6 py-2 text-sm font-semibold rounded-md shadow-md transition ${
              activeTab === "muqammal"
                ? "bg-white text-[#97133B] border border-[#97133B]"
                : "border-[#7F1D53] border text-white"
            }`}
          >
            Muqammal Tahafuz
          </button>
        </div>

        {/* Cards */}
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-start rounded-xl shadow-xl/30"
          >
            <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-3 sm:p-4 relative min-h-[100px] sm:min-h-[100px]">

              {/* Header */}
              <div className="flex items-center justify-between relative mb-2 pr-20">
                <div className="flex items-center">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={22}
                    height={22}
                    className="mr-2"
                  />
                  <h2 className="text-sm sm:text-base font-semibold text-[#677294] leading-snug">
                    {card.title}
                  </h2>
                </div>

                {/* Floating Circle Badge */}
                <div className="absolute top-6 right-0 translate-x-1/3 flex flex-col items-center justify-center h-25 w-25 sm:h-24 sm:w-24 rounded-full text-white font-bold text-[10px] sm:text-xs bg-gradient-to-r from-[#6D1133] to-[#4E1C59] shadow-md">
                  <span className="text-[7px]">Get Insured Now In</span>
                  <span className="text-3xl sm:text-3xl">
                    {card.badgeValue}
                  </span>
                  <span className="text-[7px] font-normal text-center leading-tight">
                    (Daily Charging)
                  </span>
                </div>
              </div>

              {/* Cover Info */}
              <div className="mt-1 pr-20">
                <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[#677294]">
                  <div>
                    <p className="text-[10px] sm:text-[11px]">
                      Income Continuation
                    </p>
                    <p className="text-xs font-semibold">{card.income}</p>
                  </div>
                  <div>
                    <p className="text-[9px]">Accidental Death Sum Assured</p>
                    <p className="text-xs font-semibold">{card.deathCover}</p>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-[11px]">
                      Education Continuation
                    </p>
                    <p className="text-xs font-semibold">{card.education}</p>
                  </div>
                  {/* Only render illness if it exists */}
                  {card.illness && (
                    <div>
                      <p className="text-[9px]">Major Medical Illness Covers</p>
                      <p className="text-xs font-semibold">{card.illness}</p>
                    </div>
                  )}
                </div>
                <h2 className="text-[8px] mt-2 text-[#677294] mb-1 sm:text-left">
                  Additional Subscriber can avail Online Consultation on <br />
                  EFU mHealth Application for Entire Family.
                </h2>
              </div>

              {/* Button */}
              <div className="absolute inset-x-0 bottom-0 flex justify-center translate-y-1/2">
                <button
                  onClick={() =>
                    router.push(
                      `/details?plan=${encodeURIComponent(
                        card.title
                      )}&income=${encodeURIComponent(
                        card.income
                      )}&death=${encodeURIComponent(
                        card.deathCover
                      )}&edu=${encodeURIComponent(
                        card.education
                      )}&illness=${encodeURIComponent(
                        card.illness ?? ""
                      )}&badge=${encodeURIComponent(card.badgeValue)}`
                    )
                  }
                  className="w-44 text-white font-bold py-2 rounded-md shadow-md bg-gradient-to-br from-[#2B2678] to-[#7E1030] text-xs"
                >
                  Get Insured Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Platinum;

import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="flex flex-col mt-20">
        {/* Top Section */}
        <div className="flex-1 flex items-center justify-center mt-20">
          <div className="relative w-[330px] h-[306px] flex items-center justify-center overflow-hidden">
            {/* Background Vector (scaled wider, but not taller) */}
            <Image
              src="/Vector.svg"
              alt="Vector Background"
              fill
              className="object-contain scale-x-100"
            />

            {/* Foreground Illustration */}
            <Image
              src="/Group.svg"
              alt="Student Illustration"
              width={200}
              height={200}
              className="relative z-10"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex-1 flex items-center justify-center">
          <div className="">
            <div className="w-full max-w-sm bg-white rounded-2xl p-6 text-center">
              {/* Title */}
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                &quot;Jazz Hifazat Program <br /> Powered by EFU Life&quot;
              </h2>

              {/* Subtitle */}
              <p className="text-sm text-[#5B6FA0] mb-4">
                Get Coverage 24/7 with EFU’s Nano insurance products which
                includes
              </p>

              {/* Features */}
              <ul className="text-sm text-[#5B6FA0] space-y-2 text-left w-full">
                {[
                  "Accidental Cover",
                  "Income Continuation Benefit",
                  "Education Continuation Benefit",
                  "Cover against Major Medical Illness*",
                  "Free 24/7 doctor’s helpline",
                  "EFU mHealth Subscription",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    {/* Custom Gradient Bullet with Tick */}
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#4E1C59] to-[#6D1133] flex items-center justify-center mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3.25-3.25a1 1 0 111.414-1.414L8.5 11.086l6.543-6.543a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <Link href='/main'><button className="cursor-pointer mt-6 text-xl w-full bg-gradient-to-r from-[#6D1133] to-[#4E1C59] text-white py-3 shadow-md hover:opacity-90 transition">
                Proceed Now
              </button></Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

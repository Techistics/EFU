import React from "react";
import Image from "next/image";
const EFU = () => {
  return (
    <div>
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
            Get&nbsp;Insured&nbsp;by<span className="font-bold">Jazz&nbsp;Hifazat</span>{" "}
            <br />
            Program&nbsp;powered&nbsp;by<span className="font-bold">EFU&nbsp;Life</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EFU;

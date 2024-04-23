"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const blobs = [
  {
    src: "/icons/blob1.svg",
  },
  {
    src: "/icons/blob2.svg",
  },
  {
    src: "/icons/blob3.svg",
  },
];

export default function Hero() {
  const [shiftedBlobs, setShiftedBlobs] = useState<any[]>(blobs);

  useEffect(() => {
    const interval = setInterval(() => {
      shiftBlobs();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const shiftBlobs = () => {
    setShiftedBlobs((prevBlobs) => {
      const firstBlob = prevBlobs.shift();
      prevBlobs.push(firstBlob);
      return [...prevBlobs];
    });
  };
  return (
    <div className="h-[60rem] w-full relative flex items-center justify-center max-w-screen-2xl mx-auto">
      {/* Radial gradient for the container to give a faded look */}

      <div className=" flex flex-col items-center justify-center gap-8 relative">
        <div className="flex">
          {shiftedBlobs.map((item, index) => (
            <Image
              key={index}
              src={item.src}
              alt={`blob-${index}`}
              className={`${
                index === 1
                  ? "w-fit h-[240px] transition-all duration-500 ease-in-out transform translate-y-0"
                  : "w-[201px] h-[201px] transition-all duration-500 delay-500 ease-out"
              } z-10`}
              width={240}
              height={240}
            />
          ))}
        </div>

        <span className="blobBg absolute"></span>
        <h1 className="text-4xl  sm:text-7xl lg:text-[96px] font-bold z-20 text-[#444444]">
          Blobbies
        </h1>
        <p className="text-2xl text-[#C3C2D4] max-w-[528px] text-center z-10">
          “It’s called blob, we are still trying to figure out how it works, the
          technology is centuries ahead of anything we have ever seen” - Albert
          Einstein
        </p>
        <p className="text-3xl text-[#444444] z-10 lg:mt-10">
          A project by <span className="text-[#F5AFDD] text-5xl">Blob</span>
        </p>
        <p>Scroll to read more</p>
      </div>
    </div>
  );
}

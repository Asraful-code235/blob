"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const blobs = [
  {
    src: "/icons/blob_left.svg",
  },
  {
    src: "/icons/blob_middle.png",
  },
  {
    src: "/icons/blob_right.svg",
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
    <div className="h-[60rem] w-full relative flex items-center justify-center max-w-screen-2xl mx-auto bg-transparent">
      <div className="flex flex-col items-center justify-center gap-8 relative ">
        <div className=" hidden sm:flex relative">
          {shiftedBlobs.map((item, index) => (
            <div
              key={index}
              className={`z-10 rounded-full h-36 w-36 md:h-52 md:w-52 drop-shadow-2xl shadow-2xl ${
                index === 1 ? "relative h-40 w-40 md:h-64 md:w-64" : "absolute"
              } h-48 w-48 md:drop-shadow-2xl md:shadow-2xl`}
              style={{
                zIndex: index === 1 ? 20 : 10,
                top: index == 1 ? 40 : "",
                left: index === 0 ? -160 : index === 2 ? 180 : "auto",
                right: index === 2 ? -180 : index === 0 ? 180 : "auto",
              }}
            >
              <Image
                src={item.src}
                alt={`blob-${index}`}
                width={240}
                height={240}
                className="rounded-full h-full w-full"
              />
            </div>
          ))}
        </div>
        <div className=" flex sm:hidden relative">
          {shiftedBlobs.map((item, index) => (
            <div
              key={index}
              className={`z-10 rounded-full h-36 w-36 md:h-52 md:w-52 drop-shadow-2xl shadow-2xl ${
                index === 1 ? "relative h-48 w-48 md:h-64 md:w-64" : "absolute"
              } h-40 w-40 md:drop-shadow-2xl md:shadow-2xl`}
              style={{
                zIndex: index === 1 ? 20 : 10,
                top: index == 1 ? 60 : "",
                left: index === 0 ? -100 : index === 2 ? 120 : "auto",
                right: index === 2 ? -100 : index === 0 ? 120 : "auto",
              }}
            >
              <Image
                src={item.src}
                alt={`blob-${index}`}
                width={240}
                height={240}
                className="rounded-full h-full w-full"
              />
            </div>
          ))}
        </div>
        <span className="blobBg absolute"></span>
        <h1 className="text-4xl sm:text-7xl lg:text-[96px] mt-14 font-bold z-20 text-[#444444] bg-transparent">
          Blobbies
        </h1>
        <p className="text-2xl text-[#C3C2D4] max-w-[528px] text-center z-10 bg-transparent">
          “It’s called blob, we are still trying to figure out how it works, the
          technology is centuries ahead of anything we have ever seen” - Albert
          Einstein
        </p>
        <p className="text-3xl text-[#444444] z-10 lg:mt-10 bg-transparent">
          A project by <span className="text-[#F5AFDD] text-5xl">Blob</span>
        </p>
        <p className="bg-transparent">Scroll to read more</p>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function SayBlob() {
  return (
    <div className="p-4 md:p-28 flex flex-col md:flex-row items-center gap-14 md:gap-28">
      <div className="w-2/5">
        <p className="text-2xl md:text-5xl text-center leading-10">
          Say blob to blob, a collection of 3000 unique blob represented as blob
          on solana, for blob marines by blob.
        </p>
      </div>

      <div className="">
        <Image
          src={"/say_blob.svg"}
          height={800}
          width={800}
          alt="say_blob_image"
        />
      </div>
    </div>
  );
}

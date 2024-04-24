import Image from "next/image";

export default function BillionsBlob() {
  return (
    <div>
      <Image
        src={"/billion_blob.svg"}
        height={600}
        width={1000}
        alt="billion_blob_image"
        className="w-full px-4 md:px-24 hidden md:block"
      />
      <Image
        src={"/billion_blob_small.svg"}
        height={600}
        width={1000}
        alt="billion_blob_image"
        className="w-full px-4 md:px-24 md:hidden"
      />
      <p className="m-6 text-[#6F6E84]">Do you even blob, anon?</p>
    </div>
  );
}

import Image from "next/image";

const navLinks = [
  {
    src: "/icons/twitter.svg",
  },
  {
    src: "/icons/x.svg",
  },
  {
    src: "/icons/owl.svg",
  },
];

export default function Header() {
  return (
    <header className="px-6 py-4 flex items-center justify-between gap-6 sticky top-0">
      {/* image */}
      <div className="flex items-center gap-4">
        <Image
          src={"/icons/bloblogo.svg"}
          alt="logo"
          width={70}
          height={70}
          className="w-16 aspect-auto"
        />
        <p className="text-2xl">NFTBLOB</p>
        <a href="" className="flex items-center gap-2 text-2xl">
          Mint
          <Image
            src={"/icons/arrowright.svg"}
            alt="logo"
            width={16}
            height={16}
            className="w-4 h-4 aspect-auto"
          />
        </a>
      </div>
      <div className="flex items-center gap-3">
        {navLinks.map((item, key) => (
          <a href="" key={key}>
            <Image
              src={item.src}
              width={32}
              height={32}
              alt="navItems"
              className="w-8 h-8"
            />
          </a>
        ))}
      </div>
    </header>
  );
}

import Image from "next/image";

const navLinks = [
  {
    src: "/icons/twitter.svg",
    link: "http://t.me/BlobBlobers",
  },
  {
    src: "/icons/x.svg",
    link: "https://x.com/NFTblobSol?t=AFk2_y1aM9KumToGX_DuyQ&s=09",
  },
  {
    src: "/icons/owl.svg",
    link: "https://dexscreener.com/solana/j8kklmuu95eqckc3ew1ulpy7n9gnakl9o7akcwhz3fki",
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
        <a href="https://launchmynft.io/collections/4ypdezSSgTA57RQ7MFmaFEtQrssfzyxpjtcoQ5PmvFsc/yifTrDl9DsX6GDhkpTLv" className="flex items-center gap-2 text-2xl">
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
      <div className="sm:flex items-center gap-3 hidden">
        {navLinks.map((item, key) => (
          <a href={item.link} target="_blank" key={key}>
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
      <div className="flex sm:hidden">
        <a href={navLinks[2].link} target="_blank">
          <Image
            src={navLinks[2].src}
            width={32}
            height={32}
            alt="navItems"
            className="w-8 h-8"
          />
        </a>
      </div>
    </header>
  );
}

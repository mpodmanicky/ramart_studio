import Link from "next/link";
import Image from "next/image";
const LINKS = [
  { key: "/", label: "portfólio" },
  { key: "o-nas", label: "o nás" },
  { key: "sluzby", label: "služby" },
  { key: "kontakt", label: "kontakt" },
];

export default function Header() {
  return (
    <div className="px-6 md:px-20 py-6 md:py-10 w-full bg-white flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center text-center md:text-left">
        {/*Image logo and architektura/interier/dizajn/ */}
        <Link href="/">
          <Image
            src="/ramart_logo.png"
            width={110}
            height={50}
            alt="Ramart Studio logo"
          />
        </Link>
        <span className="font-sans font-extralight text-xs md:text-sm">
          architektúra / interiér / dizajn
        </span>
      </div>
      {/* Mapped out links */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {LINKS.map((link) => (
          <Link
            key={link.key}
            href={`/${link.key}`}
            className="text-sm font-sans font-extralight hover:text-gray-700 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

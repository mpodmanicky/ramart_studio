import Link from "next/link";
import Image from "next/image";
const LINKS = [
  { key: "/", label: "portfólio" },
  { key: "o-nas", label: "o nás" },
  { key: "sluzby", label: "služby" },
  { key: "kontakt", label: "kontakt" }
];

export default function Header() {
  return (
    <div className="px-20 py-10 w-full bg-white flex justify-between items-center">
      <div className="flex gap-4 items-center">
        {/*Image logo and architektura/interier/dizajn/ */}
        <Link href="/">
        <Image src="/ramart_logo.png" width={110} height={50} alt="Ramart Studio logo" />
        </Link>
        <span className="font-sans font-extralight text-sm">architektúra / interiér / dizajn</span>
      </div>
      {/* Mapped out links */}
      <div className="flex gap-4">
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
  )
}
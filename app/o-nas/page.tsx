import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O nás",
  description:
    "Sme architektonické štúdio mladých architektov v Banskej Bystrici s pôsobnosťou po celom Slovensku. Zakladateľom je autorizovaný architekt Ing.arch. Martin Rajčan, absolvent Fakulty architektúry STU v Bratislave.",
  openGraph: {
    title: "O nás | Ramart Studio",
    description:
      "Architektonické štúdio založené v roku 2013. Hľadáme riešenia v oblasti architektúry aj interiéru šité na mieru každému klientovi.",
  },
};

export default function Page() {
  return (
    <main className="p-6 md:p-20 min-h-screen">
      {/* Nadpis */}
      <div className="w-full flex items-center justify-center">
        <h1 className="font-sans text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-extralight mb-8 md:mb-12">
          O nás
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-8 md:gap-2 justify-center items-center">
        <div className="items-center">
          <Image
            src="/ramart_logo.png"
            alt="Ramart Studio Logo"
            width={300}
            height={200}
          />
        </div>
        <div className="max-w-lg text-center md:text-left px-4 md:px-0">
          <p className="text-md font-sans font-extralight">
            Sme architektonické štúdio mladých architektov lokalizované v
            Banskej Bystrici s pôsobnosťou po celom Slovensku
          </p>
          <br></br>
          <p className="text-md font-sans font-extralight">
            Zakľadateľom ateliéru v roku 2013 je autorizovaný architekt
            Ing.arch. Martin Rajčan, absolvent Fakulty architektúry STU v
            Bratislave
          </p>
          <br></br>
          <p className="text-md font-sans font-extralight">
            Sme ateliér, ktorý hľadá riešenia v oblasti architektúry aj
            interiéru šité na mieru každému klientovi a každému zadaniu zvlášť
          </p>
        </div>
      </div>
    </main>
  );
}

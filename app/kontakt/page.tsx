import { MapPin, User, Mail, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktné údaje Ramart Studio - Lazovná 43, Banská Bystrica. Tel: +421908477417, Email: martin@ramartstudio.sk. Fakturačné údaje: Ramart s.r.o., IČO: 47497785, IČ DPH: SK2023911197.",
  openGraph: {
    title: "Kontakt | Ramart Studio",
    description:
      "Kontaktujte nás pre konzultáciu vášho architektonického projektu. Sídlo v Banskej Bystrici, pôsobnosť po celom Slovensku.",
  },
};

export default function Page() {
  return (
    <div className="min-h-screen p-6 md:p-20">
      <main>
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start justify-center">
          <div className="flex flex-col space-y-6 md:space-y-8">
            <h1 className="text-3xl md:text-4xl font-extralight">
              kontaktné údaje
            </h1>
            <div className="flex flex-row gap-4 md:gap-8">
              <MapPin className="w-6 h-6 text-black" />
              <p className="text-md font-extralight">
                Lazovná 43, Banská Bystrica 97401
              </p>
            </div>
            <div className="flex flex-row gap-4 md:gap-8">
              <Mail className="w-6 h-6 text-black" />
              <p className="text-md font-extralight">martin@ramartstudio.sk</p>
            </div>
            <div className="flex flex-row gap-4 md:gap-8">
              <Phone className="w-6 h-6 text-black" />
              <p className="text-md font-extralight">+421908477417</p>
            </div>
          </div>
          <div className="flex flex-col space-y-6 md:space-y-8 text-left">
            <h1 className="text-3xl md:text-4xl font-extralight">
              fakturačné údaje
            </h1>
            <div className="flex flex-row gap-4 md:gap-8">
              <User className="w-6 h-6 text-black" />
              <p className="text-md font-extralight">Ramart s.r.o</p>
            </div>
            <div className="flex flex-row gap-4 md:gap-8">
              <MapPin className="w-6 h-6 text-black" />
              <p className="text-md font-extralight">
                Kráĺovohoľská 2, Banská Bystrica 97411
              </p>
            </div>
            <div className="flex flex-row gap-4 md:gap-8">
              <p className="uppercase font-semibold text-md">ičo</p>
              <p className="text-md font-extralight">47497785</p>
            </div>
            <div className="flex flex-row gap-4 md:gap-8">
              <p className="uppercase font-semibold text-md">ič dph</p>
              <p className="text-md font-extralight">SK2023911197</p>
            </div>
          </div>
        </div>
        <div className="mt-12 md:mt-20">
          <iframe
            className="w-full"
            height="400"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=lazovna%2043%20Banska%20Bystrica+(Lazovna)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </main>
    </div>
  );
}

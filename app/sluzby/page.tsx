import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Služby",
  description:
    "Ponúkame služby v oblasti architektúry, interiérového dizajnu a poradenstva. Navrhujeme novostavby aj rekonštrukcie rodinných domov, bytových domov, administratívnych objektov a venujeme sa urbanizmu.",
  openGraph: {
    title: "Služby | Ramart Studio",
    description:
      "Architektonické služby - návrhy novostavieb, rekonštrukcie, interiérový dizajn, urbanizmus a poradenstvo v oblasti architektúry a nehnuteľností.",
  },
};

export default function Page() {
  return (
    <div className="min-h-screen w-full p-20">
      <main className="px-32">
        <h1 className="text-5xl font-sans font-extralight mb-16">Služby</h1>
        {/* popis s <p tagom> */}
        <div className="space-y-8 font-extralight text-md">
          <p className="font-sans font-semibold text-md">
            Ponúkame služby v oblasti architektúry, interiérového dizajnu a
            poradenstva v oblasti architektúry a nehnuteľností.
          </p>
          <p>
            <strong className="font-semibold">
              Pracujeme s klientom individuálne
            </strong>{" "}
            od výberu pozemku, priestoru, nehnuteľnosti cez architektonickú
            štúdiu, projektovú dokumentáciu až po odovzdanie zrealizovaného
            diela ....
          </p>
          <p>
            <strong className="font-semibold">
              Navrhujeme novostavby aj rekonštrukcie
            </strong>{" "}
            rodinných domov, bytových domov, administratívnych objektov,
            rekreačných objektov, školských a zdravotníckych zariadení, objektov
            pre kultúru aj šport, športových areálov, verejných budov,
            pamiatkových objektov ....
          </p>
          <p>
            <strong className="font-semibold">
              Venujeme sa návrhu interiérov
            </strong>{" "}
            našich architektonických projektov aj interiérom zvlášť. Od
            privátnych interiérov, cez komerčné priestory reštaurácie, kaviarne,
            lekárne .....
          </p>
          <p>
            <strong className="font-semibold">Riešime urbanizmus</strong> miest
            a obcí, developerskych projektov, individuálnej bytovej výstavby
            IBV, hromadnej bytovej výstavby HBV, polyfunčných území ....
          </p>
          <p>
            <strong className="font-semibold">Poskytujeme poradenstvo</strong> v
            oblasti architektúry, nehnuteľností a stavebnej legislatívy pred
            investičným zámerom kúpy, výstavby alebo rekonštrukcie nehnuteľnosti
            ....
          </p>
        </div>
      </main>
    </div>
  );
}

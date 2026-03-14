import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Domov",
  description:
    "Ramart Studio - Architektonické štúdio v Banskej Bystrici. Realizujeme projekty rodinných domov, rekonštrukcie, interiéry, kaviarne a urbanistické riešenia po celom Slovensku.",
  openGraph: {
    title: "Ramart Studio | Architektúra, Interiér, Dizajn",
    description:
      "Portfólio architektonických projektov - rodinné domy, rekonštrukcie, interiéry a urbánne riešenia v Banskej Bystrici a na Slovensku.",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Projects Grid - Masonry Style Layout */}
      <div className="px-4 md:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-350 mx-auto">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href={`/projekty/${project.slug}`}
              className="group block relative"
            >
              {/* Project Card */}
              <div className="relative">
                {/* Image Container with varying aspect ratios for masonry effect */}
                <div
                  className={`relative overflow-hidden bg-gray-200 ${
                    index % 5 === 0
                      ? "aspect-3/4"
                      : index % 5 === 1
                        ? "aspect-square"
                        : index % 5 === 2
                          ? "aspect-4/3"
                          : index % 5 === 3
                            ? "aspect-3/4"
                            : "aspect-square"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Project Info */}
                <div className="mt-4 space-y-1">
                  {/* Categories - small, lowercase */}
                  <p className="text-xs md:text-sm font-light text-gray-500 tracking-wide lowercase">
                    {project.categories.join(" / ")}
                  </p>

                  {/* Title - uppercase, bold */}
                  <h2 className="text-base md:text-lg lg:text-xl font-normal uppercase tracking-wide leading-tight group-hover:text-gray-600 transition-colors duration-300">
                    {project.title}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

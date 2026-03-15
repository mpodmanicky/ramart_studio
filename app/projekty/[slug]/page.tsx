import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/lib/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for each project page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Projekt nenájdený",
    };
  }

  return {
    title: project.title,
    description: `${project.title} - ${project.categories.join(", ")}. Architektonický projekt od Ramart Studio.`,
    openGraph: {
      title: `${project.title} | Ramart Studio`,
      description: `${project.title} - ${project.categories.join(", ")}`,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen p-8 md:p-16 lg:p-24">
      {/* Back button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-light hover:text-gray-600 transition-colors mb-8"
      >
        <span>←</span> Späť na projekty
      </Link>

      {/* Project Header */}
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <p className="text-sm font-light text-gray-600 mb-2">
            {project.categories.join(" / ")}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight uppercase">
            {project.title}
          </h1>
        </div>

        {/* Main Project Image */}
        <div className="relative w-full aspect-video mb-8 rounded-sm overflow-hidden bg-transparent">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-all duration-700 ease-in-out hover:scale-105"
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>

        {/* Project Details */}
        <div className="flex flex-col md:flex-row gap-12 mt-12">
          {/* Info Sidebar */}
          <div className="w-full md:w-1/4 space-y-6">
            {project.location && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-800 mb-1">
                  Lokalita
                </p>
                <p className="text-sm font-light">{project.location}</p>
              </div>
            )}
            {project.yearDesign && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-800 mb-1">
                  Rok návrhu
                </p>
                <p className="text-sm font-light">{project.yearDesign}</p>
              </div>
            )}
            {project.yearRealization && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-800 mb-1">
                  Rok realizácie
                </p>
                <p className="text-sm font-light">{project.yearRealization}</p>
              </div>
            )}
            {project.state && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-800 mb-1">
                  Stav
                </p>
                <p className="text-sm font-light">{project.state}</p>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="w-full md:w-3/4">
            {project.description && (
              <div className="text-lg font-extralight leading-relaxed text-gray-800 whitespace-pre-line">
                {project.description}
              </div>
            )}

            {/* Project Gallery by Sections */}
            {project.sections && project.sections.length > 0 && (
              <div className="mt-16 space-y-16">
                {project.sections.map((section, sIdx) => (
                  <div key={sIdx} className="space-y-8">
                    {section.title &&
                      section.title.toLowerCase() !== "galéria" && (
                        <h3 className="text-xl font-extralight tracking-wider uppercase border-b border-gray-100 pb-4">
                          {section.title}
                        </h3>
                      )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {section.images.map((img, index) => (
                        <div
                          key={index}
                          className={`relative w-full overflow-hidden bg-transparent ${
                            index % 3 === 0 ? "aspect-square" : "aspect-4/3"
                          } ${
                            index % 5 === 0 ? "md:col-span-2 aspect-video" : ""
                          }`}
                        >
                          <Image
                            src={img}
                            alt={`${project.title} - ${section.title || "fotografia"} ${index + 1}`}
                            fill
                            className="object-contain transition-transform duration-700 hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 800px"
                            unoptimized
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {project.gallery && project.gallery.length > 0 ? (
              <div className="mt-16 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {project.gallery.map((img, index) => (
                    <div
                      key={index}
                      className={`relative w-full overflow-hidden bg-transparent ${
                        index % 3 === 0 ? "aspect-square" : "aspect-4/3"
                      } ${index % 5 === 0 ? "md:col-span-2 aspect-video" : ""}`}
                    >
                      <Image
                        src={img}
                        alt={`${project.title} - fotografia ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 800px"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
}

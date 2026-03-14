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
        <div className="relative w-full aspect-[16/9] mb-8 rounded-sm overflow-hidden bg-gray-100">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out hover:scale-105"
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>

        {/* Project Description - Placeholder for future content */}
        <div className="prose prose-lg max-w-none">
          {project.description && (
            <p className="text-lg font-extralight leading-relaxed">
              {project.description}
            </p>
          )}

          {/* Add more images, details, descriptions here */}
          <div className="mt-12 space-y-8">
            <p className="text-gray-600 font-light">
              Ďalšie informácie a fotografie projektu budú doplnené...
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

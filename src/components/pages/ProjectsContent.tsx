import { useLang } from '../../i18n/useLang';
import { getTranslations } from '../../i18n/translations';
import ProjectCard from '../ProjectCard';

const projectTags: string[][] = [
  ["React", "TypeScript", "Tailwind"],
  ["Next.js", "Stripe", "Prisma"],
  ["Astro", "MDX", "SQLite"],
  ["Node.js", "Express", "PostgreSQL"],
  ["React Native", "Firebase"],
  ["Astro", "CSS"],
];

export default function ProjectsContent() {
  const lang = useLang();
  const t = getTranslations(lang);
  const projects = t.projectData.all;

  return (
    <>
      <section className="text-center px-8 pt-16 pb-8">
        <h1 className="text-3xl mb-2">{t.projects.title}</h1>
        <p className="text-gray-500 dark:text-gray-400">{t.projects.subtitle}</p>
      </section>

      <section className="max-w-[900px] mx-auto px-8 pb-16 grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            title={project.title}
            description={project.description}
            tags={projectTags[i] ?? []}
          />
        ))}
      </section>
    </>
  );
}

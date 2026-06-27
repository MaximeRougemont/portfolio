import { useLang } from '../../i18n/useLang';
import { getTranslations } from '../../i18n/translations';

export default function AboutContent() {
  const lang = useLang();
  const t = getTranslations(lang);
  const skills = ["TypeScript", "React", "Astro", "Node.js", "Tailwind CSS", "Next.js", "Git", "Figma"];

  return (
    <section className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-2">{t.about.title}</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">{t.about.subtitle}</p>

      <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.about.p1 }} />
      <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
        <p>{t.about.p2}</p>
        <p>{t.about.p3}</p>
      </div>

      <hr className="my-10 border-gray-200 dark:border-gray-700" />

      <h2 className="text-xl font-semibold mb-4">{t.about.skillsTitle}</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="px-4 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-700">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

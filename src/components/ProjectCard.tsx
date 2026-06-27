import { useLang } from '../i18n/useLang';
import { getTranslations } from '../i18n/translations';

interface Props {
  title: string;
  description: string;
  url?: string;
  tags?: string[];
}

export default function ProjectCard({ title, description, url, tags = [] }: Props) {
  const lang = useLang();
  const t = getTranslations(lang);
  return (
    <article className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 dark:hover:shadow-black/30">
      <h2 className="text-xl mb-2">{title}</h2>
      <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">{description}</p>
      {tags.length > 0 && (
        <ul className="flex flex-wrap gap-2 mb-4 list-none">
          {tags.map((tag) => (
            <li key={tag} className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-3 py-1 rounded-full border border-gray-300 dark:border-gray-600">{tag}</li>
          ))}
        </ul>
      )}
      {url && <a href={url} className="text-blue-600 text-sm font-medium no-underline hover:underline">{t.projectCard.viewProject}</a>}
    </article>
  );
}

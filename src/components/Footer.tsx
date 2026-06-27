import { getTranslations } from '../i18n/translations';
import { useLang } from '../i18n/useLang';

export default function Footer() {
  const lang = useLang();
  const t = getTranslations(lang);
  const year = new Date().getFullYear();

  return (
    <footer className="text-center px-6 py-8 text-gray-400 text-sm border-t border-gray-200 dark:border-gray-700 mt-16">
      <p>&copy; {year} Maxime DAMOUR ROUGEMONT. {t.footer}</p>
    </footer>
  );
}

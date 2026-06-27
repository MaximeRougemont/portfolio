import { useLang } from '../../i18n/useLang';
import { getTranslations } from '../../i18n/translations';

const inputClass = "w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-inherit text-base focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-500/10 transition-colors";

export default function ContactContent() {
  const lang = useLang();
  const t = getTranslations(lang);

  return (
    <>
      <section className="text-center px-8 pt-16 pb-8">
        <h1 className="text-3xl mb-2">{t.contact.title}</h1>
        <p className="text-gray-500 dark:text-gray-400">{t.contact.subtitle}</p>
      </section>

      <section className="max-w-[500px] mx-auto px-8 pb-16">
        <form action="#" method="POST">
          <div className="mb-5">
            <label htmlFor="name" className="block mb-1.5 font-medium text-sm">{t.contact.name}</label>
            <input type="text" id="name" name="name" required className={inputClass} />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block mb-1.5 font-medium text-sm">{t.contact.email}</label>
            <input type="email" id="email" name="email" required className={inputClass} />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="block mb-1.5 font-medium text-sm">{t.contact.message}</label>
            <textarea id="message" name="message" rows={5} required className={inputClass} />
          </div>
          <button type="submit" className="w-full py-3 px-6 text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg border-none cursor-pointer hover:opacity-90 transition-opacity">{t.contact.send}</button>
        </form>
      </section>
    </>
  );
}

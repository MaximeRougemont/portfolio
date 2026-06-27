import { useState, useRef, useLayoutEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { getTranslations } from '../i18n/translations';
import { useLang } from '../i18n/useLang';

const navLinks = (t: ReturnType<typeof getTranslations>) => [
  { href: "/", label: t.nav.about },
  { href: "/projects", label: t.nav.projects },
  { href: "/contact", label: t.nav.contact },
];

export default function Navbar() {
  const lang = useLang();
  const t = getTranslations(lang);
  const links = navLinks(t);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const idxRef = useRef(0);

  function syncIndicator() {
    const el = linksRef.current[idxRef.current];
    if (el && indicatorRef.current) {
      indicatorRef.current.style.left = `${el.offsetLeft}px`;
      indicatorRef.current.style.width = `${el.offsetWidth}px`;
    }
  }

  useLayoutEffect(() => {
    function check() {
      const path = window.location.pathname;
      const idx = links.findIndex(l => l.href === path);
      if (idx !== idxRef.current && idx >= 0) {
        setActiveIndex(idx);
        idxRef.current = idx;
      }
    }
    check();
    syncIndicator();
    requestAnimationFrame(() => setAnimate(true));
    document.addEventListener('astro:page-load', check);
    const id = setInterval(() => {
      const path = window.location.pathname;
      const idx = links.findIndex(l => l.href === path);
      if (idx !== idxRef.current && idx >= 0) {
        setActiveIndex(idx);
        idxRef.current = idx;
        requestAnimationFrame(() => requestAnimationFrame(syncIndicator));
      }
    }, 150);
    return () => {
      document.removeEventListener('astro:page-load', check);
      clearInterval(id);
    };
  }, []);

  useLayoutEffect(() => {
    syncIndicator();
  });

  return (
    <nav data-astro-transition-persist="nav" className="md:sticky md:top-0 max-md:fixed max-md:bottom-0 max-md:left-0 max-md:right-0 z-50 md:bg-transparent md:dark:bg-transparent max-md:bg-gray-100/90 max-md:dark:bg-gray-900/90 max-md:backdrop-blur-sm max-md:border-t border-gray-200 dark:border-gray-700 px-6 py-3 md:py-4">
      <div className="max-w-5xl mx-auto flex items-center w-full">
        <div className="grow shrink basis-0 flex items-center max-md:invisible">
          <a href="/" className="hidden md:flex items-center gap-2">
            <span className="relative w-2.5 h-2.5">
              <span className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-75" />
              <span className="absolute inset-0 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.8)]" />
            </span>
            <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">Maxime DAMOUR ROUGEMONT</span>
          </a>
        </div>

        <div className="relative p-1 bg-gray-200/70 dark:bg-gray-800/80 rounded-full shadow-sm dark:shadow-gray-900/50">
          <div className="relative flex">
            <div
              ref={indicatorRef}
              className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg shadow-blue-500/30 ${
                animate ? 'transition-all duration-500 ease-out' : ''
              }`}
            />
            {links.map((link, i) => (
              <a
                key={link.href}
                ref={el => { linksRef.current[i] = el; }}
                href={link.href}
                className={`relative z-10 px-3 py-1.5 md:py-2 text-xs md:text-sm font-medium whitespace-nowrap ${
                  activeIndex === i
                    ? 'text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="grow shrink basis-0 flex justify-end">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

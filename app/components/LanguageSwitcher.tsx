'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useState } from 'react';
import 'flag-icons/css/flag-icons.min.css';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: 'gb' },
    { code: 'es', name: 'Español', flag: 'es' },
    { code: 'cat', name: 'Català', flag: 'es-ct' },
    { code: 'fr', name: 'Français', flag: 'fr' },
    { code: 'it', name: 'Italiano', flag: 'it' }
  ];

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  const switchLanguage = (newLocale: string) => {
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg shadow hover:bg-gray-50"
      >
        <span className={`fi fi-${currentLanguage.flag} rounded-sm`} style={{ width: '20px', height: '15px' }} />
        <span>{currentLanguage.name}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => switchLanguage(language.code)}
              className={`w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-50 ${
                locale === language.code ? 'bg-gray-100' : ''
              } ${language.code !== languages[languages.length - 1].code ? 'border-b' : ''}`}
            >
              <span className={`fi fi-${language.flag} rounded-sm`} style={{ width: '20px', height: '15px' }} />
              <span>{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
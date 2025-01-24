
'use client'; // Mark this as a Client Component

import { usePathname, useRouter } from 'next/navigation';
import { ChangeEvent } from 'react';

const LanguageSwitcher = ({ locale }: { locale: "en" | "ar" }) => {
    const router = useRouter();
    const pathname = usePathname();

    const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value;
        const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
        router.push(newPathname);
    };

    return (
        <select onChange={changeLanguage} defaultValue={locale}>
            {['ar', 'en'].map((lang) => (
                <option key={lang} value={lang}>          {lang === 'en' ? 'English' : 'العربية'} {/* Add language labels */}</option>
            ))}
        </select>
    );
};


export default LanguageSwitcher;
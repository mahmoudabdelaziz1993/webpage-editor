import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import '../globals.css';
import Navbar from '../ui/Navbar';
import { IBM_Plex_Sans_Arabic } from 'next/font/google'
import Footer from '../ui/Footer';


const ibm = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm'
})
  ;
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: "ar" | "en" }>;
}) {
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  if (
    locale &&
    !routing.locales.includes(locale)) {
    notFound();
  }
  // Enable static rendering
  setRequestLocale(locale);
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} className={ibm.className}>
      <body className=' flex flex-col min-h-screen w-full'>

        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="flex-1 mt-20 pt-4">
            {/* <LanguageSwitcher locale={locale} /> */}
            {children}
          </main>
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

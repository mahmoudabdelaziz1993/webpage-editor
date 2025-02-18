import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
export async function generateMetadata({ params }: { params: Promise<{ locale: "ar" | "en" }> }) {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: 'HomePage' });

  return {
    title: t('title')
  };
}
export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href="/store" >{t('cta')}</Link>
    </div>
  );
}
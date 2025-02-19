// import { Link } from '@/i18n/routing';
// import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Hero01 from '../ui/Hero/01';
import ProductCollection01 from '../ui/Product/Collection/01';
export async function generateMetadata({ params }: { params: Promise<{ locale: "ar" | "en" }> }) {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: 'HomePage' });

  return {
    title: t('title')
  };
}
export default function HomePage() {
  // const t = useTranslations('HomePage');
  return (
    <div>
      <Hero01 />
      <ProductCollection01 />
    </div>
  );
}
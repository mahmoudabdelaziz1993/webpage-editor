import Hero01 from "@/app/ui/hero/01";
import ProductCard01 from "@/app/ui/product-card-01";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Page() {
    const t = useTranslations('store');

    return (
        <div>
            <h1>{t('title')}</h1>
            <Hero01 />
            <ProductCard01 name={t('product.title')} price={Number(t('product.price'))} />
            <Link href="/" >{t('cta')}</Link>
        </div>
    );

}
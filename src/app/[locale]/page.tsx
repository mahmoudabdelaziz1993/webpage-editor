'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { Link } from '@/i18n/routing';
// import { useTranslations } from 'next-intl';
// import { getTranslations } from 'next-intl/server';

import { Data, DefaultComponentProps, Render } from "@measured/puck";
import { config } from "../puck-config";
import { useEffect, useState } from "react";

// export async function generateMetadata({ params }: { params: Promise<{ locale: "ar" | "en" }> }) {
//   const { locale } = await params;

//   const t = await getTranslations({ locale, namespace: 'HomePage' });

//   return {
//     title: t('title')
//   };
// }

export type PuckData = Data<DefaultComponentProps, any>;

export default function HomePage() {
  // const t = useTranslations('HomePage');
  const [data, setData] = useState<PuckData>({

  } as PuckData);

  useEffect(() => {
    console.log("Initial render - loading data from localStorage");
    const savedData = localStorage.getItem("puck-data");
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        console.log("Parsed data from localStorage", parsedData);
        // Validate the parsed data
        if (parsedData.root && parsedData.content && parsedData.zones) {
          setData(parsedData);
        } else {
          console.error("Invalid data structure in localStorage");
          // Reset to default data if the saved data is invalid
          setData({
            root: { props: {} },
            content: [],
            zones: {},
          });
        }
      } catch (error) {
        console.error("Failed to parse saved data", error);
      }
    } else {
      console.log("No saved data found in localStorage");
    }
  }, []);


  return (
    <Render config={config} data={data} />
  );
}
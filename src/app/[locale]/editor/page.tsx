/* eslint-disable @typescript-eslint/no-explicit-any */
// src/app/puck/editor/page.tsx
"use client";

import { useState, useEffect } from "react";
import { Puck, DefaultComponentProps, Data } from "@measured/puck";
import { config } from "@/app/puck-config";
import "@measured/puck/puck.css";
// import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";

export type PuckData = Data<DefaultComponentProps, any>;

export default function PuckEditor() {
  const [data, setData] = useState<PuckData>({

  } as PuckData);
  const router = useRouter()
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

  useEffect(() => {
    console.log("Data state updated", data);
  }, [data]);

  const saveData = (newData: Data<DefaultComponentProps, any>) => {
    console.log("Publish Page Data", newData);
    setData(newData);
    localStorage.setItem("puck-data", JSON.stringify(newData));
    // revalidatePath("/");
    router.push('/');

  };

  return (
    <Puck
      key={JSON.stringify(data)} // Force re-render when data changes
      config={config}
      data={data}
      onPublish={saveData}
    />
  );
}
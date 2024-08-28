"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React from "react";

export default function HomePage() {
  const router = useRouter();
  const t = useTranslations("HomePage");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "vi") {
      router.push("/vi");
    } else if (e.target.value === "en") {
      router.push("/en");
    }
  };

  return (
    <>
      <select onChange={handleChange} name="" id="">
        <option value="vi">Vietnamese</option>
        <option value="en">English</option>
      </select>
      <h1>{t("title")}</h1>
    </>
  );
}

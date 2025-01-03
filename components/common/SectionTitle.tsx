import React from "react";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <h3 className=" font-medium text-[20px] md:text-[30px] mb-5">{title}</h3>
  );
}

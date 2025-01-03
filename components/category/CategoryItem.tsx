import Image from "next/image";
import React from "react";

export default function CategoryItem({ category }: any) {
  if (category.id > 4) return null;
  return (
    <div className=" relative">
      <Image
        src={category.image}
        alt={category.name}
        width={300}
        height={300}
        className=" rounded-lg"
      />
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-[#ffffffcd]">
        <h3 className=" text-center font-semibold text-lg">{category.name}</h3>
      </div>
    </div>
  );
}

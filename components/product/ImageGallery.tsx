"use client";
import Image from "next/image";
import React from "react";

export default function ImageGallery({ images }: any) {
  const [selectedImage, setSelectedImage] = React.useState(images[0]);
  const changeImage = (image: string) => {
    setSelectedImage(image);
  };
  return (
    <div>
      <div className=" md:w-[350px] max-h-[350px]">
        <Image src={selectedImage} alt={"img"} width={500} height={500} />
      </div>
      <div className=" flex gap-3 mt-2">
        {images.map((image: string) => (
          <Image
            key={image}
            src={image}
            alt={"img"}
            width={100}
            height={100}
            onClick={() => changeImage(image)}
            className={`${
              selectedImage === image
                ? "border-2 border-blue-500 "
                : " border opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

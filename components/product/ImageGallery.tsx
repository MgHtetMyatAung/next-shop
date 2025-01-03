"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function ImageGallery({ images }: any) {
  const searchParams = useSearchParams();

  const imageId = searchParams.get("image");
  const [selectedImage, setSelectedImage] = React.useState(
    images[Number(imageId)] || images[0]
  );
  const changeImage = (image: any, index: any) => {
    setSelectedImage(image);
    window.history.pushState({}, "", `?image=${index}`);
  };
  return (
    <div>
      <div className=" md:w-[350px] max-h-[350px]">
        <Image src={selectedImage} alt={"img"} width={500} height={500} />
      </div>
      <div className=" flex gap-3 mt-2">
        {images.map((image: string, index: number) => (
          <Image
            key={image}
            src={image}
            alt={"img"}
            width={100}
            height={100}
            onClick={() => changeImage(image, index)}
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

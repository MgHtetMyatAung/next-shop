import ImageGallery from "@/components/product/ImageGallery";
import { AppData } from "@/constant/config";
import { BaseUrl } from "@/services/api.config";
import React from "react";

const getProductDetail = async (id: string) => {
  const res = await fetch(`${BaseUrl}/products/${id}`);
  return res.json();
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const post = await getProductDetail(id);
  return {
    title: post.title + "|" + AppData.title,
    description: post.description,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const productId = (await params).id;
  const product = await getProductDetail(productId);
  console.log(product);
  return (
    <div className=" container py-10">
      <div className=" flex flex-col md:flex-row gap-5">
        <ImageGallery images={product.images} />
        <div className=" space-y-3">
          <h3 className=" font-semibold text-lg lg:text-xl">{product.title}</h3>
          <p className=" text-sm lg:text-base text-gray-600">
            {product.description}
          </p>
          <p className=" text-xl font-semibold">$ {product.price}</p>
        </div>
      </div>
    </div>
  );
}

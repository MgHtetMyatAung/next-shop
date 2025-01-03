import { BaseUrl } from "@/services/api.config";
import React from "react";
import ProductItem from "./ProductItem";
import SectionTitle from "../common/SectionTitle";

const getProducts = async () => {
  const res = await fetch(`${BaseUrl}/products?offset=0&limit=12`);
  const data = await res.json();
  return data;
};

export default async function ProductLists() {
  const products = await getProducts();
  console.log(products);
  if (!products) return <p>No Products</p>;
  return (
    <div className=" container py-10">
      <SectionTitle title="Product Lists" />
      <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 ">
        {products.map((product: any) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

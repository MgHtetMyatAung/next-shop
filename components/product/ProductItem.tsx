import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductItem({ product }: any) {
  return (
    <Link href={`/products/${product.id}`}>
      <div>
        <Image
          src={product.images[0]}
          alt={product.title}
          width={300}
          height={300}
          blurDataURL=""
        />
      </div>
      <div>
        <h3 className=" font-semibold text-sm">{product.title}</h3>
        {/* <p>{product.description}</p> */}
        <p>$ {product.price}</p>
      </div>
    </Link>
  );
}

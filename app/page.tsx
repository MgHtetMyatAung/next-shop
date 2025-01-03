import CategoryLists from "@/components/category/CategoryLists";
import ProductLists from "@/components/product/ProductLists";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section>
        <Image
          src={"/banner/home-banner.png"}
          width={1920}
          height={300}
          alt="banner"
          className=" hidden md:block"
        />
        <Image
          src={"/banner/mb-banner.png"}
          width={1920}
          height={300}
          alt="banner"
          className=" md:hidden"
        />
      </section>
      <CategoryLists />
      <ProductLists />
    </div>
  );
}

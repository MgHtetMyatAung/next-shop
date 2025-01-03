import { BaseUrl } from "@/services/api.config";
import CategoryItem from "./CategoryItem";

const getCategories = async () => {
  const res = await fetch(`${BaseUrl}/categories`);
  return res.json();
};
export default async function CategoryLists() {
  const categories = await getCategories();
  console.log(categories);
  if (!categories) return <div>Loading...</div>;
  return (
    <div className=" container py-5">
      <div className=" grid grid-cols-4 gap-5">
        {categories.map((category: any) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}

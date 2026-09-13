import { getSEO } from "@/lib/seo";
import { Acebuilder } from "@/components/acebuilder";
import { FAQ } from "@/components/faq";
import { Products } from "@/components/products";

export const metadata = getSEO({
  title: "Products",
  description:
    "Albor Digital — website design and brand identity studio based in Canmore, Alberta.",
  path: "/products",
});

const ProductsPage = () => {
  return (
    <div>
      <Acebuilder />
      <Products />
      <FAQ />
    </div>
  )
}

export default ProductsPage
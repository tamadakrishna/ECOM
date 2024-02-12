import ProductDetails from "@/components/products/ProductDetails";

const Page = async({params}) => {

  return <ProductDetails productId={params.id} />;
};

export default Page;

import ProductOverview from "@/components/products/ProductOverview";
import { getProduct } from "@/backend/controllers/productControllers";

const Product = async({params}) => {
  const product = await getProduct(params.id);
  return <ProductOverview product={product} />;
};

export default Product;
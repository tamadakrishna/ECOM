
import ProductOverview from "@/components/products/ProductOverview";
// import { getProduct } from "@/backend/controllers/productControllers";
import axios from "axios";

const getProduct = async(id)=>{
      const { data } = await axios.get(`${process.env.API_URL}/api/products/${id}`);
      return data;
}

 
const Product = async({params}) => {

  const product = await getProduct(params.id);
  // const product = {
  //   name:"kjk",
  //   price:'djfj',
  //   description:"fjhfj",
  //   seller:"dd",
  //   rating:"sdsd"
  // }
  return <ProductOverview product={product} />;
};

export default Product;

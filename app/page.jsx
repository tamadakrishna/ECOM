import Products from "@/components/products/Products"
import axios from 'axios';

export async function getProducts() {
 
  const { data } = await axios.get(`${process.env.API_URL}/api/products/`);
 
  return data;
}

const HomePage = async () => {
  const data = await getProducts();
  return <Products products={data}/>;
};



export default HomePage;
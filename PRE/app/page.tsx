import axios from "axios";
import ListProducts from "@/components/products/ListProduct"

import queryString from "query-string";

// const getProducts = async (searchParams:any) => {
//   const urlParams = {
//     keyword: searchParams.keyword,
//     page: searchParams.page,
//     category: searchParams.category,
//     "price[gte]": searchParams.min,
//     "price[lte]": searchParams.max,
//     "ratings[gte]": searchParams.ratings,
//   };

//   const searchQuery = queryString.stringify(urlParams);

//   const { data } = await axios.get(
//     `${process.env.API_URL}/api/products?${searchQuery}`
//   );
//   return data;
// };

const HomePage = async ({ searchParams }:{searchParams:any}) => {
  // const productsData = await getProducts(searchParams);

  // return <ListProducts data={productsData} />;
  return <h1>he</h1>
};

export default HomePage;
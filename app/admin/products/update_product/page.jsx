import React from 'react';
import Update_Product from "@/components/admin/UpdateProduct";

const page = ({searchParams}) => {
  return (
    <>
    <Update_Product productData={searchParams}/>
    </>
  )
}

export default page;

page.getInitialProps = ({query} ) => {
  return query;
};
import UpdateAddress from "@/components/user/UpdateAddress";
import React from "react";

const NewAddressPage = ({searchParams}) => {
  return <UpdateAddress currentAddress={searchParams} />;
};

export default NewAddressPage;
import axios from "axios";
import React from "react";

import { cookies } from "next/headers";
import queryString from "query-string";
import Users from "@/components/admin/Users";

const getUsers = async () => {
  
  const { data } = await axios.get(
    `${process.env.API_URL}/api/admin/users`,
  );

  return data;
};

const AdminUsersPage = async ({ searchParams }) => {
  const users = await getUsers();

  return <Users data={users} />;
};

export default AdminUsersPage;
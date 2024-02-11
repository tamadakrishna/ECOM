import React from "react";

import Users from "@/components/admin/Users";

const AdminUsersPage = async () => {

  const users = [
    {
      _id:'hfjjfs',
      name:'krishna',
      email:"ugdfdjf@kfdnfj.com",
      role:"user"
    }
  ];

  return <Users data={users} />;
};

export default AdminUsersPage;
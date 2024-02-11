import Profile from "@/components/auth/Profile";
import React from "react";

const ProfilePage = async () => {
  const addresses = [{street:"nehru"}];

  return <Profile addresses={addresses} />;
};

export default ProfilePage;
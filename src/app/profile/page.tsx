"use client";

import { memo } from "react";
import * as authServices from "../../services/authServices";
import { useQuery } from "@tanstack/react-query";

const ProfilePage = () => {
  const fetchUserProfile = async () => {
    const res = await authServices.getDetail();
    console.log(res);
    return res;
  };

  const { data: userProfile = [] } = useQuery({
    queryKey: ["userProfile"],
    queryFn: fetchUserProfile,
  });

  console.log("userProfile", userProfile);
  return <div>123</div>;
};

export default memo(ProfilePage);

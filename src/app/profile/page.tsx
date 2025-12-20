<<<<<<< HEAD
import PersonalDetailsSection from "@/components/Profile/PersonalDetailsSection"
import ProfileBanner from "@/components/Profile/ProfileBanner"
import StatisticsSection from "@/components/Profile/StatisticsSection"
import { memo } from "react"

const ProfilePage = () => {
    return (
        <div className="w-full flex flex-col  h-min-screen">
            <ProfileBanner />
            <StatisticsSection />
            <PersonalDetailsSection />
        </div>
    )
}
=======
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
>>>>>>> 0b21b587a26b0df0fd748eb9a5b7af1902b0e9d0

  const { data: userProfile = [] } = useQuery({
    queryKey: ["userProfile"],
    queryFn: fetchUserProfile,
  });

  console.log("userProfile", userProfile);
  return <div>123</div>;
};

export default memo(ProfilePage);

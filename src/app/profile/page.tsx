"use client";

import { memo } from "react";
import * as authServices from "../../services/authServices";
import { useQuery } from "@tanstack/react-query";
import ProfileBanner from "@/components/Profile/ProfileBanner";
import StatisticsSection from "@/components/Profile/StatisticsSection";
import PersonalDetailsSection from "@/components/Profile/PersonalDetailsSection";

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
  return (
        <div className="w-full flex flex-col  h-min-screen">
            <ProfileBanner userProfile={userProfile}  />
            <StatisticsSection />
            <PersonalDetailsSection userProfile={userProfile} />
        </div>
    );
};

export default memo(ProfilePage);

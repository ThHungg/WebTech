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

export default memo(ProfilePage)
import Link from "next/link";
import { memo } from "react";

const ProfileBanner = ({
  userProfile,
}: {
  userProfile: any;
}) => {
  
  return (
    <div className="w-full bg-linear-to-r from-red-600 to-orange-600 ">
      <div className="container mx-auto px-6 py-12 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="relative w-fit ">
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="avatar"
              className="rounded-full  border-6 border-white h-32 w-32 object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-white rounded-full p-2 border border-gray-300 hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 6.5h-1.28l-.32-1a3 3 0 0 0-2.84-2H9.44A3 3 0 0 0 6.6 5.55l-.32 1H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3.05m1 11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h2a1 1 0 0 0 1-.68l.54-1.64a1 1 0 0 1 .95-.68h5.12a1 1 0 0 1 .95.68l.54 1.64a1 1 0 0 0 .9.68h2a1 1 0 0 1 1 1Zm-8-9a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2"
                />
              </svg>
            </div>
          </div>
          <div className="text-white space-y-2">
            <h2 className="font-semibold">{userProfile?.data?.username}</h2>
            <div className="flex gap-4">
              <p className="flex gap-2 items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    d="m.5 6.5l11.375 7h.25l11.375-7m0-2.5v16.5H23c-3-.5-8-.75-11-.75S4 20 1 20.5H.5V4c3-.5 8.5-.75 11.5-.75s8.5.25 11.5.75Z"
                  />
                </svg>
                {userProfile?.data?.email}
              </p>
              <p className="flex gap-2 items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19.5 22a1.5 1.5 0 0 0 1.5-1.5V17a1.5 1.5 0 0 0-1.5-1.5c-1.17 0-2.32-.18-3.42-.55a1.51 1.51 0 0 0-1.52.37l-1.44 1.44a14.77 14.77 0 0 1-5.89-5.89l1.43-1.43c.41-.39.56-.97.38-1.53c-.36-1.09-.54-2.24-.54-3.41A1.5 1.5 0 0 0 7 3H3.5A1.5 1.5 0 0 0 2 4.5C2 14.15 9.85 22 19.5 22M3.5 4H7a.5.5 0 0 1 .5.5c0 1.28.2 2.53.59 3.72c.05.14.04.34-.12.5L6 10.68c1.65 3.23 4.07 5.65 7.31 7.32l1.95-1.97c.14-.14.33-.18.51-.13c1.2.4 2.45.6 3.73.6a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-.5.5C10.4 21 3 13.6 3 4.5a.5.5 0 0 1 .5-.5"
                  />
                </svg>
                {userProfile?.data?.phone}
              </p>
            </div>
            
          </div>
        </div>
        <button className="flex items-center gap-2 text-white rounded-lg font-medium bg-white/20 hover:bg-white/10 px-4 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="m112 352l-64-64l64-64"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M64 288h294c58.76 0 106-49.33 106-108v-20"
            />
          </svg>
          <Link href="/">Quay lại mua sắp</Link>
        </button>
      </div>
    </div>
  );
};

export default memo(ProfileBanner);

import { useState } from "react";
import Profile from "./atoms/Profile";

type User = {
  profile: string;
  name: string;
  description: string;
};

const currentUser: User = {
  profile: "/profile/default.svg",
  name: "익명의 몰라또",
  description: "저에게 선물을 주세또",
};

const My = () => {
  const [profile, setProfile] = useState<User>(currentUser);
  const saveProfile = (profile: string, name: string, description: string) => {
    setProfile({ profile, name, description });
  };

  return (
    <>
      <Profile
        profile={profile.profile}
        name={profile.name}
        description={profile.description}
        saveProfile={saveProfile}
      />
    </>
  );
};

export default My;

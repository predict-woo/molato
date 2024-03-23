import styled from "styled-components";
import check from "../../../assets/check.svg";
import close from "../../../assets/close.svg";
import edit from "../../../assets/edit.svg";
import editDisabled from "../../../assets/edit-disabled.svg";
import { useState } from "react";
import TextInput from "component/TextInput";
import { User } from "types";

type Props = {
  user: User;
  saveProfile: (
    profilePhoto: string,
    name: string,
    introduction: string
  ) => void;
};

const ProfileInner = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  gap: 16px;
  border-radius: 16px;
  background: var(--white, #fff);
  border: 1px solid var(--gray-light, #eee);
`;

const BasicContent = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: row;
  align-items: center;
`;

const ImageOuter = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 16px;
  border: 1px solid var(--gray-light, #eee);
`;

const StyledImage = styled.img`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
`;

const IntroductionOuter = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const IntroductionHeader = styled.div`
  display: flex;
  gap: 12px;
  padding: 0 8px;
  justify-content: space-between;
  color: var(--black, #333);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

const NameOuter = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding-right: 8px;
`;

const ProfileName = styled.div`
  flex: 1;
  color: var(--black, #333);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
`;

const ProfileIntroduction = styled.div`
  color: var(--black, #333);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  padding: 0 8px;
`;

enum EditMode {
  //   IMAGE,
  //   NAME,
  DESCRIPTION,
}

const Profile = ({ user, saveProfile }: Props) => {
  const [editMode, setEditMode] = useState<EditMode | null>(null);
  const [profileIntroduction, setProfileIntroduction] = useState<string>(
    user.introduction
  );

  const editButton = (changeTo: EditMode) => {
    return editMode === null ? (
      <img src={edit} alt="edit" onClick={() => setEditMode(changeTo)} />
    ) : (
      <img
        src={editDisabled}
        alt="editDisabled"
        style={{ cursor: "not-allowed" }}
      />
    );
  };

  const saveButton = () => {
    return (
      <div style={{ display: "flex", gap: "8px" }}>
        <img
          src={check}
          alt="check"
          onClick={() => {
            setEditMode(null);
            saveProfile(user.profilePhoto, user.name, profileIntroduction);
          }}
        />
        <img src={close} alt="close" onClick={() => setEditMode(null)} />
      </div>
    );
  };

  return (
    <ProfileInner>
      <BasicContent>
        <ImageOuter>
          <StyledImage src={user.profilePhoto} alt="profile" />
        </ImageOuter>
        <NameOuter>
          <ProfileName>{user.name}</ProfileName>
        </NameOuter>
      </BasicContent>
      <IntroductionOuter>
        <IntroductionHeader>
          <div>한 줄 소개</div>
          {editMode === EditMode.DESCRIPTION
            ? saveButton()
            : editButton(EditMode.DESCRIPTION)}
        </IntroductionHeader>
        {editMode === EditMode.DESCRIPTION ? (
          <TextInput
            placeholder={user.introduction}
            type="default"
            value={profileIntroduction}
            onChange={(e) =>
              setProfileIntroduction((e.target as HTMLInputElement).value)
            }
          />
        ) : (
          <ProfileIntroduction>{user.introduction}</ProfileIntroduction>
        )}
      </IntroductionOuter>
    </ProfileInner>
  );
};

export default Profile;

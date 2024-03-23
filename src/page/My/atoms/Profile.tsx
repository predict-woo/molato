import styled from "styled-components";
import check from "../../../assets/check.svg";
import close from "../../../assets/close.svg";
import edit from "../../../assets/edit.svg";
import editDisabled from "../../../assets/edit-disabled.svg";
import { useState } from "react";
import TextInput from "component/TextInput";

type Props = {
  profile: string;
  name: string;
  description: string;
  saveProfile: (profile: string, name: string, description: string) => void;
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

const DescriptionOuter = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const DescriptionHeader = styled.div`
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

const ProfileDescription = styled.div`
  color: var(--black, #333);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  padding: 0 8px;
`;

enum EditMode {
  IMAGE,
  NAME,
  DESCRIPTION,
}

const Profile = ({ profile, name, description, saveProfile }: Props) => {
  const [editMode, setEditMode] = useState<EditMode | null>(null);
  const [profileName, setProfileName] = useState<string>(name);
  const [profileDescription, setProfileDescription] =
    useState<string>(description);

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
            saveProfile(profile, profileName, profileDescription);
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
          <StyledImage src={profile} alt="profile" />
        </ImageOuter>
        <NameOuter>
          {editMode === EditMode.NAME ? (
            <TextInput
              placeholder={name}
              type="default"
              value={profileName}
              onChange={(e) =>
                setProfileName((e.target as HTMLInputElement).value)
              }
            />
          ) : (
            <ProfileName>{name}</ProfileName>
          )}
          {editMode === EditMode.NAME
            ? saveButton()
            : editButton(EditMode.NAME)}
        </NameOuter>
      </BasicContent>
      <DescriptionOuter>
        <DescriptionHeader>
          <div>한 줄 소개</div>
          {editMode === EditMode.DESCRIPTION
            ? saveButton()
            : editButton(EditMode.DESCRIPTION)}
        </DescriptionHeader>
        {editMode === EditMode.DESCRIPTION ? (
          <TextInput
            placeholder={description}
            type="default"
            value={profileDescription}
            onChange={(e) =>
              setProfileDescription((e.target as HTMLInputElement).value)
            }
          />
        ) : (
          <ProfileDescription>{description}</ProfileDescription>
        )}
      </DescriptionOuter>
    </ProfileInner>
  );
};

export default Profile;

import styled from "styled-components";

type Props = {
  profile: string;
  name: string;
  description: string;
  selected?: boolean;
  onClick?: () => void;
};

const UserCardInner = styled.div<{ selected: boolean }>`
  flex: 1;
  display: flex;
  padding: 12px;
  align-items: center;
  gap: 12px;
  border-radius: 16px;
  background: var(--white, #fff);
  box-shadow: -1px 2px 4px 0px rgba(0, 0, 0, 0.25);
  border: ${(props) =>
    props.selected
      ? "1px solid var(--primary, #D25151)"
      : "1px solid var(--white, #fff)"};
  cursor: pointer;
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

const TextOuter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  flex: 1 0 0;
`;

const TextName = styled.div`
  align-self: stretch;
  color: var(--black, #333);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const TextDescription = styled.div`
  align-self: stretch;
  color: var(--black, #333);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const UserCard = ({ profile, name, description, selected, onClick }: Props) => {
  return (
    <UserCardInner selected={!!selected} onClick={onClick}>
      <ImageOuter>
        <StyledImage src={profile} alt="profile" />
      </ImageOuter>
      <TextOuter>
        <TextName>{name}</TextName>
        <TextDescription>{description}</TextDescription>
      </TextOuter>
    </UserCardInner>
  );
};

export default UserCard;

import styled from "styled-components";

type Props = {
  text: string;
  onClick: () => void;
  disabled?: boolean;
};

const ButtonInner = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 48px;
  border-radius: 16px;
  background: var(--primary, #d25151);
  color: var(--white, #fff);
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;

  &:disabled {
    background: var(--white, #fff);
    color: var(--gray-light, #eee);
    border: 1px solid var(--gray-light, #eee);
    cursor: not-allowed;
  }
`;

const Button = ({ text, onClick, disabled = false }: Props) => {
  return (
    <ButtonInner onClick={onClick} disabled={disabled}>
      {text}
    </ButtonInner>
  );
};

export default Button;

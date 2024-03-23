import React from "react";
import styled from "styled-components";

type Props = {
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: "default" | "disabled" | "error";
};

const TextInputInner = styled.div`
  display: flex;
  width: 300px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: var(--black, #333);
`;

const TextInputDefault = styled(TextInputInner)`
  border-radius: 16px;
  border: 1px solid var(--gray-light, #eee);
  background: var(--white, #fff);
`;

const TextInputDisabled = styled(TextInputInner)`
  border-radius: 16px;
  border: 1px solid var(--gray-light, #eee);
  background: var(--white, #fff);
`;

const TextInputError = styled(TextInputInner)`
  border-radius: 16px;
  border: 1px solid var(--primary-light, #ed9999);
  background: var(--white, #fff);
`;

const StyledInput = styled.input<{ type: "default" | "disabled" | "error" }>`
  width: 100%;
  border: none;
  background: none;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  outline: none;
  color: ${(props) =>
    props.type === "disabled" ? "color: var(--gray-light, #EEE);" : "none"};
`;

const TextInputs = {
  default: TextInputDefault,
  disabled: TextInputDisabled,
  error: TextInputError,
};

const TextInput = ({ placeholder, value, onChange, type }: Props) => {
  const TextInputType = TextInputs[type];
  return (
    <TextInputType>
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={type === "disabled"}
      />
    </TextInputType>
  );
};

export default TextInput;

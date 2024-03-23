import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

type Props = {
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent) => void;
  type: "default" | "disabled" | "error" | "password";
  multiline?: boolean;
  disabled?: boolean;
};

const TextInputInner = styled.div`
  display: flex;
  width: 100%;
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

const StyledInput = styled.input<{
  type: "default" | "disabled" | "error" | "password";
}>`
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
    props.type === "disabled"
      ? "var(--gray-light, #EEE)"
      : "var(--black, #333)"};

  &::placeholder {
    color: ${(props) =>
      props.type === "disabled" ? "var(--gray-light, #EEE)" : "inherit"};
  }
`;

const StyledTextarea = styled.textarea<{
  type: "default" | "disabled" | "error" | "password";
  height: number;
}>`
  width: 100%;
  border: none;
  background: none;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  height: ${(props) => props.height}px;
  outline: none;
  color: ${(props) =>
    props.type === "disabled" ? "color: var(--gray-light, #EEE);" : "none"};
  resize: none;
  overflow: hidden;
`;

const TextInputs = {
  default: TextInputDefault,
  password: TextInputDefault,
  disabled: TextInputDisabled,
  error: TextInputError,
};

const TextInput = ({
  placeholder,
  value,
  onChange,
  type,
  multiline,
  disabled,
}: Props) => {
  const [height, setHeight] = useState<number>(20);
  const textareaRef = useRef(null);

  const TextInputType = TextInputs[type];

  useEffect(() => {
    if (multiline) {
      const lineNum = (value?.match(/\n/g) || []).length + 1;
      setHeight(20 * lineNum);
    }
  }, [value]);

  return (
    <TextInputType>
      {multiline ? (
        <StyledTextarea
          height={height}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={type === "disabled" || disabled}
        />
      ) : (
        <StyledInput
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={type === "disabled" || disabled}
          ref={textareaRef}
        />
      )}
    </TextInputType>
  );
};

export default TextInput;

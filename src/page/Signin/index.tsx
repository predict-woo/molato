import { useState } from "react";
import logoLarge from "assets/logo-large.svg";
import styled from "styled-components";
import TextInput from "component/TextInput";
import Button from "component/Button";
import { H } from "component/H";

const SigninContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  min-height: 100vh;
  display: flex;
  gap: 40px;
  align-self: stretch;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled.img`
  width: 120px;
  height: 120px;
`;

const InputStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  align-self: stretch;
`;

const SignInText = styled.div`
  color: var(--black, #333);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const UH = styled(H)`
  color: var(--primary-light, #ed9999) !important;
  text-decoration: underline;
`;

const Signin = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordRepeat, setPasswordRepeat] = useState<string>("");

  return (
    <SigninContent>
      <StyledImage src={logoLarge} />
      <InputStyled>
        <TextInput
          placeholder="아이디"
          value={id}
          onChange={(e) => setId((e.target as HTMLInputElement).value)}
          type="default"
        />
        <TextInput
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword((e.target as HTMLInputElement).value)}
          type="password"
        />
        <TextInput
          placeholder="비밀번호 재입력"
          value={passwordRepeat}
          onChange={(e) =>
            setPasswordRepeat((e.target as HTMLInputElement).value)
          }
          type="password"
        />
        {password !== passwordRepeat && (
          <SignInText>
            <H>비밀번호가 일치하지 않습니다</H>
          </SignInText>
        )}

        <Button
          text="회원가입"
          onClick={() => console.log(`id: ${id}, password: ${password}`)}
        />
        <SignInText>
          계정이 없으신가요? <UH>회원가입하기</UH>
        </SignInText>
      </InputStyled>
    </SigninContent>
  );
};

export default Signin;

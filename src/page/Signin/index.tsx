import { useState } from "react";
import styled from "styled-components";
import TextInput from "component/TextInput";
import Button from "component/Button";
import { H } from "component/H";
import useAxios from "hook/useAxios";
import LottieLogo from "component/LottieLogo";
import { checkIdPassword } from "utils";
import { useNavigate } from "react-router-dom";
import useModal from "hook/useModal";

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

const LoginText = styled.div`
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
  cursor: pointer;
`;

const Signin = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordRepeat, setPasswordRepeat] = useState<string>("");
  const axios = useAxios();
  const navigate = useNavigate();
  const { setAlert } = useModal();

  const handleSignin = async () => {
    await axios({
      url: "/auth/signup",
      method: "post",
      data: {
        name: id,
        password,
      },
      onSuccess: () => {
        setAlert(
          "회원가입 성공",
          "회원가입이 완료되었습니다",
          () => {
            navigate("/login");
          },
          () => {
            navigate("/login");
          }
        );
      },
      onError: () => {
        setAlert("회원가입 실패", "아이디가 중복됩니다");
      },
    });
  };

  const getErrorMessage = () => {
    if (password !== passwordRepeat) {
      return (
        <SignInText>
          <H>비밀번호가 일치하지 않습니다</H>
        </SignInText>
      );
    }
    if (!checkIdPassword(id, password)) {
      return (
        <SignInText>
          <H>아이디는 4자 이상, 비밀번호는 6자 이상이여야 합니다</H>
        </SignInText>
      );
    }
    return "";
  };

  return (
    <SigninContent>
      <LottieLogo size={200} />
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
        {getErrorMessage()}
        <Button
          text="회원가입"
          disabled={
            password !== passwordRepeat || !checkIdPassword(id, password)
          }
          onClick={() => handleSignin()}
        />
        <LoginText>
          계정이 있으신가요?&nbsp;
          <UH onClick={() => navigate("/login")}>로그인하기</UH>
        </LoginText>
      </InputStyled>
    </SigninContent>
  );
};

export default Signin;

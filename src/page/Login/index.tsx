import { useState } from "react";
import styled from "styled-components";
import TextInput from "component/TextInput";
import Button from "component/Button";
import { H } from "component/H";
import { useNavigate } from "react-router-dom";
import useAxios from "hook/useAxios";
import LottieLogo from "component/LottieLogo";
import useModal from "hook/useModal";

const LoginContent = styled.div`
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

const UH = styled(H)`
  color: var(--primary-light, #ed9999) !important;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const axios = useAxios();
  const { setAlert } = useModal();

  const handleLogin = async () => {
    await axios({
      url: "/auth/signin",
      method: "post",
      data: {
        name: id,
        password,
      },
      onSuccess: () => {
        navigate("/");
      },
      onError: () => {
        setAlert("회원가입 실패", "비밀번호나 아이디가 틀렸습니다");
      },
    });
  };

  return (
    <LoginContent>
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
        <Button text="로그인" onClick={() => handleLogin()} />
        <SignInText>
          계정이 없으신가요?&nbsp;
          <UH onClick={() => navigate("/signin")}>회원가입하기</UH>
        </SignInText>
      </InputStyled>
    </LoginContent>
  );
};

export default Login;

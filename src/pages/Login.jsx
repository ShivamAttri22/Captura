import { useState } from "react";
import styled from "styled-components";
import Logo from "../ui/Logo";
import { FaLock, FaUser } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { StyledErrors, StyledErrorWrapper } from "./css/Createcss";
import Backbtn from "../ui/Backbtn";
import { login } from "../services/ApiAuth";
import { useLogin } from "../authentication/useLogin";
const LoginContainer = styled.div`
  height: 100vh;
  width: 100%;
`;
const BackgroundImage = styled.div`
  background-image: linear-gradient(to bottom right, #000000de, #0000004d),
    url("/loginbackground.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const InputContainer = styled.div`
  margin-bottom: 4rem;
  position: relative;
`;
const StyledFaUser = styled(FaUser)`
  pointer-events: none;
  position: absolute;
  top: 13px;
  left: 10px;
  color: var(--color-brand-50);
`;

const Input = styled.input`
  color: var(--color-brand-50);
  font-weight: 300;
  background: transparent;
  width: 100%;
  padding: 10px;
  padding-left: 4.2rem;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid var(--color-brand-50);
  &::placeholder {
    color: var(--color-brand-50);
    font-weight: 200;

    /* padding-left: 10px; */
  }
`;

const Button = styled.button`
  background-color: var(--color-brand-200);
  display: inline-block;
  padding: 1rem 3rem;
  color: white;
  font-weight: 500;
  font-size: 1.4rem;

  text-transform: uppercase;
  font-family: "Antic Didone", sans-serif;
  border: 2px solid var(--color-brand-200);
  transition: all 1s;
  letter-spacing: 3px;

  &:hover {
    background-color: transparent;
    border: 2px solid var(--color-brand-200);
    color: var(--color-brand-200);
  }
`;
const GlassCard = styled.div`
  background: rgba(255, 255, 255, 0.1);

  padding: 40px;
  width: 50rem;
  text-align: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;
const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem;
  align-items: center;
  > h1 {
    color: var(--color-brand-50);
    font-weight: 400;
    font-size: 2.8rem;
  }
`;
const StyledForgotPass = styled(Link)`
  display: block;
  margin-bottom: 2rem;
  color: var(--color-brand-50);
  font-weight: 300;
  text-decoration: underline;
`;
const StyledFaLock = styled(FaLock)`
  position: absolute;
  top: 13px;
  left: 10px;
  color: var(--color-brand-50);
  pointer-events: none;
`;
const StyledSignUp = styled(Link)`
  margin-bottom: 2rem;
  color: var(--color-brand-200);
  font-weight: 300;
  &:hover {
    color: #437c80;
  }
`;
const StyledSpan = styled.span`
  color: var(--color-brand-50);
`;
const SignUpContainer = styled.div`
  margin-top: 2rem;
`;

function Login() {
  const { login, isLoading } = useLogin();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = ({ email, password }) => {
    login({ email, password });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <LoginContainer>
      <BackgroundImage>
        <Backbtn to={"/"} />
        <GlassCard>
          <HeadingContainer>
            <h1>Login</h1>
          </HeadingContainer>
          <form onSubmit={handleSubmit(handleLogin)}>
            <InputContainer>
              <StyledFaUser />
              <Input
                type="email"
                placeholder="email"
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please provide a valid email address",
                  },
                })}
              />
              <StyledErrorWrapper>
                {errors?.username?.message && (
                  <StyledErrors>{errors.username.message}</StyledErrors>
                )}
              </StyledErrorWrapper>
            </InputContainer>
            <InputContainer>
              <StyledFaLock />
              <Input
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "This field is required",
                })}
              />
              <StyledErrorWrapper>
                {errors?.password?.message && (
                  <StyledErrors>{errors.password.message}</StyledErrors>
                )}
              </StyledErrorWrapper>
            </InputContainer>
            <StyledForgotPass>Forgot your Password?</StyledForgotPass>
            <Button>Login</Button>
            <SignUpContainer>
              <StyledSpan>New to Captura? </StyledSpan>
              <StyledSignUp to="/signup">Create an account</StyledSignUp>
            </SignUpContainer>
          </form>
        </GlassCard>
      </BackgroundImage>
    </LoginContainer>
  );
}

export default Login;

import { useState } from "react";
import styled from "styled-components";
import Logo from "../ui/Logo"; // Adjust the import according to your project structure
import { FaLock, FaUser, FaEnvelope } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { StyledErrors, StyledErrorWrapper } from "./css/Createcss";
import Backbtn from "../ui/Backbtn";
import { signUp } from "../services/ApiAuth";
import { useSignup } from "../authentication/useSignup";

const SignUpContainer = styled.div`
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

const StyledFaEnvelope = styled(FaEnvelope)`
  pointer-events: none;
  position: absolute;
  top: 13px;
  left: 10px;
  color: var(--color-brand-50);
`;

const StyledFaLock = styled(FaLock)`
  position: absolute;
  top: 13px;
  left: 10px;
  color: var(--color-brand-50);
  pointer-events: none;
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

const StyledLink = styled(Link)`
  display: block;
  margin-bottom: 2rem;
  color: var(--color-brand-50);
  font-weight: 300;
  text-decoration: underline;
`;

const StyledSpan = styled.span`
  color: var(--color-brand-50);
`;

const StyledSignUp = styled(Link)`
  margin-bottom: 2rem;
  color: var(--color-brand-200);
  font-weight: 300;
  &:hover {
    color: #437c80;
  }
`;

const LoginLinkContainer = styled.div`
  margin-top: 2rem;
`;

function SignUp() {
  const { signup, isLoading } = useSignup();
  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = ({ email, password, username }) => {
    signup({ email, password, username });
  };

  return (
    <SignUpContainer>
      <BackgroundImage>
        <Backbtn to={"/"} />
        <GlassCard>
          <HeadingContainer>
            <h1>Create Account</h1>
          </HeadingContainer>
          <form onSubmit={handleSubmit(handleSignUp)}>
            <InputContainer>
              <StyledFaUser />
              <Input
                type="text"
                placeholder="Username"
                {...register("username", {
                  required: "This field is required",
                })}
              />
              <StyledErrorWrapper>
                {errors?.username?.message && (
                  <StyledErrors>{errors.username.message}</StyledErrors>
                )}
              </StyledErrorWrapper>
            </InputContainer>
            <InputContainer>
              <StyledFaEnvelope />
              <Input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please provide a valid email address",
                  },
                })}
              />
              <StyledErrorWrapper>
                {errors?.email?.message && (
                  <StyledErrors>{errors.email.message}</StyledErrors>
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
                  minLength: {
                    value: 8,
                    message: "Password should be more than 8 characters",
                  },
                })}
              />
              <StyledErrorWrapper>
                {errors?.password?.message && (
                  <StyledErrors>{errors.password.message}</StyledErrors>
                )}
              </StyledErrorWrapper>
            </InputContainer>
            <InputContainer>
              <StyledFaLock />
              <Input
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  required: "This field is required",
                  validate: (value) =>
                    value === getValues().password || "Password do not match",
                })}
              />
              <StyledErrorWrapper>
                {errors?.confirmPassword?.message && (
                  <StyledErrors>{errors.confirmPassword.message}</StyledErrors>
                )}
              </StyledErrorWrapper>
            </InputContainer>
            <Button>Sign Up</Button>
            <LoginLinkContainer>
              <StyledSpan>Already have an account? </StyledSpan>
              <StyledSignUp to="/login">Login here</StyledSignUp>
            </LoginLinkContainer>
          </form>
        </GlassCard>
      </BackgroundImage>
    </SignUpContainer>
  );
}

export default SignUp;

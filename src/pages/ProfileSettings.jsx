import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Backbtn from "../ui/Backbtn";
import { useForm } from "react-hook-form";
import { useUser } from "../context/UserContext";
import { useUpdate } from "../authentication/useUpdate";
const SettingsBody = styled.div`
  background-color: var(--color-brand-50);
  height: 100vh;
`;

const SettingsContainer = styled.div`
  padding-top: 10rem;
  max-width: 600px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  margin-top: 2rem;
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
const PhotoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-direction: column;
`;

const PhotoLabel = styled.p`
  font-size: 16px;
  margin-right: 10px;
`;

const ProfilePicture = styled.img`
  width: 75px;
  height: 75px;
  border: 3px solid var(--color-brand-200);
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const ChangeButton = styled.button`
  background-color: var(--color-brand-500);
  border: none;
  border-radius: 5px;
  padding: 4px 15px;
  cursor: pointer;

  &:hover {
    background-color: #cad7cc;
  }
`;
const ProfileSettings = ({ userProfile, onSave }) => {
  const { getUser } = useUser();
  const { register, handleSubmit, reset } = useForm();
  useEffect(() => {
    if (getUser) {
      reset({
        username: getUser.user_metadata?.username || "",
        email: getUser.user_metadata?.email || "",
      });
    }
  }, [getUser, reset]);

  const { updateUser } = useUpdate();

  function handleSubmitData(data) {
    const { username, password } = data;

    updateUser({ username, password });
  }
  return (
    <SettingsBody>
      <SettingsContainer>
        <Backbtn color={"black"} to={"/profile"} />
        <form onSubmit={handleSubmit(handleSubmitData)}>
          <FormGroup>
            <PhotoContainer>
              <ProfilePicture
                src={"https://wallpapercave.com/wp/wp2509450.jpg"}
                alt="Profile"
              />
              <ChangeButton>Change</ChangeButton>
            </PhotoContainer>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="name">Username</Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              {...register("username")}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              disabled
              {...register("email")}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              {...register("password")}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="confirm">Confirm Password</Label>
            <Input
              id="confirm"
              name="confirm"
              type="password"
              {...register("confirm")}
            />
          </FormGroup>

          <Button type="submit">Save Changes</Button>
        </form>
      </SettingsContainer>
    </SettingsBody>
  );
};

export default ProfileSettings;

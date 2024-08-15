import React from "react";
import styled from "styled-components";
import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom";

const ProfileContainer = styled.div`
  max-width: 600px;
  margin: 9.6rem auto;
  text-align: center;
  padding: 20px;
`;

const ProfileHeader = styled.div`
  margin-bottom: 20px;
`;

const ProfilePicture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
`;

const ProfileName = styled.h1`
  font-size: 24px;
  margin: 10px 0;
`;

const ProfileUsername = styled.p`
  font-size: 18px;
  color: #555;
`;

const Following = styled.p`
  font-size: 16px;
  color: #777;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;
const Button = styled(Link)`
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

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #e0e0e0;
`;

const Tab = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
  border-bottom: ${(props) => (props.active ? "2px solid black" : "none")};
`;

const ProfilePage = () => {
  const { getUser } = useUser();

  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfilePicture
          src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg"
          alt="Profile"
        />
        <ProfileName>{getUser?.user_metadata?.username}</ProfileName>
        <ProfileUsername>{getUser?.email}</ProfileUsername>

        <ButtonContainer>
          <Button>Share</Button>
          <Button to={"/profile/edit"}>Edit profile</Button>
        </ButtonContainer>
      </ProfileHeader>
      <Tabs>
        <Tab>Created</Tab>
        <Tab>Saved</Tab>
      </Tabs>
    </ProfileContainer>
  );
};

export default ProfilePage;

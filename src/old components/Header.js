import React from "react";
import styled from "styled-components";
import profile from "../images/profile-200x200.jpg";

const ProfileImage = styled.img`
  border-radius: 50%;
`

const Name = styled.h1`
  margin: 0;
  color: #fff;
`
const Title = styled.h3`
  margin: 0;
  color: #fff;
`

function Header() {
  return (
    <div>
      <ProfileImage src={profile} alt="profile" />
      <Name>Robert Todar</Name>
      <Title className="Header-title">Developer</Title>
    </div>
  );
}

export default Header;

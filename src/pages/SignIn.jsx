import React from "react";
import Userinfo from "../components/Sections/Userinfo";
import Navbar from "../components/Sections/Navbar";
import Footer from "../components/Sections/Footer";
import Copyright from "../components/Sections/Copyright";
import Profile from "../components/Sections/Profile";
import styled from "styled-components";

const SignIn = () => {
  return (
    <StyledMain>
      <Userinfo />
      <Navbar />
      <Profile />
      <Footer />
      <Copyright />
    </StyledMain>
  );
};

export default SignIn;
const StyledMain = styled.main`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(auto-fill, max-content);
`;

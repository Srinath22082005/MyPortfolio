import React from "react";
import styled, { keyframes } from "styled-components";
import { Bio } from "../../data/constants";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { SiLeetcode } from "react-icons/si";
import { SiHackerrank } from "react-icons/si";
// import { keyframes } from 'styled-components';



const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  z-index: 10;
  position: relative;
`;
const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;
const Logo = styled.div`
  font-weight: 600;
  font-size: 30px;
  color: ${({ theme }) => theme.primary};
`;
const Nav = styled.ul`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;
const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.5s ease-in-out;
   transition:  0.5s ;
  &:hover {
    color: ${({ theme }) => theme.primary};
     transform: scale(1.1);
     transition:  0.5s ;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1.4rem;
`;
const bounce = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
`;
const GithubIcon = styled(LinkR)`
  display: inline-block;
  margin: 0 1rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: purple;
     animation: ${bounce} 0.6s ease-in-out;
  }
`;

const LinkedinIcon = styled(LinkR)`
  display: inline-block;
  margin: 0 1rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: rgb(30, 101, 201);
      animation: ${bounce} 0.6s ease-in-out;
  }
`;

const InstaIcon = styled(LinkR)`
  display: inline-block;
  margin: 0 1rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: red;
      animation: ${bounce} 0.6s ease-in-out;
  }
`;

const LeetcodeIcon = styled(LinkR)`
  display: inline-block;
  margin: 0 1rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.5s ease-in-out;

  &:hover {
    color: red;
    animation: ${bounce} 0.6s ease-in-out;
  }
`;
const HackerRankIcom = styled(LinkR)`
  display: inline-block;
  margin: 0 1rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: red;
      animation: ${bounce} 0.6s ease-in-out;
  }
`;
const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

export const Footer = ({ darkMode }) => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Srinath S</Logo>
        <Nav>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          {/* <NavLink href="#Experience">Experience</NavLink> */}
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>
        </Nav>
        <SocialMediaIcons>
          <GithubIcon to={Bio.github} target="display">
            <FaGithub size={35} fill={darkMode ? "white" : "Black"} />
          </GithubIcon>

          <LinkedinIcon to={Bio.linkedin} target="display">
            <FaLinkedin size={35} fill="rgb(30, 101, 201)" />
          </LinkedinIcon>
          <InstaIcon to={Bio.insta} target="display">
            <FaInstagram size={35} fill="red" />
          </InstaIcon>
          <LeetcodeIcon to={Bio.leetcode} target="display">
            <SiLeetcode size={35} fill="orange" />
          </LeetcodeIcon>
          <HackerRankIcom to={Bio.hackerrank} target="display">
            <SiHackerrank size={35} fill="green" />
          </HackerRankIcom>
        </SocialMediaIcons>
        <Copyright>&copy; 2025 Srinath All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

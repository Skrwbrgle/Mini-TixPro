import React from "react";
import { Container } from "react-bootstrap";
import {
  FooterContainer,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <Container fluid className="mt-5 bg-dark">
      <h1
        style={{
          color: "green",
          textAlign: "center",
          padding: "20px",
        }}
      >
        TixPro
      </h1>
      <FooterContainer>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Teaching</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Uttar Pradesh</FooterLink>
            <FooterLink href="#">Ahemdabad</FooterLink>
            <FooterLink href="#">Indore</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <BsFacebook style={{ fontSize: "1.5rem" }} /> Facebook
            </FooterLink>
            <FooterLink href="#">
              <BsInstagram style={{ fontSize: "1.5rem" }} /> Instagram
            </FooterLink>
            <FooterLink href="#">
              <RiTwitterXFill style={{ fontSize: "1.5rem" }} /> Twitter
            </FooterLink>
            <FooterLink href="#">
              <BsYoutube style={{ fontSize: "1.5rem" }} /> Youtube
            </FooterLink>
          </Column>
        </Row>
      </FooterContainer>
    </Container>
  );
};

export default Footer;

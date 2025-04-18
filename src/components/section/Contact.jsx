import React, { useRef } from "react";
import Swal from 'sweetalert2'
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { LuSend } from "react-icons/lu";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  position: rlative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.contact};
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;
const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;
const ContactInput = styled.input`
  required;
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:hover {
    border: 2px solid ${({ theme }) => theme.primary};
    
  }
`;
const ContactInputMessage = styled.textarea`
  required
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:hover {
    border: 2px solid ${({ theme }) => theme.primary};
  }
`;
const ContactButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  padding: 13px 16px;
  border-radius: 12px;
  cursor: pointer;
  border: none;
  color: white;
  font-size: 18px;
  font-weight: 600;
   transition:  0.2s ;
  &:hover{
  transform: scale(1.07);
  transition : 0.2s
  }
`;

export const Contact = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e1577679-c0d3-4214-afbe-0f33cec232d5"); // ✅ Correct key

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success",
        text: "Message sent Successfully!",
        icon: "success",
      });
      event.target.reset(); // ✅ Reset form after success
    } else {
      Swal.fire({
        title: "Error",
        text: "Something went wrong!",
        icon: "error",
      });
    }
  };

  return (
    <Container id="Education">
      <Wrapper>
        <Title>Contact</Title>
        <Desc style={{ marginBottom: "40px" }}>
        If you're looking for a passionate developer and innovator, let’s start a conversation.
        </Desc>
        <ContactForm onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder="Your Email" name="email" required />
          <ContactInput placeholder="Your Name" name="name" required />
          <ContactInputMessage
            required
            placeholder="Message"
            name="message"
            rows={4}
          />
          <ContactButton type="submit" value="Send">
            Send Mail <LuSend />
          </ContactButton>
        </ContactForm>
      </Wrapper>
    </Container>
  );
};


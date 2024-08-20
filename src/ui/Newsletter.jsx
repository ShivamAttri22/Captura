import React, { useState } from "react";
import styled from "styled-components";

// Styled components
const NewsletterSection = styled.section`
  padding: 5rem 0 9.6rem;
  background-color: var(--color-brand-50);
  text-align: center;
  position: relative;
  > h1 {
    font-family: "Antic Didone", sans-serif;
    font-size: 5rem;
    color: var(--color-brand-300);
  }
  > div {
    display: inline;
    justify-content: center;
    > h1 {
      font-family: "Antic Didone", sans-serif;
      font-size: 3.2rem;
      color: #80a0a2;
      letter-spacing: 2px;
    }
  }
  > div:before {
    position: absolute;
    border-radius: 10px;
    top: 9.8rem;
    right: 50%;
    transform: translateX(50%);
    display: inline;
    content: "";
    width: 75px;
    height: 3px;
    background-color: #80a0a2;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 2em;
`;

const Form = styled.form`
  margin-top: 9.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 1rem 3rem;
  font-size: 1em;
  width: 50rem;
  border: 2px solid var(--color-brand-200);
  border-radius: 1px;

  margin-bottom: 3.2rem;
`;

const Button = styled.button`
  background-color: var(--color-brand-200);
  display: flex;
  align-items: center;
  padding: 1rem 3rem;
  color: white;
  font-weight: 500;
  font-size: 1.4rem;

  text-transform: uppercase;
  font-family: "Antic Didone", sans-serif;
  border: 2px solid var(--color-brand-200);
  transition: all 1s;
  letter-spacing: 2px;

  &:hover {
    background-color: transparent;
    border: 2px solid var(--color-brand-200);
    color: var(--color-brand-200);
  }
`;

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the email submission
    // For now, just log the email and display a success message

    setMessage("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <NewsletterSection>
      <div>
        <h1>Newsletter</h1>
      </div>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Let's keep in touch, enter your email"
          required
        />
        <Button type="submit">Subscribe</Button>
        {message && <p>{message}</p>}
      </Form>
    </NewsletterSection>
  );
};

export default Newsletter;

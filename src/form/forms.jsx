import React, { useState } from "react";
import styled from "styled-components";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MailingListForm() {
  const [form, setForm] = useState({ firstName: "", message: "", email: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);

    const serviceID = 'service_zcuqfqd';
    const templateID = 'template_ti7tzxt';
    const userID = 'cHO8VS_kSDt0m8lEr';

    emailjs.send(serviceID, templateID, form, userID)
      .then(() => {
        toast.success("Thanks! Your form has been submitted successfully.", { toastId: "success1" });
        setForm({ firstName: "", message: "", email: "" });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Oops! Something went wrong.", { toastId: "error1" });
      })
      .finally(() => setSending(false));
  };

  return (
    <Page>
      <Container>
        <Title>Lets Connect </Title>
        <Subtitle>
          Drop your email and let’s stay in the loop — the good stuff comes straight to your inbox.
        </Subtitle>

        <Form onSubmit={handleSubmit} noValidate>
          <Field>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              value={form.firstName}
              onChange={handleChange}
              required
              disabled={sending}
            />
          </Field>

          <Field>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me what you're working on..."
              required
              disabled={sending}
            />
          </Field>

          <Field>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              required
              disabled={sending}
            />
          </Field>

          <CTA type="submit" disabled={sending} aria-busy={sending}>
            {sending ? "Sending..." : "Submit"}
          </CTA>
        </Form>
      </Container>

      {/* Place ToastContainer once per app, ideally in App.js */}
      <ToastContainer
        position="top-right"
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </Page>
  );
}

/* ========== styles ========== */

const Page = styled.main`
  min-height: 100vh;
  display: grid;
  place-items: start center;
  background: #fff;
  color: #111;
`;

const Container = styled.section`
  width: min(720px, 92vw);
  padding: 48px 0 96px;
  text-align: left;

  @media (max-width: 640px) {
    padding: 32px 0 72px;
  }
`;

const Title = styled.h1`
  font-family: "Georgia", "Times New Roman", serif;
  font-size: clamp(42px, 8vw, 92px);
  line-height: 0.95;
  letter-spacing: -0.02em;
  margin: 8px 0 16px;
`;

const Subtitle = styled.p`
  max-width: 56ch;
  margin: 0 0 48px;
  color: #333;
  font-size: 1.2rem;  
  font-weight: 400;
  line-height: 1.5;
`;

const Form = styled.form`
  width: min(540px, 100%);
  margin-top: 8px;
`;

const Field = styled.div`
  margin: 28px 0 32px;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 160px; /* big box */
  padding: 0.9rem 1rem;
  border: 1px solid #ffffff1a;
  border-radius: 12px;
  background: #1a1a1a;
  color: #fff;
  line-height: 1.5;
  resize: vertical;
  outline: none;
  font-size: 1rem;

  &:focus {
    border-color: #f97316;
    box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.25);
  }
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
  color: #2b2b2b;
  margin-bottom: 14px;
`;

const Input = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 10px 0 14px;
  border: none;
  border-bottom: 2px solid #cfcfcf;
  outline: none;
  background: transparent;
  color: #111;

  &:focus {
    border-bottom-color: #111;
  }
`;

const CTA = styled.button`
  display: inline-block;
  margin-top: 8px;
  padding: 18px 28px;
  border: none;
  border-radius: 999px;
  background: #222;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.12s ease, background 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background: #111;
    transform: translateY(-1px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;

const Crow = styled.img`
  display: block;
  width: 120px;
  margin: 80px auto 0;
  opacity: 0.9;

  @media (max-width: 640px) {
    margin-top: 64px;
    width: 96px;
  }
`;

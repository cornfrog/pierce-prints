"use client"
import { useState } from "react";

export default function Contact() {

  const [userMessage, setUserMessage] = useState({
    senderName: "",
    senderEmail: "",
    senderMessage: ""
  });

  const [errorMessages, setErrorMessages] = useState({
    senderName: "",
    senderEmail: "",
    senderMessage: ""
  });

  const clearForm = () => {
    setUserMessage({
      senderName: "",
      senderEmail: "",
      senderMessage: ""  
    });
  }

  const clearErrors = () => {
    setErrorMessages({
      senderName: "",
      senderEmail: "",
      senderMessage: ""
    });
  }

  async function submitMessage(event: any) {
    event.preventDefault();
    const response = await fetch("/api/message/", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(userMessage)
    });
    const body = await response.json();
    if(body.errors) {
      setErrorMessages(body.errors);
    } else {
      clearErrors();
      clearForm();
    }
  }

  async function inputChange(event: any) {
    setUserMessage({
      ...userMessage,
      [event.currentTarget.name]: event.currentTarget.value
    });
  }

  return (
    <>
      <h1 className="contact-header">Contact Us</h1>
      <p className="contact-text">
        Can&apos;t find what you&apos;re looking for or have an idea for a print?
        Fill out our contact form and we will reach back as soon as we can.
      </p>
      <form onSubmit={submitMessage} className="contact-form">
        <label htmlFor="contact-name" className="contact-label">
          Your Name:
        </label>
        <span className="error-message">{errorMessages.senderName}</span>
        <input
          type="text"
          placeholder="John Smith"
          id="contact-name"
          className="contact-input"
          name="senderName"
          value={userMessage.senderName}
          onChange={inputChange}
        />
        <label htmlFor="contact-email" className="contact-label">
          Your Email:
        </label>
        <span className="error-message">{errorMessages.senderEmail}</span>
        <input
          type="text"
          placeholder="jsmith@email.com"
          id="contact-email"
          name="senderEmail"
          className="contact-input"
          value={userMessage.senderEmail}
          onChange={inputChange}
        />
        <label htmlFor="contact-message" className="contact-label">
          Message: <br />
        </label>
        <span className="error-message">{errorMessages.senderMessage}</span>
        <textarea
          name="senderMessage"
          id="contact-message"
          className="contact-textarea"
          value={userMessage.senderMessage}
          onChange={inputChange}
        ></textarea>
        <input type="submit" value="Send" className="submit-form-btn" />
      </form>
    </>
  );
}

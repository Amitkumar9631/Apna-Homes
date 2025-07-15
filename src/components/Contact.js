import React, { useState } from 'react';
import './Contact.css';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/manbywwy'; // Replace with your Formspree endpoint

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', msg: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.msg
        })
      });
      if (response.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', msg: '' });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  return (
    <section id="Contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact With Us</h2>
        <p className="contact-subtitle">Ready to Make a Move? Let’s Build Your Future Together</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className="contact-input"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            className="contact-input"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="msg"
            className="contact-textarea"
            placeholder="Your Message"
            value={form.msg}
            onChange={handleChange}
            required
          />
          <input type="text" name="_gotcha" style={{ display: 'none' }} />
          <button type="submit" className="contact-btn">Send</button>
        </form>
        {submitted && <p className="contact-success">Thank you for contacting us!</p>}
        {error && <p className="contact-error">There was an error sending your message. Please try again.</p>}
      </div>
    </section>
  );
};

export default Contact; 
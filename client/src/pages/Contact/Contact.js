import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ email: '', subject: '', message: '' });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/contact', formData);
      toast.success(response.data.message);
      setFormData({ email: '', subject: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message');
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-heading text-center">Contact Us</h2>
        <p className="contact-description text-center">Facing any issues? Send us a feedback right away.</p>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="contact-form-group">
            <label htmlFor="email" className="contact-form-label">Your Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
              className="contact-form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-form-group">
            <label htmlFor="subject" className="contact-form-label">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              className="contact-form-input"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-form-group">
            <label htmlFor="message" className="contact-form-label">Message</label>
            <textarea
              rows="6"
              name="message"
              id="message"
              placeholder="Message"
              className="contact-form-input"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          
          <button className="contact-btn" type="submit">Submit</button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;

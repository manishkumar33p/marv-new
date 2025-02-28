import React, { useState } from 'react';
import NavBar from '../Navbar/Navbar';
import './ContactUs.css'; // Import custom CSS
import Footer from "../Footer/Footer";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import emailjs from 'emailjs-com'; // Import EmailJS SDK

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [confirmationMessage, setConfirmationMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
 const existingData = JSON.parse(localStorage.getItem('contactData')) || [];
         localStorage.setItem('contactData', JSON.stringify([...existingData, formData]));
//         const existingData = JSON.parse(localStorage.getItem('contactData')) || [];
//         localStorage.setItem('contactData', JSON.stringify([...existingData, formData]));
        // Use EmailJS to send the email
        emailjs.sendForm('service_3z8pkj1', 'template_zfanfmp', e.target, 'dKgJCNwJ0irTaeaZ1')
            .then((result) => {
                // Success handling
                setConfirmationMessage('Your message has been successfully sent! Thank you for contacting us.');
                // Clear the form
                setFormData({
                    name: '',
                    email: '',
                    phone:'',
                    subject: '',
                    message: ''
                });
            }, (error) => {
                // Error handling
                setConfirmationMessage('Sorry, something went wrong. Please try again later.');
            });
    };

    return (
        <div className="contact-us-page">
            <NavBar />
            <div className="container mt-5">
                <h1 className="text-center mb-4">Contact Us</h1>
                <div className="contact-form-container">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Mobile</label>
                            <input
                                type="phone"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Your Mobile number"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Subject"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                rows="5"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                    {confirmationMessage && (
                        <div className="confirmation-message">
                            {confirmationMessage}
                        </div>
                    )}
                    


                    <section className="product-section">
                            <h2>Contact Us</h2>
                            <div className="product-cards">
                                <div className="product-card">
                                    <FaMapMarkerAlt className="product-card-icon" />
                                    <h3>Address</h3>
                                    <p>C-296, SK-1, Sector-93, Noida, Gautam Buddha Nagar, Uttar Pradesh, India</p>
                                    {/* <a href="/get-started" className="btn">Get Started</a> */}
                                </div>
                                <div className="product-card">
                                    <FaPhone className="product-card-icon" />
                                    <h3>Phone</h3>
                                    <p>+91 7942560186</p>
                                    {/* <a href="/get-started" className="btn">Get Started</a> */}
                                </div>
                                <div className="product-card">
                                    <FaEnvelope className="product-card-icon" />
                                    <h3>Email</h3>
                                    <p>marvinterior@gmail.com</p>
                                    {/* <a href="/get-started" className="btn">Get Started</a> */}
                                </div>
                            </div>
                        </section>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default ContactUs;

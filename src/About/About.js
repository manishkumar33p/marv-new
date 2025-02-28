import React, { useState, useEffect } from "react";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./About.css";
import { NavLink } from "react-router-dom";
import MarvVideo from "../marvv.mp4";
import MarvVideo1 from "../marvv2.mp4";
import MarvVideo2 from "../marvv3.mp4";
// Import images directly from the src folder
import MarvImage from "../marv.jpg";
import Marv1Image from "../marv1.jpeg";
import Marv2Image from "../marv2.jpeg";
import Marv3Image from "../marv3.jpeg";
import Marv5Image from "../marv5.jpg";
import Marv6Image from "../marv6.jpg";
import Marv7Image from "../marv7.png";
import Marv8Image from "../marv8.jpg";
import Marv9Image from "../marv9.png";
import Marv10Image from "../marv10.jpg";
import Marv11Image from "../marv11.jpg";
import Marv12Image from "../marv12.png";
import Marv51Image from "../marv51.jpg";
import Marv53Image from "../marv53.jfif";
import Marv55Image from "../marv55.jpeg";
import Marv56Image from "../marv56.jpeg";
import Marv57Image from "../marv57.jpeg";
import Marv16Image from "../marv16.jpg";
import WhatsAppLogo from "../whatsapp-logo.jfif"; // Import WhatsApp logo

// Partner logos using the same images
const partnerLogos = [
  { src: Marv5Image, alt: "Partner 1", link: "https://www.partner1.com" },
  { src: Marv6Image, alt: "Partner 2", link: "https://www.partner2.com" },
  { src: Marv7Image, alt: "Partner 3", link: "https://www.partner3.com" },
  { src: Marv8Image, alt: "Partner 4", link: "https://www.partner4.com" },
  { src: Marv9Image, alt: "Partner 5", link: "https://www.partner5.com" },
  { src: Marv10Image, alt: "Partner 6", link: "https://www.partner6.com" },
  { src: Marv11Image, alt: "Partner 7", link: "https://www.partner7.com" },
];

const images = [MarvImage, Marv1Image, Marv2Image, Marv3Image];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null); // Track interval for auto-slide
  const [isHovered, setIsHovered] = useState(false); // Check if carousel is hovered

  // Handle automatic image change every 10 seconds
  useEffect(() => {
    if (!isHovered) {
      const id = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 10000);
      setIntervalId(id);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isHovered, intervalId]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Gather form data
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;

    // Do something with the form data, like sending it to an API or printing it
    console.log("Form submitted", { name, email, phone });

    // Optionally, reset the form after submission
    e.target.reset();
  };

  return (
    <div className="App">
      <div className="container mt-5">
        <NavBar />
        <div
          className="carousel-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="carousel">
            <img src={images[currentIndex]} alt={`Carousel ${currentIndex}`} />
            <div className="carousel-note">
              <h3>Welcome to MARV Company!</h3>
              <p>END TO END INTERIOR SOLUTIONS</p>
              <button className="view-details-btn1">SHOP NOW</button>
              <button className="view-details-btn1">ENQUIRY</button>
            </div>

            {/* Carousel Navigation Controls */}
            <div className="carousel-controls">
              <button
                className="carousel-control-prev"
                onClick={handlePrevious}
              >
                ❮
              </button>
              <button className="carousel-control-next" onClick={handleNext}>
                ❯
              </button>
            </div>

            {/* Carousel Dots */}
            <div className="carousel-dots">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${currentIndex === index ? "active" : ""}`}
                  onClick={() => setCurrentIndex(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
        <div className="image-section">
          <br />
          <br />
          <br />
          {/* <h2 className="browse-heading">Our Project</h2> */}
          <div className="image-gallery">
            <NavLink to="https://www.marvdecor.com/" className="image-link">
              <img
                src={MarvImage}
                alt="Category Image 1"
                className="circular-image"
              />
            </NavLink>
            <NavLink to="https://nisspvtltd.in/" className="image-link">
              <img
                src={Marv51Image}
                alt="Category Image 2"
                className="circular-image"
              />
            </NavLink>
            <NavLink to="/electronics" className="image-link">
              <img
                src={Marv53Image}
                alt="Category Image 3"
                className="circular-image"
              />
            </NavLink>
            <NavLink to="https://www.marvdecor.com/" className="image-link">
              <img
                src={MarvImage}
                alt="Category Image 1"
                className="circular-image"
              />
            </NavLink>
          </div>
        </div>
        <div className="about-container">
          <div className="about-content">
            <div className="about-image">
              <img src={Marv2Image} alt="Category Image 1" />
            </div>
            <div className="about-text">
              <h1>About Us</h1>
              <p>
                Established in the year 2017 at Gautam Budh Nagar, Uttar
                Pradesh, We “Marv" are a Sole Proprietorship based firm, engaged
                as the foremost Manufacturer, Wholesaler And Service Provider of
                Modular Sofa, Wooden Temple, Interior Designing Service and many
                more.We have a better pricing policy that makes our products
                available at very competitive prices. We offer easy modes of
                payment to avail our products according to their convenience.
              </p>
            </div>
          </div>
        </div>

        <div className="team-section">
          <h2 className="browse-heading">Meet Our Team</h2>
          <div className="team-members">
            {/* Team Member 1 */}
            <div className="team-member">
              <img
                src={Marv55Image}
                alt="Team Member 1"
                className="team-member-img"
              />
              <h4>VIBHASH VAIBHAV</h4>
              <p className="designation">CEO,Marv</p>
            </div>

            {/* Team Member 2 */}
            <div className="team-member">
              <img
                src={Marv56Image}
                alt="Team Member 2"
                className="team-member-img"
              />
              <br />
              <br />
              <br />
              <h4>VINEET KUMAR</h4>
              <p className="designation">CFO,Marv</p>
            </div>

            {/* Team Member 3 */}
            <div className="team-member">
              <img
                src={Marv57Image}
                alt="Team Member 3"
                className="team-member-img"
              />
              <h4>MANISH KUMAR SINGH</h4>
              <p className="designation">CEO, NISS</p>
            </div>

            {/* Team Member 4 */}
            <div className="team-member">
              <img
                src={Marv57Image}
                alt="Team Member 4"
                className="team-member-img"
              />
              <h4>AKHILESH</h4>
              <p className="designation">Marketing Head</p>
            </div>
          </div>
        </div>

        {/* Carousel Section with Control */}

        {/* Project Section */}

        {/* Our Team Section */}

        {/* Partners Section */}
        <div className="partners-section">
          <center>
            <h2 className="browse-heading">Our Partners</h2>
          </center>
          <div className="partners-logos-wrapper">
            <div className="partners-logos">
              {partnerLogos.map((partner, index) => (
                <a
                  key={index}
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="partner-logo-link"
                >
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    className="partner-logo"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Services Section */}

        {/* Testimonials Section */}
        <div className="testimonials-section">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="testimonials-row">
            <div className="testimonial">
              <img
                src={Marv12Image}
                alt="Client 1"
                className="testimonial-img"
              />
              <p>
                "The interior design services we received were beyond our
                expectations! The team really brought our vision to life. Highly
                recommend!"
              </p>
              <h4>John Doe</h4>
              <p>CEO, Tech Innovations</p>
            </div>
            <div className="testimonial">
              <img
                src={Marv11Image}
                alt="Client 2"
                className="testimonial-img"
              />
              <p>
                "Marv helped us redesign our office space. The atmosphere is now
                much more comfortable and inspiring!"
              </p>
              <h4>Jane Smith</h4>
              <p>Founder, Innovate Solutions</p>
            </div>
            <div className="testimonial">
              <img
                src={Marv10Image}
                alt="Client 3"
                className="testimonial-img"
              />
              <p>
                "We love our new living room design! The attention to detail and
                quality of work was exceptional. Thank you, Marv!"
              </p>
              <h4>Michael Brown</h4>
              <p>Client</p>
            </div>
            <div className="testimonial">
              <img
                src={Marv9Image}
                alt="Client 4"
                className="testimonial-img"
              />
              <p>
                "The team at Marv is a pleasure to work with. Their designs are
                modern, functional, and aesthetically pleasing."
              </p>
              <h4>Alice Green</h4>
              <p>Homeowner</p>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <div className="whatsapp-button">
        <a
          href="https://wa.me/9958424913?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          <img src={WhatsAppLogo} alt="WhatsApp" className="whatsapp-logo" />
          Let's Chat on WhatsApp
        </a>
      </div>

      {/* Fullscreen Video Section */}
      <div className="fullscreen-video-container">
        <video className="fullscreen-video" autoPlay loop muted>
          <source src={MarvVideo1} type="video/mp4" />
        </video>

        {/* Add services section on top of the video */}
        <div className="services-overlay">
          <div className="services-section">
            <h2 className="section-title">Our Services</h2>
            <div className="services-list">
              <div className="service-item">
                <h4>Interior Design</h4>
                <p>
                  We offer personalized interior design solutions that bring
                  your vision to life.
                </p>
              </div>
              <div className="service-item">
                <h4>Furniture Design</h4>
                <p>
                  Custom furniture pieces designed to suit your style and space
                  requirements.
                </p>
              </div>
              <div className="service-item">
                <h4>Consultation</h4>
                <p>
                  Expert advice on how to optimize your space, color schemes,
                  and more.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h5>hii</h5>
      </div>

      <div className="fullscreen-video-container">
        <video className="fullscreen-video" autoPlay loop muted>
          <source src={MarvVideo2} type="video/mp4" />
        </video>

        <div className="contact-overlay">
          <div className="contact-section">
            <h2 className="contact-title">Book a free site visit now</h2>
            {/* <h4>inspiring living</h4> */}
            <div className="services-list">
              <div className="form-container">
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  <button type="submit" className="view-details-btn1">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Form Overlay on Video */}
      </div>

      <Footer />
    </div>
  );
};

export default About;

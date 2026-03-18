import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <footer>
      <motion.div
        className="footer-col"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Logo */}
        <motion.h2 className="footer-logo" variants={item}>
          NeonPulse
        </motion.h2>

        {/* Description */}
        <motion.p className="section-text" variants={item}>
          Step into a world of pulsing neon lights and electrifying beats.
          Your unforgettable night starts the moment you hit the spotlight.
        </motion.p>

        {/* Row */}
        <motion.div className="footer-row" variants={item}>
          
          {/* Left Links */}
          <motion.p className="row-1" variants={item}>
            <Link to="/" className="footer-link">Home</Link> |{" "}
            <Link to="/about-us" className="footer-link">About Us</Link> |{" "}
            <Link to="/gallery" className="footer-link">Gallery</Link> |{" "}
            <Link to="/artists" className="footer-link">Artists</Link> |{" "}
            <Link to="/reserve-a-table" className="footer-link">Book a Table</Link>
            <br />
            <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link> |{" "}
            <Link to="/terms-and-conditions" className="footer-link">Terms & Conditions</Link>
          </motion.p>

          {/* Empty Center for balance */}
          <div className="footer-center"></div>

          {/* Right Contact */}
          <motion.p className="row-3" variants={item}>
            <a href="mailto:mail@neonpulse.com" className="contact-link">
              mail@neonpulse.com
            </a>
            <br />
            <a href="tel:+919876543210" className="contact-link">
              +91 9876543210
            </a>
            {" | "}
            <a href="tel:+919876543210" className="contact-link">
              +91 9876543210
            </a>
          </motion.p>

        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
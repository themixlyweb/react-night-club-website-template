/**CORE LIBRARIES IMPORT */
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
  setIsOpen(false);
}, [location.pathname]);

  const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  { label: "Upcoming Events", path: "/upcoming-events" },
  { label: "Gallery", path: "/gallery" },
  { label: "Artists", path: "/artists" },
  { label: "Reserve a Table", path: "/reserve-a-table" },
  { label: "Contact Us", path: "/contact-us" },
];

  useEffect(() => {
  const handleScroll = () => {
    const heroHeight = window.innerHeight; 
    setIsScrolled(window.scrollY > heroHeight - 80); 
  
  };

  window.addEventListener("scroll", handleScroll);

 
  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <>
    <motion.header
  className={`header ${isScrolled ? "scrolled" : ""}`}
  initial={{ y: -80, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
  style={{ position: isScrolled ? "fixed" : "absolute" }}
>
    
       <div className="header-container">
    <div className="logo"><Link to='/'>NeonPulse</Link></div>

 <motion.button
  className="menu-btn"
  onClick={() => setIsOpen(!isOpen)}
  animate={{ rotate: isOpen ? 90 : 0 }}
  transition={{ duration: 0.3 }}
>
  {isOpen ? "✕" : "☰"}
</motion.button>
  </div>
      </motion.header>

      <AnimatePresence>
  {isOpen && (
    <>
      <motion.div
        className="sidebar"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="sidebar-top">
          <div className="logo">NeonPulse</div>
        </div>

        <motion.nav
          className="sidebar-links"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {navLinks.map((item, index) => (
  <motion.div
    key={index}
    variants={{
      hidden: { opacity: 0, x: 40 },
      visible: { opacity: 1, x: 0 }
    }}
    transition={{ duration: 0.5 }}
  >
    <Link to={item.path}>
      {item.label}
    </Link>
  </motion.div>
))}
        </motion.nav>
      </motion.div>

      <motion.div
        className="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        onClick={() => setIsOpen(false)}
      />
    </>
  )}
</AnimatePresence>

      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}
    </>
  );
};

export default Header;
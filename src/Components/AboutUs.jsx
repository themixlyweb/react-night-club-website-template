/**CORE LIBRARIES IMPORT */
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

/**IMAGE IMPORTS */
import AboutHero from '../Images/about-us.webp';
import about1 from '../Images/about-1.png';
import about2 from '../Images/about-2.png';
import about3 from '../Images/about-3.png';
import about4 from '../Images/about-4.png';

const AboutUs = () => {
  const h2Ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
  const element = h2Ref.current;  

  if (!element) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.5 }
  );

  observer.observe(element);

  return () => {
    observer.unobserve(element);   
  };
}, []);


  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };


  const slideRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const features = [
    { img: about1, label: "Dance Floor" },
    { img: about2, label: "DJ Nights" },
    { img: about3, label: "Premium Bar" },
    { img: about4, label: "VIP Lounge" },
  ];

  return (
    <section className="about-section">
      <div className="about-container">

        {/* Left Section */}
        <div className="about-left">
           <h2 ref={h2Ref} className={`section-heading ${inView ? "in-view" : ""}`}>
        About The Club
      </h2>

          <motion.p
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="section-text"
          >
            Where neon meets noise and rhythm shapes the room, our club is built for those who live for the night and crave experiences that go beyond the ordinary. Every corner is designed to pull you deeper into the energy—immersive visuals that paint the atmosphere, cutting-edge sound that vibrates through your veins, and a crowd that moves as one with the music. From pulsating dance floors to intimate lounge moments, we create a space where every beat feels alive and every night tells its own story. With a vibe that never fades—bold, electric, and unforgettable—this is more than a club. This is where the future of nightlife begins, and where your most iconic nights come to life.
          </motion.p>

          <motion.div
            className="about-features"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } }
            }}
          >
            {features.map((feature, i) => (
              <motion.div
                className="feature"
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
              >
                <div className="icon-wrapper">
                  <div className="icon-circle">
                    <img src={feature.img} alt={feature.label} />
                  </div>
                </div>
                <span>{feature.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Section */}
        <motion.div
          className="about-right"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={slideRight}
        >
          <img src={AboutHero} alt=" About The Club" />
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUs;
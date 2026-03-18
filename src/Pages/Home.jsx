/**CORE LIBRARIES IMPORT */
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/**COMPONENTS IMPORT */
import AboutUs from "../Components/AboutUs";
import DJSection from "../Components/DJ";


const Home=()=>{

    const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};
    return(
        <>
       {/**HERO SECTION */}
       <section className="hero" id="hero">
        <motion.div
  className="light-sweep"
  animate={{
    x: ["-100%", "100%"]
  }}
  transition={{
    repeat: Infinity,
    duration: 6,
    ease: "linear"
  }}
/>

  <div className="hero-overlay"></div>

  <div className="hero-container">

    {/* LEFT TEXT */}
    <motion.div
  className="hero-left"
  initial={{ opacity: 0, x: -60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{
    duration: 1,
    delay: 0.3,
    ease: [0.22, 1, 0.36, 1]
  }}
>
  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.8, duration: 1 }}
  >
    Step into a world of pulsing neon lights<br />
    and electrifying beats.<br />
    Your unforgettable night starts the<br />
    moment you hit the spotlight.
  </motion.p>
</motion.div>

    {/* RIGHT CONTENT */}
    <motion.div
  className="hero-right"
  initial="hidden"
  animate="visible"
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }}
>
   <motion.h1 className="hero-heading">
  <motion.span
    className="outline"
    variants={fadeUp}
  >
    Exper
  </motion.span>
  <motion.span
    className="solid"
    variants={fadeUp}
  >
    ience the
  </motion.span>
  <br />

  <motion.span className="outline" variants={fadeUp}>
    N
  </motion.span>
  <motion.span className="solid" variants={fadeUp}>
    ight Like
  </motion.span>
  <br />

  <motion.span className="outline" variants={fadeUp}>
    Nev
  </motion.span>
  <motion.span className="solid" variants={fadeUp}>
    er Before
  </motion.span>
</motion.h1>

      <div className="hero-buttons">
        <Link to='/upcoming-events'>
  <motion.button
    className="hero-btn"
    whileHover={{ y: -6, scale: 1.05 }}
    whileTap={{ scale: 0.96 }}
  >
    Upcoming Events
  </motion.button>
  </Link>

 <Link to='/reserve-a-table'>
  <motion.button
    className="hero-btn"
    whileHover={{ y: -6, scale: 1.05 }}
    whileTap={{ scale: 0.96 }}
  >
    Book a Table
  </motion.button></Link>
</div>
    </motion.div>

  </div>
</section>


{/**ABOUT THE CLUB SECTION */}
<AboutUs />

{/**WHATS LIGHTING UP THE NIFGHT - DJ SECTION */}
<DJSection />
        </>
    )
}

export default Home;
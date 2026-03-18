/**CORE LIBRARIES IMPORT */
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

/**DATA IMPORT */
import { DJList } from "../Data";

const DJSection=()=>{
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
    return(
        <motion.section
  className="dj-section"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  <h2
    ref={h2Ref}
    className={`section-heading ${inView ? "in-view" : ""}`}
  >
    What’s Lighting Up the Night
  </h2>

  <motion.div
    className="dj-grid"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.15,
        },
      },
    }}
  >
    {DJList.slice(0,5).map((item, i) => (
      <motion.div
        key={i}
        className="dj-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover="hover"
      >
        {/* Image */}
        <motion.div
          className="img-wrapper"
          variants={{
            hover: { scale: 1.05 },
          }}
          transition={{ duration: 0.3 }}
        >
          <img src={item.img} alt={item.name} />
        </motion.div>

        {/* Title */}
        <motion.h3
          className="section-text"
          variants={{
            hover: { opacity: 0 },
          }}
          transition={{ duration: 0.3 }}
        >
          {item.name}
        </motion.h3>

        {/* Hover Box */}
        <motion.div
          className="hover-box"
          initial={{ y: "10%" }}
          variants={{
            hover: { y: 0 },
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <p>{item.name}</p>
          <p>{item.date}</p>
          <p>
            <strong>Theme: </strong>
            {item.theme}
          </p>
        </motion.div>
      </motion.div>
    ))}
  </motion.div>
</motion.section>
    )
}

export default DJSection;
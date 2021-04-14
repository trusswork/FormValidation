import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

function Home() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={transition}
      className="home-conatiner"
    >
      <Link to="/Form">
        <motion.div
          whileHover={{ scale: 0.9 }}
          transition={transition}
          className="home-logo"
        >
          <motion.span>I</motion.span>
          <motion.span>N</motion.span>
          <motion.span>C</motion.span>
          <motion.span>S</motion.span>
          <motion.span>U</motion.span>
          <motion.span></motion.span>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default Home;

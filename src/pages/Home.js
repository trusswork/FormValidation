import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

function Home() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={transition}
      className="home-conatiner"
    >
      <Link to="/Form">
        <motion.h1
          whileHover={{ scale: 0.9 }}
          transition={transition}
          className="home-logo"
        >
          Incsub
        </motion.h1>
      </Link>
    </motion.div>
  );
}

export default Home;

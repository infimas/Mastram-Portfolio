import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${
        scrolled ? "bg-primary backdrop-blur-md bg-opacity-90" : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        {/* Enhanced Logo Section */}
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <motion.img 
            src={logo} 
            alt='Mastram Meena Logo' 
            className='w-9 h-9 object-contain'
            whileHover={{ 
              rotate: 360,
              scale: 1.1 
            }}
            transition={{ duration: 0.6 }}
          />
          <motion.p 
            className='text-white text-[18px] font-bold cursor-pointer flex'
            whileHover={{ scale: 1.05 }}
          >
            Mastram Meena &nbsp;
            <motion.span 
              className='sm:block hidden text-[#00d4aa]'
              animate={{ 
                opacity: [0.7, 1, 0.7] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              | Data Scientist
            </motion.span>
          </motion.p>
        </Link>

        {/* Desktop Navigation */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav, index) => (
            <motion.li
              key={nav.id}
              className={`${
                active === nav.title ? "text-[#00d4aa]" : "text-secondary"
              } hover:text-[#00d4aa] text-[18px] font-medium cursor-pointer transition-all duration-300 relative`}
              onClick={() => setActive(nav.title)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.5, duration: 0.5 }}
              whileHover={{ y: -2 }}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
              {/* Underline animation */}
              {active === nav.title && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00d4aa]"
                  layoutId="underline"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <motion.img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: toggle ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Enhanced Mobile Dropdown */}
          <motion.div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl border border-[#00d4aa] border-opacity-30`}
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ 
              opacity: toggle ? 1 : 0, 
              scale: toggle ? 1 : 0.8,
              y: toggle ? 0 : -20
            }}
            transition={{ duration: 0.3 }}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav, index) => (
                <motion.li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] transition-all duration-300 ${
                    active === nav.title ? "text-[#00d4aa]" : "text-secondary"
                  } hover:text-[#00d4aa]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index + 0.2 }}
                  whileHover={{ x: 5, scale: 1.05 }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

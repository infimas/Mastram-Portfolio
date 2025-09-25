import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[280px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full bg-gradient-to-br from-[#00d4aa]/20 to-[#00d4aa]/5 p-[2px] rounded-[25px] shadow-2xl group'
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className='bg-tertiary/80 backdrop-blur-sm rounded-[25px] py-8 px-6 min-h-[320px] flex justify-evenly items-center flex-col border border-[#00d4aa]/20 group-hover:border-[#00d4aa]/50 transition-all duration-300 relative overflow-hidden'
      >
        {/* Background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00d4aa]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-[#00d4aa] rounded-full opacity-30 group-hover:opacity-60 transition-opacity"></div>
        <div className="absolute bottom-6 left-4 w-1.5 h-1.5 bg-[#00d4aa] rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>

        <motion.div
          className="relative z-10"
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={icon}
            alt={title}
            className='w-20 h-20 object-contain filter group-hover:brightness-110 transition-all duration-300'
          />
        </motion.div>

        <motion.h3 
          className='text-white text-[22px] font-bold text-center mt-4 group-hover:text-[#00d4aa] transition-colors duration-300 relative z-10'
          whileHover={{ scale: 1.05 }}
        >
          {title}
          <motion.div
            className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#00d4aa] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ width: 0 }}
            whileHover={{ width: "80%" }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        </motion.h3>

        {/* Service number indicator */}
        <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-[#00d4aa]/20 border border-[#00d4aa]/40 flex items-center justify-center">
          <span className="text-[#00d4aa] text-sm font-bold">{index + 1}</span>
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Get to Know Me</p>
        <h2 className={styles.sectionHeadText}>
          About 
          <motion.span
            className="text-[#00d4aa]"
            animate={{ 
              textShadow: [
                "0 0 5px rgba(0, 212, 170, 0.5)",
                "0 0 15px rgba(0, 212, 170, 0.8)",
                "0 0 5px rgba(0, 212, 170, 0.5)"
              ]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            {" "}Mastram.
          </motion.span>
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[18px] max-w-4xl leading-[32px]'
      >
        I'm a passionate <span className="text-[#00d4aa] font-semibold">Data Scientist</span> with 3+ years of experience transforming raw data into 
        <span className="text-[#00d4aa] font-semibold"> actionable business insights</span>. Specialized in 
        <span className="text-[#00d4aa] font-semibold"> machine learning, predictive analytics,</span> and 
        <span className="text-[#00d4aa] font-semibold"> statistical modeling</span> using Python, TensorFlow, and cloud platforms.
        
        <br /><br />

        I thrive on solving complex problems through data-driven approaches, from building recommendation engines 
        that boost user engagement by 45% to developing fraud detection systems that save companies millions. 
        My expertise spans the entire ML pipeline - from data preprocessing and feature engineering to model 
        deployment and monitoring in production environments.

        <br /><br />

        <motion.span
          className="text-white font-medium"
          whileHover={{ color: "#00d4aa", scale: 1.02 }}
        >
          Let's collaborate to unlock the hidden potential in your data and drive measurable business growth!
        </motion.span>
      </motion.p>

      {/* Services grid */}
      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      {/* Additional stats section */}
      <motion.div 
        className="mt-20 bg-tertiary/20 backdrop-blur-sm rounded-3xl p-8 border border-[#00d4aa]/20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <h3 className="text-center text-white text-2xl font-bold mb-8">
          Why Choose Me?
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { 
              title: "Data-Driven Solutions", 
              description: "Every decision backed by comprehensive analysis and statistical evidence",
              icon: "📊"
            },
            { 
              title: "End-to-End Expertise", 
              description: "From data collection to model deployment and monitoring in production",
              icon: "🔄"
            },
            { 
              title: "Business Impact Focus", 
              description: "Translating complex models into measurable ROI and business value",
              icon: "📈"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-black/20 rounded-xl p-6 hover:bg-[#00d4aa]/10 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 + index * 0.2 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-[#00d4aa] text-lg font-bold mb-3">{feature.title}</h4>
              <p className="text-secondary text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");

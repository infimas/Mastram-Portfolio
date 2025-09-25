import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
  kaggle_link,
  category
}) => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      whileHover={{ y: -15 }}
      transition={{ duration: 0.4 }}
      layout
    >
      <Tilt
        options={{
          max: 35,
          scale: 1.08,
          speed: 400,
        }}
        className='bg-tertiary/80 backdrop-blur-sm p-6 rounded-3xl sm:w-[380px] w-full border border-[#00d4aa]/20 hover:border-[#00d4aa]/60 transition-all duration-300 relative overflow-hidden group'
      >
        {/* Background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00d4aa]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className='relative w-full h-[240px] group'>
          <img
            src={image}
            alt={`${name} project preview`}
            className='w-full h-full object-cover rounded-2xl transition-all duration-300 group-hover:scale-110'
          />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

          {/* Enhanced action buttons */}
          <div className='absolute inset-0 flex justify-end items-start m-4 gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            {/* GitHub Link */}
            {source_code_link && (
              <motion.div
                onClick={() => window.open(source_code_link, "_blank")}
                className='bg-gradient-to-br from-gray-900 to-black w-12 h-12 rounded-full flex justify-center items-center cursor-pointer shadow-lg backdrop-blur-sm border border-white/20'
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                title="View Source Code"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <img
                  src={github}
                  alt='github'
                  className='w-6 h-6 object-contain'
                />
              </motion.div>
            )}

            {/* Live Demo Link */}
            {live_demo_link && (
              <motion.div
                onClick={() => window.open(live_demo_link, "_blank")}
                className='bg-gradient-to-br from-[#00d4aa] to-[#00b894] w-12 h-12 rounded-full flex justify-center items-center cursor-pointer text-white text-lg font-bold shadow-lg backdrop-blur-sm'
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                title="Live Demo"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                🚀
              </motion.div>
            )}

            {/* Kaggle Link for DS projects */}
            {kaggle_link && (
              <motion.div
                onClick={() => window.open(kaggle_link, "_blank")}
                className='bg-gradient-to-br from-blue-600 to-blue-700 w-12 h-12 rounded-full flex justify-center items-center cursor-pointer text-white text-lg font-bold shadow-lg backdrop-blur-sm'
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                title="Kaggle Notebook"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                K
              </motion.div>
            )}
          </div>

          {/* Project index indicator */}
          <div className='absolute top-4 left-4'>
            <motion.div 
              className='bg-[#00d4aa] text-black w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shadow-lg'
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: index * 0.2 + 0.5, type: "spring", stiffness: 200 }}
            >
              {index + 1}
            </motion.div>
          </div>

          {/* Category badge */}
          {category && (
            <div className='absolute bottom-4 left-4'>
              <motion.span
                className='bg-black/60 backdrop-blur-sm text-[#00d4aa] px-3 py-1 rounded-full text-xs font-medium border border-[#00d4aa]/30'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 1 }}
              >
                {category}
              </motion.span>
            </div>
          )}
        </div>

        <div className='mt-6 relative z-10'>
          <motion.h3 
            className='text-white font-bold text-[26px] hover:text-[#00d4aa] transition-colors duration-300 cursor-default leading-tight'
            whileHover={{ scale: 1.02, x: 5 }}
          >
            {name}
          </motion.h3>
          <motion.p 
            className='mt-3 text-secondary text-[15px] leading-relaxed'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.8 }}
          >
            {description}
          </motion.p>
        </div>

        {/* Enhanced tags with hover effects */}
        <div className='mt-5 flex flex-wrap gap-2 relative z-10'>
          {tags.map((tag, tagIndex) => (
            <motion.p
              key={`${name}-${tag.name}`}
              className={`text-[13px] ${tag.color} bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full hover:bg-black/60 transition-all duration-200 cursor-default border border-white/10 font-medium`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + tagIndex * 0.05 + 1 }}
              whileHover={{ scale: 1.1, y: -2 }}
            >
              #{tag.name}
            </motion.p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Project categories for filtering
  const categories = {
    all: 'All Projects',
    ml: 'Machine Learning',
    analytics: 'Data Analytics', 
    nlp: 'NLP & Text',
    vision: 'Computer Vision'
  };

  // Filter projects based on category
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Portfolio Showcase</p>
        <h2 className={`${styles.sectionHeadText}`}>
          Data Science 
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
            {" "}Projects.
          </motion.span>
        </h2>
      </motion.div>

      <div className='w-full flex flex-col'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          These projects demonstrate my expertise in <span className="text-[#00d4aa] font-semibold">machine learning</span>, 
          {" "}<span className="text-[#00d4aa] font-semibold">data analytics</span>, and 
          {" "}<span className="text-[#00d4aa] font-semibold">statistical modeling</span>. 
          Each solution tackles real-world problems using Python, scikit-learn, TensorFlow, and modern data stack. 
          From predictive models to interactive dashboards - these projects showcase end-to-end data science workflows 
          with measurable business impact and deployed solutions.
        </motion.p>

        {/* Project Filter Buttons */}
        <motion.div
          className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {Object.entries(categories).map(([key, label]) => (
            <motion.button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === key
                  ? 'bg-[#00d4aa] text-black shadow-lg'
                  : 'bg-tertiary/50 text-secondary hover:bg-[#00d4aa]/20 hover:text-[#00d4aa] border border-[#00d4aa]/20'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {label}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Enhanced project grid with responsive layout */}
      <motion.div 
        className='mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 place-items-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        layout
      >
        {filteredProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </motion.div>

      {/* Project Statistics */}
      <motion.div 
        className="mt-20 bg-tertiary/20 backdrop-blur-sm rounded-3xl p-8 border border-[#00d4aa]/20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <h3 className="text-center text-white text-2xl font-bold mb-8">
          Project Impact Overview
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { number: filteredProjects.length, label: "Total Projects" },
            { number: "94%", label: "Avg Accuracy" },
            { number: "₹2M+", label: "Value Generated" },
            { number: "100%", label: "Production Ready" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + index * 0.2 }}
            >
              <h4 className="text-3xl font-bold text-[#00d4aa] mb-2">{stat.number}</h4>
              <p className="text-secondary text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Enhanced Call to action - UPDATED GitHub Link, Kaggle REMOVED */}
      <motion.div 
        className="mt-16 text-center bg-gradient-to-r from-[#00d4aa]/10 to-transparent rounded-2xl p-8 border border-[#00d4aa]/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <motion.h3 
          className="text-white text-xl font-bold mb-4"
          whileHover={{ scale: 1.02 }}
        >
          Want to see more of my work?
        </motion.h3>
        <motion.p 
          className="text-secondary text-base mb-6"
          whileHover={{ scale: 1.01 }}
        >
          Explore comprehensive project documentation and code repositories on GitHub
        </motion.p>
        
        <div className="flex justify-center">
          <motion.a
            href="https://github.com/bardawat-mast"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00d4aa] text-black px-8 py-4 rounded-full font-semibold hover:bg-[#00b894] transition-colors flex items-center gap-3 text-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 212, 170, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={github} alt="github" className="w-6 h-6" />
            View GitHub Portfolio
          </motion.a>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "projects");

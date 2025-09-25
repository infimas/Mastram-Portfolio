import React, { useState } from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Tech categories for filtering
  const techCategories = {
    all: "All Technologies",
    ml: "Machine Learning",
    data: "Data Processing", 
    viz: "Visualization",
    deploy: "Deployment & Cloud",
    web: "Web Development"
  };

  // Categorize technologies
  function getTechCategory(name) {
    const mlTechs = ['tensorflow', 'pytorch', 'scikit-learn'];
    const dataTechs = ['python', 'pandas', 'numpy', 'sql', 'postgresql'];
    const vizTechs = ['tableau', 'power bi'];
    const deployTechs = ['docker', 'aws', 'git'];
    const webTechs = ['react', 'nextjs', 'javascript'];

    const lowerName = name.toLowerCase();
    if (mlTechs.some(tech => lowerName.includes(tech))) return 'ml';
    if (dataTechs.some(tech => lowerName.includes(tech))) return 'data';
    if (vizTechs.some(tech => lowerName.includes(tech))) return 'viz';
    if (deployTechs.some(tech => lowerName.includes(tech))) return 'deploy';
    if (webTechs.some(tech => lowerName.includes(tech))) return 'web';
    return 'data'; // default
  }

  // Enhanced tech data with proficiency
  const enhancedTechnologies = technologies.map(tech => ({
    ...tech,
    category: getTechCategory(tech.name),
    proficiency: ['Python', 'Pandas', 'NumPy', 'SQL'].includes(tech.name) ? 'Expert' : 'Advanced'
  }));

  const filteredTechs = activeCategory === 'all' 
    ? enhancedTechnologies 
    : enhancedTechnologies.filter(tech => tech.category === activeCategory);

  return (
    <>
      {/* Section Header */}
      <motion.div variants={textVariant()} className="text-center mb-16">
        <p className={`${styles.sectionSubText}`}>Technical Arsenal</p>
        <h2 className={`${styles.sectionHeadText}`}>
          Tech 
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
            {" "}Stack.
          </motion.span>
        </h2>
        
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl mx-auto leading-[30px]'
        >
          Comprehensive toolkit spanning <span className="text-[#00d4aa] font-semibold">machine learning frameworks</span>, 
          {" "}<span className="text-[#00d4aa] font-semibold">data processing libraries</span>, and 
          {" "}<span className="text-[#00d4aa] font-semibold">cloud deployment platforms</span>. 
          Built for scalable, production-ready data science solutions.
        </motion.p>
      </motion.div>

      {/* Category Filter Buttons */}
      <motion.div 
        className="flex flex-wrap justify-center gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {Object.entries(techCategories).map(([key, label]) => (
          <motion.button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === key
                ? 'bg-[#00d4aa] text-black shadow-lg'
                : 'bg-tertiary/50 backdrop-blur-sm text-secondary hover:bg-[#00d4aa]/20 hover:text-[#00d4aa] border border-[#00d4aa]/20'
            }`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {label}
          </motion.button>
        ))}
      </motion.div>

      {/* Tech Stack Grid */}
      <motion.div 
        className='flex flex-row flex-wrap justify-center gap-10'
        layout
      >
        {filteredTechs.map((technology, index) => (
          <motion.div 
            className='relative w-28 h-28 group' 
            key={technology.name}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ 
              delay: index * 0.1,
              duration: 0.5,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ y: -10 }}
          >
            <BallCanvas icon={technology.icon} />
            
            {/* Tech Name & Proficiency Tooltip */}
            <motion.div
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10"
              initial={{ y: 10 }}
              whileHover={{ y: 0 }}
            >
              <div className="bg-tertiary/90 backdrop-blur-sm border border-[#00d4aa]/30 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
                <p className="font-semibold text-white">{technology.name}</p>
                <p className="text-[#00d4aa] text-[10px] font-medium">{technology.proficiency}</p>
              </div>
              <div className="w-2 h-2 bg-tertiary/90 transform rotate-45 -mt-1 mx-auto border-l border-t border-[#00d4aa]/30"></div>
            </motion.div>

            {/* Proficiency Ring */}
            <div className="absolute -top-1 -right-1 z-10">
              <div className={`w-4 h-4 rounded-full border-2 shadow-lg ${
                technology.proficiency === 'Expert' 
                  ? 'bg-[#00d4aa] border-[#00d4aa]' 
                  : 'bg-yellow-400 border-yellow-400'
              }`}>
                <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Tech Stats */}
      <motion.div 
        className="mt-16 bg-tertiary/20 backdrop-blur-sm rounded-3xl p-8 border border-[#00d4aa]/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <h3 className="text-center text-white text-xl font-bold mb-8">
          Technical Expertise Overview
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <motion.div whileHover={{ scale: 1.05, y: -5 }}>
            <h4 className="text-3xl font-bold text-[#00d4aa] mb-2">{enhancedTechnologies.length}+</h4>
            <p className="text-secondary text-sm">Technologies</p>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05, y: -5 }}>
            <h4 className="text-3xl font-bold text-[#00d4aa] mb-2">5+</h4>
            <p className="text-secondary text-sm">ML Frameworks</p>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05, y: -5 }}>
            <h4 className="text-3xl font-bold text-[#00d4aa] mb-2">3+</h4>
            <p className="text-secondary text-sm">Cloud Platforms</p>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05, y: -5 }}>
            <h4 className="text-3xl font-bold text-[#00d4aa] mb-2">10+</h4>
            <p className="text-secondary text-sm">Data Tools</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Learning Section */}
      <motion.div 
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <p className="text-secondary text-sm">
          Currently exploring: 
          <span className="text-[#00d4aa] font-semibold"> LangChain</span>, 
          <span className="text-[#00d4aa] font-semibold"> MLOps</span>, 
          <span className="text-[#00d4aa] font-semibold"> Kubernetes</span>
        </p>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");

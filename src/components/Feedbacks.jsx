import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  project,
  rating,
  linkedin,
  category
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-tertiary/40 backdrop-blur-sm p-8 rounded-3xl xs:w-[320px] w-full border border-[#00d4aa]/20 hover:border-[#00d4aa]/50 transition-all duration-300 group relative overflow-hidden'
    whileHover={{ y: -10, scale: 1.02 }}
  >
    {/* Background gradient on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#00d4aa]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    
    {/* Floating elements */}
    <div className="absolute top-4 right-4 w-2 h-2 bg-[#00d4aa] rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
    <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-[#00d4aa] rounded-full opacity-15 group-hover:opacity-30 transition-opacity"></div>

    <div className="relative z-10">
      {/* Enhanced quote mark */}
      <motion.p 
        className='text-[#00d4aa] font-black text-[48px] opacity-60 leading-none'
        animate={{ 
          rotate: [0, 5, -5, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        "
      </motion.p>

      {/* Star Rating */}
      <div className='flex gap-1 mb-4 -mt-4'>
        {[...Array(5)].map((_, i) => (
          <motion.span
            key={i}
            className={`text-lg ${i < rating ? 'text-[#00d4aa]' : 'text-gray-600'}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + i * 0.1 + 0.5 }}
            whileHover={{ scale: 1.2, rotate: 360 }}
          >
            ⭐
          </motion.span>
        ))}
      </div>

      <div className='mt-1'>
        <motion.p 
          className='text-white tracking-wider text-[16px] leading-relaxed'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.2 + 0.5 }}
        >
          {testimonial}
        </motion.p>

        {/* Project tag */}
        {project && (
          <motion.div
            className='mt-4 inline-block'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 + 0.8 }}
          >
            <span className='bg-[#00d4aa]/20 backdrop-blur-sm text-[#00d4aa] px-3 py-1 rounded-full text-xs font-medium border border-[#00d4aa]/30'>
              🚀 {project}
            </span>
          </motion.div>
        )}

        <div className='mt-7 flex justify-between items-center gap-1'>
          <div className='flex-1 flex flex-col'>
            <motion.p 
              className='text-white font-medium text-[16px] flex items-center gap-2'
              whileHover={{ scale: 1.02 }}
            >
              <span className='text-[#00d4aa]'>@</span> 
              <span className="hover:text-[#00d4aa] transition-colors duration-200">
                {name}
              </span>
              {linkedin && (
                <motion.a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  🔗
                </motion.a>
              )}
            </motion.p>
            <p className='mt-1 text-secondary text-[12px]'>
              {designation} at <span className="text-[#00d4aa] font-medium">{company}</span>
            </p>
          </div>

          <motion.div
            className="relative"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <img
              src={image}
              alt={`feedback by ${name}`}
              className='w-12 h-12 rounded-full object-cover border-2 border-[#00d4aa]/50 group-hover:border-[#00d4aa] transition-all duration-300'
            />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#00d4aa] rounded-full flex items-center justify-center shadow-lg">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // ==========================================================
  // YEH HAI CHANGE: Sirf 'All Reviews' aur 'Colleagues' rakha hai
  // ==========================================================
  const filterCategories = {
    all: 'All Reviews',
    colleague: 'Colleagues', 
  };

  const filteredTestimonials = activeFilter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === activeFilter);

  return (
    <div className={`mt-12 bg-tertiary/10 backdrop-blur-sm rounded-[30px] overflow-hidden border border-[#00d4aa]/10`}>
      <div
        className={`bg-tertiary/20 rounded-3xl ${styles.padding} min-h-[300px] relative overflow-hidden`}
      >
        {/* Background animation */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-10 -right-10 w-40 h-40 bg-[#00d4aa]/5 rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
          <motion.div
            className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#00d4aa]/3 rounded-full"
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [360, 180, 0]
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        </div>

        <motion.div variants={textVariant()} className="relative z-10">
          <p className={styles.sectionSubText}>Client Success Stories</p>
          <h2 className={styles.sectionHeadText}>
            Impact & 
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
              {" "}Testimonials.
            </motion.span>
          </h2>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            Real feedback from <span className="text-[#00d4aa] font-semibold">data-driven collaborations</span> - 
            showcasing measurable business impact, technical excellence, and analytical insights that drive growth.
          </motion.p>

          {/* Filter buttons */}
          <motion.div 
            className="flex flex-wrap gap-3 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {Object.entries(filterCategories).map(([key, label]) => (
              <motion.button
                key={key}
                onClick={() => setActiveFilter(key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === key
                    ? 'bg-[#00d4aa] text-black shadow-lg'
                    : 'bg-black/20 backdrop-blur-sm text-secondary hover:bg-[#00d4aa]/20 hover:text-[#00d4aa] border border-[#00d4aa]/20'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {label}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Testimonials grid */}
      <motion.div 
        className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}
        layout
      >
        {filteredTestimonials.map((testimonial, index) => (
          // YEH HAI FIX: KEY KO STABLE BANAYA GAYA HAI (testimonial.name)
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </motion.div>

      {/* Trust indicators */}
      <motion.div 
        className="bg-tertiary/20 backdrop-blur-sm p-8 text-center border-t border-[#00d4aa]/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <h3 className="text-white text-xl font-bold mb-6">Client Satisfaction Metrics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <motion.div whileHover={{ scale: 1.05, y: -5 }}>
            <h4 className="text-2xl font-bold text-[#00d4aa] mb-2">15+</h4>
            <p className="text-secondary text-sm">ML Projects</p>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05, y: -5 }}>
            <h4 className="text-2xl font-bold text-[#00d4aa] mb-2">98%</h4>
            <p className="text-secondary text-sm">Client Satisfaction</p>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05, y: -5 }}>
            <h4 className="text-2xl font-bold text-[#00d4aa] mb-2">12+</h4>
            <p className="text-secondary text-sm">Happy Clients</p>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05, y: -5 }}>
            <h4 className="text-2xl font-bold text-[#00d4aa] mb-2">4.8/5</h4>
            <p className="text-secondary text-sm">Average Rating</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "testimonials");
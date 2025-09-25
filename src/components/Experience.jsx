import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "linear-gradient(135deg, #1d1836 0%, #232631 100%)",
        color: "#fff",
        border: "1px solid rgba(0, 212, 170, 0.2)",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
      }}
      contentArrowStyle={{ 
        borderRight: "7px solid #232631" 
      }}
      date={
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 + 0.5 }}
          className="text-[#00d4aa] font-semibold"
        >
          {experience.date}
        </motion.span>
      }
      iconStyle={{ 
        background: `linear-gradient(135deg, ${experience.iconBg} 0%, #00d4aa 100%)`,
        boxShadow: "0 0 20px rgba(0, 212, 170, 0.4)",
        border: "3px solid #00d4aa"
      }}
      icon={
        <motion.div 
          className='flex justify-center items-center w-full h-full'
          whileHover={{ 
            rotate: 360,
            scale: 1.1 
          }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[70%] h-[70%] object-contain'
          />
        </motion.div>
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 + 0.3 }}
      >
        <div className="mb-4">
          <motion.h3 
            className='text-white text-[24px] font-bold mb-2'
            whileHover={{ color: "#00d4aa" }}
            transition={{ duration: 0.3 }}
          >
            {experience.title}
          </motion.h3>
          
          <motion.p
            className='text-[#00d4aa] text-[18px] font-semibold mb-2'
            style={{ margin: 0 }}
            whileHover={{ scale: 1.02 }}
          >
            {experience.company_name}
          </motion.p>

          {/* Duration and location if available */}
          {experience.location && (
            <p className='text-secondary text-[14px] italic'>
              📍 {experience.location}
            </p>
          )}

          {/* Key achievements banner */}
          {experience.achievement && (
            <motion.div 
              className="mt-3 bg-[#00d4aa] bg-opacity-20 border border-[#00d4aa] border-opacity-40 rounded-lg p-3"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-[#00d4aa] text-[12px] font-bold mb-1">🏆 KEY ACHIEVEMENT</p>
              <p className="text-white text-[13px] font-medium">
                {experience.achievement}
              </p>
            </motion.div>
          )}
        </div>

        {/* Enhanced bullet points */}
        <ul className='mt-5 space-y-3'>
          {experience.points.map((point, pointIndex) => (
            <motion.li
              key={`experience-point-${pointIndex}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider flex items-start gap-3 group'
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + pointIndex * 0.1 + 0.5 }}
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
            >
              <span className="text-[#00d4aa] text-[16px] min-w-[16px] group-hover:scale-125 transition-transform">
                ▸
              </span>
              <span className="group-hover:text-white transition-colors">
                {point}
              </span>
            </motion.li>
          ))}
        </ul>

        {/* Tech stack tags if available */}
        {experience.technologies && (
          <motion.div 
            className="mt-6 flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 + 1 }}
          >
            {experience.technologies.map((tech, techIndex) => (
              <motion.span
                key={techIndex}
                className="bg-black bg-opacity-40 text-[#00d4aa] px-2 py-1 rounded-md text-xs font-medium border border-[#00d4aa] border-opacity-30"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(0, 212, 170, 0.1)" 
                }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        )}
      </motion.div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Data Science Journey
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Professional
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
            {" "}Experience.
          </motion.span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className='mt-4 text-center max-w-3xl mx-auto'
      >
        <p className='text-secondary text-[17px] leading-[30px]'>
          From <span className="text-[#00d4aa] font-semibold">data analysis</span> to 
          {" "}<span className="text-[#00d4aa] font-semibold">machine learning deployment</span> - 
          a progressive journey building scalable data solutions, predictive models, and analytics platforms 
          that drive measurable business impact across diverse industries.
        </p>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        {/* Enhanced timeline with custom CSS */}
        <style jsx>{`
          .vertical-timeline::before {
            background: linear-gradient(to bottom, transparent 0%, #00d4aa 50%, transparent 100%);
            width: 4px;
          }
          .vertical-timeline-element-date {
            color: #00d4aa !important;
            font-weight: 600;
          }
        `}</style>
        
        <VerticalTimeline lineColor="#00d4aa">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              index={index}
            />
          ))}
          
          {/* Timeline end marker */}
          <VerticalTimelineElement
            iconStyle={{ 
              background: 'linear-gradient(135deg, #00d4aa 0%, #ffffff 100%)',
              color: '#000',
              boxShadow: "0 0 20px rgba(0, 212, 170, 0.6)"
            }}
            icon={
              <motion.div
                className="flex justify-center items-center w-full h-full text-black font-bold text-lg"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                🚀
              </motion.div>
            }
          />
        </VerticalTimeline>
      </div>

      {/* Career stats */}
      <motion.div 
        className="mt-16 bg-tertiary bg-opacity-30 rounded-2xl p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <h3 className="text-center text-white text-xl font-bold mb-8">
          Career Impact Summary
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <motion.div whileHover={{ scale: 1.05 }}>
            <h4 className="text-3xl font-bold text-[#00d4aa]">3+</h4>
            <p className="text-secondary text-sm">Years Experience</p>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }}>
            <h4 className="text-3xl font-bold text-[#00d4aa]">15+</h4>
            <p className="text-secondary text-sm">ML Models Deployed</p>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }}>
            <h4 className="text-3xl font-bold text-[#00d4aa]">$2M+</h4>
            <p className="text-secondary text-sm">Business Value Created</p>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }}>
            <h4 className="text-3xl font-bold text-[#00d4aa]">95%</h4>
            <p className="text-secondary text-sm">Avg Model Accuracy</p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Experience, "work");

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_mastram123",
        "template_portfolio",
        {
          from_name: form.name,
          to_name: "Mastram Meena",
          from_email: form.email,
          to_email: "mastram@iitg.ac.in",
          message: form.message,
        },
        "pk_mastram_portfolio"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you! I'll get back to you within 24 hours.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error);
          alert("Something went wrong. Please try again or email me directly.");
        }
      );
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-tertiary/40 backdrop-blur-sm p-10 rounded-3xl border border-[#00d4aa]/20 relative overflow-hidden'
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00d4aa]/5 to-transparent"></div>
        
        {/* Floating elements */}
        <div className="absolute top-6 right-6 w-3 h-3 bg-[#00d4aa] rounded-full opacity-20"></div>
        <div className="absolute bottom-8 left-8 w-2 h-2 bg-[#00d4aa] rounded-full opacity-30"></div>

        <div className="relative z-10">
          <motion.p 
            className={styles.sectionSubText}
            whileHover={{ color: "#00d4aa" }}
          >
            Let's Collaborate
          </motion.p>
          <motion.h3 
            className={styles.sectionHeadText}
            whileHover={{ scale: 1.02 }}
          >
            Get in 
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
              {" "}Touch.
            </motion.span>
          </motion.h3>

          <motion.p
            className="mt-4 text-secondary text-[16px] leading-relaxed max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Have a data science project in mind? Need help with ML model development or analytics solutions? 
            <span className="text-[#00d4aa] font-medium"> Let's discuss how we can turn your data into business value!</span>
          </motion.p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
          >
            <motion.label 
              className='flex flex-col'
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className='text-white font-medium mb-4'>Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What should I call you?"
                className='bg-tertiary/60 backdrop-blur-sm py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none border border-[#00d4aa]/20 focus:border-[#00d4aa]/60 font-medium transition-all duration-300'
                required
              />
            </motion.label>

            <motion.label 
              className='flex flex-col'
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className='text-white font-medium mb-4'>Your Email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="How can I reach you?"
                className='bg-tertiary/60 backdrop-blur-sm py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none border border-[#00d4aa]/20 focus:border-[#00d4aa]/60 font-medium transition-all duration-300'
                required
              />
            </motion.label>

            <motion.label 
              className='flex flex-col'
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className='text-white font-medium mb-4'>Your Project Details</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='Tell me about your data science project, timeline, and requirements...'
                className='bg-tertiary/60 backdrop-blur-sm py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none border border-[#00d4aa]/20 focus:border-[#00d4aa]/60 font-medium transition-all duration-300 resize-none'
                required
              />
            </motion.label>

            <motion.button
              type='submit'
              className='bg-gradient-to-r from-[#00d4aa] to-[#00b894] py-4 px-8 rounded-xl outline-none w-fit text-black font-bold shadow-lg hover:shadow-[#00d4aa]/25 disabled:opacity-50 transition-all duration-300'
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 212, 170, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {loading ? "Sending..." : "Send Message 🚀"}
            </motion.button>
          </form>

          {/* Simple Contact info - GitHub updated, LinkedIn removed */}
          <motion.div 
            className="mt-12 flex flex-wrap gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div 
              className="flex items-center gap-3 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-[#00d4aa]/20"
              whileHover={{ scale: 1.05, borderColor: "rgba(0, 212, 170, 0.5)" }}
            >
              <span className="text-[#00d4aa]">📧</span>
              <span className="text-secondary text-sm">mastram@iitg.ac.in</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-3 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-[#00d4aa]/20"
              whileHover={{ scale: 1.05, borderColor: "rgba(0, 212, 170, 0.5)" }}
            >
              <span className="text-[#00d4aa]">📱</span>
              <span className="text-secondary text-sm">+91 86194 71847</span>
            </motion.div>

            <motion.a
              href="https://github.com/bardawat-mast"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-[#00d4aa]/20 hover:bg-[#00d4aa]/10 transition-all duration-300"
              whileHover={{ scale: 1.05, borderColor: "rgba(0, 212, 170, 0.5)" }}
            >
              <span className="text-[#00d4aa]">💻</span>
              <span className="text-secondary text-sm">GitHub Portfolio</span>
            </motion.a>
            
            <motion.div 
              className="flex items-center gap-3 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-[#00d4aa]/20"
              whileHover={{ scale: 1.05, borderColor: "rgba(0, 212, 170, 0.5)" }}
            >
              <span className="text-[#00d4aa]">🌍</span>
              <span className="text-secondary text-sm">Available for Remote Work</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Simple Earth Canvas - No bouncing effects */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] relative'
      >
        <div className="absolute inset-0 rounded-3xl overflow-hidden border border-[#00d4aa]/20">
          <EarthCanvas />
          
          <div className="absolute top-8 right-8 bg-tertiary/60 backdrop-blur-sm rounded-lg p-4 border border-[#00d4aa]/30">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 }}
            >
              <p className="text-[#00d4aa] font-bold text-sm">Response Time</p>
              <p className="text-white text-lg font-bold">&lt; 24 hours</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
      {/* Enhanced gradient background with multiple layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a23] via-[#1a1a2e] to-[#16213e]"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#00d4aa]/5 to-transparent"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Floating data points */}
        <motion.div
          className="absolute top-20 left-1/4 w-2 h-2 bg-[#00d4aa] rounded-full opacity-60"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-3 h-3 border border-[#00d4aa] rounded-full opacity-40"
          animate={{
            rotate: 360,
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-50"
          animate={{
            y: [0, -25, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Binary rain effect - minimal */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#00d4aa] text-xs font-mono opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 8 + 10}px`
            }}
            animate={{
              y: [-50, typeof window !== 'undefined' ? window.innerHeight + 50 : 800],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </motion.div>
        ))}
      </div>

      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-3"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300d4aa' fill-opacity='0.2' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10`}>
        {/* Enhanced animated line */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <motion.div 
            className='w-5 h-5 rounded-full bg-[#00d4aa] relative'
            animate={{
              scale: [1, 1.2, 1],
              boxShadow: [
                "0 0 0 0 rgba(0, 212, 170, 0.7)",
                "0 0 0 15px rgba(0, 212, 170, 0)",
                "0 0 0 0 rgba(0, 212, 170, 0)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-[#00d4aa] rounded-full animate-ping opacity-20"></div>
          </motion.div>
          <motion.div 
            className='w-1 sm:h-80 h-40 bg-gradient-to-b from-[#00d4aa] via-[#00d4aa]/50 to-transparent relative'
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#00d4aa] to-transparent blur-sm opacity-60"></div>
          </motion.div>
        </div>

        <div className="flex-1">
          <motion.h1 
            className={`${styles.heroHeadText} text-white relative`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hi, I'm{" "}
            <motion.span 
              className='text-[#00d4aa] relative'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              whileHover={{ 
                textShadow: "0 0 20px rgba(0, 212, 170, 0.8)",
                scale: 1.02
              }}
            >
              Mastram Meena
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#00d4aa] to-transparent"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 1 }}
              ></motion.div>
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className={`${styles.heroSubText} mt-2 text-white-100 relative`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Data Scientist turning raw data into{" "}
            <br className='sm:block hidden' />
            <motion.span 
              className="text-[#00d4aa] font-semibold"
              animate={{ 
                textShadow: [
                  "0 0 5px rgba(0, 212, 170, 0.5)",
                  "0 0 15px rgba(0, 212, 170, 0.8)",
                  "0 0 5px rgba(0, 212, 170, 0.5)"
                ]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              actionable insights
            </motion.span>{" "}
            with ML & Python
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <motion.a
              href="#projects"
              className="bg-[#00d4aa] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#00b894] transition-colors"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 212, 170, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="border-2 border-[#00d4aa] text-[#00d4aa] px-6 py-3 rounded-lg font-semibold hover:bg-[#00d4aa] hover:text-black transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Enhanced stats cards */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden xl:block">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          {[
            { number: "15+", label: "ML Projects" },
            { number: "95%", label: "Avg Accuracy" },
            { number: "₹50L+", label: "Value Created" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-tertiary/30 backdrop-blur-md border border-[#00d4aa]/20 rounded-xl p-4 text-center min-w-[120px] hover:border-[#00d4aa]/50 transition-all duration-300"
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(0, 212, 170, 0.1)",
                boxShadow: "0 10px 30px rgba(0, 212, 170, 0.2)"
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 + index * 0.2 }}
            >
              <motion.h3 
                className="text-2xl font-bold text-[#00d4aa] mb-1"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-white text-sm opacity-80">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div 
        className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <a href='#about'>
          <motion.div 
            className='w-[35px] h-[64px] rounded-3xl border-4 border-[#00d4aa] flex justify-center items-start p-2 relative backdrop-blur-sm'
            whileHover={{ 
              scale: 1.1, 
              borderColor: "#ffffff",
              boxShadow: "0 0 20px rgba(0, 212, 170, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className='w-3 h-3 rounded-full bg-[#00d4aa] mb-1'
            />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;

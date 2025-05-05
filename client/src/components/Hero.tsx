import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-indigo-500/10 to-transparent dark:from-indigo-900/20 -z-10"></div>
      
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="font-extrabold text-5xl sm:text-6xl md:text-7xl text-gradient-primary drop-shadow-sm"
        >
          CLAITY
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100"
        >
          Think Smarter. Work Faster. Achieve More.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          An AI aggregator platform that connects you to top AI tools through one smart interface. It Uses AI to assign the best AI Models to your task, making your work more efficient and effective.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <a 
            href="https://forms.gle/X2gqhHDs79eXv2Tm9" 
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 rounded-lg font-medium text-white bg-gradient-primary hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all shadow-md"
          >
            Join Waitlist
          </a>
          
          <a 
            href="#workflow" 
            className="px-8 py-3 rounded-lg font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900/30 hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transform hover:scale-105 transition-all shadow-md"
          >
            Smart Mode Workflow
          </a>
        </motion.div>
      </div>
      
      {/* Abstract decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-pink-400/10 dark:bg-pink-600/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-indigo-400/10 dark:bg-indigo-600/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Hero;

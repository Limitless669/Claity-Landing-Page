import { motion } from "framer-motion";
import { Clock, Frown, Users } from "lucide-react";

const PainPoints = () => {
  const painPoints = [
    {
      icon: <Clock className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      title: "Time-Consuming AI Juggling",
      description: "Tired of juggling ChatGPT, Perplexity, and Claude separately for research and writing?"
    },
    {
      icon: <Frown className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      title: "Model Selection Fatigue",
      description: "Wasting time figuring out the best AI model for your task?"
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      title: "Lack of Teamwork",
      description: "Wish AI could work like a team — one model researching, another outlining, another writing?"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-16 px-4 sm:px-6 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Solving Real Problems with Smart AI Workflow
        </h2>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {painPoints.map((point, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg transition-all hover:shadow-xl"
              variants={item}
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                  {point.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-4">
                {point.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {point.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PainPoints;

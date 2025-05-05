import { motion } from "framer-motion";
import { Pencil, FileSearch, Sparkles, Users } from "lucide-react";

interface UseCase {
  icon: JSX.Element;
  title: string;
  description: string;
}

const HowItHelpsSection = () => {
  const useCases: UseCase[] = [
    {
      icon: <Pencil className="h-8 w-8 text-white" />,
      title: "Research + Content Creation Made Easy",
      description: "Need a 1000-word blog post on market trends? Claity's Smart Mode breaks your prompt into steps — research, outline, writing — and assigns the best AI for each. You get high-quality results that feel human-made."
    },
    {
      icon: <FileSearch className="h-8 w-8 text-white" />,
      title: "Instantly Understand Long Content",
      description: "Got a PDF or a long YouTube video? Upload the file or paste the URL. Claity will summarize it, answer your questions, or extract key insights — no need to go through everything manually."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-white" />,
      title: "Personal Productivity Booster",
      description: "Juggling multiple tasks? Save your best prompts, export/import chats, and organize everything using folders and workspaces. It's like having your own smart AI assistant."
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Collaborate & Share with Ease",
      description: "Working with a team or sharing results? Claity lets you share chats, add notes, and keep track of conversations. Personas adapt the tone and task style to suit your team's needs — from writing to coding."
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.5
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 12
      } 
    }
  };

  return (
    <section id="how-it-helps" className="py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-800/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How it Helps?
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Real ways Claity makes your work smarter, faster, and easier.
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2"
        >
          {useCases.map((useCase, index) => (
            <motion.div 
              key={index}
              variants={item}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                transition: { duration: 0.2 }
              }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 transition-all"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-5">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                    {useCase.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a 
            href="#workflow" 
            className="inline-flex items-center px-6 py-3 rounded-lg font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900/30 hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transform hover:scale-105 transition-all shadow-md"
          >
            <span>See Smart Mode in action</span>
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItHelpsSection;
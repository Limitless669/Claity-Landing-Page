import { motion } from "framer-motion";

const WorkflowSection = () => {
  const workflowSteps = [
    {
      number: 1,
      title: "User enters prompt",
      description: "Start by describing what you need in natural language, just like you would with any AI assistant."
    },
    {
      number: 2,
      title: "Claity asks goal clarification for the prompt",
      description: "Claity ensures it understands your goals by asking Quesition."
    },
    {
      number: 3,
      title: "References are added (optional)",
      description: "Upload files, link URLs, or add notes to provide additional context and improve results."
    },
    {
      number: 4,
      title: "Prompt is enhanced",
      description: "Claity automatically improves your prompt for optimal results from each AI model."
    },
    {
      number: 5,
      title: "Main task is broken into subtasks",
      description: "Complex work is divided into logical components for more efficient processing. Like Working an AI Team for the task without relying on single AI Model."
    },
    {
      number: 6,
      title: "Each subtask is assigned to the best AI model",
      description: "After, Subtask is created then each subtask goes to the optimal AI for better output."
    },
    {
      number: 7,
      title: "Results are combined and displayed",
      description: "All outputs are intelligently merged into a cohesive final result that meets your goals."
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
    <section id="workflow" className="py-20 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16"
        >
          How Claity Smart Mode Works
        </motion.h2>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 sm:p-10">
            <div className="relative">
              <motion.div 
                className="grid md:grid-cols-2 gap-8"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
              >
                {workflowSteps.slice(0, 6).map((step) => (
                  <motion.div 
                    key={step.number}
                    className="flex items-start"
                    variants={item}
                  >
                    <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/30 h-12 w-12 rounded-full flex items-center justify-center mr-4">
                      <span className="text-indigo-600 dark:text-indigo-400 font-bold text-lg">{step.number}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
                
                {/* Final step (centered) */}
                <motion.div 
                  className="md:col-span-2 flex items-start justify-center"
                  variants={item}
                >
                  <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/30 h-12 w-12 rounded-full flex items-center justify-center mr-4">
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold text-lg">7</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {workflowSteps[6].title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {workflowSteps[6].description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Connection line (decorative) */}
              <div className="hidden lg:block absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-indigo-300 to-purple-400 dark:from-indigo-600 dark:to-purple-700"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;

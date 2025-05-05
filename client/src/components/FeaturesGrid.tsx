import { motion } from "framer-motion";
import { 
  Zap, 
  FileText, 
  BarChart3, 
  LayoutGrid, 
  Download, 
  Mic, 
  Video, 
  Library, 
  Users2, 
  Shield 
} from "lucide-react";

const FeaturesGrid = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      title: "Prompt Enhancement",
      description: "Automatically optimize your prompts to get the best possible results from AI models."
    },
    {
      icon: <FileText className="h-6 w-6 text-white" />,
      title: "Reference Input",
      description: "Add files, URLs, and notes to provide context and improve accuracy."
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-white" />,
      title: "Smart Routing to AI Models",
      description: "Automatically send each subtask to the AI model that will handle it best."
    },
    {
      icon: <LayoutGrid className="h-6 w-6 text-white" />,
      title: "Custom Workflow View",
      description: "Visualize and track progress as your tasks move through the AI workflow."
    },
    {
      icon: <Download className="h-6 w-6 text-white" />,
      title: "Chat Export & Notes",
      description: "Save and export your conversations and add personal notes for future reference."
    },
    {
      icon: <Mic className="h-6 w-6 text-white" />,
      title: "Speech-to-Text & Image Upload",
      description: "Talk to Claity or upload images for analysis and integration into your workflow."
    },
    {
      icon: <Video className="h-6 w-6 text-white" />,
      title: "Text-to-Video & Image-to-Video",
      description: "Convert your text or images into dynamic video content with cutting-edge AI."
    },
    {
      icon: <Library className="h-6 w-6 text-white" />,
      title: "Prompt Library & Personas",
      description: "Save effective prompts for reuse and switch between different AI personas for various tasks."
    },
    {
      icon: <Users2 className="h-6 w-6 text-white" />,
      title: "Collaboration & Team Workspace",
      description: "Work together with colleagues by sharing AI workflows and collaborating on projects."
    },
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      title: "Trace View & Feedback Loops",
      description: "See how your results are generated and provide feedback to improve future outputs."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16"
        >
          Everything You Need in One AI Workspace
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.slice(0, 9).map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all hover:shadow-lg"
              variants={item}
            >
              <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
          
          {/* Last feature (centered) */}
          <motion.div 
            className="md:col-span-3 max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all hover:shadow-lg"
            variants={item}
          >
            <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
              {features[9].icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {features[9].title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {features[9].description}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesGrid;

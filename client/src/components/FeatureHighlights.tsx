import { motion } from "framer-motion";
import { 
  Globe, 
  Grid2X2, 
  FileText, 
  PenLine, 
  Download, 
  Bookmark, 
  FolderTree, 
  ImageIcon, 
  Video, 
  BarChart4, 
  History, 
  Link, 
  Share, 
  Headphones, 
  Users, 
  FolderArchive 
} from "lucide-react";

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

const FeatureHighlights = () => {
  const features: Feature[] = [
    {
      icon: <Globe className="h-6 w-6 text-white" />,
      title: "AI Aggregation",
      description: "Access all your favorite AI models from one place. Claity acts as a central hub where you can switch between models effortlessly."
    },
    {
      icon: <Grid2X2 className="h-6 w-6 text-white" />,
      title: "Smart Mode",
      description: "Breaks complex tasks into smaller subtasks and routes them intelligently to the best-suited AI models to get smarter results, faster."
    },
    {
      icon: <FileText className="h-6 w-6 text-white" />,
      title: "Chat with Documents",
      description: "Upload files like PDFs or Word documents and directly ask questions or get summaries from them using AI."
    },
    {
      icon: <PenLine className="h-6 w-6 text-white" />,
      title: "Take Notes While Chatting",
      description: "Create and save notes within your chat interface to record insights, summaries, or personal observations."
    },
    {
      icon: <Download className="h-6 w-6 text-white" />,
      title: "Chat Export and Import",
      description: "Save your conversations for future reference or import them back into Claity to continue where you left off."
    },
    {
      icon: <Bookmark className="h-6 w-6 text-white" />,
      title: "Prompt Library / Saved Prompts",
      description: "Bookmark powerful prompts or frequently used instructions so you can reuse them whenever needed."
    },
    {
      icon: <FolderTree className="h-6 w-6 text-white" />,
      title: "Workspaces",
      description: "Organize your projects, conversations, and assets into separate spaces for better productivity and focus."
    },
    {
      icon: <ImageIcon className="h-6 w-6 text-white" />,
      title: "Text-to-Image Generation",
      description: "Create stunning visuals by simply describing what you want using natural language."
    },
    {
      icon: <Video className="h-6 w-6 text-white" />,
      title: "Text-to-Video / Image-to-Video",
      description: "Generate AI videos from either text prompts or uploaded images — ideal for creators, marketers, and storytellers."
    },
    {
      icon: <BarChart4 className="h-6 w-6 text-white" />,
      title: "Advanced Analytics",
      description: "Track your AI usage, view performance data, and optimize how you interact with different models."
    },
    {
      icon: <History className="h-6 w-6 text-white" />,
      title: "Chat History",
      description: "Access and browse your entire conversation history, categorized by date and session."
    },
    {
      icon: <Link className="h-6 w-6 text-white" />,
      title: "Chat with Images, Docs, URLs & YouTube",
      description: "Upload content or paste links (including YouTube URLs) to interact with and extract insights using AI."
    },
    {
      icon: <Share className="h-6 w-6 text-white" />,
      title: "Share Conversations",
      description: "Easily share your AI-generated chats with others via links or exports."
    },
    {
      icon: <Headphones className="h-6 w-6 text-white" />,
      title: "Text to Audio",
      description: "Convert any text result into realistic spoken audio — helpful for multitasking or accessibility."
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Personas (10–15 types)",
      description: "Choose from multiple AI personas customized for specific tasks like copywriting, coding, business analysis, or casual chat."
    },
    {
      icon: <FolderArchive className="h-6 w-6 text-white" />,
      title: "Chat Folders",
      description: "Organize your conversations into folders so you can manage projects and topics with ease."
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 10,
        duration: 0.5 
      } 
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800/70 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-6">
            Powerful Features Focused on Productivity
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Explore the comprehensive suite of tools designed to enhance your AI workflow 
            and help you accomplish more in less time.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.2 }
              }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all hover:border-indigo-300 dark:hover:border-indigo-700 border-2 border-transparent"
            >
              <div className="h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a 
            href="https://forms.gle/X2gqhHDs79eXv2Tm9" 
            target="_blank"
            rel="noreferrer"
            className="inline-flex px-8 py-4 rounded-lg font-medium text-white bg-gradient-primary hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all shadow-lg"
          >
            Join the Waitlist for Early Access
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
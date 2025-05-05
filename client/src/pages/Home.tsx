import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItHelpsSection from "@/components/HowItHelpsSection";
import WorkflowSection from "@/components/WorkflowSection";
import FeatureHighlights from "@/components/FeatureHighlights";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <HowItHelpsSection />
        <WorkflowSection />
        <FeatureHighlights />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

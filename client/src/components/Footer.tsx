const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="font-bold text-2xl tracking-tight text-gradient-light mb-4">CLAITY</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://forms.gle/X2gqhHDs79eXv2Tm9" 
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2 rounded-lg font-medium text-white bg-gradient-primary hover:from-indigo-700 hover:to-purple-700 transition-all text-center"
              >
                Join Waitlist
              </a>
              <a 
                href="#workflow" 
                className="px-6 py-2 rounded-lg font-medium text-gray-300 border border-gray-700 hover:border-gray-600 hover:text-white transition-all text-center"
              >
                Smart Mode Workflow
              </a>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <a 
              href="https://docs.google.com/document/d/1KCMDeUh1WHPWLypT6KTWESbnwaAdyGELtGCYmaD1zC4/edit?usp=drivesdk" 
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors mb-4 block"
            >
              Privacy Policy
            </a>
            <p className="text-gray-500 text-sm">&copy; {currentYear} Claity AI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

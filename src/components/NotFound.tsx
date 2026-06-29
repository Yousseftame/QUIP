import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-[#0C0B11] px-6 text-[#f5f3ee] font-sans selection:bg-[#FF5949] selection:text-[#f5f3ee]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center max-w-2xl"
      >
        <span className="text-[#FF5949] font-semibold tracking-[0.15em] text-sm uppercase mb-6">
          Error 404
        </span>
        
        <h1 className="font-heading font-bold text-6xl md:text-8xl tracking-tight leading-none mb-6">
          Page not found
        </h1>
        
        <p className="text-[#f5f3ee]/60 text-lg md:text-xl font-medium max-w-md mb-12">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <Link
          to="/"
          className="group relative flex items-center justify-center overflow-hidden rounded-full border border-[#f5f3ee]/20 bg-transparent px-8 py-4 font-semibold text-[#f5f3ee] transition-all hover:border-[#FF5949]"
        >
          <span className="absolute inset-0 bg-[#FF5949] translate-y-[101%] transition-transform duration-300 ease-out group-hover:translate-y-0" />
          <span className="relative z-10 flex items-center gap-2 transition-colors duration-300">
            Return to homepage
            <svg 
              viewBox="0 0 12 12" 
              className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" 
              fill="currentColor"
            >
              <path d="M7.4,0.7l4,5.3l-4,5.3H5.5l1.9-2.5c0.8-1,1.3-1.8,1.7-2.2H0.5V5.3H9C8.6,4.7,8,4,7.4,3.1L5.5,0.7H7.4z" />
            </svg>
          </span>
        </Link>
      </motion.div>
      
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden flex items-center justify-center opacity-5">
        <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] border border-white rounded-full mix-blend-overlay" />
        <div className="absolute w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] border border-white rounded-full mix-blend-overlay" />
      </div>
    </div>
  );
}

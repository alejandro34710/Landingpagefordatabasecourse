import { useState, useEffect } from "react";
import { Database, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavigationProps {
  courseTitle: string;
}

export function Navigation({ courseTitle }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    "Introducción",
    "Lección 2",
    "Lección 3",
    "Lección 4",
    "Lección 5",
    "Lección 6",
    "Lección 7",
    "Lección 8",
    "Lección 9",
    "Práctica"
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Database className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-white">{courseTitle}</div>
              <div className="text-xs text-slate-400">Curso Completo</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 overflow-x-auto">
            {sections.map((section, index) => (
              <a
                key={section}
                href={`#section-${index + 1}`}
                className="px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors whitespace-nowrap"
              >
                {section}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800"
          >
            <div className="px-4 py-4 space-y-2 max-h-96 overflow-y-auto">
              {sections.map((section, index) => (
                <a
                  key={section}
                  href={`#section-${index + 1}`}
                  className="block px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {index + 1}. {section}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

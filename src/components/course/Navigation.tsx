import { useState, useEffect } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    { id: "hero", label: "Inicio" },
    { id: "intro", label: "Introducción" },
    { id: "concepts", label: "Conceptos" },
    { id: "topics", label: "Temas" },
    { id: "conclusions", label: "Conclusiones" },
    { id: "activity", label: "Actividad" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-stone-950/90 backdrop-blur-xl border-b border-amber-900/30 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary-500/25">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div className="hidden md:block">
              <div className="text-sm text-amber-600 tracking-wider uppercase font-medium">Escuela de</div>
              <div className="text-lg font-bold tracking-tight text-amber-50">Transformación Empresarial</div>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="px-4 py-2 text-sm text-stone-400 hover:text-amber-400 transition-colors duration-200 rounded-lg hover:bg-stone-900/50"
              >
                {section.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-stone-900/50 hover:bg-stone-800/50 transition-colors border border-amber-900/30"
          >
            {isOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5 text-amber-400" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-amber-900/30 bg-stone-950/95 backdrop-blur-xl"
          >
            <div className="section-container py-6 space-y-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-stone-400 hover:text-amber-400 hover:bg-stone-900/50 rounded-lg transition-colors"
                >
                  {section.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-16 left-0 right-0 h-1 bg-slate-800 z-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
        style={{ width: `${progress}%` }}
      />
    </motion.div>
  );
}

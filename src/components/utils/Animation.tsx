import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type AnimationsProps = {
  children: React.ReactNode;
};

const Animations: React.FC<AnimationsProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement | null>(null); 
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (ref.current) {
        const top = ref.current.getBoundingClientRect().top;
        setIsVisible(top < window.innerHeight - 100);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default Animations;

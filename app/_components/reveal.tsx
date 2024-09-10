/* eslint-disable react/prop-types */
import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect, ReactNode } from "react";
import { useInView } from "react-intersection-observer";

function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef(null);
  const [inViewRef, inView] = useInView({ triggerOnce: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <div ref={inViewRef}>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Reveal;

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ProgressBarSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative px-4 bg-foreground overflow-hidden pb-12 sm:pb-16 -mt-px">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-5"
        >
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
              Final Phase
            </span>
          </div>
          <h3 className="font-display text-lg sm:text-xl font-bold text-primary-foreground">
            Access Window Progress
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {/* Progress bar container */}
          <div className="relative h-4 sm:h-5 w-full rounded-full bg-primary-foreground/10 border border-primary-foreground/10 overflow-hidden glow-primary">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "76%" } : { width: 0 }}
              transition={{ duration: 1.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                background: "linear-gradient(90deg, hsl(142 71% 45%), hsl(142 71% 55%), hsl(142 71% 45%))",
                backgroundSize: "200% 100%",
                animation: "gradient-flow 3s ease infinite",
              }}
            />
          </div>

          <div className="flex items-center justify-between mt-3">
            <p className="text-sm text-primary-foreground/50">
              Final spots are being secured
            </p>
            <span className="text-sm font-semibold text-primary">76%</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgressBarSection;

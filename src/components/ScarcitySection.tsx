import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const getTimeRemaining = () => {
  const deadline = new Date("2026-04-30T23:59:59Z");
  const now = new Date();
  const diff = Math.max(0, deadline.getTime() - now.getTime());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const ScarcitySection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [time, setTime] = useState(getTimeRemaining);

  useEffect(() => {
    const timer = setInterval(() => setTime(getTimeRemaining()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { value: time.days, label: t("scarcity.days") },
    { value: time.hours, label: t("scarcity.hours") },
    { value: time.minutes, label: t("scarcity.minutes") },
    { value: time.seconds, label: t("scarcity.seconds") },
  ];

  return (
    <section
      ref={ref}
      className="relative py-28 sm:py-32 px-4 overflow-hidden"
      style={{
        background: "linear-gradient(145deg, hsl(142 71% 8%), hsl(222 47% 6%), hsl(142 71% 5%))",
      }}
    >
      {/* Radial glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/[0.08] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-8 border border-primary/20">
            <AlertTriangle className="w-4 h-4" />
            {t("scarcity.limitedWindow")}
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-[3.5rem] lg:text-6xl font-bold text-primary-foreground mb-5 leading-tight">
            {t("scarcity.headline")}
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/50 max-w-2xl mx-auto mb-14">
            {t("scarcity.subheadline")}
          </p>
        </motion.div>

        {/* Countdown timer — larger, glowing digits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 sm:gap-8 mb-12"
        >
          {timeBlocks.map((block, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-18 h-18 sm:w-24 sm:h-24 rounded-2xl bg-primary-foreground/[0.06] border border-primary-foreground/10 backdrop-blur-sm flex items-center justify-center mb-3 glow-primary">
                <span className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground">
                  {String(block.value).padStart(2, "0")}
                </span>
              </div>
              <span className="text-xs sm:text-sm text-primary-foreground/40 uppercase tracking-wider font-medium">
                {block.label}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-sm text-primary-foreground/30 italic"
        >
          {t("scarcity.noGuarantee")}
        </motion.p>
      </div>
    </section>
  );
};

export default ScarcitySection;

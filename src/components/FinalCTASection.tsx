import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { Clock, Users } from "lucide-react";
import EmailSignupForm from "./EmailSignupForm";

const FinalCTASection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative px-4 overflow-hidden py-24 sm:py-28"
      style={{
        background: "linear-gradient(160deg, hsl(222 47% 9%), hsl(142 40% 8%), hsl(222 47% 7%))",
      }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/[0.07] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-8">
            <Clock className="w-4 h-4" />
            April 30, 2026
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-[3.5rem] font-bold text-primary-foreground mb-5 leading-tight">
            {t("finalCta.headline")}
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/50 max-w-xl mx-auto mb-12">
            {t("finalCta.subheadline")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-10"
        >
          <EmailSignupForm variant="dark" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-2 text-sm text-primary-foreground/35"
        >
          <Users className="w-4 h-4" />
          {t("finalCta.trustReminder")}
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;

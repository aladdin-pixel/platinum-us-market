import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { Shield, Clock } from "lucide-react";
import EmailSignupForm from "./EmailSignupForm";

const HeroSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center pt-[80px] md:pt-[100px] px-4 overflow-hidden pb-[5px]"
    >
      {/* Radial gradient behind content */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-primary/[0.06] rounded-full blur-[100px]" />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/[0.06] rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 -left-60 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 15, 0], y: [0, 15, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 right-1/4 w-[400px] h-[400px] bg-primary/[0.05] rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center pt-[2px] py-0 pb-0">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-5 md:mb-10 border border-primary/20 text-sm -mt-4"
        >
          <Shield className="w-4 h-4" />
          {t("hero.badge")}
        </motion.div>

        {/* H1 Headline — ~20% larger */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-[2.5rem] sm:text-[3.25rem] md:text-[4rem] lg:text-[4.75rem] font-extrabold text-foreground leading-[1.08] tracking-tight mb-6 md:mb-12"
        >
          {t("hero.headlinePart1")}
          <span className="text-primary">{t("hero.headlinePart2")}</span>
        </motion.h1>

        {/* Video embed — premium container */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-primary/15 glow-primary"
        >
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary/10 pointer-events-none z-10" />
          <div className="aspect-video bg-muted">
            <iframe
              src="https://player.vimeo.com/video/1165639970?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1"
              allow="autoplay; fullscreen; picture-in-picture"
              className="w-full h-full"
              title="Smart Energy Pays"
            />
          </div>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm sm:text-xl text-muted-foreground max-w-2xl mx-auto mt-6 md:mt-12 mb-2 md:mb-4 leading-relaxed"
        >
          {t("hero.subheadline")}
        </motion.p>

        {/* Email signup form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col items-center mb-6 md:mb-8"
        >
          <EmailSignupForm id="hero-signup" />
          <p className="text-xs text-muted-foreground mt-2.5">
            Takes 10 seconds · No commitment
          </p>
        </motion.div>

        {/* Metadata tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm text-muted-foreground my-0 pt-px mb-[27px] mt-[24px]"
        >
          <span className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            {t("hero.tagSimple")}
          </span>
          <span className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            {t("hero.tagTransparent")}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-primary" />
            {t("hero.tagDeadline")}
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

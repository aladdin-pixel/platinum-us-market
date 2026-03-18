import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { Check, X } from "lucide-react";

const TrustComparisonSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const comparisons = [
  { is: t("comparison.is1"), isNot: t("comparison.isNot1") },
  { is: t("comparison.is2"), isNot: t("comparison.isNot2") },
  { is: t("comparison.is3"), isNot: t("comparison.isNot3") },
  { is: t("comparison.is4"), isNot: t("comparison.isNot4") },
  { is: t("comparison.is5"), isNot: t("comparison.isNot5") }];


  return (
    <section ref={ref} className="py-24 px-4 pb-[74px] pt-[41px]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            {t("comparison.headline")}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-border/50 overflow-hidden bg-card shadow-sm">
          
          {/* Headers */}
          <div className="grid grid-cols-2 border-b border-border/50">
            <div className="p-4 sm:p-5 bg-primary/5">
              <span className="font-display font-bold text-primary text-sm uppercase tracking-wider">
                {t("comparison.is")}
              </span>
            </div>
            <div className="p-4 sm:p-5 bg-destructive/5">
              <span className="font-display font-bold text-destructive text-sm uppercase tracking-wider">
                {t("comparison.isNot")}
              </span>
            </div>
          </div>

          {comparisons.map((item, i) =>
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
            className={`grid grid-cols-2 ${
            i < comparisons.length - 1 ? "border-b border-border/30" : ""}`
            }>
            
              <div className="flex items-center gap-3 p-4 sm:p-5">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-sm sm:text-base text-foreground font-medium">
                  {item.is}
                </span>
              </div>
              <div className="flex items-center gap-3 p-4 sm:p-5">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center">
                  <X className="w-3.5 h-3.5 text-destructive" />
                </div>
                <span className="text-sm sm:text-base text-muted-foreground">
                  {item.isNot}
                </span>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>);

};

export default TrustComparisonSection;
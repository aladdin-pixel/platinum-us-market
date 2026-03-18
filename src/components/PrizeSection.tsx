import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { Trophy, Star } from "lucide-react";

const PrizeSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tiers = [
  { monthly: t("prizes.tier1Monthly"), duration: t("prizes.tier1Duration"), total: t("prizes.tier1Total"), emphasis: 1 },
  { monthly: t("prizes.tier2Monthly"), duration: t("prizes.tier2Duration"), total: t("prizes.tier2Total"), emphasis: 2 },
  { monthly: t("prizes.tier3Monthly"), duration: t("prizes.tier3Duration"), total: t("prizes.tier3Total"), emphasis: 3 },
  { monthly: t("prizes.tier4Monthly"), duration: t("prizes.tier4Duration"), total: t("prizes.tier4Total"), emphasis: 4 },
  { monthly: t("prizes.tier5Monthly"), duration: t("prizes.tier5Duration"), total: t("prizes.tier5Total"), emphasis: 5, isGrand: true }];


  const badges = [
  t("prizes.badge1"),
  t("prizes.badge2"),
  t("prizes.badge3"),
  t("prizes.badge4")];


  return (
    <section ref={ref} className="py-24 px-4 pt-[74px] pb-[74px]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12">
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("prizes.headline")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {t("prizes.subheadline")}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {badges.map((badge, i) =>
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              
                {badge}
              </motion.span>
            )}
          </div>
        </motion.div>

        {/* Prize tiers */}
        <div className="relative flex flex-col items-center gap-4">
          {/* Vertical progression line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-border via-primary/30 to-primary hidden md:block" />

          {tiers.map((tier, i) =>
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            className={`relative w-full ${
            tier.isGrand ? "max-w-xl" : "max-w-lg"}`
            }>
            
              <div
              className={`relative p-6 rounded-2xl border transition-all duration-300 ${
              tier.isGrand ?
              "bg-card border-primary/30 shadow-xl shadow-primary/10 ring-1 ring-primary/20" :
              "bg-card border-border/50 shadow-sm hover:shadow-md hover:border-primary/20"}`
              }>
              
                {tier.isGrand &&
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider">
                    <Trophy className="w-3.5 h-3.5" />
                    {t("prizes.grandPrize")}
                  </div>
              }
                <div className="flex items-center justify-between">
                  <div>
                    <span
                    className={`font-display font-bold ${
                    tier.isGrand ?
                    "text-3xl text-primary" :
                    "text-2xl text-foreground"}`
                    }>
                    
                      {tier.monthly}
                    </span>
                    <span className="text-muted-foreground ml-2 text-sm">
                      {tier.duration}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">
                      {t("prizes.totalLabel")}
                    </div>
                    <div
                    className={`font-display font-bold ${
                    tier.isGrand ?
                    "text-xl text-primary" :
                    "text-lg text-foreground"}`
                    }>
                    
                      {tier.total}
                    </div>
                  </div>
                </div>
                {tier.isGrand &&
              <div className="flex items-center gap-1 mt-3 text-primary">
                    {[...Array(5)].map((_, j) =>
                <Star key={j} className="w-4 h-4 fill-primary" />
                )}
                  </div>
              }
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default PrizeSection;
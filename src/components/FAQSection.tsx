import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger } from
"@/components/ui/accordion";

const FAQSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const faqs = [
  { q: t("faq.q1"), a: t("faq.a1") },
  { q: t("faq.q2"), a: t("faq.a2") },
  { q: t("faq.q3"), a: t("faq.a3") },
  { q: t("faq.q4"), a: t("faq.a4") }];


  return (
    <section ref={ref} className="px-4 bg-secondary/50 py-[74px] pt-[42px]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            {t("faq.headline")}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}>
          
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) =>
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-border/50 rounded-xl px-6 bg-card shadow-sm data-[state=open]:shadow-md data-[state=open]:border-primary/20 transition-all duration-300">
              
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            )}
          </Accordion>
        </motion.div>
      </div>
    </section>);

};

export default FAQSection;
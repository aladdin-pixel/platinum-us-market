import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToHero = () => {
    document.getElementById("hero-signup")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/70 backdrop-blur-2xl shadow-[0_1px_3px_0_hsl(var(--foreground)/0.04),0_4px_12px_0_hsl(var(--foreground)/0.03)] border-b border-border/40"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex items-center justify-between h-16 py-0 px-[15px]">
        <div className="flex items-center gap-2.5">
          <img src={logo} alt="Smart Energy Pays" className="h-8 w-8 object-contain" />
          <span className="font-display font-bold text-foreground text-base sm:text-lg tracking-tight">
            {t("nav.brandName")}
          </span>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <Button
            onClick={scrollToHero}
            size="sm"
            className="rounded-full font-semibold shadow-lg shadow-primary/20 hidden sm:inline-flex animate-pulse-glow hover:shadow-primary/30 hover:scale-[1.03] transition-all duration-300"
          >
            {t("nav.reserveSpot")}
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

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
    document.
    getElementById("hero-signup")?.
    scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ?
      "bg-background/80 backdrop-blur-2xl shadow-sm border-b border-border/50" :
      "bg-transparent"}`
      }>
      
      <div className="max-w-7xl sm:px-6 lg:px-8 flex items-center justify-between h-16 py-0 px-[15px] my-0 mx-0">
        <div className="flex items-center gap-2.5">
          <img
            src={logo}
            alt="Smart Energy Pays"
            className="h-8 w-8 object-contain" />
          
          <span className="font-display font-bold text-foreground text-base sm:text-lg tracking-tight">
            {t("nav.brandName")}
          </span>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <Button
            onClick={scrollToHero}
            size="sm"
            className="rounded-full font-semibold shadow-lg shadow-primary/20 hidden sm:inline-flex">
            
            {t("nav.reserveSpot")}
          </Button>
        </div>
      </div>
    </nav>);

};

export default Navbar;
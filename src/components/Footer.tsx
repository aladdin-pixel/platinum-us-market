import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-6 sm:py-10 px-4 border-t border-border/50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6">
        <div className="flex items-center gap-2.5">
          <img
            src={logo}
            alt="Smart Energy Pays"
            className="h-6 w-6 object-contain"
          />
          <span className="font-display font-bold text-foreground text-sm">
            {t("nav.brandName")}
          </span>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="https://smartenergypays.io/legal/imprint" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            Imprint
          </a>
          <a href="https://smartenergypays.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            {t("footer.privacy")}
          </a>
          <a href="https://smartenergypays.io/legal-regulatory-information" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            Regulatory Information
          </a>
        </div>

        <p className="text-sm text-muted-foreground">
          {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

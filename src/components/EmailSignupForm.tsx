import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { ArrowRight, Check } from "lucide-react";

interface EmailSignupFormProps {
  variant?: "light" | "dark";
  id?: string;
}

const EmailSignupForm = ({ variant = "light", id }: EmailSignupFormProps) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      toast.error(t("form.error"));
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    toast.success(t("form.success"), {
      description: t("form.successDesc"),
    });
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center gap-3 justify-center py-4"
        id={id}
      >
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
          <Check className="w-5 h-5 text-primary" />
        </div>
        <p
          className={`font-semibold ${
            variant === "dark" ? "text-white" : "text-foreground"
          }`}
        >
          {t("form.reserved")}
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
      id={id}
    >
      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        className="absolute opacity-0 pointer-events-none"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <Input
        type="email"
        placeholder={t("form.emailPlaceholder")}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className={`h-12 rounded-xl text-base flex-1 ${
          variant === "dark"
            ? "bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-primary"
            : "bg-background border-border"
        }`}
        aria-label="Email address"
      />

      <Button
        type="submit"
        disabled={isSubmitting}
        className="h-12 px-6 rounded-xl font-semibold text-base gap-2 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 whitespace-nowrap"
      >
        {isSubmitting ? t("form.submitting") : t("form.submit")}
        {!isSubmitting && <ArrowRight className="w-4 h-4" />}
      </Button>
    </form>
  );
};

export default EmailSignupForm;

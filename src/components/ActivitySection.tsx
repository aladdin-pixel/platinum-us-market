import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { Users, TrendingUp, CalendarClock } from "lucide-react";

const AnimatedCounter = ({
  target,
  duration = 2,
}: {
  target: number;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let current = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

const getDaysRemaining = () => {
  const deadline = new Date("2026-04-30T23:59:59Z");
  const now = new Date();
  return Math.max(
    0,
    Math.ceil((deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
  );
};

const ActivitySection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: Users,
      value: 2847,
      label: t("activity.participants"),
      isCounter: true,
    },
    {
      icon: TrendingUp,
      value: t("activity.momentumLabel"),
      label: t("activity.momentum"),
      isCounter: false,
    },
    {
      icon: CalendarClock,
      value: getDaysRemaining(),
      label: t("activity.spotsLabel"),
      isCounter: true,
    },
  ];

  return (
    <section ref={ref} className="relative py-16 px-4 bg-foreground overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <stat.icon className="w-5 h-5 text-primary mb-3" />
                <div className="text-3xl font-display font-bold text-foreground mb-1">
                  {stat.isCounter ? (
                    <AnimatedCounter target={stat.value as number} />
                  ) : (
                    <span className="text-primary">{stat.value}</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;

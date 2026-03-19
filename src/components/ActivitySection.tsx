import { useRef, useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { Users, TrendingUp, CalendarClock } from "lucide-react";

const AnimatedCounter = ({ target, duration = 1.8 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const startTime = performance.now();
    let rafId: number;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

const getDaysRemaining = () => {
  const deadline = new Date("2026-04-30T23:59:59Z");
  const now = new Date();
  return Math.max(0, Math.ceil((deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));
};

const ActivitySection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const daysRemaining = useMemo(() => getDaysRemaining(), []);

  const stats = useMemo(() => [
    {
      icon: Users,
      value: 2847,
      label: "People Already Secured Access",
      isCounter: true,
    },
    {
      icon: TrendingUp,
      value: "Accelerating",
      label: "Entries Accelerating",
      isCounter: false,
    },
    {
      icon: CalendarClock,
      value: daysRemaining,
      label: `${daysRemaining} Days Remaining — Final Window`,
      isCounter: true,
    },
  ], [daysRemaining]);

  return (
    <section ref={ref} className="relative sm:py-16 px-4 bg-foreground overflow-hidden py-[42px] my-0 pt-[47px]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-3 gap-3 sm:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-primary-foreground/[0.08] border border-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/[0.12] transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                {/* Live pulse indicator */}
                <span className="relative flex h-2 w-2">
                  <span className="animate-live-pulse absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
              </div>
              <div className="text-xl sm:text-3xl font-display font-bold text-primary-foreground mb-0.5 sm:mb-1">
                {stat.isCounter ? (
                  <AnimatedCounter target={stat.value as number} />
                ) : (
                  <span className="text-primary">{stat.value}</span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-primary-foreground/60">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;

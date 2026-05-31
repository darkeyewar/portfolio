"use client";
import React, { useRef, useState, useCallback, useEffect } from "react";
import {
  motion,
  useInView,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
  PanInfo,
} from "framer-motion";
import { X, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { GooeyText } from "@/components/ui/gooey-text-morphing";

/* ─── Project Data ─── */
const projects = [
  {
    id: "restaurantos",
    title: "RestaurantOS",
    category: "POS Systems",
    description:
      "Complete POS solution for restaurants with table management, kitchen display, online ordering, and real-time analytics. Handles 500+ daily orders with sub-second response times.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80",
    color: "from-orange-500 to-red-600",
    stats: { orders: "500+/day", uptime: "99.9%", speed: "<200ms" },
  },
  {
    id: "sanitaryhub",
    title: "SanitaryHub Pro",
    category: "POS Systems",
    description:
      "Inventory and billing system for sanitary shops with barcode scanning, supplier management, and profit tracking across multiple branches.",
    tech: ["React", "Express", "MongoDB", "Electron"],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
    color: "from-blue-500 to-cyan-500",
    stats: { skus: "5,000+", branches: "Multi", reports: "Real-time" },
  },
  {
    id: "invoiceflow",
    title: "InvoiceFlow",
    category: "SaaS",
    description:
      "Multi-tenant invoicing platform with automated reminders, payment tracking, and financial reporting for SMBs. Processes $2M+ in monthly transactions.",
    tech: ["Next.js", "Prisma", "Stripe", "AWS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    color: "from-violet-500 to-purple-600",
    stats: { volume: "$2M+/mo", tenants: "200+", automation: "95%" },
  },
  {
    id: "retailpulse",
    title: "RetailPulse",
    category: "SaaS",
    description:
      "Analytics dashboard that gives retail businesses real-time insights into sales trends, customer behavior, and inventory levels with predictive forecasting.",
    tech: ["React", "D3.js", "Node.js", "Redis"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    color: "from-emerald-500 to-teal-600",
    stats: { dataPoints: "1M+", latency: "<100ms", accuracy: "97%" },
  },
  {
    id: "flavordistrict",
    title: "Flavor District",
    category: "Websites",
    description:
      "Premium restaurant website with online ordering, reservation system, and menu management built for high conversion. Increased online orders by 300%.",
    tech: ["Next.js", "Tailwind", "Sanity CMS", "Vercel"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
    color: "from-amber-500 to-orange-600",
    stats: { conversion: "+300%", lighthouse: "98/100", load: "1.2s" },
  },
  {
    id: "buildcraft",
    title: "BuildCraft Studio",
    category: "Websites",
    description:
      "Corporate website for a construction company with project showcase, 3D galleries, and lead generation forms. Generates 50+ qualified leads monthly.",
    tech: ["Next.js", "Three.js", "Framer Motion", "Vercel"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    color: "from-slate-600 to-slate-800",
    stats: { leads: "50+/mo", pages: "25+", performance: "96/100" },
  },
];

/* ─── Infinite Wrap Utility ─── */
function wrap(min: number, max: number, v: number): number {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

/* ─── Animated Split Text ─── */
function SplitText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={`${text}-${i}`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: i * 0.03,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : undefined }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

/* ─── Fullscreen Detail View ─── */
function ProjectDetail({
  project,
  onClose,
}: {
  project: (typeof projects)[0];
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  const statEntries = Object.entries(project.stats);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
      />

      {/* Content Card */}
      <motion.div
        layoutId={`card-${project.id}`}
        className="relative z-10 w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-3xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
      >
        {/* Close */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 bg-black/40 backdrop-blur-sm rounded-full text-white hover:bg-black/60 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </motion.button>

        {/* Hero Image */}
        <motion.div
          layoutId={`image-${project.id}`}
          className="relative h-64 md:h-96 overflow-hidden rounded-t-3xl"
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80 z-10`}
          />
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
          <div className="absolute bottom-6 left-6 z-20">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white"
            >
              {project.category}
            </motion.span>
          </div>
        </motion.div>

        {/* Detail Content */}
        <div className="p-6 md:p-10">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white"
          >
            {project.title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
          >
            {project.description}
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-8 grid grid-cols-3 gap-4"
          >
            {statEntries.map(([key, value]) => (
              <div
                key={key}
                className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-xl"
              >
                <div className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                  {value}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 capitalize">
                  {key}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-8"
          >
            <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
              Built With
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Main Portfolio Carousel ─── */
export default function Portfolio() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [[activeIndex, direction], setActive] = useState([0, 0]);
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const dragX = useMotionValue(0);
  const springX = useSpring(dragX, { stiffness: 150, damping: 20 });

  const paginate = useCallback(
    (dir: number) => {
      setActive(([prev]) => [wrap(0, projects.length, prev + dir), dir]);
    },
    []
  );

  const handleDragEnd = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      const threshold = 50;
      if (info.offset.x < -threshold) paginate(1);
      else if (info.offset.x > threshold) paginate(-1);
    },
    [paginate]
  );

  // Keyboard nav
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedProject) return;
      if (e.key === "ArrowRight") paginate(1);
      if (e.key === "ArrowLeft") paginate(-1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [paginate, selectedProject]);

  // Get visible slides (prev, active, next) with infinite wrap
  const getSlideIndex = (offset: number) =>
    wrap(0, projects.length, activeIndex + offset);

  const visibleOffsets = isMobile ? [0] : [-1, 0, 1];

  const backgroundRotation = useTransform(springX, [-200, 200], [2, -2]);

  return (
    <section
      id="portfolio"
      className="py-24 md:py-32 bg-white dark:bg-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-red-600 tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
            Featured Projects
          </h2>

          {/* Gooey Text Morphing */}
          <div className="mt-6 h-16 md:h-20 flex items-center justify-center">
            <GooeyText
              texts={["POS Systems", "SaaS Products", "Web Apps", "Dashboards", "Mobile Apps"]}
              morphTime={1.5}
              cooldownTime={0.5}
              className="w-full h-full"
              textClassName="text-3xl md:text-5xl font-bold text-red-600 dark:text-red-500"
            />
          </div>

          <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of projects that showcase my expertise in building
            business-critical software.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          {/* 3D Carousel Track */}
          <div
            className="relative flex items-center justify-center"
            style={{ perspective: "1200px", minHeight: isMobile ? "420px" : "480px" }}
          >
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              {visibleOffsets.map((offset) => {
                const slideIndex = getSlideIndex(offset);
                const project = projects[slideIndex];
                const isActive = offset === 0;

                return (
                  <motion.div
                    key={`${project.id}-${slideIndex}-${activeIndex}`}
                    layoutId={isActive && !selectedProject ? `card-${project.id}` : undefined}
                    custom={direction}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                      x: direction > 0 ? 400 : -400,
                      rotateY: direction > 0 ? 15 : -15,
                    }}
                    animate={{
                      opacity: isActive ? 1 : 0.5,
                      scale: isActive ? 1.05 : 0.85,
                      x: offset * (isMobile ? 0 : 340),
                      rotateY: offset * -5,
                      z: isActive ? 100 : -50,
                      filter: isActive ? "blur(0px)" : "blur(4px)",
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.8,
                      x: direction > 0 ? -400 : 400,
                      rotateY: direction > 0 ? -15 : 15,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 150,
                      damping: 20,
                      opacity: { duration: 0.3 },
                    }}
                    drag={isActive ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.15}
                    onDragEnd={isActive ? handleDragEnd : undefined}
                    style={{
                      x: isActive ? dragX : undefined,
                      rotateY: isActive ? backgroundRotation : undefined,
                      position: isActive ? "relative" : "absolute",
                      transformStyle: "preserve-3d",
                    }}
                    onClick={() => {
                      if (isActive) setSelectedProject(project);
                    }}
                    className={`w-full max-w-sm md:max-w-md rounded-2xl overflow-hidden shadow-2xl cursor-pointer select-none ${
                      isActive ? "z-20" : "z-10 pointer-events-none"
                    }`}
                    whileHover={isActive ? { scale: 1.08 } : {}}
                  >
                    {/* Card Image */}
                    <motion.div
                      layoutId={
                        isActive && !selectedProject
                          ? `image-${project.id}`
                          : undefined
                      }
                      className="relative h-48 md:h-56 overflow-hidden"
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 30,
                      }}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-85 z-10`}
                      />
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 500px"
                        priority={isActive}
                      />
                      <div className="absolute bottom-4 left-4 z-20">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                          {project.category}
                        </span>
                      </div>
                      {isActive && (
                        <div className="absolute top-4 right-4 z-20">
                          <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="p-2 bg-white/20 backdrop-blur-sm rounded-lg"
                          >
                            <ArrowRight className="w-4 h-4 text-white" />
                          </motion.div>
                        </div>
                      )}
                    </motion.div>

                    {/* Card Content */}
                    <div className="p-5 md:p-6 bg-white dark:bg-slate-800">
                      <div className="h-8 overflow-hidden">
                        <AnimatePresence mode="wait">
                          {isActive && (
                            <SplitText
                              key={project.title}
                              text={project.title}
                              className="text-xl font-bold text-slate-900 dark:text-white"
                            />
                          )}
                        </AnimatePresence>
                        {!isActive && (
                          <span className="text-xl font-bold text-slate-900 dark:text-white">
                            {project.title}
                          </span>
                        )}
                      </div>

                      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.tech.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-0.5 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded"
                          >
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2.5 py-0.5 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 rounded">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>

                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                          className="mt-4 flex items-center gap-1.5 text-sm font-medium text-red-600 dark:text-red-400"
                        >
                          Click to explore{" "}
                          <ArrowRight className="w-3.5 h-3.5" />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => paginate(-1)}
              className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() =>
                    setActive([i, i > activeIndex ? 1 : -1])
                  }
                  className="cursor-pointer p-0.5"
                  aria-label={`Go to project ${i + 1}`}
                >
                  <motion.div
                    animate={{
                      width: i === activeIndex ? 24 : 8,
                      backgroundColor:
                        i === activeIndex
                          ? "#dc2626"
                          : "rgb(148 163 184)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="h-2 rounded-full"
                  />
                </button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => paginate(1)}
              className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Drag hint on mobile */}
          {isMobile && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 1.5 }}
              className="text-center text-xs text-slate-400 mt-4"
            >
              Swipe or tap to explore
            </motion.p>
          )}
        </motion.div>
      </div>

      {/* Fullscreen Detail Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

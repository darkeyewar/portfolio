"use client";
import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";

const categories = ["All", "POS Systems", "SaaS", "Websites"];

const projects = [
  {
    title: "RestaurantOS",
    category: "POS Systems",
    description:
      "Complete POS solution for restaurants with table management, kitchen display, online ordering, and real-time analytics.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    color: "from-orange-500 to-red-600",
  },
  {
    title: "SanitaryHub Pro",
    category: "POS Systems",
    description:
      "Inventory and billing system for sanitary shops with barcode scanning, supplier management, and profit tracking.",
    tech: ["React", "Express", "MongoDB", "Electron"],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "InvoiceFlow",
    category: "SaaS",
    description:
      "Multi-tenant invoicing platform with automated reminders, payment tracking, and financial reporting for SMBs.",
    tech: ["Next.js", "Prisma", "Stripe", "AWS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "RetailPulse",
    category: "SaaS",
    description:
      "Analytics dashboard that gives retail businesses real-time insights into sales trends, customer behavior, and inventory levels.",
    tech: ["React", "D3.js", "Node.js", "Redis"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Flavor District",
    category: "Websites",
    description:
      "Premium restaurant website with online ordering, reservation system, and menu management built for high conversion.",
    tech: ["Next.js", "Tailwind", "Sanity CMS", "Vercel"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "BuildCraft Studio",
    category: "Websites",
    description:
      "Corporate website for a construction company with project showcase, 3D galleries, and lead generation forms.",
    tech: ["Next.js", "Three.js", "Framer Motion", "Vercel"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    color: "from-slate-600 to-slate-800",
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-red-600 tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of projects that showcase my expertise in building business-critical software.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeFilter === cat
                  ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="group bg-slate-50 dark:bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/50 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90 z-10`}
                  />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 text-xs font-medium bg-slate-200/70 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-red-600 dark:text-red-400 group-hover:gap-2 transition-all">
                    View Details <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

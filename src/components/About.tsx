"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Users, Clock, Award } from "lucide-react";

const stats = [
  { icon: Zap, value: "50+", label: "Projects Delivered" },
  { icon: Users, value: "30+", label: "Happy Clients" },
  { icon: Clock, value: "5+", label: "Years Experience" },
  { icon: Award, value: "100%", label: "Client Satisfaction" },
];

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Python",
  "PostgreSQL", "MongoDB", "AWS", "Docker", "Tailwind CSS",
  "React Native", "Stripe", "Firebase", "GraphQL",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-sm font-semibold text-red-600 tracking-wider uppercase">
              About Me
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              Engineering solutions that
              <br />
              <span className="text-red-600">scale your business</span>
            </h2>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I&apos;m Abdul Rehman, a software engineer based in Lahore, Pakistan.
              I specialize in building point-of-sale systems for restaurants and
              sanitary shops, SaaS products, and custom web applications that help
              businesses streamline operations and increase revenue.
            </p>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Every line of code I write is focused on performance, user experience,
              and measurable business outcomes. From inventory management to payment
              processing, I build end-to-end solutions that just work.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 p-2 rounded-lg bg-red-50 dark:bg-red-500/10">
                    <stat.icon className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column - Tech stack */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 border border-slate-200 dark:border-slate-700/50">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-white dark:bg-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600 shadow-sm cursor-default transition-shadow hover:shadow-md"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Code snippet decoration */}
              <div className="mt-8 bg-slate-900 dark:bg-slate-950 rounded-xl p-5 font-mono text-sm overflow-hidden">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-slate-400">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-300">developer</span>{" "}
                  <span className="text-slate-500">=</span>{" "}
                  <span className="text-slate-300">{"{"}</span>
                </div>
                <div className="text-slate-400 ml-4">
                  <span className="text-green-300">name</span>
                  <span className="text-slate-500">:</span>{" "}
                  <span className="text-amber-300">&quot;Abdul Rehman&quot;</span>
                  <span className="text-slate-500">,</span>
                </div>
                <div className="text-slate-400 ml-4">
                  <span className="text-green-300">role</span>
                  <span className="text-slate-500">:</span>{" "}
                  <span className="text-amber-300">&quot;Full Stack Engineer&quot;</span>
                  <span className="text-slate-500">,</span>
                </div>
                <div className="text-slate-400 ml-4">
                  <span className="text-green-300">passion</span>
                  <span className="text-slate-500">:</span>{" "}
                  <span className="text-amber-300">&quot;Building POS &amp; SaaS&quot;</span>
                  <span className="text-slate-500">,</span>
                </div>
                <div className="text-slate-400 ml-4">
                  <span className="text-green-300">available</span>
                  <span className="text-slate-500">:</span>{" "}
                  <span className="text-blue-300">true</span>
                </div>
                <div className="text-slate-300">{"};"}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

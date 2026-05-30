"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, Pencil, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Discovery",
    description:
      "We discuss your business needs, goals, target audience, and technical requirements to define the project scope.",
  },
  {
    icon: Pencil,
    step: "02",
    title: "Design & Plan",
    description:
      "I create wireframes, choose the tech stack, and build a detailed roadmap with milestones and deliverables.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Development",
    description:
      "Agile development with weekly demos. You see progress in real-time and provide feedback at every stage.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch & Support",
    description:
      "Thorough testing, deployment, and ongoing support to ensure your software runs smoothly and scales with growth.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-32 bg-slate-900 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-red-500 tracking-wider uppercase">
            Process
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            How I Work
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            A streamlined process that keeps your project on track, on budget, and exceeding expectations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-slate-700" />
              )}

              <div className="bg-slate-800/50 rounded-2xl p-7 border border-slate-700/50 text-center relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-red-500/10 mb-5">
                  <step.icon className="w-7 h-7 text-red-500" />
                </div>
                <div className="text-xs font-bold text-red-500 mb-2 tracking-wider">
                  STEP {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

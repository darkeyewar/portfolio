"use client";
import React from "react";
import { motion } from "framer-motion";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { ArrowDown, Code2, Rocket } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative bg-slate-50 dark:bg-slate-950">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Accent gradient blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="flex flex-col pt-24 md:pt-0">
        <ContainerScroll
          titleComponent={
            <>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex items-center justify-center gap-2 mb-6"
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-900/5 dark:bg-white/10 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  <Rocket className="w-4 h-4 text-red-500" />
                  Available for new projects
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight"
              >
                I Build Software
                <br />
                <span className="text-red-600">That Drives Revenue</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="mt-6 text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto"
              >
                Full-stack engineer specializing in POS systems, SaaS products, and custom web solutions
                for restaurants, retail, and growing businesses.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Link
                  href="#portfolio"
                  className="group inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-semibold text-base hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-200 cursor-pointer"
                >
                  <Code2 className="w-5 h-5" />
                  View My Work
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-semibold text-base hover:border-slate-900 dark:hover:border-white hover:text-slate-900 dark:hover:text-white transition-all duration-200 cursor-pointer"
                >
                  Get a Free Quote
                </Link>
              </motion.div>
            </>
          }
        >
          {/* Hero showcase image - POS dashboard mockup */}
          <div className="h-full w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />

            {/* Simulated dashboard UI */}
            <div className="relative w-full h-full p-4 md:p-8">
              {/* Top bar */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">AR</span>
                  </div>
                  <div>
                    <div className="h-3 w-32 bg-white/20 rounded" />
                    <div className="h-2 w-20 bg-white/10 rounded mt-1.5" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-lg bg-white/10" />
                  <div className="w-8 h-8 rounded-lg bg-white/10" />
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {["Revenue", "Orders", "Customers", "Growth"].map((label, i) => (
                  <div key={label} className="bg-white/5 rounded-xl p-3 md:p-4 border border-white/10">
                    <div className="text-white/40 text-xs mb-1">{label}</div>
                    <div className="text-white font-bold text-sm md:text-lg">
                      {["$48.2K", "1,284", "856", "+24%"][i]}
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full mt-2">
                      <div
                        className="h-1 bg-red-500 rounded-full"
                        style={{ width: `${[78, 65, 82, 92][i]}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart area */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-3 w-24 bg-white/20 rounded" />
                  <div className="flex gap-2">
                    <div className="h-6 w-16 bg-white/10 rounded-md" />
                    <div className="h-6 w-16 bg-red-500/30 rounded-md" />
                  </div>
                </div>
                {/* Simulated bar chart */}
                <div className="flex items-end gap-2 h-24 md:h-32">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full rounded-t-sm bg-gradient-to-t from-red-600 to-red-400 opacity-80"
                        style={{ height: `${h}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ContainerScroll>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-slate-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}

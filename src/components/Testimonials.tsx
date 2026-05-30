"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Hassan",
    role: "Owner, The Spice Route Restaurant",
    content:
      "Abdul Rehman built our POS system from scratch. Our order processing time dropped by 40% and we now have real-time visibility into our sales and inventory. Game changer for our business.",
    rating: 5,
  },
  {
    name: "Sara Malik",
    role: "CEO, CleanTech Sanitary",
    content:
      "The inventory management system he developed handles our 5,000+ SKU catalog effortlessly. Barcode scanning, auto-reorder alerts, and the supplier portal saved us hours every week.",
    rating: 5,
  },
  {
    name: "Usman Ali",
    role: "Founder, FreshBite Delivery",
    content:
      "He delivered our online ordering platform in record time. The integration with our kitchen display and delivery tracking is seamless. Our online orders grew 3x in the first quarter.",
    rating: 5,
  },
  {
    name: "Fatima Noor",
    role: "Director, Noor Enterprises",
    content:
      "Professional, responsive, and incredibly talented. Abdul built our corporate website and internal dashboard. Both look stunning and perform flawlessly. Highly recommended.",
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 bg-slate-50 dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-red-600 tracking-wider uppercase">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
            What Clients Say
          </h2>
          <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Don&apos;t just take my word for it. Here&apos;s what business owners
            have to say about working with me.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-7 border border-slate-200 dark:border-slate-800 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-100 dark:text-slate-800" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">
                &quot;{t.content}&quot;
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white font-semibold text-sm">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white text-sm">
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

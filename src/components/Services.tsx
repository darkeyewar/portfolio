"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ShoppingCart,
  Globe,
  Layers,
  BarChart3,
  Smartphone,
  Shield,
} from "lucide-react";

const services = [
  {
    icon: ShoppingCart,
    title: "POS Systems",
    description:
      "Custom point-of-sale solutions for restaurants, sanitary shops, and retail businesses with real-time inventory, billing, and reporting.",
    features: ["Real-time Inventory", "Multi-branch Support", "Analytics Dashboard"],
  },
  {
    icon: Layers,
    title: "SaaS Products",
    description:
      "Scalable software-as-a-service applications built with modern architecture, subscription billing, and multi-tenant capabilities.",
    features: ["Multi-tenant Architecture", "Subscription Billing", "API-first Design"],
  },
  {
    icon: Globe,
    title: "Custom Websites",
    description:
      "High-performance, SEO-optimized websites built with Next.js, React, and modern frameworks tailored to your brand identity.",
    features: ["SEO Optimized", "Responsive Design", "CMS Integration"],
  },
  {
    icon: BarChart3,
    title: "Business Dashboards",
    description:
      "Data-driven dashboards that provide actionable insights into your business operations, sales trends, and customer behavior.",
    features: ["Real-time Data", "Custom Reports", "Export Capabilities"],
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Cross-platform mobile apps using React Native that extend your business reach to iOS and Android customers.",
    features: ["Cross-platform", "Push Notifications", "Offline Support"],
  },
  {
    icon: Shield,
    title: "API & Integrations",
    description:
      "Robust API development and third-party integrations including payment gateways, accounting software, and delivery services.",
    features: ["Payment Gateways", "Third-party APIs", "Secure Auth"],
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-24 md:py-32 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-red-600 tracking-wider uppercase">
            Services
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
            What I Build
          </h2>
          <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            End-to-end software solutions designed to optimize your operations and accelerate growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group bg-white dark:bg-slate-900 rounded-2xl p-7 border border-slate-200 dark:border-slate-800 hover:border-red-200 dark:hover:border-red-900/50 transition-all duration-300 hover:shadow-lg cursor-default"
            >
              <div className="p-3 w-fit rounded-xl bg-red-50 dark:bg-red-500/10 group-hover:bg-red-100 dark:group-hover:bg-red-500/20 transition-colors">
                <service.icon className="w-6 h-6 text-red-600" />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-slate-600 dark:text-slate-400 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

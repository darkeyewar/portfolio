"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ],
  services: [
    { name: "POS Systems", href: "#services" },
    { name: "SaaS Products", href: "#services" },
    { name: "Custom Websites", href: "#services" },
    { name: "Mobile Apps", href: "#services" },
    { name: "API Development", href: "#services" },
  ],
};

const socials = [
  { icon: Github, href: "https://github.com/abdulrehmancodes", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/abdulrehmancodes", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/abdulrehmancodes", label: "Twitter" },
  { icon: Mail, href: "mailto:abdurrehman5683@gmail.com", label: "Email" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-16 text-center border-b border-slate-800"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to build something great?
          </h3>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Let&apos;s turn your business idea into a powerful software solution.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-colors cursor-pointer"
          >
            <Mail className="w-5 h-5" />
            Start a Project
          </Link>
        </motion.div>

        {/* Footer grid */}
        <div className="py-12 grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="text-xl font-bold text-white">
              abdul<span className="text-red-500">rehman</span>
              <span className="text-slate-500">.codes</span>
            </span>
            <p className="mt-3 text-sm text-slate-400 max-w-sm leading-relaxed">
              Full-stack software engineer specializing in POS systems, SaaS
              products, and custom web solutions for businesses in Lahore and worldwide.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  <s.icon className="w-4 h-4 text-slate-400 hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wider uppercase">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wider uppercase">
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Abdul Rehman. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 text-slate-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  ArrowRight, 
  TrendingUp, 
  Brain, 
  Globe, 
  Layout,
  Megaphone,
  Network,
  MousePointerClick,
  BarChart3,
  Settings,
  Package,
  Users,
  ListChecks,
  Landmark,
  Receipt,
  FileText,
  CreditCard,
  Headphones,
  MessageSquare,
  Bot,
  MessageCircle,
  Star,
  User,
  Twitter,
  Linkedin,
  Menu,
  X
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500 border-b",
      isScrolled 
        ? "bg-neutral-950/70 backdrop-blur-2xl border-neutral-800/50 py-4 shadow-2xl" 
        : "bg-transparent border-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <a href="/" className="text-2xl font-display font-bold tracking-tight text-white flex items-center gap-3 group">
            <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center shadow-lg shadow-sky-500/20 group-hover:scale-110 transition-transform duration-500">
              <Zap size={22} className="text-white fill-current" />
            </div>
            <span className="group-hover:text-sky-400 transition-colors">SuprBuild</span>
          </a>
          <div className="hidden md:flex items-center gap-10">
            {['Solutions', 'Partners', 'Compliance', 'Pricing'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-neutral-400 hover:text-white transition-all relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-sky-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <button className="hidden md:block text-sm font-bold text-neutral-400 hover:text-white transition-colors">
            Sign In
          </button>
          <button className="hidden md:block bg-white hover:bg-neutral-200 text-neutral-950 px-8 py-3 rounded-2xl text-sm font-bold transition-all shadow-xl shadow-white/5 hover:scale-105 active:scale-95">
            Get Started
          </button>
          <button 
            className="md:hidden text-white p-2 hover:bg-neutral-900 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-neutral-950 border-b border-neutral-800 overflow-hidden md:hidden shadow-2xl"
          >
            <div className="p-8 flex flex-col gap-8">
              {['Solutions', 'Partners', 'Compliance', 'Pricing'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-xl font-display font-bold text-neutral-300 hover:text-sky-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  {item}
                </a>
              ))}
              <div className="pt-4 border-t border-neutral-900 flex flex-col gap-4">
                <button className="w-full py-4 text-neutral-400 font-bold">Sign In</button>
                <button className="w-full bg-sky-600 text-white py-5 rounded-2xl font-bold shadow-lg shadow-sky-600/20">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-48 pb-32 overflow-hidden bg-grid-large">
      {/* Background Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-sky-500/10 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-sky-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-sky-400 text-xs font-bold tracking-widest uppercase mb-10 shadow-xl"
        >
          <Zap size={14} className="fill-current" />
          The Future of SME Infrastructure
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl font-display font-bold leading-[1.1] mb-10 max-w-5xl mx-auto text-white tracking-tight"
        >
          One Platform. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-200 to-white text-glow">Infinite Growth.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-14"
        >
          Access <span className="text-white font-semibold">20+ SaaS programs</span> with over <span className="text-white font-semibold">60+ SKUs</span> in one unified SME Console. Convert manual operations into high-efficiency digital workflows instantly.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="w-full sm:w-auto px-10 py-5 bg-white text-neutral-950 font-bold rounded-2xl hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-xl shadow-white/10">
            Get Started Free
            <ArrowRight size={20} />
          </button>
          <button className="w-full sm:w-auto px-10 py-5 bg-neutral-900/80 backdrop-blur-md border border-neutral-800 text-white font-bold rounded-2xl hover:bg-neutral-800 transition-all">
            View Demo Console
          </button>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 max-w-6xl mx-auto relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-sky-200 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200" />
          <div className="relative rounded-2xl border border-neutral-800 bg-neutral-950 p-2 shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-12 bg-neutral-900/50 border-b border-neutral-800 flex items-center px-4 gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
              </div>
              <div className="flex-1 bg-neutral-950/50 rounded-md h-6 mx-4 border border-neutral-800" />
            </div>
            <img 
              className="rounded-xl w-full object-cover aspect-[16/9] mt-10" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlUgo2bohaWsA3AWQ8fsoEvFic-6u6anQrUhPZwar7dmJinRsyt4rfWVlPYlul8rHOcSZgo7GCNNJgpG5-Ri5NMEVbRYK6Ma-hLOYJR28CXWM64CFzoJBq64pJW75tEYZ-uvOnChoJe2AYm8o1VHvQenUmkB6AX8__6WpPGk9YXlHNx35IfA9WD4HCy_jzWOigFRB24M2-KHkcqJKb9z_WBT_fC5rTEvaatuUR-6gm0wJmOsx-2noDzC5Y5mo8G0XHwZC2oOSBOQ" 
              alt="SuprBuild Dashboard"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: "One SME Console", value: "Unified Control Plane" },
    { label: "20+ Programs", value: "60+ Enterprise SKUs" },
    { label: "90% Digitized", value: "Operations Automated" },
  ];

  return (
    <section className="py-20 border-y border-neutral-800 bg-neutral-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 via-transparent to-sky-500/5" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "text-center",
                i === 1 && "md:border-x border-neutral-800 px-12"
              )}
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-white mb-3 tracking-tight">{stat.label}</div>
              <div className="text-neutral-500 font-medium tracking-wide uppercase text-xs">{stat.value}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Advantages = () => {
  return (
    <section id="partners" className="py-32 bg-neutral-950 bg-grid relative">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-transparent to-neutral-950 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-4xl font-display font-bold mb-4 text-white">Partner Advantages</h2>
          <p className="text-neutral-400 text-lg">Everything you need to scale your SaaS delivery model.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Sell Outcomes */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-[2rem] border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm p-12 hover:border-sky-500/50 transition-all duration-500">
            <div className="relative z-10">
              <div className="w-14 h-14 bg-sky-500/10 rounded-2xl flex items-center justify-center text-sky-400 mb-8 border border-sky-500/20">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-3xl font-display font-bold text-white mb-6">Sell Outcomes, Not Tools</h3>
              <p className="text-neutral-400 text-xl max-w-md leading-relaxed">Focus on core operations—sales, automation, and communication—delivered via one unified platform that drives real business impact.</p>
            </div>
            <div className="absolute right-0 bottom-0 w-1/2 h-full pointer-events-none">
              <img 
                className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700 scale-110 group-hover:scale-100" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMm7SG3fIaQvfbz7_NQueb_uyymwC-ko9kmMUDjC-NuOKcMeP8zsUU2locC9lCTm-slMWGAhI9J82KJmbqGTLLl-63r9kjxaU8eIB6L3ebjD-_JdoI1KHLpxXgj0GuATbpU9bZjq0QhJCcFBcH_i4MVD6UZLh1IIRaPV58lFvXqQyP3NEg46PElZ5dhHwggq3gXW7vaeu4RnF1YoSJ2xU05uIxX-eXde2R23EohgxukZAtuzF6D7TuHspbAxb3yUcbLrkoIaM3KQ" 
                alt="Outcomes"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* AI Powered */}
          <div className="md:col-span-4 rounded-[2rem] border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm p-12 flex flex-col justify-between hover:border-purple-500/50 transition-all duration-500 group">
            <div>
              <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400 mb-8 border border-purple-500/20 group-hover:scale-110 transition-transform">
                <Bot size={28} />
              </div>
              <h3 className="text-3xl font-display font-bold text-white mb-6">AI-Powered Upgrades</h3>
              <p className="text-neutral-400 text-lg leading-relaxed">Activating intelligent agents across multiple workflows within our unified architecture.</p>
            </div>
            <div className="mt-12 pt-8 border-t border-neutral-800">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                <span className="text-xs font-bold text-purple-400 tracking-widest uppercase">Enabled for all SKUs</span>
              </div>
            </div>
          </div>

          {/* SaaSSiam Localization */}
          <div className="md:col-span-6 rounded-[2rem] border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm p-12 flex flex-col hover:border-emerald-500/50 transition-all duration-500 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 mb-8 border border-emerald-500/20">
                <Globe size={28} />
              </div>
              <h3 className="text-3xl font-display font-bold text-white mb-6">SaaSSiam Localization</h3>
              <p className="text-neutral-400 text-lg mb-8 leading-relaxed">Bridging global SaaS like Notion, Monday.com, and Canva to Thailand with full PDPA compliance, LINE integration, and Thai VAT/invoicing.</p>
              <div className="flex flex-wrap gap-3">
                {['PDPA Compliant', 'LINE API', 'Thai Tax System'].map(tag => (
                  <span key={tag} className="px-4 py-2 rounded-xl bg-neutral-800 text-sm font-medium text-neutral-300 border border-neutral-700 group-hover:border-emerald-500/30 transition-colors">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Instant White-Label */}
          <div className="md:col-span-6 rounded-[2rem] border border-neutral-800 bg-sky-600 p-12 flex flex-col justify-center text-white hover:brightness-110 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-1000" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-8 border border-white/30">
                <Layout size={28} />
              </div>
              <h3 className="text-3xl font-display font-bold mb-6">Instant White-Label</h3>
              <p className="text-sky-100 text-xl leading-relaxed mb-10">Empowering IT retailers and resellers to launch their own branded SaaS business instantly. Your brand, our powerful infrastructure.</p>
              <button className="px-8 py-4 bg-white text-sky-600 font-bold rounded-2xl hover:scale-105 transition-all shadow-xl shadow-sky-900/20">Apply as Partner</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Suite = () => {
  const categories = [
    {
      title: "Marketing & Sales",
      icon: <Megaphone className="text-sky-400" />,
      color: "sky",
      items: [
        { name: "CRM Suite", desc: "Advanced lead tracking and customer lifecycle management.", icon: <Network /> },
        { name: "Omnichannel Marketing", desc: "Automated campaigns across LINE, FB, and Email.", icon: <MousePointerClick /> },
        { name: "Sales Automation", desc: "Pipeline forecasting and performance analytics.", icon: <BarChart3 /> },
      ]
    },
    {
      title: "Operations & HR",
      icon: <Settings className="text-emerald-400" />,
      color: "emerald",
      items: [
        { name: "Inventory Management", desc: "Real-time stock tracking and automated reordering.", icon: <Package /> },
        { name: "HR & Payroll", desc: "Local Thai tax compliant payroll and attendance.", icon: <Users /> },
        { name: "Project Workflows", desc: "Agile task management and team collaboration.", icon: <ListChecks /> },
      ]
    },
    {
      title: "Finance",
      icon: <Landmark className="text-amber-400" />,
      color: "amber",
      items: [
        { name: "SME ERP", desc: "Integrated resource planning for growing firms.", icon: <Receipt /> },
        { name: "Tax & Invoicing", desc: "Thai VAT compliant billing and e-tax reporting.", icon: <FileText /> },
        { name: "Expense Control", desc: "Corporate spending limits and reimbursement flows.", icon: <CreditCard /> },
      ]
    },
    {
      title: "Customer Support",
      icon: <Headphones className="text-purple-400" />,
      color: "purple",
      items: [
        { name: "Help Desk", desc: "Centralized ticketing with multi-channel support.", icon: <MessageSquare /> },
        { name: "AI Chatbots", desc: "24/7 automated resolution for common queries.", icon: <Bot /> },
        { name: "Feedback Engine", desc: "NPS tracking and customer satisfaction insights.", icon: <MessageCircle /> },
      ]
    }
  ];

  return (
    <section id="solutions" className="py-32 bg-neutral-950 border-t border-neutral-800 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sky-500 font-bold text-xs tracking-[0.2em] uppercase mb-4"
          >
            The Ecosystem
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6 text-white tracking-tight"
          >
            A Comprehensive SaaS Suite
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            A unified ecosystem featuring <span className="text-white font-semibold">20+ programs</span> and over <span className="text-white font-semibold">60+ specialized enterprise SKUs</span> tailored for local business growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {categories.map((cat, catIdx) => (
            <motion.div 
              key={cat.title} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4 group">
                <div className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-500",
                  cat.color === 'sky' && "bg-sky-500/10 border-sky-500/20 text-sky-400 group-hover:bg-sky-500 group-hover:text-white",
                  cat.color === 'emerald' && "bg-emerald-500/10 border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white",
                  cat.color === 'amber' && "bg-amber-500/10 border-amber-500/20 text-amber-400 group-hover:bg-amber-500 group-hover:text-white",
                  cat.color === 'purple' && "bg-purple-500/10 border-purple-500/20 text-purple-400 group-hover:bg-purple-500 group-hover:text-white"
                )}>
                  {cat.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-white tracking-tight">{cat.title}</h3>
              </div>
              <div className="space-y-4">
                {cat.items.map((item) => (
                  <motion.div 
                    key={item.name}
                    whileHover={{ x: 5 }}
                    className="p-5 bg-neutral-900/40 backdrop-blur-sm border border-neutral-800/50 rounded-2xl hover:border-neutral-700 hover:bg-neutral-900/60 transition-all group cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-neutral-500 group-hover:text-sky-400 transition-colors mt-1">
                        {React.cloneElement(item.icon as React.ReactElement, { size: 20 })}
                      </div>
                      <div>
                        <div className="font-bold text-white mb-1.5 group-hover:text-sky-400 transition-colors">{item.name}</div>
                        <p className="text-xs text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 flex justify-center"
        >
          <div className="inline-flex items-center gap-6 px-8 py-4 rounded-2xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm group hover:border-sky-500/30 transition-all">
            <span className="text-neutral-400 text-sm font-medium">And 40+ more specialized modules...</span>
            <a className="text-sky-400 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all" href="#">
              Explore full SKU catalog 
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Ananda S.",
      role: "CTO, Thai Retail Solutions",
      text: "SuprBuild's ecosystem transformed how we deliver SaaS to our SME clients. The unified console is a game-changer.",
    },
    {
      name: "Wichai P.",
      role: "Operations Director, Global Logistics",
      text: "The localization features made it possible for us to finally implement global tools within our local compliance framework.",
    },
    {
      name: "Sarinthip L.",
      role: "Head of Digital, Innovate Co.",
      text: "90% of our manual tasks were digitized within the first month. The ROI was visible almost immediately.",
    },
  ];

  return (
    <section className="py-32 bg-neutral-950 border-t border-neutral-800 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sky-500 font-bold text-xs tracking-[0.2em] uppercase mb-4"
        >
          Testimonials
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight"
        >
          Trusted by AI & IT Leaders
        </motion.h2>
      </div>
      
      <div className="flex gap-8 animate-marquee py-4">
        {[...reviews, ...reviews, ...reviews].map((review, i) => (
          <div key={i} className="min-w-[450px] bg-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 p-10 rounded-[2.5rem] hover:border-sky-500/30 transition-all duration-500 group">
            <div className="flex gap-1.5 text-sky-400 mb-8">
              {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
            </div>
            <p className="text-neutral-200 text-xl mb-10 leading-relaxed font-medium">"{review.text}"</p>
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-neutral-800 flex items-center justify-center border border-neutral-700 group-hover:border-sky-500/30 transition-colors">
                <User className="text-neutral-400 group-hover:text-sky-400 transition-colors" size={24} />
              </div>
              <div>
                <div className="font-display font-bold text-white text-lg">{review.name}</div>
                <div className="text-sm text-neutral-500 font-medium">{review.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-neutral-950">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.1)_0%,transparent_60%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-neutral-900 border border-neutral-800 rounded-[3.5rem] p-12 md:p-24 text-center overflow-hidden relative shadow-2xl group">
          <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
            <img 
              className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0AN6yo_fKWAk4FG9guawIVR3yWFbMArES-PTnQmzvGu3zkfhR0wEQY6LJFjPJA1nCeu9gjH90ZH_JG1MRDahaCf9nHWSWvvI0hFfnaDdvS5tU6vNwW6fdd1GPJs13--CmZm-S_S2JrHivNil9LGs93e98atEYO8pUS3n5x2cL63IIFbB8StU0KE8GZxFnc4vVrW3LwDXLhZ8M_pKicKQChNNl1Qqswta-3J8kRH6Wc3ZVYhbaTaJHN1cnI1xm_DshpO0YCa2yNA" 
              alt="Network"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-900/80 to-neutral-900" />
          </div>
          
          <div className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-20 h-20 bg-sky-500 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-sky-500/20"
            >
              <Zap size={40} className="text-white fill-current" />
            </motion.div>
            <h2 className="text-4xl md:text-7xl font-display font-bold mb-8 text-white tracking-tight leading-[1.1]">Build the Future of <br /> SME Infrastructure</h2>
            <p className="text-neutral-400 text-xl max-w-2xl mx-auto mb-14 leading-relaxed">Join hundreds of partners transforming the SME landscape with SuprBuild's unified ecosystem.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto px-12 py-6 bg-white text-neutral-950 font-bold rounded-2xl hover:scale-105 transition-all text-lg shadow-xl shadow-white/10">
                Contact Sales
              </button>
              <button className="w-full sm:w-auto px-12 py-6 bg-neutral-800 text-white border border-neutral-700 font-bold rounded-2xl hover:bg-neutral-700 transition-all text-lg">
                Download Ecosystem Guide
              </button>
            </div>
            <p className="mt-10 text-neutral-500 text-sm font-medium">No credit card required • Instant setup • 24/7 Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 pt-32 pb-12 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-sky-500/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-16 mb-24">
          <div className="col-span-2">
            <a href="/" className="text-2xl font-display font-bold tracking-tight text-white flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center shadow-lg shadow-sky-500/20">
                <Zap size={22} className="text-white fill-current" />
              </div>
              SuprBuild
            </a>
            <p className="text-neutral-500 max-w-xs leading-relaxed mb-8">
              The unified platform for SMEs to digitize operations and scale with the best global and local SaaS tools.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-neutral-400 tracking-widest uppercase">All Systems Operational</span>
            </div>
          </div>
          <div>
            <h4 className="text-white font-display font-bold mb-8 uppercase tracking-wider text-xs">Solutions</h4>
            <ul className="space-y-4 text-neutral-500 text-sm font-medium">
              <li><a className="hover:text-sky-400 transition-colors" href="#">Unified Console</a></li>
              <li><a className="hover:text-sky-400 transition-colors" href="#">SaaSSiam</a></li>
              <li><a className="hover:text-sky-400 transition-colors" href="#">White-Label</a></li>
              <li><a className="hover:text-sky-400 transition-colors" href="#">AI Agents</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-display font-bold mb-8 uppercase tracking-wider text-xs">Partners</h4>
            <ul className="space-y-4 text-neutral-500 text-sm font-medium">
              <li><a className="hover:text-sky-400 transition-colors" href="#">Reseller Program</a></li>
              <li><a className="hover:text-sky-400 transition-colors" href="#">Affiliates</a></li>
              <li><a className="hover:text-sky-400 transition-colors" href="#">Marketplace</a></li>
              <li><a className="hover:text-sky-400 transition-colors" href="#">Developer API</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-display font-bold mb-8 uppercase tracking-wider text-xs">Company</h4>
            <ul className="space-y-4 text-neutral-500 text-sm font-medium">
              <li><a className="hover:text-sky-400 transition-colors" href="#">Compliance</a></li>
              <li><a className="hover:text-sky-400 transition-colors" href="#">Pricing</a></li>
              <li><a className="hover:text-sky-400 transition-colors" href="#">About Us</a></li>
              <li><a className="hover:text-sky-400 transition-colors" href="#">Careers</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-neutral-600 text-sm font-medium">© 2024 SuprBuild. Built for the next generation of SMEs.</p>
          <div className="flex items-center gap-8">
            <a className="text-neutral-600 hover:text-white transition-all hover:scale-110" href="#"><Twitter size={20} /></a>
            <a className="text-neutral-600 hover:text-white transition-all hover:scale-110" href="#"><Linkedin size={20} /></a>
            <a className="text-neutral-600 hover:text-white transition-all hover:scale-110" href="#"><MessageCircle size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-white text-neutral-950 rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group"
        >
          <ArrowRight size={20} className="-rotate-90 group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 selection:bg-sky-500/30">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Advantages />
        <Suite />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <ScrollToTop />
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </div>
  );
}

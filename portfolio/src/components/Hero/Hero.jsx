import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1"
          >
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">JD</span>
            </div>
          </motion.div>
          
          <div className="space-y-4">
            <motion.h1 
              className="text-6xl md:text-8xl font-bold text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              John Doe
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-2"
            >
              <h2 className="text-2xl md:text-4xl font-light text-gray-300">
                Fullstack Developer
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
            </motion.div>
            
            <motion.p 
              className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Crafting digital experiences with modern technologies. 
              Passionate about clean code, elegant solutions, and building products that matter.
            </motion.p>
          </div>
          
          <motion.div 
            className="flex justify-center space-x-6 pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {[
              { Icon: Github, href: '#', label: 'GitHub' },
              { Icon: Linkedin, href: '#', label: 'LinkedIn' },
              { Icon: Mail, href: '#', label: 'Email' }
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.1 }}
      >
        <ArrowDown size={32} />
      </motion.button>
    </div>
  );
}
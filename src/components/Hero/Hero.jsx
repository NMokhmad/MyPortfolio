import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
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
            className="w-32 h-32 mx-auto rounded-full  p-1"
          >
            <div className="w-full h-full flex items-center justify-center ">
              <img className="text-4xl font-bold text-white rounded-full" src='/assets/PP final.jpg'></img>
            </div>
          </motion.div>
          
          <div className="space-y-4">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white text-center">
              Mokhmad Noutsoulkhanov
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-2"
            >
              <h2 className="text-2xl md:text-4xl font-light text-gray-300">
                Développeur Fullstack
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
            </motion.div>
            
            <motion.p 
              className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Créer des expériences numériques avec des technologies modernes. 
              Passionné par le code propre, les solutions élégantes et la création de produits performants.
            </motion.p>
          </div>
          
          <motion.div 
            className="flex justify-center space-x-6 pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}>
            {[
              { Icon: Github, href: 'https://github.com/NMokhmad', label: 'GitHub' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/mokhmad-noutsoulkhanov-b74a56258/', label: 'LinkedIn' },
              { Icon: Mail, href: 'mailto:n.mokhmad@gmail.com', label: 'Email' }
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}>
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-full text-white cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.1 }}
      >
        <ArrowDown size={32} />
      </motion.button>
    </div>
  );
}
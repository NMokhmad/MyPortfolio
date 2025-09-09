import React from 'react';
import { motion } from 'framer-motion';
import { useState, useEffect } from "react";
import { ExternalLink, Github, Smartphone, Globe, Database } from 'lucide-react';
import './Projects.css';
// Pour le challenge portfolio mettre la photo de son propre challenge et pareil pour Weather App plus tard

const projects = [
  {
    title: 'Portfolio',
    description: 'Portefeuille de développeurs personnels construit avec React et Tailwind CSS. Présentation des projets, des compétences et un formulaire de contact avec une conception propre et réactive et une expérience utilisateur fluide.',
    tech: ['React', 'Vitejs', 'TailwindCSS', 'Vercel'],
    image: '/assets/Portfolio.png',
    code: 'https://github.com/NMokhmad/Portfolio',
    website: 'https://portfolio-gvp1.vercel.app/',
    icon: Globe,
    color: 'from-blue-500 to-purple-500'
  },
  {
    title: 'Boulangerie-du-parc',
    description: `Site de commerce électronique pour une boulangerie locale construit avec React et Tailwind CSS. Catalogue de produits avec catégories, pages de produits détaillées, panier d'achat et conception réactive optimisée pour les utilisateurs mobiles.`,
    tech: ['React', 'Vitejs', 'TailwindCSS', 'Vercel'],
    image: '/assets/Boulangerie.png',
    code: 'https://github.com/NMokhmad/boulangerie-du-parc',
    website: 'https://boulangerie-du-parc.vercel.app/',
    icon: Smartphone,
    color: 'from-emerald-500 to-cyan-500'
  },
  {
    title: 'Weather App',
    description: 'Application de prévision météorologique construite avec React et Tailwind CSS. Affiche des données météorologiques en temps réel avec recherche de localisation, arrière-plans dynamiques et conception réactive pour une expérience utilisateur intuitive.',
    tech: ['React','TailwindCSS','Vitejs','Vercel'],
    image: '/assets/weather.png',
    code: 'https://github.com/NMokhmad/boulangerie-du-parc',
    website: '',
    icon: Database,
    color: 'from-purple-500 to-pink-500'
  }
];

export default function Projects() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Projets
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-top transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20`} />
                <div className="absolute top-4 right-4">
                  <div className={`p-2 rounded-full bg-gradient-to-r ${project.color}`}>
                    <project.icon className="text-white" size={20} />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <motion.a
                    href={project.code}
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                    <span className="text-sm font-medium">Code</span>
                  </motion.a>
                  <motion.a
                    href={project.website}
                    className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">Site web</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { ExternalLink } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    title: 'Titre professionnel - Développeur web et web mobile (obtenu)',
    company: `O'Clock`,
    location: 'France',
    period: 'Juin 2025',
    description: `Obtention du titre professionnel à l'issue d'un bootcamp intensif de 8 mois (O'clock)`,
    achievements: [
      `Réalisation du projet Skillswap, un site d'échange de compétences entre plusieurs utilisateurs `,
      'Led team of 5 developers on major platform redesign',
      'Implemented CI/CD pipeline reducing deployment time by 80%'
    ]
  },
  {
    title: 'Formation - Développeur web et web mobile',
    company: `O'Clock`,
    location: 'France',
    period: 'Septembre 2024 - Mai 2025',
    description: `Participation à un bootcamp intensif de 8 mois (O'clock) : conception et développement d'applications web modernes. Mise en œuvre de projets complets (front + back) avec React, Node.js et PostgreSQL. Collaboration en équipe Agile, gestion de version avec Git.`,
    achievements: [
      `Réalisation du projet Skillswap, un site d'échange de compétences entre plusieurs utilisateurs `,
      'Led team of 5 developers on major platform redesign',
      'Implemented CI/CD pipeline reducing deployment time by 80%'
    ]
  },
  {
    title: 'Certification Opquast - Qualité web',
    company: 'Opquast',
    location: 'en distanciel',
    link: `https://directory.opquast.com/fr/certificat/YZNLCS/`,
    img:`https://api.opquast.com/badge/YZNLCS.svg`,
    period: 'janvier 2025',
    description: 'Obtenue pour la maîtrise des bonnes pratiques web incluant accessibilité, performance, sécurité et ergonomie. Cette certification garantit la qualité et la conformité des sites et applications web développés.',
    achievements: [
      'Built 15+ production applications from scratch',
      'Integrated third-party APIs and payment systems',
      'Mentored 3 junior developers and interns'
    ]
  },
];

export default function Experience() {
  return (
    <div className="py-20 px-6 bg-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Formations & Certifications
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <motion.div 
                className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full z-10"
                whileInView={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
              />
              
              <div className={`ml-16 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
              }`}>
                <motion.div 
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2 text-blue-400 mb-2">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                  {exp.link && (
                      <div className='flex'>
                        <a
                          href={exp.link}
                          className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                        >
                          <span className="text-sm font-medium">Voir certification</span>
                          <ExternalLink className='mb-1' size={16} />
                        </a>
                      </div>
                  )}
                  <div className="flex items-center space-x-2 text-gray-400 mb-3">
                    <span className="font-medium">{exp.company}</span>
                    <span>•</span>
                    <div className="flex items-center space-x-1">
                      <MapPin size={14} />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                  
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-2"
                      >
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
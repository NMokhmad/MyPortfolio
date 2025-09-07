import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Coffee, Lightbulb, Rocket } from 'lucide-react';
import './About.css';

export default function About() {
  const highlights = [
    { icon: Code2, title: '12 mois', desc: 'Expérience' },
    { icon: Rocket, title: '~10', desc: 'Projets complétés' },
    { icon: Coffee, title: '+100', desc: 'tasse de café' },
    { icon: Lightbulb, title: '+10', desc: 'Problème résolu' }
  ];

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
            À propos de moi
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg text-gray-300">
              <p className="text-xl leading-relaxed">
                Je suis un développeur fullstack passionné avec plus de 12 mois d'expérience dans la création d'applications web évolutives. J'aime transformer des problèmes complexes en solutions simples et élégantes.
              </p>
              <p className="text-lg leading-relaxed">
                Quand je ne code pas, vous me trouverez en train d'explorer de nouvelles technologies,
                de contribuer à des projets open source ou de partager mes connaissances avec la communauté des développeurs.
                Je crois en l"importance d'écrire un code propre et maintenable, ainsi que de créer des expériences utilisateurs exceptionnelles.
              </p>
            </div>
            
            <motion.div 
              className="flex flex-wrap gap-3 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {['Problem Solving', 'Team Leadership', 'Continuous Learning', 'Innovation'].map((trait) => (
                <span 
                  key={trait}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white"
                >
                  {trait}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map(({ icon: Icon, title, desc }, index) => (
              <motion.div
                key={title}
                className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-400 text-sm">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
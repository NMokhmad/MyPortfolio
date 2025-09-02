import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Coffee, Lightbulb, Rocket } from 'lucide-react';
import './About.css';

export default function About() {
  const highlights = [
    { icon: Code2, title: '5+ Years', desc: 'Development Experience' },
    { icon: Rocket, title: '50+', desc: 'Projects Completed' },
    { icon: Coffee, title: '1000+', desc: 'Cups of Coffee' },
    { icon: Lightbulb, title: '∞', desc: 'Problems Solved' }
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
            About Me
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
                I'm a passionate fullstack developer with over 5 years of experience 
                building scalable web applications. I love turning complex problems 
                into simple, beautiful solutions.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community. I believe in writing clean, maintainable code 
                and creating exceptional user experiences.
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
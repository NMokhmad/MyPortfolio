import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Tailwind CSS', 'HTML', 'CSS'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express','PostgreSQL', 'API RESTFUL','Sequelize'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Cloud & DevOps',
    skills: ['Docker learning ...','AWS learning ...'],
    color: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'Tools & Others',
    skills: ['Git/Github', 'Postman', 'Insomnia', 'VS Code', 'Agile/Scrum'],
    color: 'from-orange-500 to-red-500'
  }
];

export default function Skills() {
  return (
    <div className="py-20 px-6 bg-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Skills & Technologies
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="text-center">
                <div className={`inline-block p-4 rounded-2xl bg-gradient-to-r ${category.color} mb-4`}>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center cursor-pointer"
                  >
                    <span className="text-white font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
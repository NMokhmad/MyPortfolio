import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    title: 'Senior Fullstack Developer',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    period: '2022 - Present',
    description: 'Lead development of scalable web applications serving 100k+ users. Architected microservices infrastructure and mentored junior developers.',
    achievements: [
      'Reduced application load time by 60% through optimization',
      'Led team of 5 developers on major platform redesign',
      'Implemented CI/CD pipeline reducing deployment time by 80%'
    ]
  },
  {
    title: 'Fullstack Developer',
    company: 'Innovation Labs',
    location: 'Austin, TX',
    period: '2020 - 2022',
    description: 'Developed and maintained multiple client projects using React, Node.js, and cloud technologies. Collaborated with design and product teams.',
    achievements: [
      'Built 15+ production applications from scratch',
      'Integrated third-party APIs and payment systems',
      'Mentored 3 junior developers and interns'
    ]
  },
  {
    title: 'Junior Developer',
    company: 'StartupXYZ',
    location: 'Remote',
    period: '2019 - 2020',
    description: 'Started career building responsive web applications and learning modern development practices in an agile startup environment.',
    achievements: [
      'Contributed to 10+ feature releases',
      'Improved code quality through testing implementation',
      'Collaborated with cross-functional remote teams'
    ]
  }
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
            Experience
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
                    <Briefcase className="text-purple-400" size={20} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
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
                        <div className="w-1 h-1 bg-purple-400 rounded-full mt-2.5 flex-shrink-0" />
                        <span className="text-sm text-gray-400">{achievement}</span>
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
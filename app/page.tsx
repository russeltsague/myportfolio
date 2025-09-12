"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-32 md:space-y-48">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center">
        <div className="container relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.p 
              className="text-lg md:text-xl text-blue-400 font-medium mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Hello, I'm
            </motion.p>
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Tsague Russel
            </motion.h1>
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-300 mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Full-Stack Developer & AI Enthusiast
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              I build exceptional digital experiences that make an impact. Specializing in modern web technologies and artificial intelligence.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a 
                href="#contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Get In Touch
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#projects" 
                className="px-8 py-4 border border-gray-700 text-gray-300 font-medium rounded-lg hover:bg-gray-800/50 transition-colors"
              >
                View My Work
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              About <span className="text-blue-400">Me</span>
            </h2>
            <div className="glass-effect rounded-2xl p-8 md:p-10">
              <p className="text-lg text-gray-300 mb-6">
                I'm a passionate Full-Stack Developer with expertise in building modern web applications using cutting-edge technologies. With a strong foundation in both frontend and backend development, I create seamless digital experiences that solve real-world problems.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                My journey in tech started with a curiosity for understanding how things work, which led me to pursue a career in software development. I specialize in JavaScript/TypeScript, React, Node.js, and have a keen interest in AI and machine learning applications.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
                {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Cloud Computing', 'AI/ML', 'DevOps'].map((skill) => (
                  <div key={skill} className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center">
                    <span className="text-blue-400">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-gray-900/30">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              My <span className="text-blue-400">Skills</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I work with on a daily basis
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'JavaScript', icon: 'JS' },
              { name: 'TypeScript', icon: 'TS' },
              { name: 'React', icon: '⚛️' },
              { name: 'Node.js', icon: '🟢' },
              { name: 'Next.js', icon: '⏭️' },
              { name: 'Python', icon: '🐍' },
              { name: 'Tailwind CSS', icon: '🎨' },
              { name: 'MongoDB', icon: '🍃' },
              { name: 'PostgreSQL', icon: '🐘' },
              { name: 'Docker', icon: '🐳' },
              { name: 'AWS', icon: '☁️' },
              { name: 'Git', icon: '📦' },
            ].map((tech, index) => (
              <motion.div 
                key={tech.name}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center hover:border-blue-400/30 transition-colors hover-scale"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="text-4xl mb-3">{tech.icon}</div>
                <h3 className="text-lg font-medium text-gray-200">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured <span className="text-blue-400">Projects</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Some of my recent work and contributions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'E-commerce Platform',
                description: 'A full-stack e-commerce solution with payment integration and admin dashboard.',
                tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
              },
              {
                title: 'AI Content Generator',
                description: 'AI-powered content generation tool built with OpenAI API and Next.js.',
                tags: ['Next.js', 'OpenAI', 'Tailwind CSS', 'TypeScript'],
              },
              {
                title: 'Task Management App',
                description: 'Collaborative task management application with real-time updates.',
                tags: ['React', 'Firebase', 'Redux', 'Material UI'],
              },
              {
                title: 'Portfolio Website',
                description: 'Modern portfolio website built with Next.js and Framer Motion.',
                tags: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
              },
            ].map((project, index) => (
              <motion.div 
                key={project.title}
                className="glass-effect rounded-2xl p-6 hover-scale"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gray-900/30">
        <div className="container max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get In <span className="text-blue-400">Touch</span>
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
            </p>
            <div className="glass-effect rounded-2xl p-8 md:p-12 max-w-2xl mx-auto">
              <form className="space-y-6 text-left">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

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
        <div className="container max-w-5xl mx-auto">
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full md:w-1/3">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/profile-photo.jpg" // Replace with your actual photo path
                  alt="Tsague Russel"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 text-gray-300">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="text-blue-400">Me</span>
              </h2>
              <p className="mb-6">
                I am a passionate and driven software engineer with a strong foundation in web, mobile, and backend development. I enjoy turning complex problems into simple, efficient, and scalable solutions. Over time, I’ve worked on projects ranging from digital healthcare systems and educational apps to sports league platforms, gaining hands-on experience with modern technologies such as Flutter, Python, Node.js, Express, Next.js, MongoDB, and SQLAlchemy.
              </p>
              <p className="mb-6">
                I’m constantly learning and exploring new tools to improve my craft, with a special interest in building impactful applications that solve real-world problems. Beyond technical skills, I value collaboration, clean code, and user-centered design.
              </p>
              <p>
                My goal is to continue growing as a full-stack developer while contributing to projects that make a difference.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
   {/* Education Section */}
   <section id="education" className="section-padding bg-gray-900/50">
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="text-blue-400">🎓</span> Education
            </h2>
            
            <div className="glass-effect rounded-2xl p-8 hover-scale">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white">Institut Africain d'Informatique (IAI), Cameroon</h3>
                  <p className="text-blue-400">Computer Science / Software Engineering</p>
                </div>
                <div className="mt-2 md:mt-0 px-4 py-2 bg-blue-900/30 text-blue-400 rounded-full text-sm font-medium">
                  2022 – 2025
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-300 mb-2">Focus:</h4>
                <p className="text-gray-400">Software Development, Databases, Networks, Project Management</p>
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
              { name: 'Flutter', icon: '📱' },
              { name: 'Firebase', icon: '🔥' },
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Digital Medical Booklet',
                description: 'Mobile and web app for digitizing patient health records in Cameroon with secure access control and communication features.',
                tags: ['Flutter', 'Firebase', 'SQLite', 'Encryption'],
              },
              {
                title: 'Cameroon Basketball League',
                description: 'Official website featuring team profiles, match schedules, and league standings for the Cameroon Basketball League.',
                tags: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
              },
              {
                title: 'LAN Chess Game',
                description: 'Python-based chess game with LAN multiplayer and AI opponent using Minimax algorithm.',
                tags: ['Python', 'Pygame', 'Socket Programming', 'AI'],
              },
              {
                title: 'MboaLearn',
                description: 'AI-powered e-learning app for mathematics with 3D visualizations and personalized learning paths.',
                tags: ['Flutter', 'FastAPI', 'Firebase', 'MATLAB'],
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
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get In <span className="text-blue-400">Touch</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Feel free to reach out to me for any questions or opportunities. I'll get back to you as soon as possible!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email */}
            <motion.div
              className="glass-effect p-8 rounded-2xl text-center hover-scale"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <a href="mailto:russeltsague3@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                russeltsague3@gmail.com
              </a>
            </motion.div>

            {/* Phone */}
            <motion.div
              className="glass-effect p-8 rounded-2xl text-center hover-scale"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <a href="tel:+237695824579" className="text-gray-400 hover:text-blue-400 transition-colors">
                +237 695 82 45 79
              </a>
            </motion.div>

            {/* Location */}
            <motion.div
              className="glass-effect p-8 rounded-2xl text-center hover-scale"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
              <p className="text-gray-400">
                Yaounde, Cameroun
              </p>
            </motion.div>
          </div>

          {/* WhatsApp Button */}
          <div className="flex justify-center mt-8">
            <motion.a
              href="https://wa.me/237695824579"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-full flex items-center gap-2 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.498 14.382v3.3c0 .66.536 1.198 1.198 1.198h3.055c.66 0 1.199-.538 1.199-1.198v-3.3c0-.662-.538-1.199-1.198-1.199h-3.055c-.662 0-1.198.537-1.198 1.199zm-5.465 3.3c0-4.559-3.71-8.269-8.27-8.269-.66 0-1.198.538-1.198 1.199v3.055c0 .66.538 1.198 1.198 1.198h.991v2.766l2.766-2.766h1.323c.66 0 1.199-.538 1.199-1.197v-.992z"/>
                <path d="M16.32 12.152c0-4.558-3.71-8.268-8.27-8.268H6.996c-.66 0-1.198.538-1.198 1.198v3.056c0 .66.538 1.198 1.198 1.198h.991v2.766l2.766-2.766h1.323c.66 0 1.199-.538 1.199-1.198v-.992c0-.66-.538-1.199-1.199-1.199h-1.323v-1.198h1.323c2.59 0 4.673 2.085 4.673 4.673v1.198c0 .66.538 1.199 1.199 1.199h1.198v-1.198h-1.198z"/>
              </svg>
              Chat on WhatsApp
            </motion.a>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center mt-8 space-x-6">
            {[
              { name: 'GitHub', icon: 'github', url: '#' },
              { name: 'LinkedIn', icon: 'linkedin', url: '#' },
              { name: 'Twitter', icon: 'twitter', url: '#' },
              { name: 'Instagram', icon: 'instagram', url: '#' },
            ].map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.name}
              >
                <span className="sr-only">{social.name}</span>
                <div className="h-6 w-6" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, GraduationCap, Briefcase, Award, Heart, Coffee, Code } from 'lucide-react';

const motionFadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
  viewport: { once: true },
});

export function About() {
  const education = [
    {
      degree: 'Bacharelado em Ciência da Computação',
      institution: 'University of the People',
      period: '2022 - Presente',
      description: 'Foco em engenharia de software, algoritmos e estruturas de dados.'
    },
    {
      degree: 'Associate Degree em Análise e Desenvolvimento de Sistemas',
      institution: 'UNEB - Universidade do Estado da Bahia',
      period: '2021 - Presente',
      description: 'Foco no desenvolvimento prático de software.'
    },
    {
      degree: 'Bootcamp de Análise de Dados',
      institution: 'SoulCode Academy',
      period: '2023',
      description: 'Programa intensivo cobrindo análise de dados, visualização e aprendizado de máquina.'
    },
    {
      degree: 'Desenvolvimento Frontend',
      institution: 'DigiCad',
      period: '2022',
      description: 'Treinamento em tecnologias e frameworks modernos de frontend.'
    }
  ];

  const experience = [
    {
      position: 'Desenvolvedor Full Stack',
      company: 'Tech Solutions Inc.',
      period: '2022 - Presente',
      description: 'Desenvolvendo aplicações web com React, Node.js e MongoDB.'
    },
    {
      position: 'Desenvolvedor Frontend',
      company: 'Digital Agency',
      period: '2021 - 2022',
      description: 'Criação de interfaces responsivas e interativas para diversos clientes.'
    },
    {
      position: 'Desenvolvedor Júnior',
      company: 'Startup Hub',
      period: '2020 - 2021',
      description: 'Auxílio no desenvolvimento web e aprendizado das melhores práticas.'
    }
  ];

  const certifications = [
    { title: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', date: '2023' },
    { title: 'Desenvolvedor Java', issuer: 'Alura', date: '2022' },
    { title: 'Profissional DevOps', issuer: 'Avanti', date: '2023' },
    { title: 'Desenvolvimento Backend com Java', issuer: 'Digital Innovation One', date: '2022' }
  ];

  return (
    <div className="pt-28 pb-20 bg-dark-900">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <motion.div {...motionFadeIn()} className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            <span className="text-cyber-500">&lt;</span> Sobre Me <span className="text-cyber-500">/&gt;</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Conheça minha trajetória, habilidades e experiência como desenvolvedor.
          </p>
        </motion.div>

        {/* Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div {...motionFadeIn()} className="relative w-full h-96 rounded-lg overflow-hidden cyber-border">
            <img 
              src="https://i.postimg.cc/KzYKZWG9/Air-Brush-20240925125223.jpg" 
              alt="Bruno" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div {...motionFadeIn()} className="space-y-4 text-gray-300">
            <h2 className="text-2xl font-bold text-white mb-4">
              <span className="text-cyber-500">&gt;</span> Edson Bruno Santos da Fé
            </h2>
            <p>Sou desenvolvedor Full Stack, interessado em cibersegurança e resolução de problemas complexos.</p>
            <p>Nascido em 21/06/19.., tenho 27 anos, moro na Bahia e estudo Ciência da Computação (UoPeople) e ADS (UNEB).</p>
            <p>Como alguém com esquizofrenia, canalizo minha perspectiva única para criar soluções criativas e detalhistas.</p>
            <p>Expando conhecimento em cursos de análise de dados, frontend, Java, AWS e DevOps.</p>
            <p>Quando não programo, assisto filmes de hacking e exploro novas tecnologias.</p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="text-cyber-500" size={20} />
                <span>Nascido em: 01/05/1999</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="text-cyber-500" size={20} />
                <span>Full Stack Developer</span>
              </div>
              <div className="flex items-center gap-2">
                <Coffee className="text-cyber-500" size={20} />
                <span>Adoro tomar um Whisky</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="text-cyber-500" size={20} />
                <span>Adoro filmes de hacking</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Education, Experience & Certifications */}
        {[
          { title: 'Education', icon: GraduationCap, items: education },
          { title: 'Experience', icon: Briefcase, items: experience },
          { title: 'Certifications', icon: Award, items: certifications, grid: true }
        ].map((section, i) => (
          <motion.div key={i} {...motionFadeIn(i * 0.2)} className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <section.icon className="text-cyber-500" />
              <span>{section.title}</span>
            </h2>

            <div className={section.grid ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6' : 'space-y-8'}>
              {section.items.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  {...motionFadeIn(idx * 0.1)}
                  className="card p-6 hover:border-cyber-500 transition-colors rounded-lg"
                >
                  {section.title === 'Certifications' ? (
                    <>
                      <div className="w-12 h-12 rounded-lg bg-dark-500 flex items-center justify-center mb-4">
                        <Award className="w-6 h-6 text-cyber-500" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm mb-1">{item.issuer}</p>
                      <p className="text-cyber-500 text-xs font-mono">{item.date}</p>
                    </>
                  ) : (
                    <>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-xl font-bold text-white">{item.degree || item.position}</h3>
                        <span className="text-cyber-500 font-mono text-sm">{item.period}</span>
                      </div>
                      <p className="text-gray-400 mb-2">{item.institution || item.company}</p>
                      <p className="text-gray-500">{item.description}</p>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, GraduationCap, Briefcase, Award, Heart, Coffee, Code } from 'lucide-react';

export function About() {
  const education = [
   
    {
      degree: 'Bacharelado em Ciência da Computação.',
      institution: 'University of the People',
      period: '2022 - Presente',
      description: 'Focando em engenharia de software, algoritmos e estruturas de dados.'
    },
    {
      degree: 'Associate Degree em Análise e Desenvolvimento de Sistemas',
      institution: 'UNEB - Universidade do Estado da Bahia',
      period: '2021 - Presente',
      description: 'Estudando no campus de Sobradinho, com foco no desenvolvimento prático de software.'
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
      description: 'Treinamento especializado em tecnologias e frameworks modernos de frontend.'
    }
  ];
  
  const experience = [
    {
      position: 'Desenvolvedor Full Stack',
      company: 'Tech Solutions Inc.',
      period: '2022 - Presente',
      description: 'Desenvolvendo e mantendo aplicações web utilizando React, Node.js e MongoDB.'
    },
    {
      position: 'Desenvolvedor Frontend',
      company: 'Digital Agency',
      period: '2021 - 2022',
      description: 'Criação de interfaces de usuário responsivas e interativas para diversos projetos de clientes.'
    },
    {
      position: 'Desenvolvedor Júnior',
      company: 'Startup Hub',
      period: '2020 - 2021',
      description: 'Auxiliou no desenvolvimento de aplicações web e aprendeu melhores práticas da indústria.'
    }
  ];
  
  const certifications = [
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2023'
    },
    {
      title: 'Desenvolvedor Java',
      issuer: 'Alura',
      date: '2022'
    },
    {
      title: 'Profissional DevOps',
      issuer: 'Avanti',
      date: '2023'
    },
    {
      title: 'Desenvolvimento Backend com Java',
      issuer: 'Digital Innovation One',
      date: '2022'
    }

  ];

  return (
    <div className="pt-28 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            <span className="text-cyber-500">&lt;</span> Sobre Me <span className="text-cyber-500">/&gt;</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
          Conheça mais sobre minha trajetória, habilidades e experiência como desenvolvedor.
          </p>
        </motion.div>

        {/* Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full h-96 rounded-lg overflow-hidden cyber-border">
              <img 
                src="https://i.postimg.cc/KzYKZWG9/Air-Brush-20240925125223.jpg" 
                alt="Edson Bruno" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              <span className="text-cyber-500">&gt;</span> Edson Bruno Santos da Fé
            </h2>
            
            <div className="space-y-4 text-gray-300">
              <p>
              Olá! Sou Edson, um desenvolvedor Full Stack apaixonado, com grande interesse em cibersegurança e uma paixão por resolver problemas complexos por meio do código.
              </p>
              
              <p>
              Nascido em 29 de março de 19.., atualmente tenho 27 anos e moro em Sobradinho, Bahia, Brasil. Estou cursando Ciência da Computação na University of the People e Análise e Desenvolvimento de Sistemas na UNEB.
              </p>
              
              <p>
              Como alguém que vive com esquizofrenia, aprendi a canalizar minha perspectiva única para a resolução criativa de problemas e um trabalho de desenvolvimento focado em detalhes. Acredito que a neurodiversidade traz insights valiosos para a indústria de tecnologia.
              </p>
              
              <p>
              Estou constantemente expandindo meu conhecimento por meio de diversos cursos e certificações, incluindo análise de dados na SoulCode Academy, desenvolvimento frontend na DigiCad, Java na Alura e DIO, AWS na Escola da Nuvem e DevOps na Avanti.








              </p>
              
              <p>
              Quando não estou programando, gosto de assistir filmes relacionados a hacking e explorar novas tecnologias. Sou apaixonado por criar aplicativos seguros, eficientes e fáceis de usar que causam um impacto positivo.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="text-cyber-500" size={20} />
                <span className="text-gray-300">Nascido em: 29 de março de 1997.</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Code className="text-cyber-500" size={20} />
                <span className="text-gray-300">Full Stack Developer</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Coffee className="text-cyber-500" size={20} />
                <span className="text-gray-300">Entusiasta de Wisky.</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Heart className="text-cyber-500" size={20} />
                <span className="text-gray-300">Adora filmes de hacking.</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <GraduationCap className="text-cyber-500" />
            <span>Education</span>
          </h2>
          
          <div className="space-y-8">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 hover:border-cyber-500 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                  <span className="text-cyber-500 font-mono text-sm">{item.period}</span>
                </div>
                <p className="text-gray-400 mb-2">{item.institution}</p>
                <p className="text-gray-500">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <Briefcase className="text-cyber-500" />
            <span>Experience</span>
          </h2>
          
          <div className="space-y-8">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 hover:border-cyber-500 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{item.position}</h3>
                  <span className="text-cyber-500 font-mono text-sm">{item.period}</span>
                </div>
                <p className="text-gray-400 mb-2">{item.company}</p>
                <p className="text-gray-500">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <Award className="text-cyber-500" />
            <span>Certifications</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 hover:border-cyber-500 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-dark-500 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-cyber-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-1">{item.issuer}</p>
                <p className="text-cyber-500 text-xs font-mono">{item.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
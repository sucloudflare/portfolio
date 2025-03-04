import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Search, Filter, X } from 'lucide-react';

export function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  
  const categories = [
    { id: 'all', name: 'Todos os Projetos' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'data', name: 'Data Analysis' },
    { id: 'security', name: 'Security' },
  ];
  
  const projects = [
    {
      id: 1,
      title: 'Loja Brunão',
      description: 'Loja com bom desing',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c',
      category: 'web',
      technologies: ['React', 'Node.js', 'UI/UX Design'],
      github: 'https://github.com/sucloudflare/loja-brunao',
      live: 'https://loja-brunao1.vercel.app/',
      featured: true
    },
    {
      id: 2,
      title: 'Pagina de Sobradinho',
      description: 'Sobradinho merecer',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91',
      category: 'mobile',
      technologies: ['React Native', 'Tailwind', 'Redux'],
      github: 'https://github.com/sucloudflare/sobradinho-ba',
      live: 'https://sobradinho-ba.vercel.app/',
      featured: true
    },
    {
      id: 3,
      title: 'Data Visualization Dashboard',
      description: 'SoulCode Academy',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      category: 'data',
      technologies: ['LookStudio', 'Python', 'Pandas'],
      github: 'https://github.com/sucloudflare/analise-de-dados',
      live: 'https://lookerstudio.google.com/reporting/fdfb6aa1-c163-4854-b781-f05cd856ff21',
      featured: true
    },
    {
      id: 4,
      title: 'Sorveteria do Brunão',
      description: 'Codigo meu projeto de sorveteria',
      image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de',
      category: 'security',
      technologies: ['React', 'JavaScript', 'Carrosel'],
      github: 'https://github.com/sucloudflare/sorvete',
      live: 'https://sorvete-zeta.vercel.app/',
      featured: false
    },
    {
      id: 5,
      title: 'Pokedex',
      description: 'Desafio Pokedexs',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8',
      category: 'web',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/sucloudflare/pokedex',
      live: 'https://pokedex-blush-phi.vercel.app/',
      featured: false
    },
    {
      id: 6,
      title: 'Comunidade Link',
      description: 'Comunidade de links raro',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b',
      category: 'mobile',
      technologies: ['HTML', 'JS', 'Bootstrap'],
      github: 'https://github.com/sucloudflare/comunidade-link',
      live: 'https://comunidade-link.vercel.app/',
      featured: false
    }
  ];
  
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

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
            <span className="text-cyber-500">&lt;</span> Meus Projetos <span className="text-cyber-500">/&gt;</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
          Uma coleção do meu trabalho, destacando minhas habilidades e experiência em várias tecnologias.
          </p>
        </motion.div>
        
        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div className="relative mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-lg bg-dark-600 text-white border border-dark-400 focus:outline-none focus:ring-2 focus:ring-cyber-500 focus:border-transparent w-full md:w-64"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-cyber-500 text-dark-500'
                      : 'bg-dark-600 text-gray-300 hover:bg-dark-500'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden p-2 rounded-lg bg-dark-600 text-white hover:bg-dark-500 transition-colors flex items-center gap-2"
            >
              <Filter size={20} />
              <span>Filters</span>
            </button>
          </div>
        </div>
        
        {/* Mobile Filters */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: showFilters ? 'auto' : 0, opacity: showFilters ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden mb-6"
        >
          <div className="bg-dark-600 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-white">Categories</h3>
              <button
                onClick={() => setShowFilters(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setShowFilters(false);
                  }}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-cyber-500 text-dark-500'
                      : 'bg-dark-500 text-gray-300 hover:bg-dark-400'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="card group overflow-hidden"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {project.featured && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-cyber-500 text-dark-500 text-xs font-bold px-2 py-1 rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                  <div className="absolute top-3 right-3">
                    <span className="bg-dark-500/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 h-12 overflow-hidden">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="text-xs bg-dark-500 text-cyber-500 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-dark-500 text-white hover:bg-dark-400 transition-colors"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-cyber-500 text-dark-500 hover:bg-cyber-600 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Live</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="card p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-2">Nenhum projeto encontrado</h3>
            <p className="text-gray-400">
            Tente ajustar sua pesquisa ou critérios de filtro.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
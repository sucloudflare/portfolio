import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, Linkedin, Twitter, Mail, 
  Heart, Code, Terminal
} from 'lucide-react';

const hoverAnim = { y: -5, scale: 1.15, rotate: [0, 5, -5, 0], transition: { duration: 0.5 } };
const glowText = "hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.7)]";

export function Footer() {
  const techs = ['React', 'Node.js', 'TypeScript', 'Java', 'AWS', 'DevOps', 'Python', 'SQL', 'NoSQL'];

  return (
    <footer className="bg-dark-700/80 backdrop-blur-lg pt-12 pb-6 border-t border-cyber-500/20 relative overflow-hidden">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyber-500/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          
          {/* Bio & Socials */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 4 }}
              >
                <Code size={28} className="text-cyber-500 drop-shadow-lg" />
              </motion.div>
              <span className={`text-xl font-bold text-white ${glowText}`}>
                <span className="text-cyber-500">&lt;</span>
                Bruno
                <span className="text-cyber-500">/&gt;</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Desenvolvedor Full Stack especializado em aplicações web seguras, eficientes e intuitivas.
            </p>
            <div className="flex gap-4">
              {[{
                icon: Github, href: "https://github.com/sucloudflare"
              },{
                icon: Linkedin, href: "https://linkedin.com/in/edson-bruno-dev"
              },{
                icon: Twitter, href: "https://twitter.com/edsonbruno"
              },{
                icon: Mail, href: "mailto:contact@edsonbruno.dev"
              }].map(({icon: Icon, href}, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={hoverAnim}
                  className="w-12 h-12 rounded-full bg-dark-600 flex items-center justify-center text-gray-400 hover:text-cyber-500 hover:bg-dark-500 transition-colors drop-shadow-lg"
                >
                  <Icon size={22} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`font-bold text-xl mb-4 text-white ${glowText}`}>Links rápidos</h4>
            <ul className="space-y-2">
              {['/', '/about', '/projects', '/contact'].map((link, i) => (
                <li key={i}>
                  <motion.a
                    href={link}
                    whileHover={{ x: 4 }}
                    className="text-gray-400 hover:text-cyber-500 transition-colors flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-cyber-500 rounded-full"></span>
                    {link === '/' ? 'Home' : link.replace('/', '').charAt(0).toUpperCase() + link.slice(2)}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className={`font-bold text-xl mb-4 text-white ${glowText}`}>Tecnologias</h4>
            <div className="grid grid-cols-3 gap-2">
              {techs.map((tech, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, textShadow: '0 0 8px #00fff7' }}
                  className="bg-dark-600 p-2 rounded text-center text-xs text-gray-400 hover:text-cyber-500 hover:bg-dark-500 transition-all cursor-default"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="text-center pt-6 border-t border-dark-400">
          <p className="text-gray-500 mb-2">
            © {new Date().getFullYear()} Bruno. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 flex items-center justify-center gap-1">
            Desenvolvido com <Heart className="w-4 h-4 text-red-500 animate-pulse" /> e <Terminal className="w-4 h-4 text-cyber-500 animate-spin-slow" />
          </p>
        </div>
      </div>
    </footer>
  );
}

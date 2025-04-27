"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TypingAnimation from "../src/components/TypingAnimation";
import ScrollAnimation from "../src/components/ScrollAnimation";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  isVideo?: boolean;
  date: string;
  isWinner?: boolean;
  dashboardLink?: string;
  dashboardLinkText?: string;
  githubLink?: string;
}

const useSmoothScroll = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        const targetId = target.getAttribute("href")?.substring(1);
        const targetElement = document.getElementById(targetId || "");

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
};

const Portfolio: React.FC = () => {
  useSmoothScroll();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white font-sans scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-300 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-lg mx-auto">
            {["Home", "About", "Experience", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-gray-400 transition"
              >
                {item}
              </a>
            ))}
          </div>
          
          {/* Empty div to maintain flex justify-between layout on mobile */}
          <div className="md:hidden"></div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 px-4 py-2">
            <div className="flex flex-col items-center space-y-3 py-3">
              {["Home", "About", "Experience", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-gray-400 transition py-2 text-center w-full"
                  onClick={toggleMenu}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
      {/* Sections */}
      <HomeSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection projects={PROJECTS} />
      <ContactSection />
    </div>
  );
};

const HomeSection: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-800 relative overflow-hidden"
    >
      {/* Particle effects background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-40 h-40 rounded-full bg-blue-500/30 blur-3xl -top-20 -left-20 animate-blob"></div>
        <div className="absolute w-40 h-40 rounded-full bg-purple-500/30 blur-3xl top-1/3 right-10 animate-blob animation-delay-2000"></div>
        <div className="absolute w-40 h-40 rounded-full bg-emerald-500/30 blur-3xl bottom-20 left-1/4 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center px-4 pt-20 z-10">
        {/* Profile Picture */}
        <ScrollAnimation animationType="scale-in" className="flex justify-center mb-6">
          <img
            src="images/pfp.png"
            alt="Profile"
            className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full border-4 border-gray-700 shadow-lg hover-glow"
          />
        </ScrollAnimation>
        
        {/* Name */}
        <ScrollAnimation animationType="fade-in" delay={200}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 gradient-text">Winston Lau</h1>
        </ScrollAnimation>
        
        {/* Typing Animation */}
        <ScrollAnimation animationType="fade-in" delay={400} className="flex items-center justify-center text-xl md:text-2xl text-gray-300 mb-8">
          <span>Aspiring&nbsp;</span>
          <TypingAnimation />
        </ScrollAnimation>
        
        {/* Call-to-Action Buttons */}
        <ScrollAnimation animationType="fade-in" delay={600} className="flex flex-wrap justify-center gap-4 px-2">
          <a
            href="#experience"
            className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-gray-100 font-bold rounded-full hover:from-gray-500 hover:to-gray-600 transition duration-300 shadow-lg transform hover:-translate-y-1"
          >    
            View Experience
          </a>
          <a
            href="#projects"
            className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-gray-100 font-bold rounded-full hover:from-gray-500 hover:to-gray-600 transition duration-300 shadow-lg transform hover:-translate-y-1"
          >    
            View Projects
          </a>
          <a
            href="https://www.linkedin.com/in/winston-lau-kh"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-700 to-blue-600 text-white font-bold rounded-full hover:from-blue-600 hover:to-blue-500 transition duration-300 shadow-lg transform hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            {/* LinkedIn Logo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.45c.97 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.23 0zM7.1 20.41H3.56V9h3.54v11.41zM5.33 7.53c-1.13 0-2.05-.92-2.05-2.06 0-1.14.92-2.06 2.05-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm14.61 12.88h-3.54v-5.59c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.68H9.9V9h3.4v1.56h.05c.47-.88 1.6-1.8 3.29-1.8 3.52 0 4.17 2.32 4.17 5.34v6.31z" />
            </svg>
            {/* Button Text */}
            <span>Connect With Me!</span>
          </a>
          <a
            href="https://github.com/w1nsl"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-gray-800 to-gray-700 text-white font-bold rounded-full hover:from-gray-700 hover:to-gray-600 transition duration-300 shadow-lg transform hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            {/* GitHub Logo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            {/* Button Text */}
            <span>GitHub</span>
          </a>
        </ScrollAnimation>
      </div>
      
      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

const AboutSection: React.FC = () => (
  <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-gray-800 via-black to-gray-900 relative">
    {/* Background decoration */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute w-96 h-96 rounded-full bg-indigo-900/10 -right-48 top-1/4 blur-3xl"></div>
    </div>
    
    <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
      <ScrollAnimation animationType="fade-in" className="mb-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 inline-block relative">
          About Me
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></span>
        </h2>
      </ScrollAnimation>
      
      <div className="space-y-6">
        <ScrollAnimation animationType="fade-in">
          <p className="text-base md:text-xl text-gray-300 leading-relaxed">
            Hi there! I'm Winston, a Year 2 undergraduate at the National University of Singapore, majoring in Business 
            Analytics. I'm passionate about data science and analytics, and I absolutely love diving into data to uncover 
            hidden insights and solve meaningful problems.
          </p>
        </ScrollAnimation>
        
        <ScrollAnimation animationType="fade-in" delay={200}>
          <p className="text-base md:text-xl text-gray-300 leading-relaxed mt-4 md:mt-6">
          Right now, I'm looking for opportunities to learn from people doing amazing work, especially in the areas of agentic AI, data science, and finance. 
          I'm excited to grow, apply what I know, and be part of projects that make a real impact.
          </p>
        </ScrollAnimation>
        
        <ScrollAnimation animationType="fade-in" delay={400}>
          <p className="text-base md:text-xl text-gray-300 leading-relaxed mt-4 md:mt-6">
            When I'm not working with data, you'll probably find me strumming my guitar, jamming to my favorite songs, or 
            kicking a ball around on the football field. I'm all about creativity, teamwork, and having fun while pushing myself 
            to be better every day.
          </p>
        </ScrollAnimation>
        
        <ScrollAnimation animationType="fade-in" delay={600}>
          <p className="text-base md:text-xl text-gray-300 leading-relaxed mt-4 md:mt-6">
            If you'd like to chat about data, music, or just life in general, feel free to connect! I'm always 
            excited to meet new people and explore opportunities to collaborate. Let's create something amazing together!
          </p>
        </ScrollAnimation>
      </div>
    </div>
  </section>
);

const ExperienceSection: React.FC = () => (
  <section id="experience" className="py-16 md:py-24 bg-gradient-to-b from-gray-900 via-black to-gray-800 relative">
    {/* Background decoration */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute w-96 h-96 rounded-full bg-blue-900/10 -left-48 top-1/3 blur-3xl"></div>
    </div>
    
    <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
      <ScrollAnimation animationType="fade-in" className="mb-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-16 inline-block relative">
          My Experience
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></span>
        </h2>
      </ScrollAnimation>
      
      <div className="space-y-8 md:space-y-12">
        <ScrollAnimation animationType="slide-in-left">
          <ExperienceCard
            company="OCBC"
            role="Data Analyst Intern"
            period="May 2025 - Aug 2025"
            description="Data Analyst Intern at OCBC"
            logo="ocbc.png"
          />
        </ScrollAnimation>
        
        <ScrollAnimation animationType="slide-in-right" delay={200}>
          <ExperienceCard
            company="NUS School of Computing"
            role="Teaching Assistant, BT1101"
            period="Jan 2025 - May 2025"
            description="Conducted hands-on lab sessions for Introduction to Business Analytics, teaching foundational and advanced R programming. Covered topics such as data manipulation, visualization, statistical modeling, with unsupervised learning techniques like PCA and clustering and foundational machine learning models."
            logo="nus.png"
          />
        </ScrollAnimation>
        
        <ScrollAnimation animationType="slide-in-left" delay={400}>
          <ExperienceCard
            company="NUS School of Computing"
            role="Teaching Assistant, CS1010A"
            period="Aug 2024 - Dec 2024"
            description="Taught tutorials for Programming Methodology in Python to 12 undergraduates, focusing on core programming concepts and problem-solving techniques. Graded assignments and provided constructive feedback, earning a 5/5 teacher rating in the Student Feedback Report."
            logo="nus.png"
          />
        </ScrollAnimation>
        
        <ScrollAnimation animationType="slide-in-right" delay={600}>
          <ExperienceCard
            company="NUS Business Analytics Consulting Team"
            role="General Secretary, Senior Analyst"
            period="Aug 2024 - Present"
            description="Organized workshops and events on data science and analytics, featuring external guest speakers. Led hands-on sessions teaching data science concepts, and collaborated with external clients on impactful data science projects. Developed skills in exploratory data analysis, data preprocessing, and feature engineering using Python and its libraries."
            logo="bactlogo.jpg"
          />
        </ScrollAnimation>
      </div>
    </div>
  </section>
);

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  description: string;
  logo: string; 
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ company, role, period, description, logo }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg p-4 md:p-6 border border-gray-700 hover-glow"
  >
    <h3 className="text-xl md:text-2xl font-semibold text-gray-200 mb-2">{role}</h3>
    <p className="text-base md:text-lg text-gray-400">{company}</p>
    {/* Company Logo */}
    <div className="flex justify-center my-3 md:my-4">
      <img
        src={`/images/${logo}`}
        alt={`${company} logo`}
        className={`w-10 h-10 md:w-12 md:h-12 object-contain ${company === "OCBC" ? "bg-white p-1 rounded" : ""}`}
      />
    </div>
    <p className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4">{period}</p>
    <p className="text-base md:text-lg text-gray-400">{description}</p>
  </motion.div>
);

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => (
  <section id="projects" className="py-16 md:py-24 bg-gradient-to-b from-gray-800 via-black to-gray-900 relative">
    {/* Background decoration */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute w-96 h-96 rounded-full bg-purple-900/10 right-0 top-20 blur-3xl"></div>
      <div className="absolute w-96 h-96 rounded-full bg-blue-900/10 left-0 bottom-20 blur-3xl"></div>
    </div>
    
    <div className="max-w-6xl mx-auto px-4 relative z-10">
      <ScrollAnimation animationType="fade-in" className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-16 inline-block relative">
          My Projects
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></span>
        </h2>
      </ScrollAnimation>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 auto-rows-fr">
        {projects.map((project, index) => (
          <ScrollAnimation 
            key={index}
            animationType={index % 2 === 0 ? "slide-in-left" : "slide-in-right"}
            delay={index * 100}
          >
            <ProjectCard project={project} />
          </ScrollAnimation>
        ))}
      </div>
    </div>
  </section>
);

interface ProjectCardProps {
  project: Project;
}

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <motion.div
    whileHover={{ scale: 1.03, y: -5 }}
    transition={{ duration: 0.3 }}
    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-2xl overflow-hidden border border-gray-700 hover-glow flex flex-col h-full"
  >
    <div className="relative overflow-hidden h-48 md:h-64">
      {project.isVideo ? (
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={project.image} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-90 transition-all duration-500 hover:opacity-100 hover:scale-105"
        />
      )}
      <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
        {project.date}
      </div>
      {project.isWinner && (
        <div className="absolute top-0 left-0 bg-gradient-to-r from-yellow-500 to-amber-500 text-white text-xs font-bold px-3 py-1 rounded-br-lg">
          Winner
        </div>
      )}
    </div>
    <div className="p-4 md:p-6 flex flex-col flex-grow">
      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2 text-gray-200 line-clamp-2">{project.title}</h3>
      <p className="text-sm md:text-base lg:text-lg text-gray-400 mb-3 md:mb-4 flex-grow overflow-y-auto">{project.description}</p>
      <div className="flex flex-wrap gap-2 md:gap-3 mt-auto">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 md:px-4 md:py-2 bg-gray-700/50 text-xs md:text-sm rounded-full text-gray-300 border border-gray-600"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="mt-4 flex flex-wrap gap-3">
        {project.githubLink && (
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-gray-800 to-gray-700 text-white text-sm font-bold py-2 px-4 rounded-md hover:from-gray-700 hover:to-gray-600 transition duration-300 transform hover:-translate-y-1 shadow-md"
          >
            <div className="flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              <span>GitHub</span>
            </div>
          </a>
        )}
        
        {project.dashboardLink && (
          <a 
            href={project.dashboardLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-green-600 to-teal-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:from-green-500 hover:to-teal-400 transition duration-300 transform hover:-translate-y-1 shadow-md"
          >
            <div className="flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3m0 0l3 3m-3-3v8m12-8v9a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v1" />
              </svg>
              <span>{project.dashboardLinkText || "View Dashboard"}</span>
            </div>
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const PROJECTS: Project[] = [
  {
    title: "Automated Stock Prediction Pipeline",
    description: "Built a complete ML pipeline using Apache Airflow that integrates multiple data sources including stock prices from Yahoo Finance, economic indicators from FRED, and news sentiment analysis to predict future stock movements. The system features containerized deployment with Docker, NLP-based sentiment analysis using FinBERT, and a scalable architecture for processing data on multiple stocks simultaneously.",
    technologies: ["Python", "Apache Airflow", "Docker", "PostgreSQL", "scikit-learn", "NLP", "FinBERT", "pandas"],
    image: "images/stock-prediction.mp4",
    isVideo: true,
    date: "Apr 2025",
    dashboardLink: "https://stock-prediction-dashboard-final.streamlit.app/",
    dashboardLinkText: "View Dashboard",
    githubLink: "https://github.com/w1nsl/stock-prediction"
  },
  {
    title: "SmartPlanner",
    description: "A comprehensive task and calendar management application built with Vue 3 and Firebase. SmartPlanner helps users organize daily activities, manage tasks, and collaborate with friends through features like secure authentication, dashboard overviews, calendar integration with FullCalendar, task management, and a friend system for collaboration.",
    technologies: ["Vue 3", "Firebase", "Composition API", "Vue Router", "FullCalendar", "FontAwesome", "Vite"],
    image: "images/smartplanner.png",
    date: "Mar 2025",
    dashboardLink: "https://smartplanner-94044.web.app/",
    dashboardLinkText: "View App",
    githubLink: "https://github.com/w1nsl/SmartPlanner"
  },
  {
    title: "Hack4Good Hackathon - Digital PA App",
    description: "Developed a cost-effective web application to streamline administrative tasks and enhance productivity for the Singapore Book Council. Key features included a centralized dashboard, automated meeting management, task tracking, email analytics, and an AI-powered assistant for natural language interaction.",
    technologies: ["React", "Firebase", "JavaScript", "Next.js", "Anthropic API"],
    image: "images/Hack4good.png",
    date: "Jan 2025",
    githubLink: "https://github.com/w1nsl/Hack4Good"
  },
  { 
    title:"NUS Maritime Hackathon 2025 - Predicting Inspection Severity",
    description:"Developed a solution to predict inspection severity in the maritime industry. Utilized feature engineering, synthetic data augmentation, and a custom neural network for accurate predictions. Winning a place in the top 3 finalists 🏆.",
    technologies:["Python", "TensorFlow", "OpenAI API", "Data Preprocessing", "Machine Learning", "Prompt Engineering"],
    image:"images/MReport.png",
    date: "Jan 2025",
    isWinner: true,
  },
  {
    title: "BACT X0PA-AI Hackathon - Candidate Shortlisting Prediction",
    description:
      "Designed and implemented an end-to-end machine learning pipeline to predict candidate shortlisting outcomes. This included data preprocessing, feature engineering, and developing a neural network model. The solution leveraged embeddings generated via the OpenAI API, and data augmentation for class balance. Won 1st Place in the Hackathon 🏆.",
    technologies: ["Python", "OpenAI API", "TensorFlow", "Data Augmentation", "Word Embeddings"],
    image: "images/bacthackathon.jpeg",
    date: "Aug 2024",
    isWinner: true,
  },
  {
    title: "NUS NextClass App - Orbital",
    description:
      "Designed and developed an all-in-one mobile application for NUS students, featuring timetable integration, reminders, shortest path navigation using OpenStreetMap, and a personalized AI chatbot built with RASA for real-time user interaction. Attained Apollo 11 (Advanced Level) certification.",
    technologies: ["React Native", "Expo", "Firebase", "RASA", "JavaScript"],
    image: "images/orbital.png",
    date: "Aug 2024",
    githubLink: "https://github.com/w1nsl/nextClass"
  },
  {
    title: "BrainHack SeeTrue Hackathon",
    description:
      "Achieved 1st place 🏆 by leveraging generative AI tools, including ComfyUI and Hugging Face models, to create hyper-realistic images. Optimized outputs through prompt engineering and hyperparameter tuning, successfully fooling AI-based fake image detectors.",
    technologies: ["Python", "Generative AI", "ComfyUI", "HuggingFace", "Prompt Engineering", "Hyperparameter Tuning"],
    image: "images/brainhack.png",
    date: "Jun 2024",
    isWinner: true,
  },
  // {
  //   title: "Beijing Real Estate EDA Project",
  //   description: "Analyzed Beijing housing data to determine key factors affecting real estate prices for my module in school, BT2102. Created visualizations for top districts, subway accessibility, and building structures using Tableau.",
  //   technologies: ["Python", "Tableau", "Pandas", "Data Cleaning"],
  //   image: "images/beijing.png",
  //   date: "May 2024",
  // },
  // {
  //   title: "USA Housing Price Prediction Project",
  //   description: "My first ML project that sparked my passion and interest in data! I generated predictions for USA housing prices using a gradient boosting regressor. I experimented with feature engineering, \
  //   cross-validation, and hyperparameter tuning. Looking back at this project, there is much to improve on 😅.",
  //   technologies: ["Python", "Machine Learning", "Pandas", "Data Cleaning", "Hyperparameter Tuning"],
  //   image: "images/housing2.png",
  // }
];

const ContactSection: React.FC = () => (
  <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-gray-900 via-black to-gray-800 relative">
    {/* Background decoration */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute w-96 h-96 rounded-full bg-blue-900/10 -left-20 top-10 blur-3xl"></div>
      <div className="absolute w-96 h-96 rounded-full bg-purple-900/10 -right-20 bottom-10 blur-3xl"></div>
    </div>
    
    <div className="max-w-xl mx-auto px-4 text-center relative z-10">
      <ScrollAnimation animationType="fade-in" className="mb-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-gray-200 inline-block relative">
          Contact Me
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></span>
        </h2>
      </ScrollAnimation>
      
      <ScrollAnimation animationType="fade-in" delay={200}>
        <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8">
          Feel free to reach out to me! You can email me at{" "}
          <a href="mailto:winston.lau@u.nus.edu" className="text-blue-400 hover:text-blue-300 underline transition duration-300">
            winston.lau@u.nus.edu
          </a>{" "}
          or connect with me on LinkedIn.
        </p>
      </ScrollAnimation>
      
      <ScrollAnimation animationType="scale-in" delay={400}>
        <a
          href="https://www.linkedin.com/in/winston-lau-kh"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-blue-700 to-blue-600 text-gray-100 py-2 px-4 md:py-3 md:px-6 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-500 transition duration-300 text-base md:text-lg font-bold transform hover:-translate-y-1"
        >
          Connect on LinkedIn
        </a>
      </ScrollAnimation>
    </div>
  </section>
);

export default Portfolio;
"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import TypingAnimation from "../src/components/TypingAnimation";
interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
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
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white font-sans scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-end items-center">
          <div className="space-x-6 text-lg">
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
        </div>
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

const HomeSection: React.FC = () => (
  <section
    id="home"
    className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800"
  >
    <div className="max-w-4xl mx-auto text-center px-4">
      {/* Profile Picture */}
      <div className="flex justify-center mb-6">
        <img
          src="images/pfp.png"
          alt="Profile"
          className="w-72 h-72 rounded-full border-4 border-gray-700 shadow-lg"
        />
      </div>
      {/* Name */}
      <h1 className="text-6xl font-semibold mb-6">Winston Lau</h1>
      {/* Typing Animation */}
      <div className="flex items-center justify-center text-2xl text-gray-300 mb-8">
        <span>Aspiring&nbsp;</span>
        <TypingAnimation />
      </div>
      {/* Call-to-Action Buttons */}
<div className="flex justify-center space-x-4">
  <a
    href="#experience"
    className="px-8 py-4 bg-gray-400 text-gray-900 font-bold rounded-full hover:bg-gray-300 transition">    View Experience
  </a>
  <a
    href="#projects"
    className="px-8 py-4 bg-gray-400 text-gray-900 font-bold rounded-full hover:bg-gray-300 transition">    View Projects
  </a>
  <a
  href="https://www.linkedin.com/in/winston-lau-kh"
  target="_blank"
  rel="noopener noreferrer"
  className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition flex items-center justify-center space-x-3"
>
  {/* LinkedIn Logo */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.45c.97 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.23 0zM7.1 20.41H3.56V9h3.54v11.41zM5.33 7.53c-1.13 0-2.05-.92-2.05-2.06 0-1.14.92-2.06 2.05-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm14.61 12.88h-3.54v-5.59c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.68H9.9V9h3.4v1.56h.05c.47-.88 1.6-1.8 3.29-1.8 3.52 0 4.17 2.32 4.17 5.34v6.31z" />
  </svg>
  {/* Button Text */}
  <span>Connect With Me!</span>
</a>
</div>
    </div>
  </section>
);

const AboutSection: React.FC = () => (
  <section id="about" className="py-24 bg-gradient-to-b from-gray-800 via-black to-gray-900">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-5xl font-bold mb-12">About Me</h2>
      <p className="text-xl text-gray-300 leading-relaxed">
        Hi there! I’m Winston, a Year 2 undergraduate at the National University of Singapore, majoring in Business 
        Analytics. I’m passionate about data science and analytics, and I absolutely love diving into data to uncover 
        hidden insights and solve meaningful problems.
      </p>
      <p className="text-xl text-gray-300 leading-relaxed mt-6">
        Currently, I’m looking for a Summer internship where I can apply my skills, learn from industry professionals, and 
        contribute meaningfully to impactful projects. I’m especially excited about opportunities that allow me to work 
        with data, build innovative solutions, and make a real difference.
      </p>
      <p className="text-xl text-gray-300 leading-relaxed mt-6">
        When I’m not working with data, you’ll probably find me strumming my guitar, jamming to my favorite songs, or 
        kicking a ball around on the football field. I’m all about creativity, teamwork, and having fun while pushing myself 
        to be better every day.
      </p>
      <p className="text-xl text-gray-300 leading-relaxed mt-6">
        If you’d like to chat about data, music, or just life in general, feel free to connect! I’m always 
        excited to meet new people and explore opportunities to collaborate. Let’s create something amazing together!
      </p>
    </div>
  </section>
);

const ExperienceSection: React.FC = () => (
  <section id="experience" className="py-24 bg-gradient-to-b from-gray-900 via-black to-gray-800">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-5xl font-bold mb-16">My Experience</h2>
      <div className="space-y-12">
      <ExperienceCard
          company="NUS School of Computing"
          role="Teaching Assistant, BT1101"
          period="Jan 2025 - May 2025"
          description="Conducted hands-on lab sessions for Introduction to Business Analytics, teaching foundational and advanced R programming. Covered topics such as data manipulation, visualization, statistical modeling, with unsepervised learning techniques like PCA and clustering and foundational machine learning models."
          logo="nus.png"
        />
        <ExperienceCard
          company="NUS School of Computing"
          role="Teaching Assistant, CS1010A"
          period="Aug 2024 - Dec 2024"
          description="Taught tutorials for Programming Methodology in Python to 12 undergraduates, focusing on core programming concepts and problem-solving techniques. Graded assignments and provided constructive feedback, earning a 5/5 teacher rating in the Student Feedback Report."
          logo="nus.png"
        />
        <ExperienceCard
          company="NUS Business Analytics Consulting Team"
          role="General Secretary, Senior Analyst"
          period="Aug 2024 - Present"
          description="Organized workshops and events on data science and analytics, featuring external guest speakers. Led hands-on sessions teaching data science concepts, and collaborated with external clients on impactful data science projects. Developed skills in exploratory data analysis, data preprocessing, and feature engineering using Python and its libraries."
          logo="bactlogo.jpg"
        />
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
    whileHover={{ scale: 1.02 }}
    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg p-6 border border-gray-700"
  >
    <h3 className="text-2xl font-semibold text-gray-200 mb-2">{role}</h3>
    <p className="text-lg text-gray-400">{company}</p>
    {/* Company Logo */}
    <div className="flex justify-center my-4">
      <img
        src={`/images/${logo}`}
        alt={`${company} logo`}
        className="w-12 h-12 object-contain"
      />
    </div>
    <p className="text-sm text-gray-500 mb-4">{period}</p>
    <p className="text-lg text-gray-400">{description}</p>
  </motion.div>
);

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => (
  <section id="projects" className="py-24 bg-gradient-to-b from-gray-800 via-black to-gray-900">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-5xl font-bold text-center mb-16">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
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
    whileHover={{ scale: 1.02 }}
    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-2xl overflow-hidden border border-gray-700"
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-64 object-cover opacity-80"
    />
    <div className="p-6">
      <h3 className="text-3xl font-bold mb-2 text-gray-200">{project.title}</h3>
      <p className="text-sm text-gray-400 mb-4">{project.date}</p> {/* Add date here */}
      <p className="text-lg text-gray-400 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-3">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 bg-gray-700/50 text-sm rounded-full text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  date: string; // Add a date field
}
const PROJECTS: Project[] = [
  {
    title: "Hack4Good Hackathon - Digital PA App",
    description:
      "Participated in Hack4Good, where we developed a web platform to connect NGOs with volunteers. Leveraged data visualization, real-time updates, and an intuitive user interface to enhance community engagement.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    image: "images/Hack4good.png",
    date: "Jan 2025",

  },
  { 
    title:"NUS Maritime Hackathon 2025 - Predicting Inspection Severity",
    description:"Developed a solution to predict inspection severity in the maritime industry. Utilized feature engineering, synthetic data augmentation, and a custom neural network for accurate predictions.",
    technologies:["Python", "TensorFlow", "OpenAI API", "Synthetic Data"],
    image:"images/MReport.png",
    date: "Jan 2025",
  },
  {
    title: "BACT X0PA-AI Hackathon - Candidate Shortlisting Prediction",
    description:
      "Developed a machine learning pipeline to predict candidate shortlisting outcomes using feature engineering and neural networks.",
    technologies: ["Python", "OpenAI API", "TensorFlow", "Data Augmentation"],
    image: "images/bacthackathon.jpeg",
    date: "Aug 2024",
  },
  {
    title: "NUS NextClass App - Orbital",
    description:
      "Developed a mobile app using Expo Go with an integrated chatbot built with RASA for real-time user interaction.",
    technologies: ["React Native", "Expo", "RASA", "Chatbot"],
    image: "images/orbital.png",
    date: "Aug 2024",
  },
  {
    title: "BrainHack SeeTrue Hackathon",
    description:
      "Used generative AI tools to create hyper-realistic images, optimized with prompt engineering, achieving Top 3 in a hackathon.",
    technologies: ["Python", "Generative AI", "Prompt Engineering"],
    image: "images/brainhack.png",
    date: "Jun 2024",
  },
  {
    title: "Beijing Real Estate EDA Project",
    description: "Analyzed Beijing housing data to determine key factors affecting real estate prices for my module in school, BT2102. Created visualizations for top districts, subway accessibility, and building structures using Tableau.",
    technologies: ["Python", "Tableau", "Pandas", "Data Cleaning"],
    image: "images/beijing.png",
    date: "May 2024",
  },
  // {
  //   title: "USA Housing Price Prediction Project",
  //   description: "My first ML project that sparked my passion and interest in data! I generated predictions for USA housing prices using a gradient boosting regressor. I experimented with feature engineering, \
  //   cross-validation, and hyperparameter tuning. Looking back at this project, there is much to improve on 😅.",
  //   technologies: ["Python", "Machine Learning", "Pandas", "Data Cleaning", "Hyperparameter Tuning"],
  //   image: "images/housing2.png",
  // }
];

const ContactSection: React.FC = () => (
  <section id="contact" className="py-24 bg-gradient-to-t from-gray-900 via-black to-gray-800">
    <div className="max-w-xl mx-auto px-4 text-center">
      <h2 className="text-5xl font-bold mb-12 text-gray-200">Contact Me</h2>
      <p className="text-lg text-gray-300 mb-8">
        Feel free to reach out to me! You can email me at{" "}
        <a href="mailto:winston.lau@u.nus.edu" className="text-blue-500 hover:underline">
          winston.lau@u.nus.edu
        </a>{" "}
        or connect with me on LinkedIn.
      </p>
      <a
        href="https://www.linkedin.com/in/winston-lau-kh"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gray-800 text-gray-200 py-3 px-6 rounded-lg shadow-lg hover:bg-gray-700 transition text-lg font-bold"
      >
        Connect on LinkedIn
      </a>
    </div>
  </section>
);

export default Portfolio;

import { useState, useEffect, useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import ProjectModal, { Project } from "./ProjectModal";

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const projects: Project[] = [
    {
      id: "castura",
      title: "Castura",
      description: "Screen recording tool with advanced editing features",
      longDescription: "Castura is a comprehensive screen recording solution that allows users to capture, edit, and share their screen recordings with ease. Built with Electron and React, it provides a seamless experience across platforms.",
      image: "https://images.unsplash.com/photo-1595675024853-1e493b8a3607?q=80&w=2187&auto=format&fit=crop",
      tech: ["React", "Electron", "TypeScript", "FFmpeg"],
      github: "https://github.com/vivekgsindagi",
      demo: "https://castura.app",
      problem: "Existing screen recording tools often lack advanced editing capabilities and user-friendly interfaces.",
      solution: "Developed a complete solution with intuitive UI and built-in editing features, allowing users to record, edit, and share without switching applications."
    },
    {
      id: "cropwise",
      title: "CropWise",
      description: "AI-powered crop yield prediction application",
      longDescription: "CropWise uses machine learning algorithms to analyze soil data, weather patterns, and historical crop performance to predict yield outcomes and provide actionable insights to farmers.",
      image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=2370&auto=format&fit=crop",
      tech: ["Python", "TensorFlow", "React", "Flask"],
      github: "https://github.com/vivekgsindagi/cropwise",
      problem: "Traditional farming relies heavily on experience and historical data, without leveraging modern predictive technologies.",
      solution: "Created an AI model that processes multiple data points to provide accurate yield predictions and recommendations for improving crop output."
    },
    {
      id: "repomarker",
      title: "RepoMarker",
      description: "Enhanced Markdown editor for GitHub repositories",
      longDescription: "RepoMarker is a specialized Markdown editor designed specifically for creating and editing documentation in GitHub repositories, with features like live preview, templates, and GitHub API integration.",
      image: "https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=2370&auto=format&fit=crop",
      tech: ["React", "TypeScript", "GitHub API", "CodeMirror"],
      github: "https://github.com/vivekgsindagi/repomarker",
      demo: "https://repomarker.dev",
      problem: "GitHub's built-in markdown editor lacks advanced features needed for complex documentation.",
      solution: "Built a feature-rich editor that streamlines the documentation process with specialized tools for repository management."
    },
    {
      id: "textdiff",
      title: "TextDiff",
      description: "Text comparison tool with visualization features",
      longDescription: "TextDiff is a powerful utility that allows users to compare two text documents and visualize the differences with advanced highlighting and side-by-side comparisons.",
      image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=2366&auto=format&fit=crop",
      tech: ["JavaScript", "D3.js", "DiffMatchPatch", "React"],
      github: "https://github.com/vivekgsindagi/textdiff",
      problem: "Existing text comparison tools often display differences in ways that are difficult to interpret.",
      solution: "Developed an intuitive visualization system that makes it easy to identify and understand differences between text documents."
    },
    {
      id: "pomodoro",
      title: "MyPomodoro",
      description: "Productivity tracker with Pomodoro technique integration",
      longDescription: "MyPomodoro helps users manage their time effectively using the Pomodoro technique, with additional features for task management, productivity analytics, and customizable work/break intervals.",
      image: "https://images.unsplash.com/photo-1449156733864-dd5471bb7427?q=80&w=2370&auto=format&fit=crop",
      tech: ["React Native", "Redux", "Firebase", "Chart.js"],
      github: "https://github.com/vivekgsindagi/mypomodoro",
      demo: "https://mypomodoro.app",
      problem: "Many productivity apps lack personalization and data-driven insights on work patterns.",
      solution: "Created a comprehensive productivity system that adapts to individual work styles and provides actionable insights based on usage patterns."
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card cursor-pointer transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => openModal(project)}
            >
              <div className="relative h-48 overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark to-transparent opacity-80"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-navy rounded-full text-xs text-teal/80"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-navy rounded-full text-xs text-teal/80">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex space-x-4 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate hover:text-teal transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate hover:text-teal transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <ProjectModal 
        project={selectedProject} 
        onClose={closeModal} 
        isOpen={modalOpen} 
      />
    </section>
  );
};

export default Projects;

// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Curriculum Vitae of Ridham Patel - Junior Undergraduate in Computer Science &amp; Engineering at IIT Gandhinagar",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Course materials and resources for classes taught. This page is based on the structure of the &quot;Intro to ML&quot; course and contains a draft syllabus, schedule, and placeholders for slides, assignments and code.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-i-have-just-been-selected-as-management-coordinator-for-tech-council-for-ay2025-26",
          title: 'I have just been selected as Management Coordinator for Tech Council for AY2025-26!...',
          description: "",
          section: "News",},{id: "news-we-have-just-rolled-out-some-excellent-projects-for-summer-seige-tech-council-iit-gn",
          title: 'We have just rolled out some excellent projects for Summer Seige @Tech Council,...',
          description: "",
          section: "News",},{id: "news-i-started-working-on-a-project-on-temporal-graph-coarsening-at-iit-delhi-sparkles-smile",
          title: 'I started working on a project on Temporal Graph Coarsening at IIT Delhi!...',
          description: "",
          section: "News",},{id: "news-i-have-been-selected-as-deputy-contingent-leader-of-the-iit-gandhinagar-tech-contingent-for-inter-iit-tech-meet-14-0",
          title: 'I have been selected as Deputy Contingent Leader of the IIT Gandhinagar Tech...',
          description: "",
          section: "News",},{id: "news-i-have-been-selected-for-caltech-surf-2026",
          title: 'I have been selected for Caltech SURF 2026.',
          description: "",
          section: "News",},{id: "news-iit-gandhinagar-tech-contingent-won-4-trophies-best-of-all-times-at-the-event-and-i-personally-won-a-bronze",
          title: 'IIT Gandhinagar Tech Contingent won 4 trophies (best of all times) at the...',
          description: "",
          section: "News",},{id: "projects-hypergraph-coarsening-with-preserved-hypergnn-performance",
          title: 'Hypergraph Coarsening with preserved HyperGNN Performance',
          description: "Research on scalable hypergraph representation learning",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-graph-coarsening-with-preserved-gnn-performance",
          title: 'Graph Coarsening with Preserved GNN Performance',
          description: "Research at IIT Delhi on efficient graph reduction techniques",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-continuous-dynamic-temporal-graph-coarsening",
          title: 'Continuous Dynamic Temporal Graph Coarsening',
          description: "Ongoing research on dynamic graph compression techniques",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-construction-site-monitoring-with-computer-vision",
          title: 'Construction Site Monitoring with Computer Vision',
          description: "ML-based construction project tracking system analyzing photos and drawings",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{id: "projects-creating-dataset-for-generative-ai-of-pcb-design-amp-simulation-software",
          title: 'Creating Dataset for Generative AI of PCB Design &amp;amp; Simulation Software',
          description: "Dataset creation for AI-driven PCB design automation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "projects-physics-informed-ml-for-pcb-thermal-and-em-simulation",
          title: 'Physics-Informed ML for PCB Thermal and EM Simulation',
          description: "Data generation pipeline for ML-based PCB simulation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project.html";
            },},{id: "projects-graph-transformer-for-molecular-dipole-prediction",
          title: 'Graph Transformer for Molecular Dipole Prediction',
          description: "Ongoing research on transformer architectures for molecular property prediction",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project.html";
            },},{id: "projects-academic-coursework-projects",
          title: 'Academic Coursework Projects',
          description: "Selected projects from coursework and self-learning",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project.html";
            },},{id: "projects-graph-neural-network-research-tools-amp-infrastructure",
          title: 'Graph Neural Network Research Tools &amp;amp; Infrastructure',
          description: "Development of tools and utilities for GNN research",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%69%64%68%61%6D.%70%61%74%65%6C@%69%69%74%67%6E.%61%63.%69%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ridhamp4", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/https://www.instagram.com/ridhamp4", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ridhamp4", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

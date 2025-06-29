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
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Materials for courses you taught. Replace this text with your description.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-people",
          title: "people",
          description: "members of the lab or group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
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
          section: "News",},{id: "projects-hypergraph-coarsening-with-preserved-hypergnn-performance",
          title: 'Hypergraph Coarsening with preserved HyperGNN Performance',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-graph-coarsening-with-preserved-gnn-performance",
          title: 'Graph Coarsening with Preserved GNN Performance',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-continuous-dynamic-temporal-graph-coarsening",
          title: 'Continuous Dynamic Temporal Graph Coarsening',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-eliminating-bottlenecks-with-a-novel-dual-layered-gnn-architecture",
          title: 'Eliminating Bottlenecks with a Novel Dual-Layered GNN Architecture',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{id: "projects-creating-dataset-for-generative-ai-of-pcb-design-amp-simulation-software",
          title: 'Creating Dataset for Generative AI of PCB Design &amp;amp; Simulation Software',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "projects-hub-based-graph-construction-techniques-for-hnsw",
          title: 'Hub Based Graph Construction Techniques for HNSW',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project.html";
            },},{id: "projects-graph-transformer-for-molecular-dipole-prediction",
          title: 'Graph Transformer for Molecular Dipole Prediction',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project.html";
            },},{id: "projects-next-line-predictor-chatbot-with-mlp",
          title: 'Next Line Predictor Chatbot with MLP',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project.html";
            },},{id: "projects-image-classification-using-cnn",
          title: 'Image Classification Using CNN',
          description: "another project with an image 🎉",
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
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
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
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
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

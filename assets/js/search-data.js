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
  },{id: "nav-research",
          title: "research",
          description: "Some recent projects in Bio + AI",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Curriculum Vitae",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "projects-llm-informed-gene-embeddings",
          title: 'LLM-Informed Gene Embeddings',
          description: "Enhancing generative perturbation models with LLM-informed gene embeddings",
          section: "Projects",handler: () => {
              window.location.href = "/projects/01_perturbation_llm/";
            },},{id: "projects-multimodal-generative-models",
          title: 'Multimodal Generative Models',
          description: "Multimodal generative models of in vitro cellular perturbations",
          section: "Projects",handler: () => {
              window.location.href = "/projects/02_multimodal_llm/";
            },},{id: "projects-universal-cell-image-embeddings",
          title: 'Universal Cell Image Embeddings',
          description: "Self-supervised representation learning of cellular morphology across cell types and image modalities",
          section: "Projects",handler: () => {
              window.location.href = "/projects/03_cell_embeddings/";
            },},{id: "projects-molecular-embeddings",
          title: 'Molecular Embeddings',
          description: "Universal language model for proteins, DNA, RNA, and small molecules",
          section: "Projects",handler: () => {
              window.location.href = "/projects/04_universal_mol/";
            },},{id: "projects-bpe-tokenizer-for-selfies",
          title: 'BPE Tokenizer for SELFIES',
          description: "Efficient Rust-based tokenizer optimized for molecular representation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/05_bpe_tokenizer/";
            },},{id: "projects-protein-expression-rescue",
          title: 'Protein Expression Rescue',
          description: "Rescuing non-expressing proteins using inverse folding and LLM-based expression prediction",
          section: "Projects",handler: () => {
              window.location.href = "/projects/06_seq2expr/";
            },},{id: "projects-pharmacokinetic-property-prediction",
          title: 'Pharmacokinetic Property Prediction',
          description: "Predicting half-life and clearance rate for peptide therapeutics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/07_struct2pk/";
            },},{id: "projects-high-throughput-image-analysis-library",
          title: 'High Throughput Image Analysis Library',
          description: "Python library for efficient microscopy data processing and analysis",
          section: "Projects",handler: () => {
              window.location.href = "/projects/08_morphexpt/";
            },},{id: "projects-integrated-cell-3d",
          title: 'Integrated Cell 3D',
          description: "A deep generative model of 3D single-cell organization",
          section: "Projects",handler: () => {
              window.location.href = "/projects/09_ic3d/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/donovanr", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/rorymdonovan", "_blank");
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
          window.open("https://scholar.google.com/citations?user=4TzE8Z8AAAAJ", "_blank");
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

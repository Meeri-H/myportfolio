module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://adorable-haupia-2afc62.netlify.app`,
    // Your Name
    name: 'Meeri Harkki',
    // Main Site Title
    title: `Meeri Harkki`,
    // Description that goes under your name in main bio
    description: `MSc Student in Physical Sciences`,
    // Optional: Github account URL
    github: `https://github.com/Meeri-H`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/meeri-harkki-592b59214`,
    // Content of the About Me section
    about: `I'm a first year master's degree student in the University of Turku. I major in Physical Sciences and my specialization is data analytics, but I have a background 
    in astronomy from my bachelor's degree.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Chaos Theory',
        description:
          'A project to simulate two chaotic systems: a double pendulum and the Lorenz attractor.',
        link: 'https://github.com/Meeri-H/chaostheory/blob/220f7c7fdd0448187ac0719599c63143d053ac12/Chaos%20theory.py',
      },
      {
        name: 'Statistical Data Analysis Project',
        description:
          'A project where statistical data analysis is performed on bike rental data.',
        link: 'https://github.com/Meeri-H/stat_data_analysis_project/blob/957d540a73d44c9f7840493ed4efd8240bbc8f4c/Statistical%20Data%20Analysis%20Project.py',
      },
      {
        name: 'Unsupervised Learning Exercise',
        description:
          'An exercise to study the basic unsupervised learning methods on labeled and unlabeled data.',
        link: 'https://github.com/Meeri-H/unsupervised_learning_exercise/blob/main/unsupervised_learning.py',
      },
    ],
    
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Programming languages',
        description:
          'Python, C/C++, Java, R, SQL, HTML & CSS',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `myportfolio`,
        short_name: `myportfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/Omakuva.jpg`,
      },
    },
  ],
};

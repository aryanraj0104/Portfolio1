export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'SpaceBoy - Endless Arcade Runner',
      desc: 'SpaceBoy is an engaging endless arcade runner game that challenges players to navigate through a series of obstacles. The game features 8-bit arcade music, a highscore count and lives system adding an extra layer of fun, thrill and excitement.',
      subdesc:
        'Built using Python and Pygame, SpaceBoy is my first project ever. I got a good grasp of OOPs and Game laying a good foundation for future projects.',
      href: 'https://github.com/AryanR01/SpaceBoy.git',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/jump.png',
      logoStyle: {
        backgroundColor: '#1A2223',
        border: '0.2px solid #1A2223',
        boxShadow: '0px 0px 60px 0px #5C97854D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'Python',
          path: '/assets/python.png',
        },
        {
          id: 2,
          name: 'Pygame',
          path: 'assets/pygame.png',
        },
      ],
    },
    {
      title: 'Captain Bank - Secure ATM Banking System',
      desc: 'Captain Bank is a secure ATM banking system that allows users to perform essential CRUD operations. The client side interface contacts a live server using socket programming and is designed to provide a user-friendly interface and robust security features.',
      subdesc:
        "Built using Java and JavaFX, Captain Bank uses Twilio's Messaging API that provides an OTP to the registered mobile number whe the user wants to change the password or logs in for the first time.",
      href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #13202F',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'Java',
          path: '/assets/java.png',
        },
        {
          id: 2,
          name: 'Twilio',
          path: 'assets/twilio.png',
        },
      ],
    },
    {
      title: 'Merit Vault - Full Stack Application',
      desc: 'Merit Vault is a web application for educational institutes that allows students to securely store and display their certificates to Faculty. The application is designed to be intuitive and efficient, making it easy for to upload and view achivements.',
      subdesc:' Built as a part of my college team project, using MERN Stack this is my first Web Dev project, with a focus on the frontend. I also learnt about Git and Github while working on this project.',
      href: 'https://github.com/aryanraj0104/Merit-Vault.git',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#1A2223',
        border: '0.2px solid #1A2223',
        boxShadow: '0px 0px 60px 0px #5C97854D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'MongoDB',
          path: '/assets/mongo.png',
        },
        {
          id: 2,
          name: 'ExpressJS',
          path: 'assets/express.png',
        },
        {
          id: 3,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 4,
          name: 'NodeJS',
          path: '/assets/node.png',
        },
      ],
    },
    {
      title: 'Haunted Puzzle - VR Game',
      desc: 'Haunted Puzzle is a short but comprehensive VR experience that features gaze controls, animated ghost models, riddles, themed SFX and scary visuals, with Google Cardboard Support.',
      subdesc : 'Built using Unity and C#, in this game users have to navigate through a haunted house using gestures, audiovisual cues and gaze controls solving riddles and reaching victory. It was a great learning experience, allowing me to explore the world of virtual reality development.',
      href: 'https://github.com/aryanraj0104/Horror_VR_Puzzle.git',
      texture: '/textures/project/project4.mp4',
      logo: '/assets/project-logo4.png',
      logoStyle: {
        backgroundColor: '#D9A8811A',
        border: '0.2px solid #A52A2A0E',
        boxShadow: '0px 0px 60px 0px #C4956F4D',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'Unity',
          path: '/assets/unity.png',
        },
        {
          id: 2,
          name: 'C Sharp',
          path: 'assets/csharp.png',
        },
        {
          id: 3,
          name: 'Google CardBoard',
          path: 'assets/cardboard.png',
        },
      ],
    },
    // {
    //   title: 'Imaginify - AI Photo Manipulation App',
    //   desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    //   subdesc:
    //     'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    //   href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    //   texture: '/textures/project/project5.mp4',
    //   logo: '/assets/project-logo5.png',
    //   logoStyle: {
    //     backgroundColor: '#1C1A43',
    //     border: '0.2px solid #252262',
    //     boxShadow: '0px 0px 60px 0px #635BFF4D',
    //   },
    //   spotlight: '/assets/spotlight5.png',
    //   tags: [
    //     {
    //       id: 1,
    //       name: 'React.js',
    //       path: '/assets/react.svg',
    //     },
    //     {
    //       id: 2,
    //       name: 'TailwindCSS',
    //       path: 'assets/tailwindcss.png',
    //     },
    //     {
    //       id: 3,
    //       name: 'TypeScript',
    //       path: '/assets/typescript.png',
    //     },
    //     {
    //       id: 4,
    //       name: 'Framer Motion',
    //       path: '/assets/framer.png',
    //     },
    //   ],
    // },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, 0, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Framer',
      pos: 'Lead Web Developer',
      duration: '2022 - Present',
      title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
      icon: '/assets/framer.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Figma',
      pos: 'Web Developer',
      duration: '2020 - 2022',
      title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
      icon: '/assets/figma.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Notion',
      pos: 'Junior Web Developer',
      duration: '2019 - 2020',
      title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
      icon: '/assets/notion.svg',
      animation: 'salute',
    },
  ];
const mainShrartext = `Hey, I wanted to share something cool with you!`;
const mainPortfolioUrl = "https://rishabhdubey108.vercel.app/home";
export const urldata = {
    oneStream: {
        portfolioUrl: mainPortfolioUrl,
        images: {
            mainUrl: null,
            feature: {
                feature1: null,
                feature2: null,
                feature3: null,
                feature4: null,
            }
        },
        postLink: "https://rishabhdubey108.vercel.app/home/projects/onestream",
        shareText: mainShrartext,
        githubUrl: "https://github.com/rishabh3562/oneStream",
        liveLink: null,
        videolink: null, // Added for consistency
    },
    collabWrite: {
        portfolioUrl: mainPortfolioUrl,
        images: {
            mainUrl: `https://res.cloudinary.com/df20zuygj/image/upload/v1728301408/dks4zr0y2kjvsbc35tbk.jpg`,
            feature: {
                feature1: null, feature2: null, feature3: null, feature4: null
            }
        },
        postLink: "https://rishabhdubey108.vercel.app/home/projects/collabwrite",
        shareText: mainShrartext,
        githubUrl: "https://github.com/rishabh3562/collab-tool",
        liveLink: 'https://collaboration-tool.vercel.app/',
        videolink: null, // Added for consistency
    },
    codeNote: {
        portfolioUrl: mainPortfolioUrl,
        images: {
            mainUrl: null,
            feature: {
                feature1: null,
                feature2: null,
                feature3: null,
                feature4: null,
            }
        },
        postLink: "https://rishabhdubey108.vercel.app/home/projects/codenote",
        shareText: mainShrartext,
        githubUrl: "https://github.com/rishabh3562/CodeNote",
        liveLink: null,
        videolink: null, // Added for consistency
    },
    uniHub: {
        portfolioUrl: mainPortfolioUrl,
        images: {
            mainUrl: "https://res.cloudinary.com/df20zuygj/image/upload/v1728298480/Hero_page_unihub_h7fh54.jpg",
            feature: {
                feature1: null,
                feature2: null,
                feature3: null,
                feature4: null,
            }
        },
        postLink: "https://rishabhdubey108.vercel.app/home/projects/unihub",
        shareText: mainShrartext,
        githubUrl: "https://github.com/rishabh3562/UniHub",
        liveLink: 'https://unihub108.netlify.app/',
        videolink: null, // Added for consistency
    }
}

export const oneStream = {
    "mainUrl": urldata.oneStream.images.mainUrl ? urldata.oneStream.images.mainUrl : null,
    "title": "OneStream",
    description: "OneStream is a cutting-edge content management tool meticulously crafted to streamline the creation, editing, and publication of high-quality videos across diverse digital platforms.",
    tags: ['OneStream', 'Next.js', 'Appwrite', 'Clerk', 'AWS S3', 'YouTube API'],

    techStack: [
        {
            name: "Next.js",
            link: "https://nextjs.org/",
            description: "A React-based framework for building server-side rendered applications."
        },
        {
            name: "Appwrite",
            link: "https://appwrite.io/",
            description: "An open-source backend server for web, mobile, and flutter developers."
        },
        {
            name: "Clerk",
            link: "https://clerk.dev/",
            description: "A user management and authentication service."
        },
        {
            name: "AWS S3",
            link: "https://aws.amazon.com/s3/",
            description: "A scalable object storage service for data backup and storage."
        },
        {
            name: "YouTube API",
            link: "https://developers.google.com/youtube/v3",
            description: "API for accessing YouTube data for video uploads and management."
        }
    ],
    features: [
        {
            title: "Robust User Management",
            description: "Empower your team with distinct roles: Creators and Editors, ensuring seamless collaboration.",
            image: null
        },
        {
            title: "Secure Authentication",
            description: "Utilize Clerk for secure and hassle-free user authentication, safeguarding your content and data.",
            image: null // Added null for consistency
        },
        {
            title: "Scalable Database Solution",
            description: "Leverage the power of Appwrite as the database backend, offering reliability, scalability, and flexibility.",
            image: null // Added null for consistency
        },
        {
            title: "Effortless Video Storage",
            description: "Harness the capabilities of AWS S3 for efficient and secure video storage, ensuring rapid access and data integrity.",
            image: null // Added null for consistency
        },
        {
            title: "Seamless Integration",
            description: "Integrate seamlessly with the YouTube API (OAuth 2.0) for streamlined video publishing, enhancing your reach and engagement.",
            image: null // Added null for consistency
        },
        {
            title: "Future-Ready",
            description: "Explore future integrations for sharing videos on Instagram and Twitter, providing a comprehensive content distribution solution.",
            image: null // Added null for consistency
        }
    ],
    challenges: [
        {
            title: "OAuth 2.0 Integration",
            description: "Faced difficulties in using OAuth 2.0 for authentication."
        },
        {
            title: "YouTube API Integration",
            description: "Challenges encountered while integrating the YouTube Data API v3."
        }
    ],
    installation: [
        {
            step: "Clone Repository",
            description: "Begin by cloning the repository to your local environment."
        },
        {
            step: "Install Dependencies",
            description: "Execute 'npm install' to install all necessary dependencies."
        },
        {
            step: "Configuration Setup",
            description: "Configure AWS S3 for video storage, Clerk for authentication, and set up Appwrite as the database backend."
        },
        {
            step: "API Configuration",
            description: "Obtain OAuth 2.0 credentials for YouTube API integration."
        },
        {
            step: "Environment Variables",
            description: "Set up and configure environment variables as per the provided documentation."
        },
        {
            step: "Launch Application",
            description: "Start the application by running 'npm start' in your terminal."
        }
    ],
    usage: [
        {
            title: "User Authentication",
            description: "Users can seamlessly sign in as Creators or Editors using Clerk's secure authentication system."
        },
        {
            title: "Content Workflow",
            description: "Navigate through the intuitive workflow to upload, edit, and approve videos collaboratively."
        },
        {
            title: "Publication",
            description: "Utilize the integrated YouTube API to publish approved videos effortlessly, expanding your audience reach."
        },
        {
            title: "Future Expansion",
            description: "Explore potential integrations for sharing videos on Instagram and Twitter, enhancing your content distribution strategy."
        }
    ],
    contributionGuidelines: "We welcome contributions from the community!",
    license: "This project is licensed under the MIT License.",
    githubRepo: urldata.oneStream.githubUrl ? urldata.oneStream.githubUrl : null,
    websiteLink: urldata.oneStream.liveLink ? urldata.oneStream.liveLink : null,
    videoDemo: urldata.oneStream.videolink ? urldata.oneStream.videolink : null,
    conclusion: "OneStream offers an innovative solution for video content management and is poised for future enhancements."
}

export const uniHub = {
    "mainUrl": urldata.uniHub.images.mainUrl ? urldata.uniHub.images.mainUrl : null,
    "title": "UniHub",
    "introduction": "UniHub is a comprehensive college platform designed to enhance the student experience by offering a centralized hub for various resources such as internships, alumni networks, academic tests, and social connections.",
    "description": "UniHub is a one-stop solution for college students to explore internships, connect with alumni, access academic resources, and build meaningful friendships. It combines functionality with an intuitive interface for seamless navigation.",
    "tags": ["UniHub", "React.js", "DaisyUI", "Firebase", "React Query", "Tailwind CSS"],
    "techStack": [
        {
            "name": "React.js",
            "link": "https://reactjs.org/",
            "description": "A JavaScript library for building user interfaces."
        },
        {
            "name": "DaisyUI",
            "link": "https://daisyui.com/",
            "description": "A component library for Tailwind CSS."
        },
        {
            "name": "Firebase",
            "link": "https://firebase.google.com/",
            "description": "A platform for building web and mobile applications."
        },
        {
            "name": "React Query",
            "link": "https://react-query.tanstack.com/",
            "description": "A library for managing server state in React applications."
        },
        {
            "name": "Tailwind CSS",
            "link": "https://tailwindcss.com/",
            "description": "A utility-first CSS framework for rapid UI development."
        }
    ],
    "features": [
        {
            "title": "Internship Opportunities",
            "description": "Explore a range of internship opportunities tailored to your skill set and interests.",
            "image": {
                "link": null, // Added null for consistency
                "description": null, // Added null for consistency
                "width": 1000,
                "height": 1000
            }
        },
        {
            "title": "Alumni Connections",
            "description": "Connect with alumni from your college for guidance, mentorship, and networking.",
            "image": null // Added null for consistency
        },
        {
            "title": "Academic Tests",
            "description": "Access a wide array of academic tests and resources to help you excel in your studies.",
            "image": null // Added null for consistency
        },
        {
            "title": "Social Connections",
            "description": "Build friendships and connect with fellow students through interactive features.",
            "image": null // Added null for consistency
        },
        {
            "title": "User-Friendly Interface",
            "description": "Navigate effortlessly through a clean and intuitive interface designed for students.",
            "image": null // Added null for consistency
        }
    ],
    "challenges": [
        {
            "title": "User Engagement",
            "description": "Attracting and retaining users on the platform."
        },
        {
            "title": "Feature Expansion",
            "description": "Identifying and implementing additional features to enhance user experience."
        }
    ],
    "installation": [
        {
            "step": "Clone Repository",
            "description": "Clone the repository from GitHub to your local machine."
        },
        {
            "step": "Install Dependencies",
            "description": "Run 'npm install' to install required packages."
        },
        {
            "step": "Firebase Configuration",
            "description": "Set up Firebase and configure necessary settings for the app."
        },
        {
            "step": "Environment Variables",
            "description": "Add required environment variables for Firebase and other services."
        },
        {
            "step": "Launch Application",
            "description": "Start the application with 'npm start' to view it in your browser."
        }
    ],
    "usage": [
        {
            "title": "User Registration",
            "description": "Register for an account to access exclusive features and resources."
        },
        {
            "title": "Explore Internships",
            "description": "Browse and apply for internships that match your profile."
        },
        {
            "title": "Connect with Alumni",
            "description": "Reach out to alumni for advice and networking opportunities."
        },
        {
            "title": "Access Academic Resources",
            "description": "Utilize academic tests and materials available on the platform."
        },
        {
            "title": "Build Connections",
            "description": "Engage with peers and build a strong network."
        }
    ],
    "contributionGuidelines": "Contributions are welcome! Please follow the guidelines outlined in the repository.",
    "license": "This project is licensed under the MIT License.",
    "githubRepo": urldata.uniHub.githubUrl ? urldata.uniHub.githubUrl : null,
    "websiteLink": urldata.uniHub.liveLink ? urldata.uniHub.liveLink : null,
    "videoDemo": urldata.uniHub.videolink ? urldata.uniHub.videolink : null,
    "conclusion": "UniHub aims to enrich the college experience for students, providing valuable resources and opportunities for personal and professional growth."
}


export const CodeNote = {
    "mainUrl": urldata.codeNote.images.mainUrl ? urldata.codeNote.images.mainUrl : null,
    "title": "CodeNote.ai",
    "introduction": "CodeNote.ai is an innovative platform that revolutionizes the way developers document and understand their code. By leveraging advanced techniques like large language models through LangChain and utilizing Abstract Syntax Trees (ASTs), CodeNote.ai provides unparalleled accuracy and efficiency in generating documentation. The platform enables developers to analyze code repositories with ease, producing structured and detailed documentation that enhances collaboration and knowledge sharing. With features such as seamless repository fetching, automatic documentation generation, and context creation for AI agents, CodeNote.ai is designed to improve the coding experience, making it an essential tool for software developers and open-source contributors alike.",
    "description": "CodeNote.ai is an advanced tool designed to analyze code repositories, generate AI-powered documentation, and create context summaries for seamless code understanding. It utilizes large language models (via LangChain) and Abstract Syntax Trees (ASTs) to enhance accuracy and automation.",
    "tags": ["CodeNote.ai", "LangChain", "AST", "Node.js", "Express.js", "MongoDB", "React", "TailwindCSS"],

    "techStack": [
        {
            "name": "React",
            "link": "https://reactjs.org/",
            "description": "A JavaScript library for building user interfaces with components."
        },
        {
            "name": "TailwindCSS",
            "link": "https://tailwindcss.com/",
            "description": "A utility-first CSS framework for building custom UI designs."
        },
        {
            "name": "Node.js",
            "link": "https://nodejs.org/en/",
            "description": "A JavaScript runtime built on Chrome's V8 JavaScript engine."
        },
        {
            "name": "Express.js",
            "link": "https://expressjs.com/",
            "description": "A minimal and flexible Node.js web application framework."
        },
        {
            "name": "MongoDB",
            "link": "https://www.mongodb.com/",
            "description": "A NoSQL database for storing and managing large-scale data."
        },
        {
            "name": "LangChain",
            "link": "https://www.langchain.com/",
            "description": "A framework to develop applications powered by large language models (LLMs)."
        }
    ],
    "features": [
        {
            "title": "Repository Fetching",
            "description": "Seamlessly pull repositories from GitHub, track file changes, and refetch only modified files.",
            "image": null // Changed to null for consistency
        },
        {
            "title": "Automatic Documentation",
            "description": "Generate structured and accurate documentation for the entire codebase, supporting custom formats.",
            "image": null // Changed to null for consistency
        },
        {
            "title": "Context Creation for AI Agents",
            "description": "Summarize code context using ASTs and pass structured data to AI agents for in-depth analysis.",
            "image": null // Changed to null for consistency
        },
        {
            "title": "Lightweight and Efficient",
            "description": "Optimized for performance with minimal overhead, ensuring fast repository analysis and documentation.",
            "image": null // Changed to null for consistency
        }
    ],
    "challenges": [
        {
            "title": "AST Integration",
            "description": "Faced difficulties in implementing and refining ASTs for enhanced context analysis."
        },
        {
            "title": "LangChain API Integration",
            "description": "Challenges while integrating LangChain with different large language models and maintaining accuracy."
        }
    ],
    "installation": [
        {
            "step": "Clone Repository",
            "description": "Begin by cloning the repository: `git clone https://github.com/your-username/codenote-ai`"
        },
        {
            "step": "Install Dependencies",
            "description": "Run `npm install` to install necessary dependencies."
        },
        {
            "step": "Environment Setup",
            "description": "Set up the environment variables needed for GitHub API access and LangChain configuration."
        },
        {
            "step": "Start Development Server",
            "description": "Run `npm start` to launch the application locally."
        }
    ],
    "usage": [
        {
            "title": "Repository Fetching",
            "description": "Fetch repositories from GitHub by connecting your account and selecting the repository you want to analyze."
        },
        {
            "title": "Documentation Generation",
            "description": "Automatically generate detailed documentation for the entire codebase, including structure and context."
        },
        {
            "title": "Context Analysis",
            "description": "Analyze the repository for function summaries and state handling using AST and pass it to AI agents for further queries."
        }
    ],
    "contributionGuidelines": "We welcome contributions! Read our guidelines to learn how to get started.",
    "license": "This project is licensed under the MIT License.",
    "githubRepo": urldata.codeNote.githubUrl ? urldata.codeNote.githubUrl : null,
    "websiteLink": urldata.codeNote.liveLink ? urldata.codeNote.liveLink : null,
    "videoDemo": urldata.codeNote.videolink ? urldata.codeNote.videolink : null,

    "conclusion": "CodeNote.ai is a powerful solution for automatic codebase documentation and context analysis using AI, optimized for developers and open-source contributors."
}

export const CollabWrite = {
    "mainUrl": urldata.collabWrite.images.mainUrl ? urldata.collabWrite.images.mainUrl : null,
    "title": "CollabWrite",
    "introduction": "CollabWrite is an innovative web-based collaboration tool that allows users to create, share, and collaborate on visually captivating diagrams, sketches, and flowcharts in real-time. Whether you're working solo or as part of a team, CollabWrite empowers you to unleash your creativity through a simple, intuitive interface designed for effortless brainstorming, strategy mapping, and idea presentation. The tool enables multiple collaborators to edit and contribute to the same canvas simultaneously, ensuring seamless teamwork from anywhere in the world. With integrated real-time chat, users can communicate instantly, share insights, and refine their work together. Whether it's for personal projects, business planning, or educational purposes, CollabWrite delivers a smooth and dynamic collaborative experience, helping teams stay aligned and productive.",
    "description": "CollabWrite is an intuitive web-based tool that allows users to create diagrams and sketches in real-time with multiple collaborators. Inspired by Excalidraw, it integrates Appwrite's realtime features for seamless collaboration and inbuilt chat functionalities.",
    "tags": ["CollabWrite", "Next.js", "Appwrite", "TailwindCSS", "Vercel", "TypeScript", "Tool", "Website"],

    "techStack": [
        {
            "name": "Next.js",
            "link": "https://nextjs.org/",
            "description": "A React-based framework for building server-side rendered applications."
        },
        {
            "name": "TailwindCSS",
            "link": "https://tailwindcss.com/",
            "description": "A utility-first CSS framework for rapidly building custom user interfaces."
        },
        {
            "name": "Appwrite",
            "link": "https://appwrite.io/",
            "description": "An open-source backend server for web, mobile, and flutter developers."
        },
        {
            "name": "Vercel",
            "link": "https://vercel.com/dashboard",
            "description": "A cloud platform for static sites and serverless functions."
        },
        {
            "name": "TypeScript",
            "link": "https://www.typescriptlang.org/",
            "description": "A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale."
        }
    ],
    "features": [
        {
            "title": "Real-time Collaboration",
            "description": "Multiple users can edit the same canvas in real-time using Appwrite's realtime database.",
            "image": {
                "link": "https://cdn.hashnode.com/res/hashnode/image/upload/v1686607944692/e8a5602c-6b6a-46b8-b884-5a4fbfc71042.jpeg?auto=compress,format&format=webp",
                "description": "",
                "width": 1000,
                "height": 1000
            }
        },
        {
            "title": "Inbuilt Chat",
            "description": "Chat with collaborators in real-time while working on the canvas, fostering seamless communication.",
            "image": null // Changed to null for consistency
        },
        {
            "title": "Canvas Drawing",
            "description": "A versatile canvas for creating diagrams, flowcharts, and more using various tools like shapes, arrows, and freehand drawing.",
            "image": null // Changed to null for consistency
        },
        {
            "title": "Touch and Mouse Support",
            "description": "Works on touch devices and desktops, allowing users to draw using touch or mouse.",
            "image": null // Changed to null for consistency
        },
        {
            "title": "Downloadable Output",
            "description": "Export diagrams as images or PDFs for easy sharing and presentation.",
            "image": null // Changed to null for consistency
        }
    ],
    "challenges": [
        {
            "title": "Managing Real-time Updates",
            "description": "Ensuring smooth performance and synchronization of updates among multiple users was challenging."
        },
        {
            "title": "Canvas Performance Optimization",
            "description": "Optimizing the canvas for responsiveness and real-time drawing required significant effort."
        }
    ],
    "installation": [
        {
            "step": "Clone Repository",
            "description": "Start by cloning the repository: `git clone https://github.com/heyyakash/CollaborationTool`."
        },
        {
            "step": "Install Dependencies",
            "description": "Run `npm install` to install necessary dependencies."
        },
        {
            "step": "Environment Setup",
            "description": "Configure your environment variables for Appwrite integration."
        },
        {
            "step": "Start Development Server",
            "description": "Run `npm run dev` to launch the application locally."
        }
    ],
    "usage": [
        {
            "title": "Creating a Diagram",
            "description": "Use the tools available on the canvas to create and modify your diagrams."
        },
        {
            "title": "Collaborating in Real-time",
            "description": "Invite team members to collaborate on the canvas and communicate via the inbuilt chat."
        },
        {
            "title": "Exporting Your Work",
            "description": "Once your diagram is complete, export it as an image or PDF for easy sharing."
        }
    ],
    "contributionGuidelines": "We welcome contributions! Please read our guidelines to learn how to get started.",
    "license": "This project is licensed under the MIT License.",
    "githubRepo": urldata.collabWrite.githubUrl ? urldata.collabWrite.githubUrl : null,
    "websiteLink": urldata.collabWrite.liveLink ? urldata.collabWrite.liveLink : null,
    "videoDemo": urldata.collabWrite.videolink ? urldata.collabWrite.videolink : null,

    "conclusion": "CollabWrite is an essential tool for teams looking to enhance their collaboration through visual brainstorming, allowing for creativity and productivity to flourish."
}



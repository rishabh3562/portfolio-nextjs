const mainShrartext = `Hey, I wanted to share something cool with you!`
const mainPortfolioUrl = "https://rishabhdubey108.vercel.app/home";
export const urldata = {
    oneStream: {
        portfolioUrl: mainPortfolioUrl,
        postLink: "https://rishabhdubey108.vercel.app/home/projects/onestream",
        shareText: mainShrartext,
        githubUrl: "https://github.com/rishabh3562/oneStream",

    },
    collabWrite: {
        portfolioUrl:mainPortfolioUrl,
        postLink: "https://rishabhdubey108.vercel.app/home/projects/collabwrite",
        shareText: mainShrartext,
        githubUrl: "https://github.com/rishabh3562/collab-tool",
        liveLink: 'https://collaboration-tool.vercel.app/'
    },
    codeNote: {
        portfolioUrl: mainPortfolioUrl,
        postLink: "https://rishabhdubey108.vercel.app/home/projects/codenote",
        shareText: mainShrartext,
        githubUrl: "https://github.com/rishabh3562/CodeNote",
        // liveLink: 'https://collaboration-tool.vercel.app/'
    },
    uniHub: {
        portfolioUrl: mainPortfolioUrl,
        postLink: "https://rishabhdubey108.vercel.app/home/projects/unihub",
        shareText: mainShrartext,
        githubUrl: "https://github.com/rishabh3562/UniHub",
        liveLink: 'https://unihub108.netlify.app/',
   
    }
}

export const oneStream = {
    title: "OneStream",
    introduction: "OneStream",
    description: "OneStream is a cutting-edge content management tool meticulously crafted to streamline the creation, editing, and publication of high-quality videos across diverse digital platforms.",
    tags: ['OneStream', 'Next.js', 'Appwrite', 'Clerk', 'AWS S3', 'YouTube API'],
    links: {
        appwrite: "https://appwrite.io/",
        github: urldata.oneStream.githubUrl ? urldata.oneStream.githubUrl : null,
        website: urldata.oneStream.liveLink? urldata.oneStream.liveLink: null,
        video: urldata.oneStream.videolink ? urldata.oneStream.videolink : null
    },
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
            description: "Empower your team with distinct roles: Creators and Editors, ensuring seamless collaboration."
            , image: {
                link: "https://cdn.hashnode.com/res/hashnode/image/upload/v1686607944692/e8a5602c-6b6a-46b8-b884-5a4fbfc71042.jpeg?auto=compress,format&format=webp",
                description: "",
                width: 1000,
                height: 1000
            }
        },
        {
            title: "Secure Authentication",
            description: "Utilize Clerk for secure and hassle-free user authentication, safeguarding your content and data."
        },
        {
            title: "Scalable Database Solution",
            description: "Leverage the power of Appwrite as the database backend, offering reliability, scalability, and flexibility."
        },
        {
            title: "Effortless Video Storage",
            description: "Harness the capabilities of AWS S3 for efficient and secure video storage, ensuring rapid access and data integrity."
        },
        {
            title: "Seamless Integration",
            description: "Integrate seamlessly with the YouTube API (OAuth 2.0) for streamlined video publishing, enhancing your reach and engagement."
        },
        {
            title: "Future-Ready",
            description: "Explore future integrations for sharing videos on Instagram and Twitter, providing a comprehensive content distribution solution."
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
    websiteLink: urldata.oneStream.liveLink? urldata.oneStream.liveLink: null,
    videoDemo: urldata.oneStream.videolink ? urldata.oneStream.videolink : null,
    conclusion: "OneStream offers an innovative solution for video content management and is poised for future enhancements."
}






export const uniHub = {
    "title": "UniHub",
    "introduction": "UniHub is a comprehensive college platform designed to enhance the student experience by offering a centralized hub for various resources such as internships, alumni networks, academic tests, and social connections.",
    "description": "UniHub is a one-stop solution for college students to explore internships, connect with alumni, access academic resources, and build meaningful friendships. It combines functionality with an intuitive interface for seamless navigation.",
    "tags": ["UniHub", "React.js", "DaisyUI", "Firebase", "React Query", "Tailwind CSS"],
    "links": {
        "appwrite": null,
        "github": "https://github.com/your-username/unihub",
        "website": null,
        "video": null
    },
    "techStack": [
        {
            "name": "React.js",
            "link": "https://reactjs.org/",
            "description": "A JavaScript library for building user interfaces."
        },
        {
            "name": "DaisyUI",
            "link": "https://daisyui.com/",
            "description": "A UI component library built on Tailwind CSS for rapid UI development."
        },
        {
            "name": "Firebase",
            "link": "https://firebase.google.com/",
            "description": "A platform for building and managing web and mobile applications with authentication, real-time database, and cloud functions."
        },
        {
            "name": "React Query",
            "link": "https://tanstack.com/query/v4",
            "description": "A data-fetching library for React that simplifies form handling, mutations, and caching."
        },
        {
            "name": "Tailwind CSS",
            "link": "https://tailwindcss.com/",
            "description": "A utility-first CSS framework for creating custom user interfaces."
        }
    ],
    "features": [
        {
            "title": "Internship Opportunities",
            "description": "Browse and apply for internships, and track your application progress."
        },
        {
            "title": "Alumni Network",
            "description": "Connect with alumni for mentorship, career guidance, and networking opportunities."
        },
        {
            "title": "Academic Tests",
            "description": "Access a variety of academic assessments to help track progress and prepare for exams."
        },
        {
            "title": "Social Connections",
            "description": "Engage with fellow students via chat, forums, and interest-based groups."
        }
    ],
    "challenges": [
        {
            "title": "Form Handling Optimization",
            "description": "Integrating React Query's `useMutation` for smoother form submissions was a learning curve."
        },
        {
            "title": "Firebase Integration",
            "description": "Challenges faced while setting up real-time database and authentication using Firebase."
        }
    ],
    "installation": [
        {
            "step": "Clone Repository",
            "description": "Clone the repository to your local environment using 'git clone https://github.com/your-username/unihub.git'."
        },
        {
            "step": "Install Dependencies",
            "description": "Run 'npm install' to install all the necessary dependencies."
        },
        {
            "step": "Start Development Server",
            "description": "Execute 'npm start' to launch the development server and access the app locally."
        },
        {
            "step": "Browser Access",
            "description": "Open 'http://localhost:3000' in your browser to access UniHub."
        }
    ],
    "usage": [
        {
            "title": "Internship Applications",
            "description": "Students can browse and apply for internships tailored to their interests."
        },
        {
            "title": "Alumni Networking",
            "description": "Connect with alumni to gain career advice and build professional relationships."
        },
        {
            "title": "Academic Resource Access",
            "description": "Access academic tests to enhance learning and prepare for assessments."
        },
        {
            "title": "Social Engagement",
            "description": "Use UniHub's social features to chat, collaborate, and make new friends."
        }
    ],
    "contributionGuidelines": "We welcome contributions from the community to help improve UniHub. Please review our contribution guidelines.",
    "license": "This project is licensed under the MIT License.",
    "githubRepo": "https://github.com/your-username/unihub",
    "websiteLink": null,
    "videoDemo": null,
    "conclusion": "UniHub enhances the college experience by providing a unified platform for internships, academic resources, alumni networking, and social connections, making it easier for students to thrive both academically and socially."
}


export const CodeNote ={
    "title": "CodeNote.ai",
    "introduction": "CodeNote.ai is an innovative platform that revolutionizes the way developers document and understand their code. By leveraging advanced techniques like large language models through LangChain and utilizing Abstract Syntax Trees (ASTs), CodeNote.ai provides unparalleled accuracy and efficiency in generating documentation. The platform enables developers to analyze code repositories with ease, producing structured and detailed documentation that enhances collaboration and knowledge sharing. With features such as seamless repository fetching, automatic documentation generation, and context creation for AI agents, CodeNote.ai is designed to improve the coding experience, making it an essential tool for software developers and open-source contributors alike."
,
    "description": "CodeNote.ai is an advanced tool designed to analyze code repositories, generate AI-powered documentation, and create context summaries for seamless code understanding. It utilizes large language models (via LangChain) and Abstract Syntax Trees (ASTs) to enhance accuracy and automation.",
    "tags": ["CodeNote.ai", "LangChain", "AST", "Node.js", "Express.js", "MongoDB", "React", "TailwindCSS"],
    "links": {
        "github": "https://github.com/your-username/codenote-ai",
        "website": "https://codenoteai.com",
        "video": null
    },
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
            // "image": {
            //     "link": "https://cdn.hashnode.com/res/hashnode/image/upload/v1686607944692/sample-image.png",
            //     "description": "Repository fetching feature",
            //     "width": 1000,
            //     "height": 1000
            // }
        },
        {
            "title": "Automatic Documentation",
            "description": "Generate structured and accurate documentation for the entire codebase, supporting custom formats."
        },
        {
            "title": "Context Creation for AI Agents",
            "description": "Summarize code context using ASTs and pass structured data to AI agents for in-depth analysis."
        },
        {
            "title": "Lightweight and Efficient",
            "description": "Optimized for performance with minimal overhead, ensuring fast repository analysis and documentation."
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
    "githubRepo": "https://github.com/your-username/codenote-ai",
    "websiteLink": "https://codenoteai.com",
    "videoDemo": null,
    "conclusion": "CodeNote.ai is a powerful solution for automatic codebase documentation and context analysis using AI, optimized for developers and open-source contributors."
}


export const CollabWrite = {
    "title": "CollabWrite",
    "introduction": `CollabWrite is an innovative web-based collaboration tool that allows users to create, share, and collaborate on visually captivating diagrams, sketches, and flowcharts in real-time. Whether you're working solo or as part of a team, CollabWrite empowers you to unleash your creativity through a simple, intuitive interface designed for effortless brainstorming, strategy mapping, and idea presentation. The tool enables multiple collaborators to edit and contribute to the same canvas simultaneously, ensuring seamless teamwork from anywhere in the world. With integrated real-time chat, users can communicate instantly, share insights, and refine their work together. Whether it's for personal projects, business planning, or educational purposes, CollabWrite delivers a smooth and dynamic collaborative experience, helping teams stay aligned and productive."

This gives more context and detail to the purpose and features of CollabWrite. Let me know if you need further refinement!`,
    "description": "CollabWrite is an intuitive web-based tool that allows users to create diagrams and sketches in real-time with multiple collaborators. Inspired by Excalidraw, it integrates Appwrite's realtime features for seamless collaboration and inbuilt chat functionalities.",
    "tags": ["CollabWrite", "Next.js", "Appwrite", "TailwindCSS", "Vercel", "TypeScript","Tool","Website"],
    "links": {
        "appwrite": "https://appwrite.io/",
        "github": "https://github.com/heyyakash/CollaborationTool",
        "website": "https://collaboration-tool.vercel.app/",
        "video": "https://www.youtube.com/watch?v=1AIm2VsOQE4"
    },
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
        },{
            "name":"TypeScript",
            "link":"https://www.typescriptlang.org/",
            "description":"A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale"
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
            "description": "Chat with collaborators in real-time while working on the canvas, fostering seamless communication."
        },
        {
            "title": "Canvas Drawing",
            "description": "A versatile canvas for creating diagrams, flowcharts, and more using various tools like shapes, arrows, and freehand drawing."
        },
        {
            "title": "Touch and Mouse Support",
            "description": "Works on touch devices and desktops, allowing users to draw using touch or mouse."
        },
        {
            "title": "Downloadable Output",
            "description": "Once the project is done, users can download the canvas for external use."
        }
    ],
    "challenges": [
        {
            "title": "HTML Canvas API Complexity",
            "description": "Learning and working with the HTML Canvas API was challenging, especially when implementing complex shapes."
        },
        {
            "title": "Touch Events",
            "description": "We had to implement touch events for mobile compatibility, which required reworking mouse event handlers."
        },
        {
            "title": "Realtime Synchronization",
            "description": "Handling unexpected mouse behaviors and ensuring proper synchronization of canvas data across collaborators."
        }
    ],
    "installation": [
        {
            "step": "Clone Repository",
            "description": "Begin by cloning the repository to your local environment."
        },
        {
            "step": "Install Dependencies",
            "description": "Execute 'npm install' to install all necessary dependencies."
        },
        {
            "step": "Configuration Setup",
            "description": "Configure Appwrite for authentication, database, and realtime features."
        },
        {
            "step": "Environment Variables",
            "description": "Set up and configure environment variables as per the provided documentation."
        },
        {
            "step": "Launch Application",
            "description": "Start the application by running 'npm start' in your terminal."
        }
    ],
    "usage": [
        {
            "title": "Realtime Collaboration",
            "description": "Multiple users can edit the canvas simultaneously, with changes being reflected in real-time."
        },
        {
            "title": "Chat Integration",
            "description": "Communicate with collaborators via the inbuilt chat system."
        },
        {
            "title": "Canvas Drawing",
            "description": "Use various tools to create diagrams, flowcharts, and sketches on the canvas."
        },
        {
            "title": "Download Canvas",
            "description": "Once you're done, download the canvas as an image for future use."
        }
    ],
    "contributionGuidelines": "We welcome contributions from the community!",
    "license": "This project is licensed under the MIT License.",
    "githubRepo": urldata.collabWrite.githubUrl ? urldata.collabWrite.githubUrl : null,
    "websiteLink": urldata.collabWrite.liveLink? urldata.collabWrite.liveLink: null,
    // "videoDemo": urldata.collabWrite.videolink ? urldata.collabWrite.videolink : null,
    "conclusion": "CollabWrite offers an intuitive solution for real-time diagram creation and collaboration, with future enhancements planned for even more features."
}


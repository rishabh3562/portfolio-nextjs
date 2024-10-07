const mainShrartext = `Hey, I wanted to share something cool with you!`
export const urldata = {
    oneStream: {
        portfolioUrl: "https://rishabhdubey108.vercel.app/home",
        postLink: "https://rishabhdubey108.vercel.app/home/projects/onestream",
        shareText: mainShrartext,
        githubUrl: "https://github.com/rishabh3562/oneStream",

    },
    collabwrite: {
        portfolioUrl: "https://rishabhdubey108.vercel.app/home",
        postLink: "https://rishabhdubey108.vercel.app/home/projects/collabwrite",
        shareText: mainShrartext,
        githubUrl: "https://github.com/rishabhdubey108",
        livelink: 'https://collaboration-tool.vercel.app/'
    },
    codeNote: {
        portfolioUrl: "https://rishabhdubey108.vercel.app/home",
        postLink: "https://rishabhdubey108.vercel.app/home/projects/codenote",
        shareText: mainShrartext,
        githubUrl: "https://github.com/rishabhdubey108",
        livelink: 'https://collaboration-tool.vercel.app/'
    },
    unihub: {
        portfolioUrl: "https://rishabhdubey108.vercel.app/home",
        postLink: "https://rishabhdubey108.vercel.app/home/projects/unihub",
        shareText: mainShrartext,
        githubUrl: "https://github.com/rishabhdubey108",
        livelink: 'https://collaboration-tool.vercel.app/',
        videolink: "https://www.youtube.com/watch?v=1AIm2VsOQE4"
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






export const unihub = {
    title: "CollabWrite",
    introduction: "CollabWrite",
    description: "Imagine having the freedom to brainstorm ideas, map out strategies, or present complex information in a visually captivating manner.",
    tags: ['CollabWrite', 'NextJS', 'TailwindCSS', 'Appwrite', 'Vercel'],
    links: {
        appwrite: "https://appwrite.io/",
        github: urldata.oneStream.githubUrl ? urldata.oneStream.githubUrl : null,
        website: urldata.oneStream.liveLink? urldata.oneStream.liveLink: null,
        video: urldata.oneStream.videolink ? urldata.oneStream.videolink : null
    },
    techStack: [
        { name: "NextJS", link: "https://nextjs.org/" },
        { name: "TailwindCSS", link: "https://tailwindcss.com/" },
        { name: "Appwrite", link: "https://appwrite.io/" },
        { name: "Vercel", link: "https://vercel.com/dashboard" },
    ],
    features: [
        "Use the canvas to draw to your heart's content. Create plans, diagrams, flowcharts, etc.",
        "Go solo or collab with people to work together.",
        "Real-time editing for collaborative efforts.",
        "Inbuilt chat system for seamless communication.",
        "Download your canvas for offline use.",
    ],
    flowImage: "https://cdn.hashnode.com/res/hashnode/image/upload/v1686607944692/e8a5602c-6b6a-46b8-b884-5a4fbfc71042.jpeg?auto=compress,format&format=webp",
    signupLink: "https://collaboration-tool.vercel.app/login",
    appwriteIntegration: "Connecting authentication with Appwrite was super easy. All project data, chat data, and invitation data are stored in the Appwrite database.",
    challenges: [
        "Working with the HTML Canvas API was not an easy task.",
        "Drawing complex shapes was a challenge due to tracing limitations.",
        "Implementing touch events for mobile compatibility required significant changes.",
        "Unexpected mouse behaviors needed careful handling to optimize performance.",
        "Deciding on data storage format was tricky; we settled on data:image format.",
    ],

    githubRepo: urldata.oneStream.githubUrl ? urldata.oneStream.githubUrl : null,
    websiteLink: urldata.oneStream.liveLink? urldata.oneStream.liveLink: null,
    videoDemo: urldata.oneStream.videolink ? urldata.oneStream.videolink : null,
    conclusion: "Appwrite played a pivotal role in bringing our project to life. We are committed to further enhancing this project."
};



export const CodeNote = {
    title: "CollabWrite",
    introduction: "CollabWrite",
    description: "Imagine having the freedom to brainstorm ideas, map out strategies, or present complex information in a visually captivating manner.",
    tags: ['CollabWrite', 'NextJS', 'TailwindCSS', 'Appwrite', 'Vercel'],
    links: {
        appwrite: "https://appwrite.io/",
        github: urldata.oneStream.githubUrl ? urldata.oneStream.githubUrl : null,
        website: urldata.oneStream.liveLink? urldata.oneStream.liveLink: null,
        video: urldata.oneStream.videolink ? urldata.oneStream.videolink : null
    },
    techStack: [
        { name: "NextJS", link: "https://nextjs.org/" },
        { name: "TailwindCSS", link: "https://tailwindcss.com/" },
        { name: "Appwrite", link: "https://appwrite.io/" },
        { name: "Vercel", link: "https://vercel.com/dashboard" },
    ],
    features: [
        "Use the canvas to draw to your heart's content. Create plans, diagrams, flowcharts, etc.",
        "Go solo or collab with people to work together.",
        "Real-time editing for collaborative efforts.",
        "Inbuilt chat system for seamless communication.",
        "Download your canvas for offline use.",
    ],
    flowImage: "https://cdn.hashnode.com/res/hashnode/image/upload/v1686607944692/e8a5602c-6b6a-46b8-b884-5a4fbfc71042.jpeg?auto=compress,format&format=webp",
    signupLink: "https://collaboration-tool.vercel.app/login",
    appwriteIntegration: "Connecting authentication with Appwrite was super easy. All project data, chat data, and invitation data are stored in the Appwrite database.",
    challenges: [
        "Working with the HTML Canvas API was not an easy task.",
        "Drawing complex shapes was a challenge due to tracing limitations.",
        "Implementing touch events for mobile compatibility required significant changes.",
        "Unexpected mouse behaviors needed careful handling to optimize performance.",
        "Deciding on data storage format was tricky; we settled on data:image format.",
    ],

    githubRepo: urldata.oneStream.githubUrl ? urldata.oneStream.githubUrl : null,
    websiteLink: urldata.oneStream.liveLink? urldata.oneStream.liveLink: null,
    videoDemo: urldata.oneStream.videolink ? urldata.oneStream.videolink : null,
    conclusion: "Appwrite played a pivotal role in bringing our project to life. We are committed to further enhancing this project."
};


export const CollabWrite = {
    title: "CollabWrite",
    introduction: "CollabWrite",
    description: "Imagine having the freedom to brainstorm ideas, map out strategies, or present complex information in a visually captivating manner.",
    tags: ['CollabWrite', 'NextJS', 'TailwindCSS', 'Appwrite', 'Vercel'],
    links: {
        appwrite: "https://appwrite.io/",
        github: urldata.collabwrite.githubUrl ? urldata.collabwrite.githubUrl : null,
        website: urldata.collabwrite.liveLink? urldata.collabwrite.liveLink: null,
        video: urldata.collabwrite.videolink ? urldata.collabwrite.videolink : null
    },
    techStack: [
        { name: "NextJS", link: "https://nextjs.org/" },
        { name: "TailwindCSS", link: "https://tailwindcss.com/" },
        { name: "Appwrite", link: "https://appwrite.io/" },
        { name: "Vercel", link: "https://vercel.com/dashboard" },
    ],
    features: [
        "Use the canvas to draw to your heart's content. Create plans, diagrams, flowcharts, etc.",
        "Go solo or collab with people to work together.",
        "Real-time editing for collaborative efforts.",
        "Inbuilt chat system for seamless communication.",
        "Download your canvas for offline use.",
    ],
    flowImage: "https://cdn.hashnode.com/res/hashnode/image/upload/v1686607944692/e8a5602c-6b6a-46b8-b884-5a4fbfc71042.jpeg?auto=compress,format&format=webp",
    signupLink: "https://collaboration-tool.vercel.app/login",
    appwriteIntegration: "Connecting authentication with Appwrite was super easy. All project data, chat data, and invitation data are stored in the Appwrite database.",
    challenges: [
        "Working with the HTML Canvas API was not an easy task.",
        "Drawing complex shapes was a challenge due to tracing limitations.",
        "Implementing touch events for mobile compatibility required significant changes.",
        "Unexpected mouse behaviors needed careful handling to optimize performance.",
        "Deciding on data storage format was tricky; we settled on data:image format.",
    ],

    githubRepo: urldata.collabwrite.githubUrl ? urldata.collabwrite.githubUrl : null,
    websiteLink: urldata.collabwrite.liveLink? urldata.collabwrite.liveLink: null,
    videoDemo: urldata.collabwrite.videolink ? urldata.collabwrite.videolink : null,
    conclusion: "Appwrite played a pivotal role in bringing our project to life. We are committed to further enhancing this project."
};

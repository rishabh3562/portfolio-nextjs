import { FaLinkedin, FaGithub, FaTwitter, FaCalendarAlt } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { MdWorkspacesOutline } from "react-icons/md";

export const urls = {
    linkedin: {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/rishabh108/",
        icon: <FaLinkedin />,
    },
    github: {
        name: "GitHub",
        href: "https://github.com/rishabh3562",
        icon: <FaGithub />,
    },
    topmate: {
        name: "Topmate",
        href: "https://topmate.io/rishabh108",
        icon: <PiStudentBold />,
    },
    peerlist: {
        name: "Peerlist",
        href: "https://peerlist.io/rishabh108",
        icon: <MdWorkspacesOutline />,
    },
    twitter: {
        name: "X (Twitter)",
        href: "https://x.com/dubeyrishabh108",
        icon: <FaTwitter />,
    },
    calcom: {
        name: "Cal.com",
        href: "https://cal.com/dubeyrishabh108",
        icon: <FaCalendarAlt />,
    },
};

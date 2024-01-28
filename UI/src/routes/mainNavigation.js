import { HiHome, HiClipboard, HiUser, HiTag, HiMail } from "react-icons/hi";

export const routes = [
    {
        href: "./",
        text: "Home",
        icon: HiHome
    },
    {
        href: "#services",
        text: "Services",
        icon: HiClipboard
    }, 
    //TODO: finish this section
    // {
    //     href: "./our-work",
    //     text: "Our Work",
    //     icon: HiClipboard
    // },
    {
        href: "/about-us",
        text: "About Us",
        icon: HiUser
    },
    {
        href: "/contact-us",
        text: "Contact",
        icon: HiMail
    }
];
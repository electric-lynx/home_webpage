import { HiHome, HiClipboard, HiUser, HiTag, HiMail } from "react-icons/hi";

export const routes = [
    {
        href: "./",
        text: "Home",
        icon: HiHome,
        isActive: true,
    },
    {
        href: "#services",
        text: "Services",
        icon: HiClipboard,
        isActive: true,
    }, 
    {
        href: "/about-us",
        text: "About Us",
        icon: HiUser
    },
    {
        href: "/contact-us",
        text: "Contact",
        icon: HiMail
    },
    {
        href: "./our-work",
        text: "Our Work",
        icon: HiClipboard,
        isActive: false,
    }
];
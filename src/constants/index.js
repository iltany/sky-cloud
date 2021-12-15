import SecureIcon from "../assets/icons/SecureIcon";
import AccessIcon from "../assets/icons/AccessIcon";
import StoreIcon from "../assets/icons/StoreIcon";
import PointIcon from "../assets/icons/PointIcon";
import DownloadIcon from "../assets/icons/DownloadIcon";
import UserIcon from "../assets/icons/UserIcon";
import MinDaysBg from "../assets/images/30days.png";
import MediumDaysBg from "../assets/images/90days.png";
import MaxDaysBg from "../assets/images/365days.png";
import ProfileCrown from "../assets/icons/ProfileCrown";
import ProfileCalendar from "../assets/icons/ProfileCalendar";
import ProfileStorage from "../assets/icons/ProfileStorage";

export const BREAKPOINTS = {
  smallMobile: 0,
  mobile: 360,
  tablet: 780,
  desktop: 1440,
};

export const navigationLinks = [
  { link: "/", titleLink: "Home" },
  { link: "/pricing", titleLink: "Pricing" },
  { link: "/contacts", titleLink: "Contact" },
];

export const featuredLinks = [
  { link: "/pricing", titleLink: "Pricing" },
  { link: "/contacts", titleLink: "Contact" },
  { link: "/", titleLink: "DMCA" },
  { link: "/", titleLink: "Refund Policy" },
  { link: "/", titleLink: "Privacy Policy" },
  { link: "/", titleLink: "Terms of Service" },
  { link: "/faq", titleLink: "FAQ" },
];

export const features = [
  {
    Icon: SecureIcon,
    title: "SAFE AND SECURE",
    description:
      "Safely store and backup all your essential files. From family photos & videos to important documents, you can rely on us to store all your media securely and forever.",
  },
  {
    Icon: AccessIcon,
    title: "Access from anywhere",
    description:
      "Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web.",
  },
  {
    Icon: StoreIcon,
    title: "STORE AND MANAGE ALL YOUR FILES!",
    description:
      "Upload multiple files at once and keep them forever on this site. If you're using FireFox or Chrome, you can simply drag & drop your files to begin uploading.",
  },
  {
    Icon: PointIcon,
    title: "Any point of the globe",
    description:
      "High speed from any location with internet access! Gigabit networking and high-performance server!",
  },
];

export const stats = [
  {
    Icon: DownloadIcon,
    count: "999529 000 000",
    description: "Загружено файлов на сервис",
  },
  {
    Icon: UserIcon,
    count: "235 764 784",
    description: "Зарегистрировано пользователей",
  },
];

export const price = [
  {
    background_content: MinDaysBg,
    popular: "",
    days: "30 days",
    price: "$20.99",
    proposal_list: [
      "1 Tb Free space",
      "4 Tb Monthly space",
      "100 Mbit Speed",
      "3000 sessions",
    ],
  },
  {
    background_content: MediumDaysBg,
    popular: "Most popular",
    days: "90 days",
    price: "$46.99",
    proposal_list: [
      "1 Tb Free space",
      "4 Tb Monthly space",
      "100 Mbit Speed",
      "3000 sessions",
    ],
  },
  {
    background_content: MaxDaysBg,
    popular: "",
    days: "365 days",
    price: "$127.99",
    proposal_list: [
      "1 Tb Free space",
      "4 Tb Monthly space",
      "100 Mbit Speed",
      "3000 sessions",
    ],
  },
];

export const profileInfo = [
  {
    Icon: ProfileCrown,
    title: "Account type:",
    description: "VIP 90 days",
  },
  {
    Icon: ProfileCalendar,
    title: "",
    description: "left 37 days",
  },
  {
    Icon: ProfileStorage,
    title: "File stored total:",
    description: "1 239 345 gb",
  },
];

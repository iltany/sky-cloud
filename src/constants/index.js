import SecureIcon from "../assets/icons/SecureIcon";
import AccessIcon from "../assets/icons/AccessIcon";
import StoreIcon from "../assets/icons/StoreIcon";
import PointIcon from "../assets/icons/PointIcon";
import DownloadIcon from "../assets/icons/DownloadIcon";
import UserIcon from "../assets/icons/UserIcon";

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

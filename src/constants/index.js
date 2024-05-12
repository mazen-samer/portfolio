import {
  materialui,
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  postgresql,
  git,
  figma,
  shopify,
  gametopia,
  threejs,
  antdesign,
  flask,
  ieee,
  grad,
  level,
  onlinestorage,
  dashboard,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React. js Developer",
    icon: mobile,
  },
  {
    title: "UI/UX",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material UI",
    icon: materialui,
  },
  {
    name: "Ant Design",
    icon: antdesign,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Front-End volunteer",
    company_name: "AAST IEEE SB",
    icon: ieee,
    iconBg: "#ffffff",
    date: "Feb. 2020 - July 2021",
    points: [
      "Contributed as a Front-End Developer at IEEE AAST Student Branch.",
      "Participated in projects including a mobile phone comparison webpage and a Google search page clone.",
      "Assisted in developing a local WordPress website for the branch.",
    ],
  },
  {
    title: "Web Developer - Shopify",
    company_name: "Dumoo Al Farah Store",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developed an e-commerce website using Shopify for this store.",
      "Customized Shopify themes and templates to create a unique and visually appealing online store",
      "Implemented product management features to organize and showcase Abaya collections effectively.",
    ],
  },
  {
    title: "Freelancer - React Developer",
    company_name: "Level Shaila & Abaya Store",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Dec 2023 - Present",
    points: [
      "Worked as a React freelancer in collaboration with London Marketing Agency to develop Level Shaila and Abaya Store, an e-commerce platform.",
      "Implemented advanced features such as an advanced cart system and product variants like size and length for enhanced customer experience and customization.",
      "Collaborated closely with the agency's team to ensure seamless integration of front-end components with back-end functionalities.",
      "Currently engaged in an ongoing project called Larosy, another abaya store, where I continue to leverage my React expertise to deliver high-quality solutions and meet client requirements.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "3D Facial Model Reconstruction from Text Descriptions.",
    description:
      "I led the UI design and backend/database management. Employed React.js with Ant Design and Material UI for the UI, Flask for the backend, and PostgreSQL for the database. Leveraged Three.js for 3D model visualization and integrated machine learning models as black boxes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: grad,
    source_code_link:
      "https://github.com/mazen-samer/Reconstructing-3D-Facial-Models-from-Textual-Descriptions",
  },
  {
    name: "Level Shaila & Abaya Store",
    description:
      "As a freelancer, I developed Level Shaila & Abaya Store using React.js, crafting a bespoke UI with vanilla React and CSS, and implementing essential store features including a cart system and pagination for seamless browsing.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restfull_api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: level,
    source_code_link: "https://github.com/mazen-samer/Abaya-Store",
  },
  {
    name: "GameTopia - Online gaming store",
    description:
      "Developed an online gaming store platform using HTML, CSS, JavaScript, PHP, and AJAX. Features include user registration, login, product browsing, cart management, purchase history tracking, wishlist functionality, and admin page for customer and product management. Utilized vanilla code and MySQL with XAMPP for data management.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
      {
        name: "PHP",
        color: "orange-text-gradient",
      },
    ],
    image: gametopia,
    source_code_link: "https://github.com/mazen-samer/GameTopia",
  },
  {
    name: "Online Storage",
    description:
      "Developed an online storage platform using React.js, Firebase, and Firestore. Implemented secure file storage capabilities, allowing users to store files independently. Incorporated sign-in and sign-up features for enhanced security and personalization.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "firestore",
        color: "pink-text-gradient",
      },
    ],
    image: onlinestorage,
    source_code_link: "https://github.com/mazen-samer/online-storage",
  },
  {
    name: "Advanced Dashboard",
    description:
      "The advanced dashboard, crafted with React, Material-UI, and Nivo, blends cutting-edge technologies to deliver a visually stunning and user-friendly data visualization platform. React's flexibility, Material-UI's sleek interface components, and Nivo's extensive charting capabilities combine seamlessly to provide users with intuitive access to complex datasets, enabling informed decision-making and driving organizational success.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "materialui",
        color: "green-text-gradient",
      },
      {
        name: "nivo",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://github.com/mazen-samer/Dashboard",
  },
];

export { services, technologies, experiences, testimonials, projects };

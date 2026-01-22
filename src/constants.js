// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/nr-logo.png';
import agcLogo from './assets/company_logo/nr-logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/cu-logo.jpg';
import bsaLogo from './assets/education_logo/a-a-r-logo.jpg';
import vpsLogo from './assets/education_logo/a-a-r-logo.jpg';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/cleartask.png';
import Switcher from './assets/work_logo/Switcher.png';
import NexusPass from './assets/work_logo/NexusPass.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import Moneymanger from './assets/work_logo/Moneymanger.png';
import learn from './assets/work_logo/LEARNHUB.png';
import bus from './assets/work_logo/bus-system.jpg';
import car from './assets/work_logo/car-system.jpg';
import showroom from './assets/work_logo/showroom.jpg';

// // Certifcates Section Logo's
import cert1 from './assets/certificates/Deloitte-Data.jpg';
import cert2 from './assets/certificates/Deloitte-Technology.jpg';
import cert3 from './assets/certificates/Java.jpg';
import cert4 from './assets/certificates/NSS2.jpg';
import cert5 from './assets/certificates/Tech1.jpg';
import cert6 from './assets/certificates/Java.jpg';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },

    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
 
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Backend Developer",
      company: "Academic Projects",
      date: "",
      desc: " As a backend developer on academic projects, I contributed to the Visionary patent registration platform using PHP, MySQL, HTML, CSS, and JavaScript. I built an intuitive interface, managed server-side logic, and collaborated with frontend developers to enhance user experience. This experience sharpened my technical skills, problem-solving abilities, and teamwork ",
      skills: [
        "MYSQL",
        "PHP",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "E-Commerce Frontend",
      company: "Project",
      date: "",
      desc: "An e-commerce website built with React is a dynamic and responsive web application that enables users to browse, search, and purchase products online. Utilizing React's component-based architecture, the site includes features such as product listings, detailed pages, a shopping cart, user authentication, and secure checkout. With React's state management and routing, it offers smooth navigation and real-time updates without page reloads. This project showcases key concepts like component design, API integration, and responsive design, exemplifying modern frontend web development for online retail.",
      skills: [
        "ReactJS",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
      ],
    },

  ];
  
  export const education = [
    {
    id: 0,
    img: glaLogo,
    school: "Chitkara University, Rajpura",
    date: "Aug 2025 - Present",
    grade: "Pursuing (2nd Semester)",
    desc: "I am currently pursuing a Master of Computer Applications (MCA) at Chitkara University to further advance my technical expertise. Building upon my BCA foundation, I am deepening my knowledge in advanced software development, algorithms, and modern tech stacks. Currently in my second semester, I am actively focusing on complex problem-solving and enterprise-level application architecture.",
    degree: "Master of Computer Applications - MCA",
  },
    {
      id: 1,
      img: glaLogo,
      school: "Chitkara University, Rajpura",
      date: "June 2022 - July 2025",
      grade: "8.9 CGPA",
      desc: "I have successfully completed my Bachelor of Computer Applications (BCA) from Chitkara University, Rajpura, developing a strong foundation in computer science and software development. Throughout my studies, I gained hands-on experience in programming languages such as Java, Python, and JavaScript, along with proficiency in web development technologies including HTML, CSS, and React.js. My curriculum also emphasized database management, data structures, and problem-solving skills. I developed a keen aptitude for analytical thinking, teamwork, and effective communication, preparing me to contribute effectively in dynamic IT environments.",
      degree: "Bachelor of Computer Applications - BCA",
    },
    {
      id: 2,
      img: bsaLogo,
      school: "A.A.R Jain Model School, Dera Bassi",
      date: "April 2021 - March 2022",
      grade: "72.2%",
      desc: "I completed my class 12 education from A.A.R Jain Model School, Dera Bassi, under the CBSE board, where I studied Commerce.",
      degree: "CBSE(XII) - Commerce",
    },
    {
      id: 3,
      img: vpsLogo,
      school: "New Standard High School, Panchkula",
      date: "Apr 2019 - March 2020",
      grade: "82%",
      desc: "I completed my class 10th education from New Standard High School, Panchkula, under the HBSE Board(Haryana Board of School Education).",
      degree: "HBSE(X), Haryana Board",
    },
   
  ];
  
 export const projects = [
  {
    id: 0,
    title: "Java Bus Reservation System",
    description:
      "A core Java console-based application for managing bus bookings. It utilizes Object-Oriented Programming (OOP) concepts to handle bus listings, booking, and cancellation of tickets, ensuring efficient data management.",
    image: bus,
    tags: ["JAVA", "Console App", "OOP"],
    github: "https://github.com/navnishrajput/Bus-Reservation-System", 
    webapp: "", 
  },
  {
    id: 1,
    title: "Car Rental System",
    description:
      "A Java console application that simplifies the car rental process. It features modules for viewing available cars, calculating rental costs based on duration, and managing customer returns, showcasing strong logic building and Java fundamentals.",
    image: car,
    tags: ["JAVA", "Console App", "OOP"],
    github: "https://github.com/navnishrajput/Car-Rental-System",
    webapp: "",
  },
  {
    id: 2,
    title: "My Showroom Management System",
    description:
      "A comprehensive showroom management tool built in Java. It allows administrators to manage inventory for cars and employees, including adding, viewing, and removing records. This project demonstrates effective use of arrays, loops, and Java classes.",
    image: showroom,
    tags: ["JAVA", "Console App", "OOP"],
    github: "https://github.com/navnishrajput/Showroom-Management-System", 
    webapp: "",
  },
  
  {
    id: 3,
    title: "ClearTask- To-Do",
    description:
      "A modern, feature-rich to-do list web application with drag-and-drop task reordering, category filtering, due dates, dark mode, and local storage persistence. Built with HTML, CSS, and JavaScript for a clean and responsive user experience. I created this project because I was bored at home and wanted to build something productive.",
    image: githubdetLogo,
    tags: ["HTML", "CSS", "JavaScript", "API"],
    github: "https://github.com/navnishrajput/ClearTasks---To-Do",
    webapp: "https://navnishrajput.github.io/ClearTasks---To-Do/",
  },
  {
    id: 4,
    title: "Switcher - Online File Conversion Toolkit",
    description:
      "Switcher is a modern, visually stunning web application that provides a powerful online file conversion toolkit. It allows users to convert, edit, and manage various file types including PDFs, images, and documents with ease. The app offers over 50+ format conversions with lightning-fast ⚡, secure 🔒, and completely free 🎉 tools.",
    image: Switcher,
    tags: ["React JS", "Node.js", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/navnishrajput/Switcher",
    webapp: "https://switcher-tools.netlify.app/",
  },
  {
    id: 5,
    title: "NexusPass - Modern Password Generator",
    description:
      "A sleek, modern password generator with advanced features",
    image: NexusPass,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/navnishrajput/NexusPass---Modern-Password-Generator",
    webapp: "https://nexuspass.netlify.app/",
  },

    {
    id: 6,
    title: "Money Manager - Expense Tracker",
    description:
      "A modern and stylish expense tracker web application built with HTML, CSS, and JavaScript that helps you manage your finances in Indian Rupees (₹).",
    image: Moneymanger,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/navnishrajput/Money-Manager",
    webapp: "https://moneymanager-expense.netlify.app/",
  },
  {
    id: 7,
    title: "Task Reminder Chrome Extension Tool",
    description:
      "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
    image: taskremLogo,
    tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    github: "https://github.com/navnishrajput/Task-Reminder-Chrome-Extension-",
    webapp: "",
  },
  {
    id: 8,
    title: "Learn Hub",
    description:
      "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
    image: learn,
    tags: ["REACT", "JavaScript"],
    github: "https://github.com/",
    webapp: "",
  },
]; 

  export const certificates = [
  {
    id: 1,
    image: cert1,
    title: "Java Full Stack Certification", // Optional: easier to identify in code
    link: "https://link-to-credential.com" // Optional: if you want them clickable
  },
  {
    id: 2,
    image: cert2,
    title: "React Developer",
    link: ""
  },
  {
    id: 3,
    image: cert3,
    title: "Data Structures & Algorithms",
    link: ""
  },
    {
    id: 4,
    image: cert4,
    title: "Data Structures & Algorithms",
    link: ""
  },
    {
    id: 5,
    image: cert5,
    title: "Data Structures & Algorithms",
    link: ""
  },
    {
    id: 6,
    image: cert6,
    title: "Data Structures & Algorithms",
    link: ""
  },
];
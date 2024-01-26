import { FaReact, FaHtml5, FaCss3, FaBootstrap, FaPhp, FaNodeJs, FaGitAlt, FaGithub  } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss, SiMongodb, SiMysql, SiVisualstudio } from "react-icons/si";
export const Bio = {
  name: 'Ashley',
  lastName: 'Mercado',
  secondLastName: 'Defort',
  roles: [
      'Software Developer',
      'Full Stack Developer',
      'Math Student',
      'Programmer'
  ],
  description: "I'm a Colombian programmer with a passion for crafting digital solutions, diving into web, mobile, and desktop development since 2021. I earned my tech degree in information systems (2022-2023) and currently, I'm on a dual degree journey in Mathematics and Data Science at Universidad del Norte, Barranquilla. For more details, feel free to reach out through my contact information.",
  github: 'https://github.com/AshleyDefort',
  linkedin: 'https://www.linkedin.com/in/ashley-mercado-defort',
  twitter: 'https://twitter.com/ashdefort',
  instagram: 'https://www.instagram.com/ashleydefort/',
  facebook: 'https://www.facebook.com/ashleygabriela.mercadodefort'
}
export const Skills = [
  {
    title: 'Frontend',
    backgroundColor: "#AC87C5",
    skills: [
      {
        name: 'React',
        icon: <FaReact/>
      },
      {
        name: 'JavaScript',
        icon: <IoLogoJavascript/>
      },
      {
        name: 'HTML',
        icon: <FaHtml5/>
      },
      {
        name: 'CSS',
        icon: <FaCss3/>
      },
      {
        name: 'Bootstrap',
        icon: <FaBootstrap/>
      },
      {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss/>
      }
    ]
  },
  {
    title: 'Backend',
    backgroundColor: "#E0AED0",
    skills: [
      {
        name: 'PHP',
        icon: <FaPhp/>
      },
      {
        name: 'Node.js',
        icon: <FaNodeJs/>
      },
      {
        name: 'MongoDB',
        icon: <SiMongodb/>
      },
      {
        name: 'MySQL',
        icon: <SiMysql/>
      },
      {
        name: 'PostgreSQL',
        icon: <BiLogoPostgresql/>
      }
    ]
  },
  {
    title: 'Others',
    backgroundColor: "#5D3587",
    skills: [
      {
        name: 'Git',
        icon: <FaGitAlt/>
      },
      {
        name: 'GitHub',
        icon: <FaGithub/>
      },
      {
        name: 'Visual Studio Code',
        icon: <SiVisualstudio/>
      }
    ]
  }
]
export const Projects = [
  {
    name: 'Portfolio',
    backgroundColor: "#AC87C5",
    description: 'My personal portfolio website.',
    tags: ['React', 'JavaScript', 'HTML', 'CSS', 'Material UI'],
    github: ''
  },
  {
    name: 'DevConnector',
    backgroundColor: "#E0AED0",
    description: 'A social network for developers.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    github: ''
  },
  {
    name: 'Contact Keeper',
    backgroundColor: "#5D3587",
    description: 'A full stack MERN application for keeping contacts.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    github: ''
  }
]
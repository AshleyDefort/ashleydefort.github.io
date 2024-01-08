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
  description: "I am an enthusiastic and adaptable individual, constantly seeking fresh opportunities to grow. Driven by a fervent thirst for knowledge, I am committed to producing top-notch outcomes. Infused with positivity and embracing a mindset of continual growth, I aim to make a substantial impact and attain remarkable milestones.",
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
    description: 'My personal portfolio website.',
    tags: ['React', 'JavaScript', 'HTML', 'CSS', 'Material UI'],
    github: ''
  },
  {
    name: 'DevConnector',
    description: 'A social network for developers.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    github: ''
  },
  {
    name: 'Contact Keeper',
    description: 'A full stack MERN application for keeping contacts.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    github: ''
  }
]
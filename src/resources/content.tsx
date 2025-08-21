import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Logo } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ashish Bhargav",
  lastName: "Gampa",
  name: `Ashish`,
  role: "Devops/Cloud Engineer",
  avatar: "/images/avatar.jpg",
  email: "ashishbhargavgampa9@gmail.com",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.name}'s Newsletter</>,
  description: (
    <>
      I design, automate, and optimize scalable 
      cloud infrastructure to enhance system reliability and streamline deployments.
    </>
  ),
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts

  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/bhargav-ashish/",
  },

  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between Operations and code</>,
  featured: {
    display: true,
    title: (
      <>
        Recent project: <strong className="ml-4">Once UI</strong>
      </>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Ashish, a DevOps/Cloud Engineer at{"Lockeed Martin"}
      <Logo
        icon="/trademarks/wordmark-dark.svg"
        style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}
      />
      , where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        A  DevOps/Cloud Engineer with over 5 years of experience in designing, automating, and optimizing scalable
cloud infrastructure and CI/CD pipelines. Adept at leveraging AWS, Azure, and containerization technologies to enhance
system reliability, streamline deployments, and ensure seamless integration of cloud-based solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Lockeed Martin",
        timeframe: "2022 - Present",
        role: "Azure DevOps Engineer",
        achievements: [
          <>
            Architected the migration of on-prem applications to Azure, reducing infrastructure costs by 25% and increasing application
scalability to handle a 40% increase in user traffic.
          </>,
          <>
            Cut deployment time by 50% by building Terraform templates to automate the provisioning of V-Nets, VM Scale Sets, and
Load Balancers.
          </>,
          <>
             Engineered a zero-downtime deployment strategy for microservices on AKS using Azure DevOps, achieving 99.99% uptime
and eliminating manual rollback incidents.
• Implemented a robust disaster recovery plan using Azure Recovery Vault and automated backups, reducing potential
recovery time (RTO) from 12 hours to under 1 hour.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "MIgration",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "T Rowe Price",
        timeframe: "Nov 2022 - Apr 2024",
        role: "AAWS DevOps Engineer",
        achievements: [
          <>
           Decreased cloud spend by over $15,000/month by creating Ansible Playbooks in Jenkins to automate the start/stop schedule
for non-production EC2 and RDS resources.
          </>,
          <>
            Reduced environment provisioning time from 3 days to 2 hours by developing a comprehensive Infrastructure as Code
framework using CloudFormation and Python scripts.
• Increased application fault tolerance and availability to 99.95% by deploying and managing EC2 instances behind an Elastic
Load Balancer (ELB) with auto-scaling groups.
• Automated the deployment and testing of 12+ applications by establishing a full CI/CD pipeline using Docker, GitHub, and
AWS services, resulting in a 75% reduction in manual deployment errors.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "University of Maryland Baltimore County",
        description: <>Studied Information Systems.</>,
      }
  
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

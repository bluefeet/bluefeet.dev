type WorkMode = "on-site" | "hybrid" | "remote";

type EmploymentType =
  | "full-time"
  | "part-time"
  | "self-employed"
  | "freelance"
  | "contract"
  | "internship"
  | "apprenticeship"
  | "seasonal";

export interface Experience {
  companyName: string;
  title?: string;
  employmentType?: EmploymentType;
  location?: string;
  workMode?: WorkMode;
  startDate?: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
  skills?: string[];
}

export interface Recommendation {
  author: string;
  relationship: string;
  message: string;
}

export interface Resume {
  contact?: {
    fullName?: string;
    casualName?: string;
    pronouns?: string;
    location?: string;
    emailAddress?: string;
    phoneNumber?: string;
  };
  profile?: {
    headline?: string;
    about?: string;
    competencies?: {
      name: string;
      skills: string[];
    }[];
    languages?: string[];
    resources?: {
      title: string;
      uri: string;
    }[];
  };
  objective?: {
    overview?: string;
    startDate?: string;
    intention?: "active" | "casual" | "passive";
    willingToRelocate?: boolean;
    willingToTravel?: boolean;
    roles?: string[];
    workModes?: WorkMode[];
    employmentTypes?: EmploymentType[];
  };
  experiences?: Experience[];
  recommendations?: Recommendation[];
}

export const resume: Resume = {
  contact: {
    fullName: "Aran Clary",
    casualName: "Aran",
    pronouns: "He/Him",
    location: "Portland, OR, US",
    emailAddress: "bluefeet@gmail.com",
  },
  profile: {
    headline: "Principal Full-Stack Engineer",
    about:
      "Principal full-stack engineer with deep experience spanning product development, backend services, cloud infrastructure, and applied AI systems. Builds and improves software across the stack, leads complex technical initiatives, and partners closely with product and engineering teams to deliver reliable, high-impact products.",
    competencies: [
      {
        name: "Frontend Development",
        skills: [
          "TypeScript",
          "React",
          "Responsive Design",
          "Jest",
          "Vitest",
          "CSS",
          "Tailwind CSS",
          "Chakra UI",
          "HTML",
          "JavaScript",
          "Next.js",
          "Vite",
        ],
      },
      {
        name: "Backend Development",
        skills: [
          "Node.js",
          "REST APIs",
          "Git",
          "Linux",
          "Docker",
          "Nginx",
          "Perl",
          "Bash",
          "OpenAI Agents SDK",
          "Amazon Bedrock",
          "AWS Lambda",
        ],
      },
      {
        name: "Data Engineering",
        skills: [
          "MongoDB",
          "Memcached",
          "DynamoDB",
          "MySQL",
          "Redis",
          "PostgreSQL",
          "Embeddings",
        ],
      },
      {
        name: "Cloud and Platform",
        skills: [
          "Infrastructure as Code",
          "AWS CDK",
          "Terraform",
          "CI/CD",
          "Grafana",
          "ECR/ECS",
          "Kubernetes",
          "CloudFront",
          "Cloudflare",
          "GCP",
        ],
      },
      {
        name: "Leadership and Collaboration",
        skills: [
          "Collaboration",
          "Agile Delivery",
          "Mentoring",
          "Release Management",
          "Stakeholder Management",
          "Requirements Gathering",
          "Technical Writing",
          "Emotional Intelligence",
          "Active Listening",
        ],
      },
    ],
    languages: ["English"],
    resources: [
      {
        title: "LinkedIn",
        uri: "https://www.linkedin.com/in/bluefeet/",
      },
      {
        title: "GitHub",
        uri: "https://github.com/bluefeet",
      },
    ],
  },
  objective: {
    overview:
      "Collaboration, innovation, impactful results, teamwork, work-life balance, recognition.",
    intention: "passive",
    roles: [
      "Principal Full-Stack Engineer",
      "Staff Software Engineer",
      "Full-Stack Contractor",
      "Engineering Team Lead",
    ],
    willingToRelocate: false,
    willingToTravel: true,
    employmentTypes: ["full-time", "contract"],
    workModes: ["on-site", "hybrid", "remote"],
  },
  experiences: [
    {
      title: "Senior Software Engineer",
      employmentType: "full-time",
      companyName: "GoGuardian",
      workMode: "remote",
      startDate: "2024-09-11",
      summary:
        "Work as a full-stack engineer on teacher-facing products and internal AI systems, building frontend and backend functionality while contributing to applied AI initiatives around agent-based workflows, developer tooling, and model quality.",
      highlights: [
        "Developed features and improvements for a Google Slides add-on and PowerPoint add-in that enabled teachers to deliver interactive presentations to students.",
        "Regularly resolved accessibility issues identified through third-party audits, improving teacher-facing products and reinforcing familiarity with WCAG and accessibility best practices.",
        "Led a team of engineers building internal AI developer tools for agent workflows and output quality, improving reliability, reducing token usage and cost, and speeding up development time.",
        "Developed with the OpenAI Agents SDK and built custom agent skills for internal AI workflows and automation.",
        "Built a hackathon proof of concept for school districts that used Databricks to provide insights into student outcomes.",
      ],
      skills: [
        "TypeScript",
        "React",
        "Node.js",
        "OpenAI Agents SDK",
        "Agent Skills",
        "Agent-Based Systems",
        "Accessibility",
        "WCAG",
        "MongoDB",
        "GCP",
        "Google Workspace Add-ons",
        "Office Add-ins",
      ],
    },
    {
      title: "Full-Stack Engineering Contractor",
      employmentType: "contract",
      companyName: "ASU Learning Enterprise",
      workMode: "remote",
      startDate: "2023-05-27",
      endDate: "2024-09-10",
      summary:
        "Built the foundation of a new AI application designed to help prospective learners navigate education options. Worked closely with product and engineering teams to gather requirements, write technical documentation, establish engineering practices, build a data ingestion pipeline, develop the initial proof of concept, and mentor junior engineers.",
      skills: [
        "TypeScript",
        "AWS CDK",
        "Amazon Bedrock",
        "Figma",
        "Agile",
        "Vue/Nuxt",
        "ECS/ECR",
        "Embeddings",
        "MongoDB Atlas",
        "ALB",
        "CloudFront",
        "RAG",
      ],
    },
    {
      title: "Security Engineering Contractor",
      employmentType: "contract",
      companyName: "GoGuardian",
      workMode: "remote",
      startDate: "2023-12-06",
      endDate: "2024-03-22",
      summary:
        "Joined GoGuardian on a short-term contract to help the company prepare for a critical security audit. Contributed immediately to high-priority work that helped the team meet audit requirements on a tight timeline.",
      skills: [
        "Node.js",
        "Security Auditing",
        "GCP",
        "Babel",
        "Webpack",
        "Jest",
        "TypeScript",
        "Pug",
        "Flow",
        "Docker",
        "Git",
      ],
    },
    {
      title: "Principal Software Engineer",
      employmentType: "full-time",
      companyName: "ZipRecruiter",
      location: "Santa Monica, CA, US",
      workMode: "remote",
      startDate: "2014-02-24",
      endDate: "2023-05-31",
      summary:
        "Held a broad principal-level role spanning DevOps, cloud infrastructure, developer productivity, and product engineering. Improved release reliability, expanded engineering visibility, mentored junior engineers, wrote technical documentation and specifications, and helped drive the company's evolution from a monolithic codebase toward microservices while partnering closely with product teams on high-impact work.",
      highlights: [
        "Improved the codebase by replacing complex sections with simpler, more maintainable solutions that were better documented and had stronger test coverage.",
        "Created a development database replication system using filesystem snapshots and cross-region replication, enabling instant access to destructible production datasets.",
        "Introduced Grafana, continuous integration, Slack, reusable test data fixtures, and other tools that improved engineering visibility and productivity.",
        "Championed test coverage, documentation, and maintainable engineering practices across the organization.",
      ],
      skills: [
        "DevOps",
        "CI/CD",
        "Perl",
        "MySQL",
        "Linux",
        "AWS",
        "React",
        "TypeScript",
        "Kubernetes",
        "Docker",
        "Git",
        "Golang",
      ],
    },
    {
      title: "Principal Architect",
      employmentType: "full-time",
      companyName: "Rent.com",
      location: "Santa Monica, CA, US",
      workMode: "on-site",
      startDate: "2011-04-18",
      endDate: "2014-03-27",
      summary:
        "Worked across architecture, backend and frontend development, engineering management, hiring, release management, and DevOps ownership. Researched and integrated new technologies, built internal engineering infrastructure, mentored teammates, wrote documentation and tests, and contributed heavily to product and platform code.",
      highlights: [
        "Helped overhaul the renter-facing website, delivering a more modern experience with strong desktop and mobile performance through responsive design.",
        "Spearheaded the migration from Subversion to Git.",
        "Created a deployment dashboard that aggregated data from JIRA and Git, providing real-time visibility into blocked releases and pending changes.",
        "Established a dedicated DevOps team.",
        "Led the migration of the company's infrastructure to a new data and authorization platform after the company was acquired by a competitor.",
      ],
      skills: [
        "Team Manager",
        "Scrum Master",
        "Project Manager",
        "Release Manager",
        "Perl",
        "Git",
        "Oracle SQL",
        "JavaScript",
        "HTML",
        "CSS",
        "DevOps",
        "Technical Writing",
      ],
    },
    {
      title: "Software Engineer",
      employmentType: "full-time",
      companyName: "ValueClick",
      location: "Thousand Oaks, CA, US",
      workMode: "on-site",
      startDate: "2005-01",
      endDate: "2011-04-08",
      summary:
        "Grew into a highly impactful engineering role at a large ad network, contributing across application development, reporting infrastructure, team management, onboarding, and platform scale. Led important delivery efforts, partnered closely with the database team, and helped integrate newly acquired technology and engineering teams.",
      highlights: [
        "Led a year-long effort with a two-person team to overhaul the publisher administration portal.",
        "Developed a reporting data retrieval library that decoupled retrieval logic from data requirements, making data source changes easier to support.",
        "Managed a team of developers, conducted interviews, streamlined onboarding, and trained new hires.",
        "Helped integrate the software, systems, and developers of a newly acquired company into the organization.",
        "Collaborated closely with the database team to scale our infrastructure, enabling seamless management of billions of daily impressions and facilitating efficient generation of aggregate data views.",
        "Rewrote the monthly publisher payout process, ensuring resilience to failures and significantly reducing its runtime.",
      ],
      skills: [
        "Team Manager",
        "Perl",
        "JavaScript",
        "HTML",
        "CSS",
        "Oracle SQL",
      ],
    },
    {
      title: "Software Engineer",
      employmentType: "full-time",
      companyName: "Thinkstock",
      location: "Charlotte, NC, US",
      workMode: "on-site",
      startDate: "2003-04",
      endDate: "2004-12",
      summary:
        "Served as one of two developers responsible for custom-built servers storing terabytes of image and video assets. Managed OS and software updates, shipped website improvements, improved efficiency, and supported marketing and sales needs through product and operational work.",
      skills: ["Perl", "Mason", "JavaScript", "HTML", "CSS", "MySQL"],
    },
    {
      title: "Engineering Lead",
      employmentType: "full-time",
      companyName: "IDForce",
      location: "Charlotte, NC, US",
      workMode: "hybrid",
      startDate: "2001-05",
      endDate: "2002-03",
      summary:
        "Independently developed an online collaboration tool for a London-based startup with live whiteboards, chat, and file sharing. Worked directly with the design team in London and developed an AJAX-like interaction pattern before the term became common in the industry.",
      skills: ["Perl", "MySQL", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "Software Engineer and Sysadmin",
      employmentType: "freelance",
      companyName: "Silent Forest",
      location: "CA & NC, US",
      workMode: "hybrid",
      startDate: "1996-01",
      endDate: "2003-04",
      summary:
        "Delivered end-to-end web solutions for a wide range of domestic and international clients, owning projects from discovery and architecture through implementation and launch. Built software, managed systems, and translated client needs into practical technical solutions for small and mid-sized businesses.",
      skills: ["Perl", "MySQL", "JavaScript", "HTML", "CSS", "Linux", "GIS"],
    },
    {
      title: "Co-Founder",
      employmentType: "full-time",
      companyName: "MapCruzin",
      location: "Santa Cruz, CA, US",
      workMode: "on-site",
      startDate: "1994",
      endDate: "1996",
      summary:
        "Co-founded a company that built mapping software and web tools for government agencies and non-profit organizations. Led both backend and frontend development, supported contract work, and helped deliver software that improved transparency and public access to environmental information.",
      skills: ["GIS", "Visual Basic", "Perl", "HTML"],
    },
  ],
  recommendations: [
    {
      author: "Mike Rozek",
      relationship:
        "Mike and Aran both worked at Rent.com, ZipRecruiter, and GoGuardian in various roles",
      message:
        "It is difficult to overstate the impact that [Aran] has made at the two companies where I’ve been grateful to be his colleague. As a mentor, he has had the largest impact on my career journey of any engineer I’ve ever worked with.",
    },
    {
      author: "Alain Avakian",
      relationship: "Alain was the CTO of Rent.com and directly managed Aran",
      message:
        "I have worked with countless engineers, usually of very high caliber, but engineers of Aran's talents are far and few in between. I have had the privilege of working with Aran for almost three years now, and grew to rely on his instincts, and technical depth.\n\nAran is the kind of engineer who can build a startup from the ground up, efficiently, fast, with a good solid architecture and a keen sense of the big picture, and yet he is also able to deep dive and solve very elusive technical issues, or find good opportunities for optimization, often while reviewing others' code.\n\nAran has a very positive attitude, one that is calming and infectious, and a strong sense that he can accomplish anything. That, in turn, builds confidence in the team he is leading, motivating them while getting them excited about whatever project he is leading.\n\nIt has been a true pleasure watching Aran mentor other engineers, and come up with tools / ideas, completely of his own initiative to drive efficiency and better collaboration.\n\nAran will always be on my short-list of top engineers I would not hesitate to work with again.",
    },
    {
      author: "Eduardo Ariño de la Rubia",
      relationship:
        "Ed was a senior software engineer at Rent.com and directly reported to Aran",
      message:
        "Aran succeeded in making me feel welcome and productive as a new developer in his organization nearly instantly. He provided the perfect amount of guidance, support, and mentoring I needed to come up to speed quickly on a large codebase. He's a spectacular programmer, a thoughtful manager, a kind person, and an unbeatable addition to any team.",
    },
    {
      author: "Eric Feay",
      relationship:
        "Eric was the product manager for Aran's team at ValueClick",
      message:
        "Working with Aran was a complete joy. He maintained a high level of focus on both the quality of his code and the overall quality of the product he was delivering to our customers. I served as the product manager for Aran’s teams over numerous projects spanning almost four years. I was always amazed by his empathy and kindness on a personal level and the dedication to awesome work on a professional level. His heart and mind are always in the right place.\n\nIf there was a Perl Coders Hall of Fame, this man would get in on the first ballot. I would love the opportunity to work with Aran again. Any team that can count [Aran] as one of its members is truly made better for it.",
    },
  ],
};

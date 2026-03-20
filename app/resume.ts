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
      "Principal full-stack engineer with broad experience across product development, backend services, cloud infrastructure, and internal developer tooling. Known for shipping quickly without creating messes, reducing technical debt while delivering features, and contributing across both complex frontend experiences and the platforms that support them.",
    competencies: [
      {
        name: "Full-Stack Product Development",
        skills: [
          "TypeScript",
          "React",
          "Next.js",
          "Node.js",
          "REST APIs",
          "HTML",
          "CSS",
          "Tailwind CSS",
          "Responsive Design",
          "Google Workspace Add-ons",
          "Office Add-ins",
        ],
      },
      {
        name: "Applied AI and Data Systems",
        skills: [
          "OpenAI Agents SDK",
          "Amazon Bedrock",
          "Agent Workflows",
          "Agent Tooling",
          "RAG",
          "Embeddings",
          "MongoDB",
          "MongoDB Atlas",
          "Databricks",
        ],
      },
      {
        name: "Cloud, Infrastructure, and Developer Platform",
        skills: [
          "AWS",
          "AWS CDK",
          "Docker",
          "Kubernetes",
          "CI/CD",
          "Terraform",
          "ECS/ECR",
          "CloudFront",
          "GCP",
          "Linux",
          "Grafana",
        ],
      },
      {
        name: "Quality, Accessibility, and Engineering Practices",
        skills: [
          "Accessibility",
          "WCAG",
          "Automated Testing",
          "Jest",
          "Vitest",
          "Technical Documentation",
          "Release Management",
          "Maintainability",
          "Developer Productivity",
        ],
      },
      {
        name: "Technical Leadership and Cross-Functional Delivery",
        skills: [
          "Technical Leadership",
          "Mentoring",
          "System Architecture",
          "Requirements Gathering",
          "Stakeholder Partnership",
          "Team Leadership",
          "Agile Delivery",
        ],
      },
    ],
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
      "Hands-on product development, internal tooling, platform work, and thoughtful applied AI.",
    intention: "passive",
    roles: [
      "Principal Full-Stack Engineer",
      "Staff Software Engineer",
      "Principal Product Engineer",
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
        "Work as a full-stack engineer on teacher-facing products and internal AI systems, building complex frontend and backend functionality while improving developer workflows, model quality, and delivery confidence.",
      highlights: [
        "Built and improved teacher-facing presentation tooling across Google Slides and PowerPoint add-ins, shipping product work across both frontend and backend layers.",
        "Improved the capabilities of an AI-powered presentation generator while holding AI costs steady by moving to a less expensive model and tightening plan-first prompting, guardrails, and output guidance.",
        "Addressed accessibility issues identified in third-party audits, strengthening WCAG compliance in teacher-facing products.",
        "Led engineers working on internal AI developer tooling, improving agent workflow reliability, reducing token usage and cost, and shortening iteration time for engineers building with AI.",
        "Built with the OpenAI Agents SDK and created custom agent tooling that made internal workflows and automation more practical to adopt.",
      ],
      skills: [
        "TypeScript",
        "React",
        "Node.js",
        "OpenAI Agents SDK",
        "Agent Tooling",
        "Agent Workflows",
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
        "Built the foundation of a new AI application for prospective learners, helping define the product technically from the ground up while establishing engineering practices, delivery workflows, and the initial application architecture.",
      highlights: [
        "Built the initial proof of concept and core data ingestion pipeline for an AI-assisted product designed to help learners explore education options.",
        "Created a fully CI/CD-driven platform with unit testing and redeployable production infrastructure, giving the team strong disaster recovery and a reliable, low-friction path from pull request to deployment.",
        "Established a smooth developer workflow where engineers could commit, open a pull request, land to main, and deploy to an environment branch within minutes, with Slack updates providing deployment visibility.",
        "Worked closely with product and engineering partners to gather requirements, write technical documentation, and mentor junior engineers.",
      ],
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
        "Took on a short-term contract, alongside my primary client work, to help GoGuardian prepare for a critical security audit. Contributed immediately to high-priority work that helped the team meet audit requirements on a tight timeline.",
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
        "Held a broad principal-level role spanning product engineering, DevOps, cloud infrastructure, and developer productivity. Helped teams ship more reliably, reduced operational friction, improved engineering visibility, and contributed to the company's transition from a monolith toward more service-oriented systems.",
      highlights: [
        "Simplified difficult areas of the codebase with more maintainable implementations backed by stronger documentation and test coverage, reducing future engineering drag.",
        "Created a development database replication system using filesystem snapshots and cross-region replication, giving engineers fast access to destructible production-like datasets for safer testing and debugging.",
        "Introduced tools and practices including Grafana, continuous integration, Slack, and reusable test fixtures that improved engineering visibility and made day-to-day development smoother.",
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
        "Worked across system architecture, product engineering, release management, and DevOps ownership. Built internal engineering infrastructure, improved delivery visibility, mentored teammates, and contributed heavily to both product and platform code.",
      highlights: [
        "Helped overhaul the renter-facing website, delivering a more modern experience with strong desktop and mobile performance through responsive design.",
        "Spearheaded the migration from Subversion to Git.",
        "Created a deployment dashboard that aggregated data from JIRA and Git, providing real-time visibility into blocked releases and pending changes.",
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
        "Grew into a broad engineering role at a large ad network, contributing across application development, reporting infrastructure, team leadership, and platform scale. Led a two-person overhaul of the publisher administration portal, supported infrastructure handling billions of daily impressions, and improved the resilience and runtime of the monthly publisher payout process.",
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
        "One of two developers responsible for custom-built servers storing terabytes of image and video assets, contributing across product work, operations, and system maintenance.",
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
        "Built an online collaboration tool for a London-based startup with live whiteboards, chat, and file sharing, working directly with the design team and owning delivery end to end.",
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
        "Delivered end-to-end web solutions for a range of clients, owning projects from discovery and architecture through implementation, launch, and systems administration.",
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
        "Co-founded a company that built mapping software and web tools for government agencies and non-profit organizations, contributing across product development and client delivery.",
    },
  ],
  recommendations: [
    {
      author: "Mike Rozek",
      relationship:
        "Mike and Aran both worked at Rent.com, ZipRecruiter, and GoGuardian in various roles",
      message:
        "As a mentor, Aran has had an outsized impact on my career. He makes teams better through his technical judgment, steady collaboration, and willingness to invest in other engineers.",
    },
    {
      author: "Alain Avakian",
      relationship: "Alain was the CTO of Rent.com and directly managed Aran",
      message:
        "Aran combines strong instincts, technical depth, and a clear sense of the bigger picture. He can build from the ground up, dive deep on difficult problems, and raise the effectiveness of the people around him through mentoring and practical improvements.",
    },
    {
      author: "Eduardo Ariño de la Rubia",
      relationship:
        "Ed was a senior software engineer at Rent.com and directly reported to Aran",
      message:
        "Aran made me feel welcome and productive almost immediately. He provided exactly the right amount of guidance and mentoring to help me become effective quickly in a large codebase.",
    },
    {
      author: "Eric Feay",
      relationship:
        "Eric was the product manager for Aran's team at ValueClick",
      message:
        "Aran consistently cared about both code quality and product quality. He was thoughtful, reliable, and strongly invested in delivering solid work for customers and teammates alike.",
    },
  ],
};

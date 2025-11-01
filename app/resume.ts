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
    headline: "Senior Full-Stack Engineer",
    about:
      "I'm a seasoned full-stack software developer with over 30 years of hands-on experience. My track record includes managing data pipelines, crafting backend services, and delivering stunning UIs. I excel at leading teams and interfacing with product development.",
    competencies: [
      {
        name: "Frontend Development",
        skills: [
          "Typescript",
          "React",
          "Responsive Design",
          "Jest / Vitest",
          "CSS",
          "Tailwind",
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
          "REST",
          "Git",
          "Linux",
          "Docker",
          "nginx",
          "Perl",
          "Bash",
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
          "Vector embeddings",
        ],
      },
      {
        name: "Cloud Operations",
        skills: [
          "Infrastructure as Code",
          "AWS CDK",
          "Terraform",
          "CI/CD",
          "Grafana",
          "ECR/ECS",
          "Kubernetes",
          "Cloudflare",
        ],
      },
      {
        name: "Interpersonal",
        skills: [
          "Collaboration",
          "Agile Processes",
          "Mentoring",
          "Release Management",
          "Stakeholder Management",
          "Requirements Gathering",
          "Technical Writing",
          "Emotional Intelligence",
          "Active Listening",
        ],
      },
      {
        name: "Developing Passions",
        skills: ["Rust", "Lean Processes", "Game Design"],
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
      "Frontend Developer",
      "Principal Software Engineer",
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
        "Optimize LLM performance and cost, fix security issues, and develop frontend features. Making teachers happy one commit at a time.",
      skills: [
        "TypeScript",
        "MongoDB",
        "React",
        "OpenAI Structured Output",
        "Figma",
        "GCP",
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
        "Developed the foundation of a new AI application aimed at guiding potential learners on their educational future. Worked closely with product and engineering teams to gather requirements, created technical documentation and diagrams, implemented engineering best practices, constructed a data ingestion pipeline, developed the initial POC, and provided mentorship to junior developers.",
      skills: [
        "TypeScript",
        "AWS CDK",
        "Bedrock",
        "Figma",
        "Agile",
        "Vue/Nuxt",
        "ECS/ECR",
        "vector embeddings",
        "MongoDB Atlas",
        "ALB",
        "Cloudfront",
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
        "This was a short-term contract to assist this early education technology company with meeting a critical, and imminent, security audit. Within a day of starting I was doing impactful work and contributed greatly to the success of the audit.",
      skills: [
        "Node.js",
        "Security Auditing",
        "GCP",
        "Babel",
        "Webpack",
        "Jest",
        "Typescript",
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
        "I had a long and broad ranging career at ZipRecruiter, from DevOps and cloud infrastructure engineering to product development. Over the years I mentored junior engineers, was a release manager, wrote documentation and functional specifications, gathered requirements and communicated changes. I introduced automated builds, tooling to increase visibility into our systems, and helped the company migrate away from a monolithic code base to microservices.\n\nWhen I first joined ZipRecruiter, which was then a small startup, I promptly optimized the codebase and revamped processes to improve release reliability and production environment stability. In the first half of my tenure, my focus was on boosting developer productivity by introducing essential processes and tools that facilitated company growth.\n\nIn the latter half of my tenure, my role evolved to encompass active collaboration with product teams, engaging in an agile workflow that included sprints, retrospectives, and daily stand-up meetings. I worked closely with product managers and stakeholders to complete high-impact projects on strict deadlines.",
      highlights: [
        "Improved the codebase by replacing complicated sections of code with simpler, more straightforward solutions which were easier to maintain, more flexible, well documented, and had increased test coverage.",
        "Created a development database replication system using filesystem snapshots and cross-region replication, enabling instant access to destructible production datasets.",
        "Introduced Grafana, continuous integration, Slack, reusable test data fixtures, enumerable other tools.",
        "Actively advocated for test coverage, documentation, and high-quality code.",
      ],
      skills: [
        "DevOps",
        "CI/CD",
        "Perl",
        "MySQL",
        "Linux",
        "AWS",
        "React",
        "Typescript",
        "K8s",
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
        "At Rent.com I embraced a multitude of roles including Backend Developer, Architect, Manager, Scrum Master, DevOps Product Owner, Hiring Manager, Release Manager, and Frontend Developer.\n\nMy responsibilities at Rent.com were both diverse and dynamic. I actively engaged in the research and integration of new technologies, the construction of software infrastructure to facilitate efficient coding practices, and mentoring colleagues. I was adept at multitasking and dedicated to documentation, writing unit tests, crafting essential tools, and meticulously profiling and optimizing the site. Additionally, my contributions extended to writing a substantial amount of code.",
      highlights: [
        "Instrumental in the overhaul of the renter-facing website, ensuring a modern aesthetic and seamless performance on both desktop and mobile platforms through responsive design.",
        "Spearheaded the migration from Subversion to Git.",
        "Created an in-depth deployment dashboard which aggregated data from JIRA and Git, providing realtime visibility into issues holding up a deployment and all changes going into a deployment.",
        "Established a dedicated DevOps team.",
        "Lead the effort to migrate our entire infrastructure to a new data and authorization platform when the company was acquired by a competitor.",
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
        "At this ad network I embarked on a journey in an unfamiliar corporate environment. Fortunately, I had the guidance of a visionary engineering director who recognized my untapped potential. This invaluable mentorship paved the way for rapid growth as I seamlessly adapted my extensive coding expertise and freelancing background to this new setting. As time progressed, I emerged as one of the most impactful developers and effective managers within the organization.",
      highlights: [
        "Successfully spearheaded a year-long initiative, leading a compact team of two, including myself, focused on the comprehensive overhaul of our publisher administration portal.",
        "Developed a library for the retrieval of data for reporting, which decoupled the retrieval process from the data requirements, allowing for seamless modification of data sources without altering the code.",
        "Managed a team of developers, conducted interviews, streamlined onboarding, and trained new hires.",
        "Instrumental in seamlessly integrating the software, systems, and developers of a newly-acquired company into our ecosystem.",
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
        "At this stock photography company, I served as one of two developers responsible for managing custom built servers containing terabytes of videos and images. My responsibilities included handling OS and software updates, improving the website by adding features and enhancing efficiency, and assisting the marketing and sales teams in meeting their goals.",
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
        "I independently developed an online collaboration tool equipped with live whiteboards, chat, and file sharing features for a London-based startup. The development process involved multiple trips to London to collaborate and ideate with the design team. Notably, during the tool's development, I pioneered an AJAX-like technique, years before AJAX became a widely recognized term in the industry.",
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
        "Excelled in delivering end-to-end web solutions for a wide array of businesses both domestically and internationally. As a one-stop solution provider, I successfully navigated all stages of project life cycle, from conceptualization and architecture design to implementation and final delivery. I distinguished myself through the creation of high-quality software and an ability to uncover and fulfill unanticipated needs of my clients, thereby providing them a strong online presence. My comprehensive suite of services, backed by my adeptness in multiple technologies, positioned numerous small and medium sized businesses for success in the digital age.",
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
        "Built software solutions primarily aimed at providing crucial mapping services for government entities and non-profit organizations. I spearheaded both backend and frontend development, delivering websites that facilitated greater transparency and engagement within the environmental activism sphere. Additionally, I played a key role in contract negotiation and drafting. While the company was heavily involved in data collection and processing, my primary focus was on creating effective software tools and ensuring a seamless user experience, thus empowering communities with accessible information.",
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
    {
      author: "Demian L'Ecuyer",
      relationship:
        "Demian was a senior software engineer at ValueClick and worked directly with Aran",
      message:
        "In the five years that Aran and I worked together, he has consistently proven himself as an awesome resource for complex issues. His ability to get to the heart of an issue quickly and offer valuable insight and opinions has helped reduce development time on many projects. This combined with his willingness and patience to educate and grow with his peers makes him a valuable addition on any project he joins.",
    },
    {
      author: "Eric Schultz",
      relationship:
        "Eric was a senior software engineer at ValueClick and reported directly to Aran",
      message:
        "Aran is a rare breed in the world of technical managers. He is extremely technically competent, and could easily do the work of any of his reports. His highly commendable development/architecture skills are nicely complemented by his patient, affable, and approachable demeanor. This combination of technical adeptness and people-oriented personality is what is difficult to find in this profession, and what makes working for Aran a true pleasure.\n\nI consider myself fortunate to have worked for Aran. He taught me much about Perl specifically and Software Development in general. More importantly, though, the example of his leadership helped me to better do my job as an applicaton developer, and later as a project lead. I would not hesitate to recommend Aran for any position having to do with Perl - manager, architect or otherwise; and I would gladly welcome the opportunity to work with him in the future.",
    },
    {
      author: "Paul Vining",
      relationship:
        "Paul was a software engineer at ValueClick and reported directly to Aran",
      message:
        "Aran is a very knowledgeable technical manager. He keeps track of where everyone on the team is at and offers help when needed. He has a varied background which comes in handy when developing solutions.",
    },
    {
      author: "Diona Kidd",
      relationship:
        "Diona was a lead developer at Thinkstock and was Aran's manager",
      message:
        "Aran is smart, considerate, productive and a quick study. He was a pleasure to work with. He was very supportive of both his department members, marketing, distributions and other departments while employed at Thinkstock. Highly recommended.",
    },
    {
      author: "Shawn Faison",
      relationship: "Shawn worked for a client of Aran's",
      message:
        "I have never met an individual as talented as [Aran]. Working with him professionally over the years I have to say I admire his natural ability combined with his work ethic. Aran knows what he is talking about and knows how to communicate it. He possesses over ten years of experience as a web developer and is one of the best in the world.",
    },
  ],
};

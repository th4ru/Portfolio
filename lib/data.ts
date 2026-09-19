export const profile = {
  name: "Tharushi Noragalla",
  monogram: "TN",
  role: "Full-Stack Developer",
  roles: [
    "Software Engineer",
    "Full-Stack Developer",
    "AI Enthusiast",
    "Cloud Enthusiast",
  ],
  tagline:
    "Software engineer passionate about building scalable full-stack applications, with a growing focus on AI and cloud technologies — turning ideas into reliable, modern products.",
  bio: [
    "I'm a passionate full-stack developer with a focus on building clean, performant and user-friendly products. I love turning complex problems into simple, elegant solutions.",
    "When I'm not coding, you'll find me mentoring students, contributing to open source, or exploring new technologies.",
  ],
  email: "tharushidilhara881@gmail.com",
  phone: "0711705312",
  location: "Ratnapura, Sri Lanka",
  resumeUrl: "/Resume.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/th4ru", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com/in/tharushi-dilhara/", icon: "linkedin" },
    { label: "Email", href: "mailto:tharushidilhara881@gmail.com", icon: "mail" },
  ],
};

export const about = {
  heading: "About Me",
  eyebrow: "Who I am",
  paragraphs: [
    "I'm a final-year Computer Science undergraduate at the University of Jaffna, expecting to graduate in 2027. I'm passionate about software engineering, full-stack development, cloud computing and AI — I love turning ideas into real, working products.",
    "I enjoy building clean, scalable web applications end to end, from thoughtful frontends to reliable backends, while continuously exploring cloud platforms and AI/ML tools to solve meaningful problems.",
    "I'm currently seeking new opportunities — internships, graduate roles and collaborations where I can learn fast, contribute meaningfully and grow as an engineer.",
  ],
  highlights: [
    { icon: "wrench", title: "Problem Solver", text: "Breaking complex problems into simple, elegant solutions." },
    { icon: "users", title: "Team Player", text: "Collaborating across teams and communicating ideas clearly." },
    { icon: "book", title: "Continuous Learner", text: "Always exploring new tools, cloud platforms and AI technologies." },
  ],
};

export const experience = {
  eyebrow: "Career",
  heading: "Experience",
  company: "Guardians Solutions (Pvt) Ltd",
  role: "Software Engineering Intern",
  period: "June 2026 — Present",
  duration: "6-month internship",
  location: "Sri Lanka",
  description: [
    "Working as a Software Engineering Intern, contributing to real-world development — building features, fixing issues and collaborating with the engineering team.",
    "Part of a 6-month internship programme focused on full-stack development, gaining hands-on experience with production software.",
  ],
};

export const techStack = {
  heading: "Tech Stack",
  eyebrow: "My toolkit",
  frontend: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  backend: ["Node.js", "Express", "Python", "FastAPI", "REST APIs"],
  databases: ["PostgreSQL", "MongoDB", "MySQL", "SQLite"],
  tools: ["Git & GitHub",  "AWS", "CI/CD", "Figma"],
};

export const projects = {
  heading: "Projects",
  eyebrow: "Selected work",
  items: [
    {
      name: "E-Commerce Platform for Optical Shop",
      description:
        "Developed an optical shop management system for staff to manage customers, medical history, payment details, and role-based access.Implemented administrative features for managing staff and viewing daily reports.",
      stack: ["React", "Node.js", "PostgreSQL"],
      demo: "#",
      code: "https://github.com/well-vision",
      featured: false,
    },
    {
      name: "ShopHub — Online Shopping Platform",
      description:
        "modern online shopping platform where users can browse, purchase products securely. It provides authentication, multiple payment options, order tracking, refunds, and a comprehensive admin panel.",
      stack: ["React", "Node.js","Express.js", "SQLite"],
      demo: "#",
      code: "https://github.com/th4ru/ShopHub.git",
      featured: false,
    },
    {
      name: "Examination Claim System ",
      description:
        "Developed a web-based Examination Claim System for the Computer Science Department to streamline the submission and processing of examination-related claims.",
      stack: ["PHP", "HTML", "CSS","MySQL"],
      demo: "#",
      code: "https://github.com/Varsha-Jeyaraj/ExaminationClaimSystem.git",
      featured: false,
    },
    {
      name: "Ongoing Research Project (Individual)",
      description:
        "Conducting research on IoT-based health monitoring and anomaly detection, leveraging real-time physiological data to identify and predict abnormal health patterns.",
      stack: ["IoT","AI/ML","Python"],
      //demo: "#",
      //code: "#",
      featured: false,
    },
  ],
};

export const volunteering = {
  heading: "Volunteering",
  eyebrow: "Giving back",
  items: [
    {
      org: "IEEE Student Branch, University of Jaffna",
      role: "Secretary",
      period: "2025",
      description:
        "Managing documentation, member coordination and communication for IEEE Student Branch activities at the University of Jaffna.",
    },
    {
      org: "IEEE Computer Society Student Chapter",
      role: "Treasurer",
      period: "2025",
      description:
        "Handling financial records, budgeting and fund management for the Computer Society Student Chapter within the IEEE Student Branch.",
    },
    {
      org: "GirlScript Summer of Code",
      role: "Open Source Contributor",
      period: "2026",
      description:
        "Contributing to open source projects, working with maintainers and learning from the global developer community during GSSoC 2026.",
    },
  ],
};

export const certificates = {
  heading: "Certificates",
  eyebrow: "Online credentials",
  // How to edit:
  // 1. Drop your certificate image or PDF into the "public/certificates/" folder.
  // 2. Set "media" to that file path (spaces become %20), e.g. "/certificates/My%20Cert.pdf"
  //    so clicking the card shows it in a popup.
  // 3. Keep "credentialUrl" as the verifiable link on the issuer's site.
  items: [
    {
      title: "AWS Cloud Essentials",
      issuer: "Amazon Web Services",
      year: "2026",
      credentialUrl: "#",
      media: "/certificates/AWS%20Cloud%20Essentials.pdf",
    },
    {
      title: "Career Essentials in Generative AI",
      issuer: "Microsoft & LinkedIn",
      year: "2026",
      credentialUrl: "#",
      media: "/certificates/Career%20Essentials%20in%20Generative%20AI.pdf",
    },
    {
      title: "Career Skills in Software Development",
      issuer: "Microsoft & LinkedIn",
      year: "2026",
      credentialUrl: "#",
      media: "/certificates/Career%20skills%20in%20Software%20Development.pdf",
    },
    {
      title: "Python Programming Language",
      issuer: "Udemy",
      year: "2025",
      credentialUrl: "#",
      media: "/certificates/Python%20Programming%20Language.pdf",
    },
  ],
};

export const contact = {
  heading: "Contact Me",
  eyebrow: "Get in touch",
  intro:
    "Have a project in mind, a job opportunity, or just want to say hi? My inbox is always open — I'll get back to you as soon as I can.",
};
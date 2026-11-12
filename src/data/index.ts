// All site content lives here. Edit this file to update the site.
// Rule: publish only what you can prove (resume, repo, certificate, report).

export const profile = {
  name: "Saud Nadaf",
  title: "Cybersecurity student building security tools",
  intro:
    "I'm a CSE (Cybersecurity) student at Darbhanga College of Engineering. I build forensics, network-analysis and secure-upload projects, and I practise web and API security with a documented, permission-based website assessment.",
  location: "Darbhanga, Bihar",
  email: "saudnadaf854325@gmail.com",
  github: "https://github.com/saudnadaf09",
  linkedin: "https://www.linkedin.com/in/saud-nadaf-41b015343/",
  resume: "/resume/Saud_Nadaf_Resume.pdf",
  // Editable availability line. Update or set to "" when it changes.
  availability: "Looking for a hands-on cybersecurity internship",
  // Phone is intentionally not published. Add here only if you decide to.
  phone: "",
  focus: ["VAPT / WAPT", "Web & API security", "Network pentesting", "SOC operations", "Digital forensics"],
  about: [
    "I'm doing my B.Tech in Computer Science & Engineering (Cybersecurity) at Darbhanga College of Engineering, joined through lateral entry after a diploma in CSE at Government Polytechnic West Champaran.",
    "I learn by building: a forensics platform with SHA-256 evidence verification, a Flask-based SOC dashboard on top of Scapy, a steganography utility from my C-DAC training. I'm interested in VAPT/WAPT, web and API security, Wi-Fi and network testing, SOC work and digital forensics.",
  ],
};

export const skills = [
  { group: "Security", items: ["VAPT/WAPT", "Vulnerability Assessment", "Web & Application Security", "API Security", "Ethical Hacking Concepts", "OWASP Top 10", "Responsible Disclosure"] },
  { group: "Security tools", items: ["Burp Suite", "OWASP ZAP", "Nmap", "Wireshark", "Nessus", "Metasploit", "Scapy", "Kali Linux"] },
  { group: "Programming & web", items: ["Python", "C/C++", "Java", "JavaScript", "TypeScript", "PHP", "HTML5", "CSS3", "Bash", "REST APIs"] },
  { group: "Systems & network", items: ["Linux", "Windows Server", "TCP/IP", "DNS", "HTTP/HTTPS", "Packet analysis", "VMware"] },
  { group: "Development & data", items: ["Next.js", "React", "Node.js", "Flask", "PostgreSQL", "Drizzle ORM", "MongoDB", "MySQL", "Git/GitHub"] },
];

export type Status = "Concept" | "In Progress" | "Completed";
export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  status: Status; // CONFIRM each status before publishing
  categories: string[];
  technologies: string[];
  features: string[]; // only features you can show working
  contribution?: string; // fill in your exact work, separate from team work
  image?: string; // e.g. "/projects/sectrace.png" (real screenshot)
  imageAlt?: string;
  repositoryUrl?: string; // add only when real
  demoUrl?: string; // add only when real
  limitations?: string;
  updated?: string;
};

export const projectCategories = ["All", "Forensics", "Network & SOC", "Secure systems", "Web apps", "Concept"];

export const projects: Project[] = [
  {
    slug: "vaultx",
    image: "/projects/vaultx.svg",
    imageAlt: "Illustration: a shield with a lock verifying access requests to files",
    title: "VAULTX",
    subtitle: "Zero-Trust Secure File Sharing & Access Management",
    shortDescription: "Security-focused file sharing with authentication and access-control design.",
    fullDescription:
      "A file-sharing project built around zero-trust ideas: every request is authenticated and every file access is checked against an access-control policy.",
    status: "In Progress",
    categories: ["Secure systems", "Web apps"],
    technologies: ["Node.js", "MongoDB"],
    features: ["Authentication", "Access-control design"],
  },
  {
    slug: "trace",
    image: "/projects/trace.svg",
    imageAlt: "Illustration: a forensic event timeline with a magnifier on one event",
    title: "Trace",
    subtitle: "Digital Forensics & Evidence Analysis Platform",
    shortDescription: "Web platform for artifact and log analysis, event correlation and chain-of-custody tracking.",
    fullDescription:
      "A web-based forensics platform for examining digital artifacts and logs, correlating events and keeping a chain-of-custody record for evidence.",
    status: "In Progress",
    categories: ["Forensics", "Web apps"],
    technologies: ["Web platform", "Log analysis"],
    features: ["Digital artifact and log analysis", "Event correlation", "Chain-of-custody tracking"],
  },
  {
    slug: "sectrace",
    image: "/projects/sectrace.svg",
    imageAlt: "Illustration: evidence, SHA-256 hash and report linked in a chain",
    title: "SecTrace",
    subtitle: "Unified Digital Forensics Automation & Scripting Framework",
    shortDescription: "Case management, evidence ingestion, SHA-256 verification, timelines and PDF reports.",
    fullDescription:
      "A forensics workspace that covers the investigation flow: open a case, ingest evidence, verify it with SHA-256, run local rule-based analysis, record findings and generate PDF reports.",
    status: "In Progress",
    categories: ["Forensics", "Web apps"],
    technologies: ["Next.js", "React", "PostgreSQL", "Drizzle ORM"],
    features: ["Case management", "Evidence ingestion", "SHA-256 verification", "Local rule-based analysis", "Findings and audit history", "Timelines", "PDF reports"],
    contribution: "Project leadership. Add your exact tasks here, separate from team work.",
  },
  {
    slug: "netpulse",
    image: "/projects/netpulse.svg",
    imageAlt: "Illustration: network traffic chart with an alert spike",
    title: "NetPulse v1.0",
    subtitle: "Network Packet Analysis & SOC Dashboard",
    shortDescription: "Flask SOC dashboard with Scapy packet analysis, traffic visualization and heuristic alerts.",
    fullDescription:
      "A SOC-style dashboard that analyses network packets with Scapy, visualizes traffic, raises heuristic alerts and logs threats.",
    status: "Completed",
    categories: ["Network & SOC"],
    technologies: ["Python", "Flask", "Scapy"],
    features: ["Scapy-based packet analysis", "Network-traffic visualization", "Heuristic alerts", "Threat logging"],
  },
  {
    slug: "careerguard",
    image: "/projects/careerguard.svg",
    imageAlt: "Illustration: a resume document leading along a career roadmap",
    title: "CareerGuard",
    subtitle: "Career Guidance Platform",
    shortDescription: "Flask app that parses resume PDFs and builds career roadmaps with secure uploads.",
    fullDescription:
      "A career guidance application that reads resume PDFs with pdfplumber, suggests career roadmaps and handles file uploads securely.",
    status: "Completed",
    categories: ["Web apps", "Secure systems"],
    technologies: ["Python", "Flask", "pdfplumber"],
    features: ["Resume PDF parsing", "Career roadmaps", "Secure file-upload handling"],
  },
  {
    slug: "lsb-steganography",
    image: "/projects/lsb-steganography.svg",
    imageAlt: "Illustration: a grid of pixels with highlighted least significant bits",
    title: "LSB Steganography Utility",
    subtitle: "Hide and extract data in media files",
    shortDescription: "Flask utility that hides and extracts data using Least Significant Bit encoding.",
    fullDescription:
      "A utility that hides data inside multimedia files and extracts it again using the Least Significant Bit method. Developed during C-DAC training.",
    status: "Completed",
    categories: ["Secure systems"],
    technologies: ["Python", "Flask"],
    features: ["Hide data in media files", "Extract hidden data (LSB method)"],
  },
  {
    slug: "engigrid",
    image: "/projects/engigrid.svg",
    imageAlt: "Illustration: a concept map of connected local service providers",
    title: "EngiGrid",
    subtitle: "Local Service Provider Platform",
    shortDescription: "Concept for connecting users with local service providers.",
    fullDescription:
      "A concept-stage platform idea for connecting people with local service providers. It is not a deployed product.",
    status: "Concept",
    categories: ["Concept"],
    technologies: ["Concept stage"],
    features: ["Planned: connect users with local service providers"],
  },
];

export const experience = [
  { role: "Cybersecurity & Ethical Hacking Training", org: "C-DAC Patna", date: "Jun 2025", type: "Training", detail: "Vulnerability assessment, VAPT concepts, Wireshark packet analysis, Nmap scanning and OWASP Top 10." },
  { role: "Machine Learning & Applied AI Intern", org: "AICTE / IBM SkillsBuild, BharatCares", date: "2026", type: "Internship", detail: "" },
  { role: "Placement Coordinator", org: "Government Polytechnic West Champaran", date: "2025 to 2026", type: "Role", detail: "" },
  { role: "IoT Intern", org: "Scortek India Pvt. Ltd.", date: "Oct 2024", type: "Internship", detail: "" },
  { role: "Specialized cybersecurity internship opportunity", org: "Amroha Police", date: "", type: "Selected", detail: "Selected for the opportunity. Not listed as a completed internship." },
];

export const education = [
  { degree: "B.Tech, Computer Science & Engineering (Cybersecurity)", school: "Darbhanga College of Engineering", date: "2026 to present", note: "Lateral entry" },
  { degree: "Diploma, Computer Science & Engineering", school: "Government Polytechnic West Champaran", date: "2023 to 2026", note: "CGPA 8.2" },
];

export const certifications = [
  { issuer: "ASD Academy", items: ["WAPT (issued 15 Oct 2026, valid to 15 Oct 2027)", "API Security", "Networking", "Ethical Hacking", "Wi-Fi Pentesting"] },
  { issuer: "Cisco Networking Academy", items: ["Ethical Hacker", "Cybersecurity Essentials"] },
  { issuer: "C-DAC", items: ["Cybersecurity & Ethical Hacking"] },
  { issuer: "Red Team Leaders", items: ["CTIGA", "Foundation of Log Analysis for Cyber Defense"] },
  { issuer: "IBM SkillsBuild", items: ["Artificial Intelligence Fundamentals", "Generative AI in Action"] },
];

export const achievements = [
  { title: "Website security assessment, Government Polytechnic West Champaran", detail: "Prepared a technical report on observed issues: access-control gaps, exposed information and configuration, cookie and security-header weaknesses, CSRF concerns and outdated JavaScript libraries, with remediation recommendations. Done with permission and within the agreed scope. Only a sanitized summary is shown here." },
  { title: "Prompt-injection report, Google Bug Hunters", detail: "Report submitted in July 2026." },
  { title: "2nd place, Pro-to-Pitch, Techverse 26", detail: "DCE Darbhanga." },
  { title: "Participant, HackDefence Summit 2026", detail: "Delhi." },
  { title: "Research paper", detail: "Forensic analysis of large-scale data exfiltration in social media ecosystems (2025 to 2026)." },
];

// From your blueprint; confirm details before publishing.
export const leadership = [
  { title: "Team RootSTART", detail: "Team involvement." },
  { title: "SecTrace", detail: "Project leadership." },
  { title: "AWS Student Builder Group, DCE", detail: "Student community role." },
  { title: "Placement Coordinator", detail: "Government Polytechnic West Champaran, 2025 to 2026." },
];

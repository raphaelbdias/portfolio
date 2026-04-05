export type ExperienceItem = {
  role: string;
  organization: string;
  location: string;
  period: string;
  impact: string[];
};

export type ProjectItem = {
  slug: string;
  title: string;
  context: string;
  problem: string;
  approach: string;
  tools: string[];
  outcome: string;
  href?: string;
};

export type SkillGroup = {
  name: string;
  items: string[];
};

export type ServiceItem = {
  slug: string;
  title: string;
  summary: string;
  scope: string[];
  deliverables: string[];
};

export type ServiceTier = {
  slug: string;
  name: string;
  price: string;
  focus: string;
  includes: string[];
  bestFor: string;
};

export type HighlightItem = {
  title: string;
  detail: string;
};

export const profile = {
  name: "Raphael Bonifacio Dias",
  role: "Decision Support Analyst II",
  location: "Sudbury, Ontario",
  email: "diasraphael31@gmail.com",
  linkedin: "https://www.linkedin.com/in/disaraphael/",
  github: "https://github.com/raphaelbdias",
  resumeHref: "/Raphael-B.-Dias-Resume-April-2026.docx",
  heroStatement:
    "Decision Support Analyst focused on turning complex data data into clear, actionable insight.",
  heroSubtext:
    "I work across SQL, Power BI, and SSRS reporting to support evidence-based decisions in healthcare operations and funding strategy.",
  about:
    "My background combines research training, market and social data analysis, and formal business analytics education. That foundation now supports applied healthcare decision support work where data quality, reporting reliability, and clear communication drive operational and strategic outcomes.",
};

export const highlights: HighlightItem[] = [
  {
    title: "Healthcare Decision Support",
    detail:
      "Built and maintained reporting products used for organizational planning and Ministry-facing performance communication.",
  },
  {
    title: "Reporting Efficiency",
    detail:
      "Reduced reporting timelines in academic and healthcare settings through query optimization and workflow redesign.",
  },
  {
    title: "Applied Problem Solving",
    detail:
      "Delivered practical analytics work across competitions, institutional projects, and operational reporting contexts.",
  },
];

export const serviceTiers: ServiceTier[] = [
  {
    slug: "base-reporting",
    name: "Reporting Starter",
    price: "CAD 500",
    focus:
      "A focused reporting package to answer one clear business question with clean, trusted metrics.",
    includes: [
      "Up to 3 metrics",
      "1 dashboard or report view",
      "Metric definitions and data validation notes",
    ],
    bestFor:
      "Teams that need a fast, low-risk reporting baseline before expanding scope.",
  },
  {
    slug: "growth-analytics",
    name: "Growth Reporting",
    price: "From CAD 1,200",
    focus:
      "A broader reporting setup designed to improve recurring visibility across core operational or business performance areas.",
    includes: [
      "Up to 8 metrics",
      "Up to 3 dashboard or report views",
      "Refresh workflow setup and stakeholder walkthrough",
    ],
    bestFor:
      "Teams that need repeatable weekly or monthly reporting to support cross-functional decisions.",
  },
  {
    slug: "decision-intelligence",
    name: "Decision Intelligence",
    price: "From CAD 2,500",
    focus:
      "A higher-touch package combining KPI architecture, BI delivery, and implementation guidance for stronger decision support.",
    includes: [
      "Custom metric architecture and KPI framework",
      "BI reporting plus a lightweight app or software component",
      "Research brief with recommendations and implementation plan",
    ],
    bestFor:
      "Teams that need structured analytics support beyond dashboards alone.",
  },
];

// Update this list as responsibilities and impact evolve.
export const experiences: ExperienceItem[] = [
  {
    role: "Decision Support Analyst II",
    organization: "Health Sciences North / Horizon Sante-Nord",
    location: "Sudbury, ON",
    period: "Jul 2025 - Present",
    impact: [
      "Manage quality assurance, data integration, and KPI development using SQL, Power BI, and SSRS paginated reporting.",
      "Extract and analyzed complex clinical and operational datasets to improve reporting reliability and process efficiency.",
      "Provide analytical guidance for Health System Funding Reform workstreams and aligned indicators with strategy.",
    ],
  },
  {
    role: "Decision Support Analyst I",
    organization: "Health Sciences North / Horizon Sante-Nord",
    location: "Sudbury, ON",
    period: "Jul 2024 - Jul 2025",
    impact: [
      "Analyzed and presented data to support strategic planning and evidence-based decision-making across departments.",
      "Supported data integrity improvements and recurring reporting needs for organizational and Ministry stakeholders.",
    ],
  },
  {
    role: "Student Intern - Planning and Institutional Research",
    organization: "Cambrian College",
    location: "Sudbury, ON",
    period: "Nov 2023 - Apr 2025",
    impact: [
      "Cut report generation timelines from months to approximately one week by optimizing algorithms and data models.",
      "Developed Flask-based reports and Power BI dashboards used in program evaluation by institutional stakeholders.",
    ],
  },
  {
    role: "Market Research Support Executive",
    organization: "iDeas Unlimited",
    location: "Remote",
    period: "May 2021 - Jun 2022",
    impact: [
      "Led NLP and social media analytics activities to extract qualitative insights and trend signals.",
      "Synthesized interview and survey outputs into concise market and product-positioning recommendations.",
    ],
  },
];

// Update project entries to reflect your strongest, most recent work.
export const projects: ProjectItem[] = [
  {
    slug: "healthcare-performance-reporting",
    title: "Healthcare Performance Reporting Framework",
    context: "Hospital decision support environment",
    problem:
      "Operational and funding decisions relied on fragmented metrics with inconsistent refresh and validation.",
    approach:
      "Designed structured reporting layers, aligned metric definitions, and implemented QA-driven refresh routines for recurring dashboards and reports.",
    tools: ["SQL", "Power BI", "SSRS", "Data Validation"],
    outcome:
      "Delivered a stable decision-support reporting cadence and improved trust in recurring performance metrics.",
  },
  {
    slug: "blastcaptain-analytics",
    title: "BlastCaptain Analytics Challenge",
    context: "Applied analytics competition",
    problem:
      "Teams needed a practical way to extract measurable blast insights from field video sources.",
    approach:
      "Built a Python/OpenCV pipeline to detect and summarize key blast-event observations for analysis.",
    tools: ["Python", "OpenCV", "Data Processing", "Presentation"],
    outcome:
      "Secured 3rd place by delivering a concise analytics pipeline and communicating outcomes clearly.",
  },
  {
    slug: "transport-management-market-analysis",
    title: "Transportation Management Systems Market Analysis",
    context: "Independent research project",
    problem:
      "Stakeholders needed a structured view of TMS trends, adoption drivers, and vendor landscape signals.",
    approach:
      "Combined market research synthesis and comparative analysis into a decision-oriented report format.",
    tools: ["Research", "Data Analysis", "Reporting", "Visualization"],
    outcome:
      "Produced an actionable summary used to support technology and strategy discussions.",
    href: "/TMS US Report v6.pdf",
  },
  {
    slug: "climate-facility-risk",
    title: "Climate Risk and Facility Maintenance Dashboard",
    context: "Applied academic project",
    problem:
      "Facility planning teams lacked a simple, data-backed view of climate-related maintenance risk.",
    approach:
      "Developed an interactive dashboard combining forecast and facility context to guide maintenance prioritization.",
    tools: ["Power BI", "Python", "Predictive Analytics", "Data Modeling"],
    outcome:
      "Demonstrated a practical framework for translating environmental data into maintenance action.",
  },
];

// Keep categories stable; swap individual tools as your stack changes.
export const skillGroups: SkillGroup[] = [
  {
    name: "Data Analysis",
    items: ["SQL", "Python", "Pandas", "Statistical Analysis"],
  },
  {
    name: "BI & Reporting",
    items: ["Power BI", "SSRS", "KPI Design", "Operational Reporting"],
  },
  {
    name: "Databases",
    items: ["SQL Server", "PostgreSQL", "Data Modeling"],
  },
  {
    name: "Visualization",
    items: ["Power BI", "Tableau", "Data Storytelling"],
  },
  {
    name: "Development & Automation",
    items: ["Git", "Streamlit", "Flask", "Workflow Automation"],
  },
];

export const education = [
  {
    title: "Business Analytics - Graduate Certificate",
    institution: "Cambrian College",
    detail:
      "Applied analytics, BI reporting, and business problem framing for real-world operational settings.",
  },
  {
    title: "Project Management - Graduate Certificate",
    institution: "Cambrian College",
    detail:
      "Planning, execution, and stakeholder communication practices that complement analytics delivery.",
  },
  {
    title: "Post Graduate Diploma in Data Science",
    institution: "International Institute of Information Technology",
    detail:
      "Core data science methods including machine learning, data preparation, and analytical modeling.",
  },
];

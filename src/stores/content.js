const content = {
  profileSection: {
    name: "Robert Todar",
    title: "Software Developer",
  },
  aboutSection: {
    title: "About",
    content:
      `An innovative, teachable, problem-solving software developer with over 5 years of experience. Have developed a wide variety of applications and resources including full-stack web applications, automation and analysis using VBA and Python, SQL, and NoSQL. Trained in HTML5, CSS3, JavaScript ES6, and highly specialized in React and Svelte frontend frameworks.`,
    contentArchive:
      `Have always enjoyed learning and having the ability to build new things from the ground up. Previously pursued that desire through construction; however, in 2015, I began to learn how to program and found it to fulfill those desires to an even greater level.

    The first language learned was VBA and has been the primary language used in my career over the last five years, along with a a great deal of SQL. But where I have found the most enjoyment has been learning and practicing web development for the last three years.`,
  },
  connectSection: {
    title: "Connect",
    location: "Phoenix, Arizona",
    phoneNumber: "602 - 935 - 5076",
    email: "robert@roberttodar.com",
    website: "www.roberttodar.com",
  },
  skillsSection: {
    title: "Software Skills",
    skills: [
      "JavaScript ES6+",
      "React.js",
      "Svelte.js",
      "Rollup.js",
      "Jest.js",
      "HTML5",
      "CSS3",
      "Github",
      "Git",
      "npm",
      "Firebase",
      "SQL",
      "RPA",
      "VBA",
      "Python",
    ],
  },
  workExperience: {
    title: "Work Experience",
    jobs: [
      {
        title: "Business Analyst",
        company: "Albertsons Companies",
        timeframe: "2015 - Present",
        note: "Summary is'nt working with React PDF....",
        summary: `
        • Began as an auditor in allowance billing.
        • Recognized for development of critical tools and queries and was promoted to Business Analyst responsible for:
            º Systems analysis - exploring company systems and infrastructure to uncover inefficiencies. My analyses and application    development have helped identified and reduced over 46,000 labor hours annually.
            º Process improvement - building appropriate tools and alternative workflows to reduce waste. I have personally helped recover the company over $20 million in Audit findings since I began in December 2015.
            º Overhaul - when it makes sense for the business, I interview primary stakeholders, conceptualize the primary goal and re-envision the roadmap to accomplishing the task. As an example, I’ve developed, tested, deployed, and continued to track analytics to gain insights on vendor cost allowances. This project alone has saved the company over 70,000 labor hours and has helped increased audit findings in this area by more than 60%.
            º Integration - recently, I was tasked as the lead of systems integration for moving all our financial data and workflow from a legacy Lawson system into the Oracle cloud environment.`,
      },
    ],
  },
};

export const useContent = () => content;

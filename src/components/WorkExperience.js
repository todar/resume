import React from "react";
import WorkExperienceJob from "./WorkExperienceJob";
import albertsons from "../images/Albertsons-50x50.png";
import saguaro from "../images/SaguaroLogo-50x50.PNG";

function WorkExperience() {
  return (
    <div>
      <h2 className="title-light">Work Experence</h2>
      <WorkExperienceJob
        title="Business Anaylist"
        company="Albertsons Companies"
        timeframe="Dec 2015 - Present"
        logo={albertsons}
        alt="Albertsons Logo"
      >
        <ul>
          <li>Began as an auditor in allowance billing.</li>
          <li>Recognized for development of critical tools and queries and was promoted to Business Analyst responsible for:</li>
          <ul>
            <li>Systems analysis - exploring company systems and infrastructure to uncover inefficiencies. My personal analyses has identified and reduced 46,000 labor hours annually, or roughly $1,387,727 in annual savings.</li>
            <li>Process improvement - building appropriate tools and alternative workflows to reduce waste. I have personally saved the company $20 million since I began in December 2015.</li>
            <li>Overhaul - when it makes sense for the business, I interview primary stakeholders, conceptualize the primary goal and re-envision the roadmap to accomplishing the task. As an example, I’ve developed, tested, deployed, and continued to track analytics to gain insights on vendor cost allowances. This project alone has saved the company over 70,000 labor hours and has increased audit findings by more than 60%.</li>
          </ul>
        </ul>
      </WorkExperienceJob>

      <WorkExperienceJob
        title="Superintendent of Repairs"
        company="Saguaro Drywall"
        timeframe="2013 - 2015"
        logo={saguaro}
        alt="Saguaro Drywall Logo"
      >
        <ul>
          <li>Began as a laborer.</li>
          <li>Quickly advanced to lead superintendent in charge of all of the drywall repair team.</li>
          <li>Responsibilities included:</li>
          <ul>
            <li>Cost estimation</li>
            <li>Contract writing</li>
            <li>Review of all repair work including high net-worth, custom residential clients.</li>
            <li>Creating and maintaining jobsite scheduling</li>
            <li>Facilitating communications between clients and crew for time-critical situations</li>
            <li>Job site inspection to maintain high quality assurance </li>
          </ul>
          <li>Discovered my love for software development by creating database for job site information and created a scheduling application using Visual Basic for Applications in Excel.</li>
        </ul>
      </WorkExperienceJob>
    </div>
  );
}

export default WorkExperience;

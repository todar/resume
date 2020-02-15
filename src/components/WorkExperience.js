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
        <p>
          Started off as an auditor in allowance billing and from being
          recognized for developing several tools and queries was ultimately
          promoted to a Business Analyst position.
        </p>
        <p>
          The primary role is to explore all areas and uncover processes that
          are greatly in need of improvements or new implementations altogether.
        </p>
        <p>
          Then responsible for then brainstorming how these process should look.
          This includes gathering information from the different business users
          to gain a full understanding of all the downstream impact any changes
          could make.
        </p>
        <p>
          Finally, the bulk of the work is in the creation and development of
          the software and queries that would actually implement these new
          processes. This includes development, unit testing, deployment, as
          well as tracking analytics to gain insights on the return on
          investment.
        </p>
      </WorkExperienceJob>

      <WorkExperienceJob
        title="Superintendent of Repairs"
        company="Saguaro Drywall"
        timeframe="2013 - 2015"
        logo={saguaro}
        alt="Saguaro Drywall Logo"
      >
        <p>
          Started as a laborer and through diligence and hard work was able to
          quickly advanced in becoming the lead superintendent in charge of all
          of the drywall repair team.
        </p>
        <p>
          Was in charge of estimating job costs and writing up customer
          contracts for all repair work including our high-end custom
          residential homes.
        </p>
        <p>
          Was Responsible for creating and maintaining schedules for all our
          current and upcoming job sites while keeping an open line of
          communication with builders, homeowners, and our repairmen through the
          entire process. This open communication was especially critical to
          have when issues came up that needed to be resolved.
        </p>
        <p>
          Visited and inspected all job sites to maintain our high level of
          quality assurance with all our work, this to ensure that our companies
          reputation stayed high.
        </p>
        <p>
          First started to learn development in this company by creating a
          database for our job site information and created a scheduler
          application using Visual Basic for Applications in Excel.
        </p>
      </WorkExperienceJob>
    </div>
  );
}

export default WorkExperience;

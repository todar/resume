import React from "react";
import "./WorkExperienceJob.css";

function WorkExperienceJob({ logo, alt, title, company, timeframe, children }) {
  return (
    <div className="WorkExperienceJob">
      <div className="WorkExperienceJob-header">
        <div>
          <img className="WorkExperienceJob-logo" src={logo} alt={alt} />
        </div>
        <div>
          <h3 className="WorkExperienceJob-title">{title}</h3>
          <h4 className="WorkExperienceJob-company">{company}</h4>
          <h5 className="WorkExperienceJob-timeframe">{timeframe}</h5>
        </div>
      </div>
      {children}
    </div>
  );
}

export default WorkExperienceJob;

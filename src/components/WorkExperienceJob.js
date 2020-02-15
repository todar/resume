import React from "react";
import styled from "styled-components"

const Logo = styled.img`
  margin-right: 10px;
`

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`

const Content = styled.div`
  margin: 2px 0;
  font-weight: 200px;
` 

function WorkExperienceJob({ logo, alt, title, company, timeframe, children }) {
  return (
    <div>
      <Header>
        <div>
          <Logo src={logo} alt={alt} />
        </div>
        <div>
          <Content as="h3" className="WorkExperienceJob-title">{title}</Content>
          <Content as="h4" className="WorkExperienceJob-company">{company}</Content>
          <Content as="h5" className="WorkExperienceJob-timeframe">{timeframe}</Content>
        </div>
      </Header>
      {children}
    </div>
  );
}

export default WorkExperienceJob;

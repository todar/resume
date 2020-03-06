import React from "react";
import SectionTitle from "./SectionTitle";
import Content from "./Content";
import { useContent } from "../../content";
import { View } from "@react-pdf/renderer";

const SkillsSection = () => {
  const {
    skillsSection: { title, skills }
  } = useContent();
  return (
    <View>
      <SectionTitle>{title}</SectionTitle>
      {skills.map(skill => (
        <Content key={skill}>{skill}</Content>
      ))}
    </View>
  );
};

export default SkillsSection;

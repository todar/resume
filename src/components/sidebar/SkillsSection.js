import React from "react";
import SectionTitle from "./SectionTitle";
import Content from "./Content";
import { useContent } from "../../content";
import { View } from "@react-pdf/renderer";

const SkillsSection = () => {
  const { skills } = useContent();
  return (
    <View>
      <SectionTitle>Skills</SectionTitle>
      {skills.map(skill => (
        <Content key={skill}>{skill}</Content>
      ))}
    </View>
  );
};

export default SkillsSection;

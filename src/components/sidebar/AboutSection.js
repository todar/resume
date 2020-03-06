import React from "react";
import SectionTitle from "./SectionTitle";
import Content from "./Content";
import { useContent } from "../../content";
import { View } from "@react-pdf/renderer";

const AboutSection = () => {
  const {
    aboutSection: { title, content }
  } = useContent();
  return (
    <View>
      <SectionTitle>{title}</SectionTitle>
      <Content>{content}</Content>
    </View>
  );
};

export default AboutSection;

import React from "react";
import SectionTitle from "./SectionTitle";
import Content from "./Content";
import { useContent } from "../../content";
import { View } from "@react-pdf/renderer";

const AboutSection = () => {
  const { about } = useContent();
  return (
    <View>
      <SectionTitle>About</SectionTitle>
      <Content>{about}</Content>
    </View>
  );
};

export default AboutSection;

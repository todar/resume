import React from "react";
import { View, Image, StyleSheet } from "@react-pdf/renderer";
import SectionTitle from "./SectionTitle";
import Content from "./Content";
import locationIcon from "../../assets/map-marker-alt-solid.png";
import phoneIcon from "../../assets/phone.png";
import websiteIcon from "../../assets/websiteIcon.png";
import emailIcon from "../../assets/emailIcon.png";
import githubIcon from "../../assets/github.png";
import content from '../../resume.json'


const styles = StyleSheet.create({
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    margin: "3px 0 2px",
    padding: 0,
  },
  icon: {
    width: "20px",
    height: "20px",
    margin: 0,
  },
});

const Icon = ({ src }) => (
  <View style={styles.iconContainer}>
    <Image style={styles.icon} src={src} alt="" />
  </View>
);

const ConnectSection = () => {
  return (
    <View>
      <SectionTitle>{content.titles.connect}</SectionTitle>
      <Icon src={locationIcon} />
      <Content>{content.location}</Content>
      <Icon src={phoneIcon} />
      <Content>{content.phone}</Content>
      <Icon src={emailIcon} />
      <Content>{content.email}</Content>
      <Icon src={websiteIcon} />
      <Content>{content.website}</Content>
      <Icon src={githubIcon} />
      <Content>{content.github}</Content>
    </View>
  );
};

export default ConnectSection;

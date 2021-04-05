import React from "react";
import { View, Image, StyleSheet } from "@react-pdf/renderer";
import SectionTitle from "./SectionTitle";
import Content from "./Content";
import { useContent } from "../../stores/content";
import locationIcon from "../../assets/map-marker-alt-solid.png";
import phoneIcon from "../../assets/phone.png";
import websiteIcon from "../../assets/websiteIcon.png";
import emailIcon from "../../assets/emailIcon.png";
import githubIcon from "../../assets/github.png";

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
  const {
    connectSection: { title, location, phoneNumber, email, website, github },
  } = useContent();
  return (
    <View>
      <SectionTitle>{title}</SectionTitle>
      <Icon src={locationIcon} />
      <Content>{location}</Content>
      <Icon src={phoneIcon} />
      <Content>{phoneNumber}</Content>
      <Icon src={emailIcon} />
      <Content>{email}</Content>
      <Icon src={websiteIcon} />
      <Content>{website}</Content>
      <Icon src={githubIcon} />
      <Content>{'www.github.com/todar'}</Content>
    </View>
  );
};

export default ConnectSection;

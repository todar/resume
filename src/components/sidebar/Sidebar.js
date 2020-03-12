import React from "react";
import { View, StyleSheet } from "@react-pdf/renderer";
import Divider from "../Divider";
import ProfileSection from "./ProfileSection";
import AboutSection from "./AboutSection";
import ConnectSection from "./ConnectSection";
import SkillsSection from "./SkillsSection";

const styles = StyleSheet.create({
  sidebar: {
    width: "200px",
    backgroundColor: "#202124",
    color: "#9aa0a6",
    padding: "15px",
    textAlign: "center"
  }
});

const Sidebar = () => {
  return (
    <View style={styles.sidebar}>
      <ProfileSection />
      <Divider />
      <AboutSection />
      <Divider />
      <ConnectSection />
      <Divider />
      <SkillsSection />
    </View>
  );
};

export default Sidebar;

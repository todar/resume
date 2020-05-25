import React from "react";
import { useContent } from "../../content";
import { Text, View, Image, StyleSheet } from "@react-pdf/renderer";
import Profile from "../../assets/profile-200x200.jpg";

const styles = StyleSheet.create({
  name: {
    textAlign: "center",
    color: "#fff",
    margin: "8px 0 2px",
  },
  title: {
    textAlign: "center",
    fontSize: "15",
    color: "#fff",
  },
  profileImage: {
    borderRadius: "500",
    width: "130px",
    height: "130px",
    margin: "auto",
  },
});

const ProfileSection = () => {
  const {
    profileSection: { name, title },
  } = useContent();
  return (
    <View>
      <Image style={styles.profileImage} src={Profile} alt="Profile" />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default ProfileSection;

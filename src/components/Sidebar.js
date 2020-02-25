import React from "react";
import { useContent } from "../content"
import { Text, View, Image, StyleSheet } from "@react-pdf/renderer";
import Divider from "./Divider"
import Profile from "../assets/profile.jpg"
import locationIcon from "../assets/map-marker-alt-solid.png"
import phoneIcon from "../assets/phone.png"
import websiteIcon from "../assets/websiteIcon.png"
import emailIcon from "../assets/emailIcon.png"

const styles = StyleSheet.create({
  sidebar: {
    width: '200px',
    backgroundColor: '#202124',
    color: '#9aa0a6',
    padding: '18px',
    textAlign: 'center'
  },
  name: {
    textAlign: 'center',
    color: '#fff',
    margin: '10px 0 2px'
  },
  title: {
    textAlign: 'center',
    fontSize: '15',
    color: '#fff'
  },
  profileImage: {
    borderRadius: '500',
    width: "135px",
    height: "135px",
    margin: 'auto'
  },
  sectionTitle: {
    fontSize: 15,
    color: '#fff',
    marginBottom: "8px",
  },
  content: {
    fontSize: 10,
    marginBottom: '8px',
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'flex-end',
    margin: '3px 0 2px',
    padding: 0
  },
  icon: {
    width: "20px",
    height: "20px",
    margin: 0
  }
});

const Icon = ({ src }) => (
  <View style={styles.iconContainer}>
    <Image style={styles.icon} src={src} alt="" />
  </View>
)

const Content = ({ children }) => (
  <Text style={styles.content}>{children}</Text>
)

const SectionTitle = ({ children }) => (
  <Text style={styles.sectionTitle}>{children}</Text>
)

const Sidebar = () => {
  const { name, title, about, location, phoneNumber, email, website, skills } = useContent();
  return (
    <View style={styles.sidebar}>
      <View>
        <Image style={styles.profileImage} src={Profile} alt="Profile" />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Divider />
      <View>
        <SectionTitle>About</SectionTitle>
        <Content>{about}</Content>
      </View>
      <Divider />
      <View>
        <SectionTitle>Connect</SectionTitle>
        <Icon src={locationIcon} />
        <Content>{location}</Content>
        <Icon src={phoneIcon} />
        <Content>{phoneNumber}</Content>
        <Icon src={emailIcon} />
        <Content>{email}</Content>
        <Icon src={websiteIcon} />
        <Content>{website}</Content>
      </View>
      <Divider />
      <View>
        <SectionTitle>Skills</SectionTitle>
        {
          skills.map(skill => (
            <Content key={skill}>{skill}</Content>
          ))
        }
      </View>
    </View>
  )
}

export default Sidebar;



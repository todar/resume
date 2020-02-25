import React from "react";
import { useContent } from "../content"
import { Text, View, Image, StyleSheet } from "@react-pdf/renderer";
import Profile from "../assets/profile.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const styles = StyleSheet.create({
  sidebar: {
    width: '200px',
    backgroundColor: '#282c34',
    color: '#999',
    padding: '25px',
    textAlign: 'center'
  },
  name: {
    textAlign: 'center',
    color: '#fff',
    margin: '10px 0 5px'
  },
  title: {
    textAlign: 'center',
    fontSize: '15',
    color: '#fff'
  },
  profileImage: {
    borderRadius: '500'
  },
  hr: {
    backgroundColor: "#999",
    margin: "10px 0",
    width: "100%",
    height: ".5px"
  },
  content: {
    fontSize: 10,
    marginTop: '10px',
  }
});

const Hr = () => (
  <View style={styles.hr} />
)

const Content = ({ children }) => (
  <Text style={styles.content}>{children}</Text>
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
      <Hr />
      <View>
        <Text>About</Text>
        <Content>{about}</Content>
      </View>
      <Hr />
      <View>
        <Text>Connect</Text>
        <FontAwesomeIcon icon="map-marked-alt" />
        <Content>{location}</Content>
        <Content>{phoneNumber}</Content>
        <Content>{email}</Content>
        <Content>{website}</Content>
      </View>
      <Hr />
      <View>
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
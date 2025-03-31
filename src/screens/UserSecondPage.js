import React from "react";
import { ImageBackground, StyleSheet, Text, View, Button } from "react-native";
import { Avatar } from "react-native-paper";
import { Badge } from "react-native-paper";
import { UserProfileStyle } from "../styles/userProfileStyle";
import Timeline from 'react-native-timeline-flatlist';




const Background = require("../../assets/background.png");

let data;
data = [
    {time: '12/12/2022', title: 'Event 1', description: 'Event 1 Description'},
    {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
    {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
    {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
    {time: '16:30', title: 'Event 5', description: 'Event 5 Description'}
  ]


export const UserProfileDetails = ({ navigation }) => {
 
    const widthAndHeight = 250
    const series = [123, 321, 123, 500, 537, 300]
    const sliceColor = ['#fbd203', '#ffb300', '#ff9100', '#ff6c00', '#ff3c00', '#000']

  return (
    <ImageBackground
      source={Background}
      resizeMode="cover"
      style={UserProfileStyle.image}
    >
      
      <View style={UserProfileStyle.containerColumn}>
        <View style={UserProfileStyle.containerHeading}>
        <Avatar.Image
            size={65}
            style={UserProfileStyle.avatar}
            source={require("../../assets/person-icon.jpg")}
          />
          <View style={UserProfileStyle.heading}>
            <Text style={UserProfileStyle.name}>Mateusz Kowalski</Text>
            <Text style={UserProfileStyle.title}>Junior Web Developer</Text>
          </View>
          <View>
          <Badge style={UserProfileStyle.badge}>JUNIOR</Badge>
          <Badge style={UserProfileStyle.activityBadge}>ACTIVE</Badge>
          </View>
        </View>
        <View style={UserProfileStyle.socialMedia}>
          <View style={UserProfileStyle.socialMediaTags}>
            <Text style={UserProfileStyle.socialMediaTags}>LinkedIn:</Text>
          </View>
        </View>
        <View style={UserProfileStyle.socialMedia}>
          <View style={UserProfileStyle.socialMediaTags}>
            <Text style={UserProfileStyle.socialMediaTags}>Github:</Text>
          </View>
        </View>
        <Text
          style={{
            ...UserProfileStyle.text,
            alignSelf: "flex-start",
            marginLeft: 35,
            marginTop: 20,
          }}
        >
          Your Resume:
          </Text>

          <View style={UserProfileStyle.timeline}>
          <Timeline
          style={UserProfileStyle.list}
          data={data}
          descriptionStyle={{color:'#000000'}}
          timeContainerStyle={{minWidth:72}}
        />
        </View>

</View>

       


    </ImageBackground>
  );
};

export default UserProfileDetails;

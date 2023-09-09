import React from "react";
import { ImageBackground, StyleSheet, Text, View, Button } from "react-native";
import { Surface } from "react-native-paper";
import { Avatar } from "react-native-paper";
import { Badge } from "react-native-paper";
import { Chip } from "react-native-paper";
import { UserProfileStyle } from "../styles/userProfileStyle";
import { useState } from "react";
import PieChart from 'react-native-pie-chart'
import { IconButton, MD3Colors } from 'react-native-paper';



const Background = require("../../assets/background.png");


export const UserProfile = ({ navigation }) => {
 
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
        <View style={UserProfileStyle.containerDescription}>
          <View style={UserProfileStyle.description}>
            <Text style={UserProfileStyle.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</Text>
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
          Your Portfolio:
        </Text>

        <View style={UserProfileStyle.container}>
          <Surface style={UserProfileStyle.surface} elevation={4}>
            <Text>Surface</Text>
          </Surface>
          <Surface style={UserProfileStyle.surface} elevation={4}>
            <Text>Surface</Text>
          </Surface>
          <Surface style={UserProfileStyle.surface} elevation={4}>
            <Text>Surface</Text>
          </Surface>
          <Surface style={UserProfileStyle.surface} elevation={4}>
            <Text>Surface</Text>
          </Surface>
          <Surface style={UserProfileStyle.surface} elevation={4}>
            <Text>Surface</Text>
          </Surface>
          <Surface style={UserProfileStyle.surface} elevation={4}>
            <Text>Surface</Text>
          </Surface>
          <Surface style={UserProfileStyle.surface} elevation={4}>
            <Text>Surface</Text>
          </Surface>
          <Surface style={UserProfileStyle.surface} elevation={4}>
            <Text>Surface</Text>
          </Surface>
        </View>
        <View
          style={{
            ...UserProfileStyle.container,
            alignSelf: "flex-end",
            justifyContent: "flex-end",
            marginRight: 35,
          }}
        >
          <Chip
            icon="file-image-plus"
            onPress={() => console.log("Pressed")}
            style={UserProfileStyle.badge}
          >
            Add..
          </Chip>
        </View>
        <Text
          style={{
            ...UserProfileStyle.text,
            alignSelf: "flex-start",
            marginLeft: 35,
          }}
        >
          Tech PieChart:
        </Text>
        <View style={{
          ...UserProfileStyle.containerRow
        }}>
        <View style={UserProfileStyle.piechartColumn
        }>
          <View style={UserProfileStyle.javadot}></View>
          <Text           style={{
            ...UserProfileStyle.text,
            marginTop: 0,
            marginBottom: 5,
            margin: 0
          }}>Java</Text>
          <View style={UserProfileStyle.jsdot}></View>
          <Text style={{
            ...UserProfileStyle.text,
            marginBottom: 5,
            margin: 0
          }}>JavaScript</Text>
          <View style={UserProfileStyle.phpdot}></View>
          <Text style={{
            ...UserProfileStyle.text,
            marginBottom: 5,
            margin: 0
          }}>PHP/Wordpress</Text>
        </View>
        
        <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            coverRadius={0.45}
            coverFill={"rgb(109,49,158)"}
            style={UserProfileStyle.piechart}
          />
          
        </View>

      </View>
      <IconButton
    icon="arrow-down-bold-circle-outline"
    iconColor="#fff"
    size={40}
    onPress={() => navigation.navigate("UserProfileDetails")}
  />
    </ImageBackground>
  );
};

export default UserProfile;

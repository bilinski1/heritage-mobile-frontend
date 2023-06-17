import React from "react";
import { ImageBackground, StyleSheet, Text, View, Button } from "react-native";
import { Surface } from "react-native-paper";
import { Avatar } from "react-native-paper";
import { Badge } from "react-native-paper";
import { Chip } from "react-native-paper";
import { UserProfileStyle } from "../styles/userProfileStyle";

const Background = require("../../assets/background.png");

export const UserProfile = ({ navigation }) => {
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
            source={require("../../assets/favicon.png")}
          />
          <View style={UserProfileStyle.heading}>
            <Text style={UserProfileStyle.name}>Mateusz Kowalski</Text>
            <Text style={UserProfileStyle.title}>Junior Web Developer</Text>
          </View>
          <Badge style={UserProfileStyle.badge}>JUNIOR</Badge>
        </View>
        <Text
          style={{
            ...UserProfileStyle.text,
            alignSelf: "flex-start",
            marginLeft: 35,
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
      </View>
    </ImageBackground>
  );
};

export default UserProfile;

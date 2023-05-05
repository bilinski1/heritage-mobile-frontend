import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import { Card, TextInput, Button } from "react-native-paper";
import { SafeAreaView } from "react-native";
import { loginStyle } from "../styles/loginStyle";
import SvgUri from "react-native-svg-uri";
import Heritagelogo from "../images/heritagelogo.svg";

export const LoginScreen = () => {
  return (
    <SafeAreaView style={loginStyle.content}>
      <View>
        <Heritagelogo width={200} height={200} fill={"black"} />
      </View>
      <Card>
        <Card.Content>
          <TextInput
            style={loginStyle.textInput}
            label="Email"
            keyboardType="email-address"
          ></TextInput>
          <TextInput
            style={loginStyle.textInput}
            label="Password"
            secureTextEntry={true}
          ></TextInput>
          <Button style={loginStyle.cardButton}>Forgot email/password</Button>
          <Button style={loginStyle.cardButton} mode="contained">
            Login
          </Button>
          <Text style={loginStyle.textStyle}>
            If not registered please tap below:
          </Text>
          <Button mode="outlined">Register</Button>
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "-webkit-linear-gradient(305deg, #4f0854,#7339ac,#a75892)",
    alignItems: "center",
    justifyContent: "center",
    width: null,
    height: null,
    color: "#ffffff",
  },

  text: {
    color: "#ffffff",
  },
});

export default LoginScreen;

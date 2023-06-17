import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import { registrationStyle } from "../styles/registrationStyle";
import Heritagelogo from "../images/heritagelogo.svg";
import { Card, TextInput, Button } from "react-native-paper";

export const RegistrationScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(true);

  return (
    <SafeAreaView style={registrationStyle.content}>
      <View>
        <Heritagelogo width={200} height={200} fill={"black"} />
      </View>
      <Card>
        <Card.Content>
          <TextInput
            style={registrationStyle.textInput}
            label="Email"
            keyboardType="email-address"
          ></TextInput>
          <TextInput
            style={registrationStyle.textInput}
            label="Password"
            secureTextEntry={passwordVisible}
            right={
              <TextInput.Icon
                icon={passwordVisible ? "eye" : "eye-off"}
                onPress={() => setPasswordVisible(!passwordVisible)}
              />
            }
          ></TextInput>
          <TextInput
            style={registrationStyle.textInput}
            label="Repeat Password"
            secureTextEntry={passwordVisible}
            right={
              <TextInput.Icon
                icon={passwordVisible ? "eye" : "eye-off"}
                onPress={() => setPasswordVisible(!passwordVisible)}
              />
            }
            value=""
            //isPassword={true}
          ></TextInput>

          <Button style={registrationStyle.cardButton} mode="contained">
            Register
          </Button>
          <Button style={registrationStyle.cardButton}>
            If You already have account Please Login
          </Button>
          <Button style={registrationStyle.cardButton} mode="outlined">
            Login
          </Button>
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
};

{
  /*
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
}); */
}

export default RegistrationScreen;

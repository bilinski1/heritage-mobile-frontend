import React, { useState } from "react";
import {ImageBackground, StyleSheet, Text, View, Image, Alert} from "react-native";
import { Card, TextInput, Button } from "react-native-paper";
import { SafeAreaView } from "react-native";
import { loginStyle } from "../styles/loginStyle";
import SvgUri from "react-native-svg-uri";
import Heritagelogo from "../images/heritagelogo.svg";
import * as SecureStore from "expo-secure-store";
import axios from "axios";
import {useNavigation} from "@react-navigation/native";





export const LoginScreen = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

/*
  console.log('Data being sent:', formData);
  const onSubmit = async (formData) => {
    try {
      console.log('Data being sent:', formData);
      const response = await apiClie.post('/login', {
        email: formData.email,
        password: formData.password,
      });



      // Przechowywanie tokenu w Secure Store
      const { token } = response.data;
      await SecureStore.setItemAsync('jwtToken', token);
      Alert.alert('Sukces', 'Logowanie pomyślne!');
      navigation.navigate('HomeScreen'); // Przekierowanie po zalogowaniu
    } catch (error) {
      console.error(error);
      Alert.alert('Błąd', 'Nieprawidłowe dane logowania');
    }
  };
    */

  const handleLogin = async () => {
    try {

      // Send login request to the server
      const response = await axios.post('http://10.0.2.2:8080/api/v1/auth/signin', formData);

      if (response.status === 200) {
        const { token, message } = response.data;

        // Save the JWT token to local storage (AsyncStorage)
        await SecureStore.setItemAsync('jwtToken', token);
        console.log(token);

        Alert.alert('Sukces!', message, [
          {
            text: 'OK',
            onPress: () => {
              // Navigate to the protected area or home screen
              navigation.navigate('UserProfile'); // Change to your actual target screen
            }
          }
        ]);
      }
    } catch (error) {
      // Handle errors (e.g., invalid credentials, server error)
      Alert.alert(
          'Błąd logowania',
          error.response?.data?.message || 'Nieprawidłowy e-mail lub hasło.'
      );
    }
  };


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
            value={formData.email}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
          ></TextInput>
          <TextInput
            style={loginStyle.textInput}
            label="Password"
            secureTextEntry={passwordVisible}
            value={formData.password}
            onChangeText={(text) => setFormData({ ...formData, password: text })}
            right={
              <TextInput.Icon
                icon={passwordVisible ? "eye" : "eye-off"}
                onPress={() => setPasswordVisible(!passwordVisible)}
              />
            }
          />
          <Button style={loginStyle.cardButton}>Forgot email/password</Button>
          <Button style={loginStyle.cardButton} mode="contained" title="Login" onPress={handleLogin}>
            Login
          </Button>
          <Text style={loginStyle.textStyle}>
            If not registered please tap below:
          </Text>
          <Button
            mode="outlined"
            onPress={() => navigation.navigate("Registration")}
          >
            Register
          </Button>
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

import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import { registrationStyle } from "../styles/registrationStyle";
import Heritagelogo from "../images/heritagelogo.svg";
import { Card, TextInput, Button } from "react-native-paper";
import { useForm, Controller } from 'react-hook-form';
import Button2 from "../components/button"
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/authSlice";
import axios from "axios";

export const RegistrationScreen = () => {


  const baseUrl = 'localhost:8080/users/newuser';


  const { loading, userInfo, error, success } = useSelector(
  (state) => state.auth)
  const [passwordVisible, setPasswordVisible] = useState(true);
  const {control, handleSubmit, formState: {errors} } = useForm();
  const dispatch = useDispatch();

 const [user, setUser] = useState({
 firstName: "",
 email: "",
 password: ""
 });

  const onSubmit = (data) => {
    const user = data;
    setUser({...user, name: user.firstName});
    setUser({...user, email: user.email});
    setUser({...user, password: user.password});
    console.log(user);
    //console.log(data);
    dispatch(registerUser(user));
  
    //axios.post("http://localhost:8080/users/newuser", data).then((response) => {
    //console.log(response.status, response.data.token);
    //});
  };


  const onInvalid = (errors) => console.error(errors);

  return (
    <SafeAreaView style={registrationStyle.content}>
      <View>
        <Heritagelogo width={200} height={200} fill={"black"} />
      </View>
      <Card>
        <Card.Content>

        <Controller
        control={control}
        name='firstName'
        defaultValue=""
        render={({field: {value, onChange}, fieldState: {error}}) => (
          <TextInput
          value={value}
          style={registrationStyle.textInput}
          label="First Name"
          onChangeText={(value) => onChange(value)}
        ></TextInput>  
        )}
        ></Controller>
                <Controller
        control={control}
        name='lastName'
        defaultValue=""
        render={({field: {value, onChange}, fieldState: {error}}) => (
          <TextInput
          value={value}
          style={registrationStyle.textInput}
          label="Last Name"
          onChangeText={(value) => onChange(value)}
        ></TextInput>  
        )}
        ></Controller>

        <Controller
        control={control}
        name='email'
        defaultValue=""
        render={({field: {value, onChange}, fieldState: {error}}) => (
          <TextInput
          value={value}
          style={registrationStyle.textInput}
          label="Email"
          onChangeText={(value) => onChange(value)}
        ></TextInput>  
        )}
        ></Controller>

        <Controller
        control={control}
        name='password'
        defaultValue=""
        render={({field: {value, onChange}, fieldState: {error}}) => (
          <TextInput
          value={value}
          style={registrationStyle.textInput}
          label="Password"
          onChangeText={(value) => onChange(value)}
          right={
            <TextInput.Icon
              icon={passwordVisible ? "eye" : "eye-off"}
              onPress={() => setPasswordVisible(!passwordVisible)}
            />
          }
        ></TextInput>  
        )}
        ></Controller>



{/*}
          <TextInput
            value={user.password}
            style={registrationStyle.textInput}
            label="Password"
            secureTextEntry={passwordVisible}
            onChangeText={(text) => setUser({...user, password: text})}
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
          */}

          <Button title='Submit' style={registrationStyle.cardButton} mode="contained" onPress={handleSubmit(onSubmit, onInvalid)}>
            Register
          </Button>
          <Button style={registrationStyle.cardButton}>
            If You already have account Please Login
          </Button>
          <Button style={registrationStyle.cardButton} mode="outlined" onPress={() => console.log('Pressed')}>
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

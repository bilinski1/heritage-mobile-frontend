import React, {useState} from "react";
import {Alert, ImageBackground, StyleSheet, Text, View} from "react-native";
import {SafeAreaView} from "react-native";
import {registrationStyle} from "../styles/registrationStyle";
import Heritagelogo from "../images/heritagelogo.svg";
import {Card, TextInput, Button} from "react-native-paper";
import {useForm, Controller} from 'react-hook-form';
import Button2 from "../components/button"
import {useDispatch, useSelector} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import {registerUser} from "../features/authSlice";
import axios from "axios";
import {NavigationActions as navigation} from "react-navigation";

export const RegistrationScreen = () => {
    const navigation = useNavigation();
    const baseUrl = 'localhost:8080/users/newuser';


    const {loading, userInfo, error, success} = useSelector(
        (state) => state.auth)
    const [passwordVisible, setPasswordVisible] = useState(true);
    const {control, handleSubmit, formState: {errors}} = useForm();
    const dispatch = useDispatch();

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const onSubmit = async (data) => {
        const user = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
        };
        setUser(user);
        console.log(user);
        try {
            const response = await axios.post('http://10.0.2.2:8080/api/v1/auth/signup', user);

            console.log("Rejestracja zakończona sukcesem:", response.data);
            Alert.alert(
                "Rejestracja zakończona",
                "Zarejestrowano pomyślnie! Możesz teraz przejść do logowania.",
                [
                    {
                        text: "Przejdź do logowania",
                        onPress: () => navigation.navigate("Login"),
                    },
                ]
            );
        } catch (error) {
            console.error("Błąd podczas rejestracji:", error.response ? error.response.data : error.message);
        }

    };


    const onInvalid = (errors) => console.error(errors);

    return (
        <SafeAreaView style={registrationStyle.content}>
            <View>
                <Heritagelogo width={200} height={200} fill={"black"}/>
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

                    <Button title='Submit' style={registrationStyle.cardButton} mode="contained"
                            onPress={handleSubmit(onSubmit, onInvalid)}>
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

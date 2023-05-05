
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { HomeScreen } from './src/screens/HomeScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import { RegistrationScreen } from './src/screens/RegistrationScreen';
import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './src/styles/appStyle';




const Stack = createNativeStackNavigator();


  const App = () => {
    return (
    <PaperProvider theme={theme}>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registration" component={RegistrationScreen} />
    </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
    );
  }


export default App;
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/screens/HomeScreen";
import { LoginScreen } from "./src/screens/LoginScreen";
import { RegistrationScreen } from "./src/screens/RegistrationScreen";
import { Provider as PaperProvider } from "react-native-paper";
import { theme } from "./src/styles/appStyle";
import { UserProfile } from "./src/screens/DeveloperFirstPage";
import { UserProfileDetails} from "./src/screens/DeveloperSecondPage";
import { store } from './src/store';
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Heritage' }}/>
          <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }}/>
          <Stack.Screen name="Registration" component={RegistrationScreen} options={{ title: 'Sign Up' }}/>
          <Stack.Screen name="UserProfile" component={UserProfile} options={{ title: 'User Portfolio' }}/>
          <Stack.Screen name="UserProfileDetails" component={UserProfileDetails} options={{ title: 'Details' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
    </Provider>
  );
};

export default App;

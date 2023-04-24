import React from 'react'
import { ImageBackground, StyleSheet, Text, View, Button } from 'react-native';


const Background = (require('../../assets/background.png'))
export const HomeScreen = ({navigation}) => {
  return ( 
<ImageBackground source={Background} resizeMode="cover" style={styles.image}>
  <View style={styles.container}>
  <Text style={styles.text}>Home Screen</Text>
  <Button
    title="Go to Details"
    onPress={() => navigation.navigate('Login')}
  />
</View>
</ImageBackground>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '-webkit-linear-gradient(305deg, #4f0854,#7339ac,#a75892)',
      alignItems: 'center',
      justifyContent: 'center',
      width: null,
      height: null,
      color: '#ffffff',
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    text: {
      color: '#ffffff',
    }
}
  );

export default HomeScreen;
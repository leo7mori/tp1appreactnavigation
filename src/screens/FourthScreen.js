import React from 'react';
import { View, Text, Button } from 'react-native';

export default function FourthScreen({ navigation }) {
    volver= () => {
        console.log('Ahora se va a la tercera pantalla')
        navigation.goBack()
    }
    goToHomeScreen = () => {
        console.log('estas volviendo al home')
        navigation.navigate('HomeScreen')
        } 
    return (
        <View>
            <Text style={styles.title}> Estas en la cuarta pantalla </Text>
            <Button style={styles.container} title='Volver tercera pantalla' onPress={ () => volver() }></Button>
            <Button title='Volver al home' onPress={() => goToHomeScreen()}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 20,
    },
    title: {
      textAlign: 'center',
      marginVertical: 20,
    },
  });
  
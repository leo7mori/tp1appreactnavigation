import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ThirtScreen({ navigation }) {
    volver= () => {
        console.log('Ahora se va a la segunda pantalla')
        navigation.goBack()
    }
    goToFourthScreen = () => {
        console.log('estas pasando a la cuarta pantalla')
        navigation.navigate('FourthScreen')
    }
     
    return (
        <View>
            <Text style={styles.title}> Estas en la tercera pantalla </Text>
            <Button style={styles.container} title='Volver segunda pantalla' onPress={ () => volver() }></Button>
            <Button title='Siguiente Pantalla' onPress={ () => goToFourthScreen()}></Button>
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
  
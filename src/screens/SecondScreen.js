import React from 'react';
import { View, Text, Button } from 'react-native';

export default function SecondScreen({ navigation }) {
    volver= () => {
        console.log('Vuelvo')
        navigation.goBack()
    }
    goToThirtScreen = () => {
        console.log('estas pasando a la tercera pantalla')
        navigation.navigate('ThirtScreen')
    } 
    return (
        <View>
            <Text style={styles.title}> Leandro te dice en segunda pantalla </Text>
            <Button style={styles.container} title='Volver' onPress={ () => volver() }></Button>
            <Button title='Siguiente Pantalla' onPress={() => goToThirtScreen() }></Button>
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
  
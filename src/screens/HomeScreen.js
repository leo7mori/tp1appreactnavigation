import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
    
    goToSecondScreen = () => {
        console.log('apretaste e ira a otra pantalla')
        navigation.navigate('SecondScreen')
    }
    
    return (
        <View>
            <Text style={styles.title}> Leandro te dice 心を燃やせ </Text>
            <Button style={styles.container} title= 'Vas a ir a la otra pantalla' onPress={() => goToSecondScreen() }></Button>
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
  
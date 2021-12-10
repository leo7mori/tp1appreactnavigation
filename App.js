import React from 'react'
import App from './src/AppNavigation' 
import { NavigationContainer } from '@react-navigation/native';

/*const Main = () => {
    return(
        <App></App>
    )
}
export default Main;*/
export default function Main() {
  return (
    <NavigationContainer>{<App></App>}</NavigationContainer>
  );
} 
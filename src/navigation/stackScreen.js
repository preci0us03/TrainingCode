import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import splashScreen from '../view/splashScreen';
import wellcomeScreen from '../view/wellcomeScreen';
const Stack = createNativeStackNavigator();

const stackScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={splashScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={wellcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default stackScreen;
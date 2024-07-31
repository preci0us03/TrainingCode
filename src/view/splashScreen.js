import React from 'react';
import { View, Text, Button } from 'react-native';
const splashScreen = ({navigation}) => {
  return (
  <View>
      <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', {name: 'Jane'})
      }
    />
  </View>
  );
};
export default splashScreen;



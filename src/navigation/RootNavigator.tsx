import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationKey from './NavigationKey';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

import styles from './styles';

const Stack = createStackNavigator();

const RootNavigator: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animationEnabled: false,
          cardOverlayEnabled: false,
          cardShadowEnabled: false,
          cardStyle: styles.cardStyle,
        }}
        initialRouteName={NavigationKey.Home}>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={NavigationKey.Home}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default React.memo(RootNavigator);

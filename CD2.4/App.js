import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './source/homePage';
import ContactScreen from './source/contactPage';
import ThirdScreen from './source/thirdPage';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="First"
          component={HomeScreen}
          options={{ title: 'Контакты' }}
        />
        <Stack.Screen
        name="Contact"
        component={ContactScreen}
        options={{ title: 'Контакт' }}
        />
        <Stack.Screen
        name="Third"
        component={ThirdScreen}
        options={{ title: 'Page 3' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;

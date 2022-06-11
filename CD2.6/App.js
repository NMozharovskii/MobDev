import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreenNav from './src/login';

const Stack = createNativeStackNavigator()

function HomeScreen({ route, navigation })
{
  return (
    <View style={styles.container}>
      <Text>Email: {route.params['email']}</Text>
      <Text>Password: {route.params['password']}</Text>
      <TouchableWithoutFeedback onPress={() => {
        navigation.replace("LoginScreenNav")
      }}>
        <Text>Выйти</Text>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreenNav" component={LoginScreenNav} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

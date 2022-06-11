import * as React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

const SecondScreen = ({ navigation }) => {
    return (
      <View>
        <Text>Второй экран</Text>
        <Button
          title="Перейти на страницу 3"
          onPress={() =>
            navigation.navigate('Third')
          }
        />
      </View>
  );
}

export default SecondScreen;
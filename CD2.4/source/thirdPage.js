import * as React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import styles from '../styles/style'

const ThirdScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>Третий экран</Text>
			<Button
				title="Перейти на страницу 1"
				onPress={() =>
				navigation.navigate('First')
				}
			/>
		</View>
	);
}

export default ThirdScreen;
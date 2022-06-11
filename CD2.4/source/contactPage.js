import * as React from 'react';
import data_1 from './data';
import { 	StyleSheet, 
			Text, 
			Button, 
			View, 
			SafeAreaView, 
			StatusBar, 
			SectionList, 
			FlatList, 
			TouchableOpacity } from 'react-native';

const ContactScreen = ({ navigation, route }) => {
	return (
		<View>
			<Text>Имя: {route.params.name}</Text>
			<Text>Номер телефона: {route.params.number}</Text>
		</View>
	);
}

export default ContactScreen;
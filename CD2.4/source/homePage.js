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

const HomeScreen = ({ navigation }) => {
	return (
		<SafeAreaView>
			<FlatList
				data={data_1}
				renderItem={({ item }) => 
				(
					<View style={styles.item}>
					<TouchableOpacity onPress={() =>
							navigation.navigate('Contact', { name: item.name, number: item.phone_number })}>
						<Text style={styles.title}>{item.name}</Text>
					</TouchableOpacity>
				  </View>
				)}
				keyExtractor={item => item.id}
			/>
		</SafeAreaView>
	);
  }

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: StatusBar.currentHeight,
		marginHorizontal: 16
	},
	item: {
		backgroundColor: "#7fffd4",
		padding: 20,
		marginVertical: 8
	},
	header: {
		fontSize: 32,
		backgroundColor: "#fff"
	},
	title: {
		fontSize: 24
	}
});

export default HomeScreen;
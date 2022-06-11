import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RegisterScreen from './register';

const LoginScreen = () => 
{
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const navigation = useNavigation();

	const handleSignIn = () => {
		if (password.length < 8 || email.length === 0)
		{
			alert("Введите все данные!")
		}
		else
		{
			navigation.replace("HomeScreen", { email: email, password: password })
		}
	}

	return (
		<ImageBackground source={require('../assets/star.png')} style={{ width: "100%", height: "100%" }}>
<KeyboardAwareScrollView
			behavior="padding"
			contentContainerStyle={styles.container}
			scrollEnabled={false}
			resetScrollToCoords={{ x: 0, y: 0 }}
		>
			<View style={styles.inputContainer}>
				<TextInput 
					placeholder='Email'
					value={email}
					onChangeText={text => setEmail(text)}
					style={styles.input} 
				/>
				<TextInput 
					placeholder='Пароль'
					value={password}
					onChangeText={text => setPassword(text)}
					style={styles.input}
					secureTextEntry
				/>
			</View>

			<View style={styles.buttonContainer}>
				<TouchableOpacity
				onPress={handleSignIn}
				style={styles.button} >
					<Text style={styles.buttonText}>Войти</Text>
				</TouchableOpacity>

				<TouchableOpacity
				onPress={() => navigation.navigate("Register")}
				style={[ styles.button, styles.buttonOutline ]} 
				>
					<Text style={styles.buttonOutlineText}>Регистрация</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAwareScrollView>
		</ImageBackground>
	)
}

const Stack = createNativeStackNavigator();

function LoginScreenNav()
{
	return (
		<Stack.Navigator>
			<Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
			<Stack.Screen name="Register" component={RegisterScreen}/>
		</Stack.Navigator>
	)
}

export default LoginScreenNav;

const styles = StyleSheet.create({
	container: {
		position: 'relative',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	inputContainer: {
		width: "80%",
	},
	input: {
		backgroundColor: "white",
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderRadius: 10,
		marginTop: 5
	},
	buttonContainer: {
		width: "60%",
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 40,
	},
	button: {
		backgroundColor: "#0782F9",
		width: "100%",
		padding: 15,
		borderRadius: 10,
		alignItems: 'center'
	},
	buttonText: {
		color: "white",
		fontWeight: "700",
		fontSize: 16,
	},
	buttonOutline: {
		backgroundColor: "white",
		marginTop: 5,
		borderColor: "#0782F9",
		borderWidth: 2,
	},
	buttonOutlineText: {
		color: "#0782F9",
		fontWeight: "700",
		fontSize: 16,
	},
})
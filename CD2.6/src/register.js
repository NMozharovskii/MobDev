import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Picker } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import { auth, db } from '../firebase';
// import { collection, addDoc } from "firebase/firestore"; 
// import { createUserWithEmailAndPassword } from "firebase/auth";

function RegisterScreen()
{
	const [name, setName] = useState('')
	const [surname, setSurname] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [selectedValue, setSelectedValue] = useState("Прикладная информатика");

	const navigation = useNavigation();

	// useEffect(() => {
	// 	const unsubscribe = auth.onAuthStateChanged(user => {
	// 		if (user) {
	// 			navigation.replace("Home_3")
	// 		}
	// 	})

	// 	return unsubscribe;
	// }, [])

	const handleSignUp = () => {
		if (name.length == 0 || surname.length == 0 || email.length == 0 || password.length < 8)
		{
			var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
			if (reg.test(email) == false)
			{
				alert('Введите корректный e-mail');
				return
			}
			else if (password.length < 8)
			{
				alert("Длина пароля должна быть как минимум 8 символов!")
				return
			}
			else
			{
				alert("Заполните все поля!");
				return
			}
		}
		else {
			navigation.replace("HomeScreen", { email: email, password: password })
		}
	}

	return (
		<KeyboardAwareScrollView 			
			behavior="padding"
			contentContainerStyle={styles.container}
			scrollEnabled={false}
			resetScrollToCoords={{ x: 0, y: 0 }}>
				<View style={styles.inputContainer}>
					<TextInput
						placeholder='Имя'
						value={name}
						onChangeText={text => setName(text)}
						style={styles.input} 
					/>
					<TextInput 
						placeholder='Фамилия'
						value={surname}
						onChangeText={text => setSurname(text)}
						style={styles.input} 
					/>
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
					<TouchableOpacity
						onPress={handleSignUp}
						style={[ styles.button, styles.buttonOutline ]} >
							<Text>Зарегистрироваться</Text>
					</TouchableOpacity>
				</View>
		</KeyboardAwareScrollView>
	)
}

export default RegisterScreen;

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
	pickerContainer: {
		backgroundColor: "white",
		paddingHorizontal: 15,
		borderRadius: 10,
		marginTop: 5
	},
	pickerStyle: {
		
	},
})
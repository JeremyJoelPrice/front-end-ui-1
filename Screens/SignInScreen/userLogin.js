import {
	ImageBackground,
	Text,
	TouchableOpacity,
	View,
	StyleSheet,
	Image
} from "react-native";
import { useRef, useState, useEffect } from "react";
import { Button } from "../../Components/Styled Components";
import { useNavigation, userNavigation } from "@react-navigation/native";
import { login } from "../../api";
import { CustomInput } from "../../Components/Styled Components";

const UserLogin = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigation = useNavigation();

	const onSignIn = () => {
		console.warn("Sign in.");
		// navigation.navigate("HomeScreen");

		login().then((res) => {
			// alert(res)
			console.warn(res);
		});
	};

	const onSignUp = () => {
		console.warn("Sign up.");
		navigation.navigate("SignUp");
	};
	/*
  if user_id !== Num {   
  }
  */

	return (
		<View>
			<Text>User Login Page</Text>
			<CustomInput placeholder="Username" value={email} setValue={setEmail} />
			<CustomInput
				placeholder="Password"
				value={password}
				setValue={setPassword}
				secureTextEntry={true}
			/>

			<CustomButton text={"Sign In"} onPress={onSignIn} />
			<Button
				text="Don't have an account? Create one"
				onPress={onSignUp}
				type="TERTIARY"
			></Button>
		</View>
	);
};

export default UserLogin;

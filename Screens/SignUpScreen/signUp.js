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
import { CustomInput } from "../../Components/Styled Components";

const SignUp = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");

	const navigation = useNavigation();

	const onSignUp = () => {
		console.warn("Account Created(Post request to server)");
		navigation.navigate("UserLogin");
	};

	const onLoginPage = () => {
		console.warn("Navigate to login page");
		navigation.navigate("UserLogin");
	};

	return (
		<View>
			<Text>Create an account</Text>
			<CustomInput
				placeholder="Username"
				value={username}
				setValue={setUsername}
			/>
			<CustomInput placeholder="Email" value={email} setValue={setEmail} />
			<CustomInput
				placeholder="Password"
				value={password}
				setValue={setPassword}
				secureTextEntry={true}
			/>
			<CustomInput
				placeholder="Repeat Password"
				value={repeatPassword}
				setValue={setRepeatPassword}
				secureTextEntry={true}
			/>

			<Button text={"Sign Up"} onPress={onSignUp} />

			<Button
				text="Already Have an account? Click here to login"
				onPress={onLoginPage}
				type="TERTIARY"
			></Button>
		</View>
	);
};

export default SignUp;

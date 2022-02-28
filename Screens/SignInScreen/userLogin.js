import { Text, View } from "react-native";
import { useState, useEffect } from "react";
import { Button, CustomInput } from "../../Components/Styled Components";

const UserLogin = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// const navigation = useNavigation();

	const onSignIn = () => {
		console.warn("Sign in.");
		// navigation.navigate("HomeScreen");

		// login().then((res) => {
		// 	console.warn(res);
		// });
	};

	const onSignUp = () => {
		console.log("Sign up.");
	};

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

			<Button text={"Sign In"} onPress={onSignIn} />
			<Button
				text="Don't have an account? Create one"
				onPress={onSignUp}
				type="TERTIARY"
			></Button>
		</View>
	);
};

export default UserLogin;

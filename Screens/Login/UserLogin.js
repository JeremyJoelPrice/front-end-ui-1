import {
	RedText,
	StyledPressable,
	Text,
	TextInput,
	View
} from "../../Components/Styled Components";
import { useContext, useEffect, useState } from "react";
import { checkEmail } from "../../utils";
import { login, signup } from "../../api";
import UserContext from "../../UserContext";

const UserLogin = () => {
	const [loginOrSignup, setLoginOrSignup] = useState("login");
	const [email, setEmail] = useState("example@email.com");
	const [password, setPassword] = useState("123abc");
	const [username, setUsername] = useState("Example Username");
	const [loginIncorrect, setLoginIncorrect] = useState(false);
	const [userNotFound, setUserNotFound] = useState(false);
	const { userId, setUserId } = useContext(UserContext);

	function submit() {
		// check password field isn't empty, and email is valid
		if (password === "" || !checkEmail(email)) {
			setUserNotFound(false);
			setLoginIncorrect(true);
		} else {
			setLoginIncorrect(false);
			if (loginOrSignup === "login") {
				// if user exists, login
				login(email, password)
					.then(({ data }) => {
						setUserNotFound(false);
						setUserId(data.user_id);
						console.log("sign in successful");
					})
					.catch((error) => {
						// user doesn't exist, display message
						setUserNotFound(true);
					});
			} else {
				signup(email, password).then(({ data }) => {
					console.log("signed in as user " + data.user_id);
				});
			}
		}
	}

	function signUp() {
		setLoginOrSignup("signup");
	}

	return (
		<View>
			<Text>User Login Page</Text>
			{loginOrSignup === "login" ? null : (
				<TextInput
					placeholder="Username"
					value={username}
					onChangeText={(text) => {
						setUsername(text);
					}}
				/>
			)}

			<TextInput
				placeholder="Email"
				value={email}
				onChangeText={(text) => {
					setEmail(text);
				}}
			/>
			<TextInput
				placeholder="Password"
				value={password}
				onChangeText={(text) => {
					setPassword(text);
				}}
				secureTextEntry={true}
			/>
			<StyledPressable onPress={submit}>
				<Text>{loginOrSignup === "login" ? "Sign In" : "Sign Up"}</Text>
			</StyledPressable>
			<StyledPressable onPress={signUp}>
				<Text>Create new account</Text>
			</StyledPressable>
			{loginIncorrect ? <RedText>Login information incorrect</RedText> : null}
			{userNotFound ? <RedText>User not found</RedText> : null}
		</View>
	);
};

export default UserLogin;

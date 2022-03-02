import {
	AppContainer,
	FlexColumn,
	FlexRow,
	FormButton,
	FormContainer,
	HeaderPanel,
	HeaderText,
	MainContent,
	RedText,
	Text,
	TextInput,
	VerticalBuffer
} from "../../Components/Styled Components";
import { useContext, useEffect, useState } from "react";
import { checkEmail } from "../../utils";
import { login, signup } from "../../api";
import UserContext from "../../UserContext";

const UserLogin = ({ navigation }) => {
	const [loginOrSignup, setLoginOrSignup] = useState("login");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
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
						navigation.navigate("Aviary");
					})
					.catch((error) => {
						// user doesn't exist, display message
						console.log("Something wen twrong");
						setUserNotFound(true);
					});
			} else {
				signup(email, password).then(({ data }) => {
					console.log("signed in as user " + data.user_id);
				});
			}
		}
	}

	function signUpMode() {
		setLoginOrSignup("signup");
		setUserNotFound(false);
		setLoginIncorrect(false);
	}

	function loginMode() {
		setLoginOrSignup("login");
		setUserNotFound(false);
		setLoginIncorrect(false);
	}

	return (
		<AppContainer>
			<HeaderPanel>
				<HeaderText>User Login Page</HeaderText>
			</HeaderPanel>
			<MainContent>
				<FormContainer>
					<VerticalBuffer />
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
					<FormButton onPress={submit}>
						<Text>{loginOrSignup === "login" ? "Sign In" : "Sign Up"}</Text>
					</FormButton>
					{loginOrSignup === "login" ? (
						<FormButton onPress={signUpMode}>
							<Text>Create new account</Text>
						</FormButton>
					) : (
						<FormButton onPress={loginMode}>
							<Text>Back to login</Text>
						</FormButton>
					)}

					{loginIncorrect ? (
						<RedText>Login information incorrect</RedText>
					) : null}
					{userNotFound ? <RedText>User not found</RedText> : null}
				</FormContainer>
			</MainContent>
		</AppContainer>
	);
};

export default UserLogin;

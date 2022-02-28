import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UserLogin from "../Screens/SignInScreen/userLogin";
import SignUp from "../Screens/SignUpScreen/signUp";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import { Navbar } from "../Components/Navbar/Navbar";
import Aviary from "../Screens/AviaryScreen/Aviary";

const Stack = createNativeStackNavigator();

const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				{/* <Stack.Screen name="UserLogin" component={UserLogin} /> */}
				{/* <Stack.Screen name="SignUp" component={SignUp} /> */}
				<Stack.Screen name="Aviary" component={Aviary} />
				{/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
			</Stack.Navigator>
			<Navbar />
		</NavigationContainer>
	);
};

export default Navigation;

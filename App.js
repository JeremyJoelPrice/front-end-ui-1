import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FactCard from "./Screens/FactCardScreen/FactCard";
import Aviary from "./Screens/AviaryScreen/Aviary";
import OneBird from "./Screens/OneBirdScreen/OneBird";
import UserLogin from "./Screens/SignInScreen/userLogin";
import SignUp from "./Screens/SignUpScreen/signUp";
import { Navbar } from "./Components/Navbar/Navbar";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="FactCard" component={FactCard} />
				<Stack.Screen name="Aviary" component={Aviary} />
				<Stack.Screen name="OneBird" component={OneBird} />
				<Stack.Screen name="UserLogin" component={UserLogin} />
				<Stack.Screen name="SignUp" component={SignUp} />
			</Stack.Navigator>
			<Navbar />
		</NavigationContainer>
	);
}

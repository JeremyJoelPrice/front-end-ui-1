import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FactCard from "./Screens/FactCardScreen/FactCard";
import Aviary from "./Screens/AviaryScreen/Aviary";
import OneBird from "./Screens/OneBirdScreen/OneBird";
import UserLogin from "./Screens/Login/UserLogin";
import UserContext from "./UserContext";
import FactCardsContext from "./FactCardsContext";
import PhotoUpload from "./Screens/PhotoUploadScreen/PhotoUpload";

const Stack = createNativeStackNavigator();

export default function App() {
	const [currentUser, setCurrentUser] = useState({
		username: "Nora Foreman",
		userId: 1
	});

	const [factCards, setFactCards] = useState([]);

	return (
		<NavigationContainer>
			<UserContext.Provider value={{ currentUser, setCurrentUser }}>
				<FactCardsContext.Provider value={{ factCards, setFactCards }}>
					<Stack.Navigator screenOptions={{ headerShown: false }}>
						<Stack.Screen name="PhotoUpload" component={PhotoUpload} />
						<Stack.Screen name="Aviary" component={Aviary} />
						<Stack.Screen name="UserLogin" component={UserLogin} />
						<Stack.Screen name="OneBird" component={OneBird} />
						<Stack.Screen name="FactCard" component={FactCard} />
					</Stack.Navigator>
				</FactCardsContext.Provider>
			</UserContext.Provider>
		</NavigationContainer>
	);
}

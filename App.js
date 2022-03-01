import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FactCard from "./Screens/FactCardScreen/FactCard";
import Aviary from "./Screens/AviaryScreen/Aviary";
import OneBird from "./Screens/OneBirdScreen/OneBird";
import UserLogin from "./Screens/Login/UserLogin";
import { Navbar } from "./Components/Navbar/Navbar";
import UserContext from "./UserContext";
import FactCardsContext from "./FactCardsContext";

const Stack = createNativeStackNavigator();

export default function App() {
  const [userId, setUserId] = useState("");
  const [factCards, setFactCards] = useState([]);

  return (
    <NavigationContainer>
      <UserContext.Provider value={{ userId, setUserId }}>
        <FactCardsContext.Provider value={{ factCards, setFactCards }}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Aviary" component={Aviary} />
            <Stack.Screen name="UserLogin" component={UserLogin} />
            <Stack.Screen name="FactCard" component={FactCard} />
            <Stack.Screen name="OneBird" component={OneBird} />
          </Stack.Navigator>
        </FactCardsContext.Provider>
      </UserContext.Provider>
      <Navbar />
    </NavigationContainer>
  );
}

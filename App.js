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

import { AppContainer, MainContent } from "./Components/Styled Components";

const Stack = createNativeStackNavigator();

export default function App() {
  const [userId, setUserId] = useState(1);
  const [factCards, setFactCards] = useState([]);

  return (
    <AppContainer>
      <MainContent>
        <NavigationContainer>
          <UserContext.Provider value={{ userId, setUserId }}>
            <FactCardsContext.Provider value={{ factCards, setFactCards }}>
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Aviary" component={Aviary} />
                <Stack.Screen name="OneBird" component={OneBird} />
                <Stack.Screen name="FactCard" component={FactCard} />
                <Stack.Screen name="UserLogin" component={UserLogin} />
              </Stack.Navigator>
            </FactCardsContext.Provider>
          </UserContext.Provider>
        </NavigationContainer>
      </MainContent>
      <Navbar />
    </AppContainer>
  );
}


import { useRef, useState, useEffect } from "react";
import { Button, ImageBackground, Text, TouchableOpacity, View, StyleSheet, Image} from "react-native";

import CameraFile from "./Screens/CameraScreen/camera";
import UserLogin from "./Screens/SignInScreen/userLogin";
import SignUp from "./Screens/SignUpScreen /signUp";

export default function App() {
/* if !user === logged in {
  return (
    <View>
    <UserLogin />
    </View>
  )
}
*/
  return (
    <View style={styles.container}>
      {/* <SignUp /> */}
      <UserLogin />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
import {
  Button,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
} from "react-native";
import { useRef, useState, useEffect } from "react";
import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomButton from "../../Components/customButton/customButton";
import { useNavigation, userNavigation } from "@react-navigation/native";

const UserLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const onSignIn = () => {
    console.warn("Sign in.");
    // validate user
    navigation.navigate("HomeScreen"); // Home Page Placeholder
  };
  const onForgotPassword = () => {
    console.warn("Forgot Password.");
    navigation.navigate("ForgotPassword"); // Add Forgot Password screen to navigation/index.js
  };
  const onSignUp = () => {
    console.warn("Sign up.");
    navigation.navigate("SignUp"); // Add Forgot Password screen to navigation/index.js
  };
  return (
    <View style={styles.root}>
      <Text>User Login Page</Text>
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />

      <CustomButton text={"Sign In"} onPress={onSignIn} />
      <CustomButton
        text={"Forgot Password?"}
        onPress={onForgotPassword}
        type="TERTIARY"
      />
      <CustomButton
        text="Don't have an account? Create one"
        onPress={onSignUp}
        type="TERTIARY"
      ></CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
});

export default UserLogin;

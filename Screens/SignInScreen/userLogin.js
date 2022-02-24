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

const UserLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSignIn = () => {
    console.warn("Sign in.");
  };
  const onForgotPassword = () => {
    console.warn("Forgot Password.");
  };
  const onSignUp = () => {
    console.warn("Sign up.");
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

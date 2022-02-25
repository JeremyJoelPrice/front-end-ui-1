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
import { login } from "../../api";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const onSignIn = () => {
    console.warn("Sign in.");
    navigation.navigate("HomeScreen");

    login().then((res) => {
      // alert(res)
      console.warn(res);
    });
  };

  const onSignUp = () => {
    console.warn("Sign up.");
    navigation.navigate("SignUp");
  };
  /*
  if user_id !== Num {   
  }
  */

  return (
    <View style={styles.root}>
      <Text>User Login Page</Text>
      <CustomInput placeholder="Username" value={email} setValue={setEmail} />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />

      <CustomButton text={"Sign In"} onPress={onSignIn} />
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

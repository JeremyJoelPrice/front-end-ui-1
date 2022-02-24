import { Button, ImageBackground, Text, TouchableOpacity, View, StyleSheet, Image} from "react-native";
import { useRef, useState, useEffect } from "react";
import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomButton from "../../Components/customButton/customButton";

const UserLogin = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onSignIn = () => {
        console.warn('it worked')
    }

    return (
        <View style={styles.root}>
            <Text>User Login Page</Text>
            <CustomInput placeholder='Username' value={username} setValue={setUsername} />
            <CustomInput placeholder='Password' value={password} setValue={setPassword} secureTextEntry={true} />

            <CustomButton text={'Sign In'} onPress={onSignIn}/>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20, 
        
    }
})

export default UserLogin;
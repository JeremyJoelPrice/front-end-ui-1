import React from 'react'
import {Text, StyleSheet, Pressable } from 'react-native'

const CustomButton = ({onPress, text}) => {
    return (
        <Pressable onPress={onPress} style={styles.conatiner}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )


}

const styles = StyleSheet.create({
    conatiner: {
        backgroundColor: 'blue',
        width: '100%',
        padding: 20,
        marginVertical: 5,
        borderRadius: 10,
        
    },
    text: {
        fontWeight: 'bold',
        color: 'white'
    }
})
export default CustomButton;
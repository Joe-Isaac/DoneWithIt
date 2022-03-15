import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Image } from 'react-native';
import { Text } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground style={styles.background} source={require('../assets/background.jpg')}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
            <Text style={styles.logoText}>Sell what you dont need</Text>
            <View styles={styles.logoContainer}>
            </View>

            <View style={styles.loginButton}>

            </View>
            <View style={styles.registerButton}>

            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },

    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#fc5c65",
    },

    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#4ecdc4",
    },

    logo : {
        width: 150,
        height: 150,
        position: "absolute",
        top: 50,
    },

    logoContainer: {
        alignItems: "center",
        justifyContent: "flex-start",
    },

    logoText: {
        position: "absolute",
        top:200,
    },    
})

export default WelcomeScreen;
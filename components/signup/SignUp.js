import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TextInput, View, Button } from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const SignUp = () => {
    
    return (
        <View>
            <Text style={styles.title}>Sign Up</Text>
            <TextInput
                style={styles.input}
                placeholder='Username'
                
            />
            <TextInput 
                style={styles.input}
                placeholder='Password'
                
            />
            <View style={styles.button}>
            <Button title="Sign Up" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        marginBottom: 15,
        marginTop: 15,
        marginLeft: 20,
    },

    input: {
        height: 40,
        marginLeft: 20,
        marginBottom: 15,
    },

    button: {
        width: width * .6,
        marginLeft: 20,
    }
});

export default SignUp;
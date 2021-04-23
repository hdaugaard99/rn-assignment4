
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'orange',
        width: width,
        paddingBottom: 20,
        paddingTop: 20,
    },

    heading: {
        textAlign: 'center',
        marginTop: 30,
    },

    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: 42,
        fontWeight: 'bold',
        fontFamily: 'Marker Felt, Arial, sans-serif',
        
    },
    
    headingText: {
        fontSize: 32,
        color: '#333333',
        marginBottom: 30,
    }
});

export { styles };
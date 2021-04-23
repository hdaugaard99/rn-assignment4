import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback } from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        paddingTop: 15,
        paddingBottom: 15,
        marginTop: 20,
        display: 'flex',
        width: width * .9,
        flexDirection: 'row',
    },

    boxTitle: {
        display: 'flex',
        marginLeft: 10,
        fontSize: 24,
        fontWeight: 'bold',
        width: width * .8,
    },

    button: {
        display: 'flex',
        alignContent: 'flex-end',
        fontFamily: 'Arial, sans-serif',
        color: '#999999',
        fontWeight: 'bold',
        marginRight: 10,
        
    },

    openButton: {
        
    },

    addBox: {
        marginTop: 20,
        marginBottom: 10,
        height: 40,
    },

    addButton: {
        width: width * .6,
    },
});

export { styles };
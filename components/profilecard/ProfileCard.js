import React, { Component } from 'react';
import { Image, StyleSheet, Text, View} from 'react-native';    

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                
                <View style={styles.cardContainer}>
                <View style={styles.colorBlock}>
                    <View style={styles.cardImageContainer}>
                        <Image style={styles.cardImage}  
                             source={require('./user.png')}  />
                    </View>
                    <View>
                        <Text style={styles.cardName}>   
                            John Doe
                        </Text>
                    </View>
                    <View style={styles.cardOccupationContainer}>    
                        <Text style={styles.cardOccupation}>   
                            john.doe@example.com
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.cardDescription}>  
                            Home Cook
                        </Text>
                    </View>
                </View>
                </View>
            </View>
        );
    }
}

const profileCardColor = '#ff8c00';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    colorBlock: {
        backgroundColor: profileCardColor,
        width: 300,
        height: 100,
        alignItems: 'center',
    },
    cardContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        width: 300,
        height: 400
    },
    cardImageContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'white',
        width: 120,
        height: 120,
        borderRadius: 60,
        marginTop: 30,
        paddingTop: 15
    },
    cardImage: {
        width: 80,
        height: 80
    },
    cardName: {
        color: '#555555',
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 30,           
    },
    cardOccupationContainer: { 
        
    },
    cardOccupation: {
        color: '#555555',
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    cardDescription: {
        color: '$555555',
        textAlign: 'center',
        fontStyle: 'italic',
        marginTop: 10,
        marginRight: 40,
        marginLeft: 40,
        marginBottom: 10
    }
});
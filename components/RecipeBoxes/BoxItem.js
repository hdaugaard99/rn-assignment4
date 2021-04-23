import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { styles } from './CardStyles';

const BoxItem = (props) => {
    return (
        <View style={styles.card} on>
            <Text style={styles.boxTitle}>{props.title}</Text>
            <View style={styles.openButton}>
            <Button title="Open Box" />

            <TouchableOpacity style={styles.button} onPress={props.onDelete.bind(this, props.uid)}>
                Delete
            </TouchableOpacity>

            
            </View>
            
        </View>
    );
};

export default BoxItem;
import 'react-native-gesture-handler';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './components/signup/SignUp';
import Start from './components/home/Start';
import BoxInput from './components/RecipeBoxes/BoxTextInput';
import BoxItem from './components/RecipeBoxes/BoxItem';
import ProfileCard from './components/profilecard/ProfileCard';


export default function App() {
  const [items, setItems] = useState([]);

const addItemHandler = (itemTitle) => {
  setItems((currentItems) => [
    ...items, 
    { uid: Math.random().toString(), value: itemTitle },
  ]);
};

const removeItemHandler = (itemId) => {
  setItems((currentItems) => {
    return currentItems.filter((item) => item.uid !== itemId);
  });
};

function HomeScreen({navigation}) {
  return (
    <View style={styles.container} >
        <Start/>
        <Button
        title="Add Recipe Box"
        onPress={() => navigation.navigate('AddBox')}
      />

      <FlatList 
        keyExtractor={(item, index) => item.uid}
        data={items} 
        renderItem={(itemData) => (
          <BoxItem 
            id = {itemData.item.uid}
            onDelete={removeItemHandler.bind(this, itemData.item.uid)}
            title={itemData.item.value} 
          /> 
        )} 
      />

      <View style={styles.profile}>
        <Button
          title= "View Profile"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
        
    </View>
  );
}

function AddBox() {
  return (
    <View style={styles.container} >
      <BoxInput onAddBox = {addItemHandler} />
    </View>
  );
}

const Stack = createStackNavigator();

  return (
    <NavigationContainer>{
      <Stack.Navigator initialRouteName="Home" style={styles.header}>
        <Stack.Screen 
          name="Home" component={HomeScreen} 
          options={{
            title: 'Recipe Box',
            headerStyle: {
              backgroundColor: '#ff8c00',
            },
            headerTitleStyle: {
              fontFamily: 'Marker Felt, Arial, sans-serif',
              fontSize: 36,
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'white',
            },
          }}
        />
        <Stack.Screen 
          name="AddBox" component={AddBox} 
          options={{
            title: 'Add a Recipe Box',
          }}
        />
        <Stack.Screen
          name="Profile" component={SignUp}
          options={{
            title: 'Profile'
          }}
        />
      </Stack.Navigator>
}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },

  header: {
    backgroundColor: 'orange',
    paddingBottom: 20,
    paddingTop: 20,
  },

  profile: {
    marginBottom: 30,
  }
});

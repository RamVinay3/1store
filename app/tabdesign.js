import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feed from './feed'
import Home from './home'
import Profile from './profile'

import { NavigationContainer } from '@react-navigation/native';
import Search from './search';


const Tab = createMaterialBottomTabNavigator();

 class tabdesign extends Component {
    render() {
        return (
            // <NavigationContainer>
            <Tab.Navigator
  initialRouteName="Feed"
  activeColor="#f0edf6"
  // inactiveColor="#3e2465"
  
>
      <Tab.Screen name="Home" component={Home}   options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}/>
      <Tab.Screen name="Search" component={Search}   options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26} />
          ),
        }}/>
        <Tab.Screen name="Cart" component={Feed}   options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart" color={color} size={26} />
          ),
        }}/>
       

      <Tab.Screen name="History" component={Profile}
      options={{
        tabBarLabel: 'History',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="history" color={color} size={26} />
        ),
      }} />
    </Tab.Navigator>
          // </NavigationContainer>
         
        )
    }
}
const styles = StyleSheet.create({  
    
    tab:{
        backgroundColor:"orange",
        width:'100%',
        height:'23%',
        justifyContent:'flex-end',
        position:'absolute'
      
        
        
    },
    bar:{
        // position: 'absolute', //Here is the trick
        // bottom: "20%", //Here is the trick
        background:"red",
        width:'100%',
        height:'23%',

    }
}) 
export default tabdesign

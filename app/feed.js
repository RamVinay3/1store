import React, { Component } from 'react';
import { AppRegistry, View,Text, Image, StyleSheet,Button } from 'react-native';
import { black } from 'react-native-paper/lib/typescript/styles/colors';
import Home from './home'

 class feed extends Component {
    render() {
        return (
            <View style={styles.div}>
           <Image style={ styles.img}source={require('./empty.png')} />
           <Text style={styles.empty}>Your Cart Is Empty </Text>
           <View style={styles.but}><Button
   onPress={() => this.props.navigation.navigate('Home')}  
  title=" menu"
  color="#27B839"
/></View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    
    div:{
        position:'absolute',
        top:260,
        left:100
    },
   img:{
       height:175,
       width:175,
      
   },
   but:{
        width:100,
        height:40,
        marginLeft:30,
        marginTop:10

   },
   empty:{
       color:"black",
       fontSize:20
   }
  });

export default feed

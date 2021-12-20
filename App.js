import 'react-native-gesture-handler';
import React from 'react';
import auth from '@react-native-firebase/auth'
import { Text, View,StyleSheet } from 'react-native';
import Login from './login'
import Phone from './phone'
import Google from './google'
import Statusbar from'./statusbar'
import Tab from './app/tabdesign'
import { GoogleSignin } from '@react-native-google-signin/google-signin';

// import MySwitchNavigator from './app/switch';
import { createSwitchNavigator, createStackNavigator,createAppContainer } 
  from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import Mapping from './mapping';
const MySwitchNavigator = createSwitchNavigator({
  routeOne: Login,
  routeTwo: Tab,
  // routeThree: ScreenThree,
}, {
  initialRouteName: 'routeOne',
});
const AppContainer=createAppContainer(MySwitchNavigator)
// import { createAppContainer } from 'react-navigation';
// import MySwitch from './app/switch';
var k=0;

auth().onAuthStateChanged((user)=>{
  console.log("user is",user)
  if(user){
    // auth().signOut();
    // GoogleSignin.revokeAccess()
    // GoogleSignin.signOut();
k=1;
  }
})

const App = () => {
  return <Mapping/>
  // if(k==0){
  //   return (
     
  //     //  <Login></Login>
  //     // <MySwitch/>
  //     <NavigationContainer>
  //       <AppContainer/>
  //     </NavigationContainer>
  //     // <createAppContainer/>
  //     // <Text>hlooo</Text>
  //    ) 
  // }else{
  //   return (
  //     <NavigationContainer>
  //  <Tab/>

  //     </NavigationContainer>

  //   )
  // }
    
 
} 
export default App;
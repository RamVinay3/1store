import React, { Component } from 'react'
import { Button, TextInput,View } from 'react-native';
import auth from '@react-native-firebase/auth';
var k=0;
class PhoneSignIn extends Component  {
  // If null, no SMS has been sent

  constructor(props) {
      super(props)
  
      this.state = {
           confirm:null,
           code:''
      }
  }
  

  // Handle the button press
  signInWithPhoneNumber=async()=>{
    const confirmation = await auth().signInWithPhoneNumber('+91 9390351322');
   this.setState({confirm:confirmation})
  }

   confirmCode=async()=> {
       console.log(this.state.code);
    try {
      await confirm.confirm(this.state.code);
      
    } catch (error) {
      console.log('Invalid code.');
      k=2;
    }
  }

render(){
    if(k==2){
        return(
            <Text>signned in</Text>
        )
    }
    if (!this.state.confirm) {
        return (
          <Button
            title="Phone Number Sign In"
            onPress={this.signInWithPhoneNumber}
          />
        );
      }
    
      return (
        <View>
        <TextInput value={this.state.code} onChangeText={(code) =>{ this.setState({code})}} />
        <Button title="Confirm Code" onPress={this.confirmCode} />
        </View>
      );
}
}
export default PhoneSignIn;
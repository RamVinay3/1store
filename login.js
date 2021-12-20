import React, { Component } from 'react'
import { StyleSheet, Button, View, SafeAreaView, Text, Alert,TextInput } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Google from './google'
class login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:''
        }
    }

    show=()=>{
        console.log(this.state.email,this.state.password);
    }
   
    render() {
        return (
            <View style={styles.container}>
                <TextInput value={this.state.email} style={styles.input} onChangeText={(email)=>{this.setState({email})}}></TextInput>
                <TextInput  value={this.state.password} style={styles.input1} onChangeText={(password)=>{this.setState({password})}}></TextInput>
                <View style={styles.button}><Button onPress={this.show} title="Login" color="red"  style={styles.button} /></View>
                <Google props={this.props} ></Google>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    input:{
        height: 40,marginBottom:"5%", width:"80%",borderColor: 'gray',borderWidth: 1
    },
    input1:{
        height: 40, marginBottom:"5%", width:"80%",borderColor: 'gray',borderWidth: 1
    },
    container:{
        position:"absolute",top:375,
        marginLeft:"10%",
        flex:1,
        width:"100%",
        marginRight:"5%"
    },
    button:{
        marginRight:"20%"
    },
   
  
})

export default login

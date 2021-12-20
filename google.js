import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React,{Component} from 'react';
import { StyleSheet,Button,View,Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import Tab from './app/tabdesign'
// import Switch from './app/switch'
var k=0;
GoogleSignin.configure({
  webClientId: "442040141369-9b28slgkes0tkl6b6qk91l57mdbg6h10.apps.googleusercontent.com",
});

 
 class google extends Component {
     constructor(props) {
     super(props)
 
     this.state = {
          conainer:null,
          user:'',
          intialising:true,
          k:0
          
     }
 }
 componentDidMount=()=>{
    // console.log("props in google.js",this.props)
}
//  componentDidMount() {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber;
//   }
 
//   onAuthStateChanged=(user)=> {
//     this.setState({user:user})
//     if (this.state.initializing){
//         this.setState({intialising:false})
//     };
//   }
 
    onGoogleButtonPress=async()=> {
        // Get the users ID token
      
            
            const { idToken } = await GoogleSignin.signIn();
      
            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            k=1;
            // Sign-in the user with the credential
            return auth().signInWithCredential(googleCredential);
            
        
        
        
    }
    render() {
        
        // if(k==1){
        //     return <Tab></Tab>
        // }
        return (
            <View style={styles.but}><Button
            title="Google Sign-In"
            onPress={() => this.onGoogleButtonPress().then(() =>{
                this.props.props.navigation.navigate('routeTwo')
                this.setState({k:1})
                this.state.k=1
            } )} /></View>
        )
    }
}
const styles=StyleSheet.create({
   but:{
       width:300,

       marginTop:10
   }
   
  
})

export default google

import React, { Component } from 'react'
import { Text, View,Button,Alert,Image,StyleSheet } from 'react-native'
import storage from '@react-native-firebase/storage';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { ProgressBar, Colors } from 'react-native-paper';

// import  ProgressBarAndroid from '@react-native-community/progress-bar-android';
// import * as Progress from 'react-native-progress';


 class notification extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          image:'',
          Uploading:false,
          Transfer:0,
          uri:"",
          down:""

       }
     }
    
      select_image=()=>{
        const options = {
            maxWidth: 2000,
            maxHeight: 2000,
            selectionLimit: 2,
            storageOptions: {
              skipBackup: true,
              path: 'images'
            }
          };
          launchImageLibrary(
          options,
            (response) => {
                console.log(response.assets.length>options.selectionLimit)
                if(response.didCancel==true){
                  console.log("hello,you cancelled the picking");
                  // this.setState
                }
                
                else{
                     console.log( response);
                    this.setState({uri: response.assets[0].uri});
                }
             
              // this.state.uri=response.assets[0].uri;
              // console.log(this.state.uri)
            },
          )
          //cam working fine
    //   launchCamera(options,(response)=>{
    //     console.log('Response = ', response);
    //     if (response.didCancel) {
    //         console.log('User cancelled image picker');
    //       } else if (response.error) {
    //         console.log('ImagePicker Error: ', response.error);
    //       } else if (response.customButton) {
    //         console.log('User tapped custom button: ', response.customButton);
    //       } else {
    //         const source = { uri: response.uri };
        
    //         // You can also display the image using data:
    //         // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        
    //         console.log(source)
    //       }

    //   })



        // console.log("you clicked on me")

       } ;
     componentDidMount(){
      
        
        const reference = storage().ref('vinay');


        reference.getDownloadURL().then((url)=>this.setState({down:url}))
    
   
     }
       
       uploadImage = async () => {
        if(this.state.uri){
              // const { uri } = this.state.image;
        const filename = this.state.uri.substring(this.state.uri.lastIndexOf('/') + 1);
        // const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
        const uploadUri = this.state.uri;
       this.setState({Uploading:true});
        this.setState({Transfer:0});
        const task = storage()
          .ref(filename)
          .putFile(uploadUri);
        // set progress state
        task.on('state_changed', snapshot => {
          this.setState({Transfer:
            Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
        });
        });
        try {
          await task;
        } catch (e) {
          console.error(e);
        }
       this.setState({Uploading:false});
        // console.log(
        //   'Photo uploaded!',
        //   'Your photo has been uploaded to Firebase Cloud Storage!'
        // );
        Alert.alert("image has been uploaded")
        this.setState({image:null});
        }
        else
        console.log("you didn't select a pic")
      };

     
     

        
    render() {
       

  
        return (
            <View style={{display:'flex',justifyContent:'space-between',flexDirection:'column',margin:10}}>
                 <Button 
                title="choose image"
                color="red"
                accessibilityLabel="Learn more about this purple button" 
                onPress={this.select_image}>
                    </Button>    
                    <View>
                    {/* <Text>pic is displayed</Text> */}
                    {(this.state.uri) ? 
                       (<Text>selected</Text>): <Text>not selected image</Text>}
                    </View>
                    
                    <View>
                      {(this.state.Uploading)?(   <Text style={{backgroundColor:'blue',color:'white',fontStyle:'italic',height:20}}>uploading the picture</Text>):(<Button 
                      title="upload"
                      color="green"
                      accessibilityLabel="Learn more about this purple button" 
                      onPress={this.uploadImage}>
                          </Button> )
                      }
                    </View>
                      <View>
                      {(this.state.down)?(<Image style ={{width:200,height:300,backgroundColor:'black'}}source={{uri:this.state.down}}></Image>):(null)}
                      </View>
                
                  
                   </View>
        )
    }
}
const styles = StyleSheet.create({

  imageBox:{
    width: 300,
    height: 300
  }
})
export default notification

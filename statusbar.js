import React, { Component } from 'react'
import {  
    View,StyleSheet,AppRegistry,StatusBar  
} from 'react-native'  

 class statusbar extends Component {
    render() {
        return (
            <View style = {styles.container}>  
                <StatusBar  
                    backgroundColor = "skyblue"  
                    barStyle = "dark-content"   
                    hidden = {false}    
                    translucent = {true}  
                />  
            </View>  
        )
    }
}
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
    }  
})  

export default statusbar

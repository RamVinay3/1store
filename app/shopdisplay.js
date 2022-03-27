// import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Text, View,TextInput , StyleSheet,TouchableHighlight,Button} from 'react-native'

export class Shopdisplay extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:this.props.name,
         address:this.props.address,

      }
    }
    componentDidMount(){
        console.log(this.props,'shopdisplay')
    }
    
  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.name}>{this.props.name}</Text>
        <Text style={styles.address}>{this.props.address}</Text>
        {/* <Button style={styles.buy}>Buy</Button> */}
                  <View style={styles.buy}>  
                  <View></View>  
            <View>
            <Button
            // onPress={onPressLearnMore}
            title="Buy"
            color="green"
            accessibilityLabel="Learn more about this purple button"
            />
            </View>
            </View>

      </View>
    )
  }
}
const styles = StyleSheet.create({
   card:{
    backgroundColor:'black',
    //    position:'relative',
        // color:'white',
        // flex:0.15,
        margin:15,
        width:"90%",
        height:120,
        borderRadius:5
        
   },
   name:{
       fontSize:18,
    //    position:'absolute',
    //    top:10,
    color:'white',
    padding:10
   },
   address:{
    //    position:'absolute',
    color:'white',
    // top:40,
    padding:10
    
   },
   buy:{
    color:'white',
    width:'18%',
    // textAlign:'right'
    position:'absolute',
    // bottom:0,
    top:'40%',
    right:10,
    display:'flex',
    justifyContent:'space-between'
   }
})

export default Shopdisplay
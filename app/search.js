import React, { Component } from 'react'
import { Text, View,TextInput , StyleSheet,TouchableHighlight} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import firestore from '@react-native-firebase/firestore';
import Shopdisplay from './shopdisplay';
import { ScrollView } from 'react-native-gesture-handler';


export class Search extends Component {
    

    constructor(props) {
        super(props)

        this.state = {
           shops:{},
        //    x:1
        }
    }
    
     onResult=(QuerySnapshot) =>{
        // const userDocument = firestore().collection('Users').doc('YQvyV8mBDH9IbfI1TczL');
        console.log('Got Users collection result.');
      }
      
     onError=(error)=> {
        console.error(error);
      }
        


    find=()=>{
        let k={}
        // const userDocument = firestore().collection('Shop').doc('YQvyV8mBDH9IbfI1TczL')
        // .onSnapshot(documentSnapshot => {
        //   console.log('User data: ', documentSnapshot.data());
        // this.setState({shops:documentSnapshot.data().details})
        // // this.setState({x:0})
        // //   this.state.shops= documentSnapshot.data().details
        // //   console.log(k.name1)
        // //   return <Shopdisplay  address={k.address} name={k.name1}/>
        // });
                    firestore()
            .collection('Shop')
            .get()
            .then(querySnapshot => {
                console.log('Total shops: ', querySnapshot.size);

                querySnapshot.forEach(documentSnapshot => {
                // console.log('Shop ID: ', documentSnapshot.id, documentSnapshot.data());
                k[documentSnapshot.id]=documentSnapshot.data()
                // this.setState({shops:documentSnapshot.data().details})
                });
                this.setState({shops:k},()=>{console.log(this.state.shops)})
                // Object.values(this.state.shops).forEach((value,key)=>{console.log(key,value)})
                // console.log(Object.values(this.state.shops))
                
            });
        // doc('YQvyV8mBDH9IbfI1TczL');
        // alert("hello my friend")
        // const userDocument = firestore().collection('Shop').onSnapshot(this.onResult(), this.onError());
        // console.log(userDocument);

    }
    // componentDidUpdate(){
    //     console.log(this.state.shops,'hu');
    // }

    render() {
        console.log("render")
        return (
            <View style={styles.screen}>
             <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
             <TextInput
        style={styles.input}
        placeholder="search the product"
        onChangeText={text => this.setState({text:text})}
        defaultValue={this.state.text}
      />
            <TouchableHighlight
            style={styles.mag}
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() =>this.find()}>
        <MaterialCommunityIcons  name="magnify" color="black" size={36} />
        </TouchableHighlight>
             </View>
             
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.results}>
              
            { (Object.keys(this.state.shops).length>0)?
                <View>
                    {Object.values(this.state.shops).forEach((value,key)=>{
                    
                          <View>
                               <Text>vinay</Text>
                      <Shopdisplay  name={value.details.name1} address={value.details.address} />
                          </View>
                      
                          
                    }) 

                    }
                    {/* <Shopdisplay  name={value.details.name1} address={value.details.address} /> */}
                       <Text>vinay</Text>
                    
                    
                   

                </View>:
                <Text>search for an item</Text>
            }

            </ScrollView>

       {/* <Text style={styles.hello}>{this.state.shops.name1}</Text> */}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    input:{
        height:50,
        width:"80%",
        borderWidth:1,
        marginLeft:10,
        fontSize:15
        // position:'absolute',
        // top:'2%',
        // left:'3%'


    },
    hello:{
        // position:'absolute',
        // top:'35%'
    },
    screen:{
        // flex:1,
        // flexDirection:'row'
        marginTop:10,
    },
    mag:{
        // position:'absolute',
        // right:'5%',
        // top:'3%',
        //  flex:1
        // marginTop:10,
       marginRight:20
    },
    results:{
        // backgroundColor:'red',
        // position:'absolute',
        fontSize:50,
        // top:'10%',
        // left:'3%'
    }
})
export default Search

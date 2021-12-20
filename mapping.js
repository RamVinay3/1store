import React, { Component } from 'react'
import { Text, View } from 'react-native'


export class mapping extends Component {
    render() {
        return (
            <View style={{display:'flex',flexDirection:'row'}}>
                {
                [1,2,3,4,5].map((l,i)=>{
                    console.log("l is",l)
                    return(
                    //    <View style={{width:'100px',height:'100',backgroundColor:'red'}}>
                            <Text key={i} >{l}</Text>
                        //    </View>
                    )
                })
                }
            </View>
        )
    }
}

export default mapping

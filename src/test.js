import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import RNRestart from 'react-native-restart'

import { I18nManager } from "react-native";
import { View,Text,FlatList,TouchableOpacity } from "react-native";



export function Test (props){
    useEffect(()=>{
        if(props.rtl){
            I18nManager.allowRTL(true)
            I18nManager.forceRTL(true)
        }
    },[])
return(
    <View>
        <Text>sadasd</Text>
        <TouchableOpacity style={{backgroundColor:'green',width:100,height:50}} onPress={()=>{
            RNRestart.Restart()
        }}>
            <Text>click me </Text>
        </TouchableOpacity>
        <View style={{backgroundColor:'red',width:100,height:100}}></View>
    </View>
)
}
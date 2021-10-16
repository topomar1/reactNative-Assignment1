import React from 'react';
import {View, Text, Image, TouchableOpacity} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function Login({navigation}){
    return <View style={{flex:1, justifyContent: "center", alignItems:"center"}}>
        <Image source={require('../assets/bic.jpeg')}
            style={{width:200, 
            height:200,
            borderRadius:30,
            marginBottom:45,
            transform:[{rotate:"-45deg"}]}}/>
        <Text style={{color:"grey", fontSize:25}}>
            Welcome to
        </Text>
        <Text style={{fontWeight:'bold', fontSize:30, marginBottom:20}}>
            Power Bike Shop
        </Text>

        <TouchableOpacity style={{backgroundColor:"grey",
            padding:10, 
            borderRadius:10, 
            paddingHorizontal:70,
            marginBottom:10,
            flexDirection:"row",
            alignItems:"center"}}>
            <AntDesign name="google" size={24} color="black" />
            <Text style={{color:"white", marginLeft:10}}>
                Login with Gmail
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={{backgroundColor:"black",
            padding:10, 
            borderRadius:10, 
            paddingHorizontal:70,
            flexDirection:"row",
            alignItems:"center"}}>

            <AntDesign name="apple1" size={24} color="white" />
            <Text style={{color:"white", marginLeft:10}}>
                Login with Apple
            </Text>
        </TouchableOpacity >

        <View style={{flexDirection:"row", alignItems:"center"}}>
            <Text style={{marginTop:10, color:"grey"}}>Not a Member? </Text>
            <TouchableOpacity 
                onPress={()=>{navigation.navigate('Home')}}><Text style={{color:"orange",  marginTop:10, fontWeight:"bold"}}>Signup</Text>
            </TouchableOpacity>
        </View>

            
        
        
    </View>;


}
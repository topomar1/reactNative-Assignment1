import React from "react";
import {View, Text} from "react-native";
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


export default function Home(){
    return <View style={{backgroundColor:"white", flex:1}}>
                <View style={{flexDirection:"row", marginTop:50, paddingHorizontal:10, justifyContent:"space-between"}}>
                    <Feather name="menu" size={24} color="black" />
                    <FontAwesome name="motorcycle" size={24} color="black" style={{marginLeft:50}}/>
                    <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                        <Feather name="search" size={24} color="black" />
                        <FontAwesome name="bell-o" size={24} color="black" style={{marginLeft:20}}/>
                    </View>
                </View>
                
                <Text style={{marginLeft:15,marginTop:26, fontWeight:"bold", color:"grey"}}>
                    The World's <Text style={{fontSize:30, fontWeight:"bold", color:"orange"}}>Best Bike</Text>
                </Text>

                <Text style={{fontWeight:"bold", fontSize:23, marginLeft:15}}>Categories</Text>
        
            </View>;
}
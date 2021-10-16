import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";


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

                <Text style={{fontWeight:"bold", fontSize:23, marginLeft:15, marginTop:20}}>Categories</Text>

                <View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginLeft:5}} >
                        <Text style={styles1.sText}>
                            All
                        </Text>
                        <Text style={styles1.sText}>
                            Roadbike
                        </Text>
                        <Text style={styles1.sText}>
                            Mountain
                        </Text>
                        <Text style={styles1.sText}>
                            Urban
                        </Text>
                        <Text style={styles1.sText}>
                            Spike
                        </Text>
                        <Text style={styles1.sText}>
                            Kids
                        </Text>
                        <Text style={styles1.sText}>
                            Others
                        </Text>

                    </ScrollView>
                </View>

            </View>;
            
}

const styles1 = StyleSheet.create({
    sText: {
      backgroundColor:'#d3d3d3',
      color: 'grey',
      borderRadius:10,
      margin:10,
      fontSize:15,
      padding:10,
      paddingRight:20,
      paddingLeft:20,
      overflow:"hidden"
      
      

    },

    
  });
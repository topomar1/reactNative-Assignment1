import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import { Feather } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome, Entypo,SimpleLineIcons} from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";


export default function Home({navigation}){
    return <View style={{backgroundColor:"white", flex:1}}>
                    
                <View style={{flexDirection:"row", marginTop:50, paddingHorizontal:10, justifyContent:"space-between"}}>
                    <Feather name="menu" size={24} color="black" />
                    <FontAwesome name="motorcycle" size={24} color="black" style={{marginLeft:50}}/>
                    <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                        <Feather name="search" size={24} color="black" />
                        <FontAwesome name="bell-o" size={24} color="black" style={{marginLeft:20}}/>
                    </View>
                    
                </View>
                
                <Text style={{marginLeft:15,marginTop:26, fontWeight:"bold", color:"#B6B6B6"}}>
                    The World's <Text style={{fontSize:30, fontWeight:"bold", color:"#FE7F39"}}>Best Bike</Text>
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

                
                <ScrollView> 

                        <View style={{flexDirection:"row", justifyContent:"space-around", marginTop:20}}>
                            <View style={{backgroundColor:"#F5F5F5", height:250, width:160, borderRadius:15, alignItems:"center", justifyContent:"center"}}>
                                <Image source={require("../assets/bmxx.png")} style={{width:200, position:"absolute",resizeMode:"contain",}}/>
                                <Text style={{position:"absolute", bottom:35, color:"#C7C7C7", marginBottom:5, fontWeight:"bold"}}>Pinarello Bike</Text>
                                <Text style={{position:"absolute", bottom:15,fontWeight:"bold",fontSize:20}}><Text style={{color:"orange", fontWeight:"700", }}>$ </Text>1,700.00</Text>
                            </View>
                            <View style={{backgroundColor:"#F5F5F5", height:250, width:160,borderRadius:15,alignItems:"center", justifyContent:"center"}}>
                                <Image source={require("../assets/bm.png")} style={{width:200, position:"absolute",resizeMode:"contain",}}/>
                                <Text style={{position:"absolute", bottom:35, color:"#C7C7C7", marginBottom:5, fontWeight:"bold"}}>Guy Man Bike</Text>
                                <Text style={{position:"absolute", bottom:15,fontWeight:"bold",fontSize:20}}><Text style={{color:"orange", fontWeight:"700", }}>$ </Text>1,500.00</Text>

                            </View>

                        </View>

                        <View style={{flexDirection:"row", justifyContent:"space-around", marginTop:20}}>
                            <View style={{backgroundColor:"#F5F5F5", height:250, width:160, borderRadius:15, alignItems:"center", justifyContent:"center"}}>
                                <Image source={require("../assets/bmn.png")} style={{width:"90%", position:"absolute",resizeMode:"contain",}}/>
                                <Text style={{position:"absolute", bottom:35, color:"#C7C7C7", marginBottom:5, fontWeight:"bold"}}>Brompton Bike</Text>
                                <Text style={{position:"absolute", bottom:15,fontWeight:"bold",fontSize:20}}><Text style={{color:"orange", fontWeight:"700", }}>$ </Text>1,200.00</Text>
                            </View>
                            <View style={{backgroundColor:"#F5F5F5", height:250, width:160,borderRadius:15,alignItems:"center", justifyContent:"center"}}>
                                <Image source={require("../assets/dnn.png")} style={{width:"98%", position:"absolute",resizeMode:"contain",}}/>
                                <Text style={{position:"absolute", bottom:35, color:"#C7C7C7", marginBottom:5, fontWeight:"bold"}}>Norco Bike</Text>
                                <Text style={{position:"absolute", bottom:15,fontWeight:"bold",fontSize:20}}><Text style={{color:"orange", fontWeight:"700", }}>$ </Text>2,700.00</Text>
                       
                            </View>

                        </View>

                        <View>
                            
                        </View>

                        


                </ScrollView>


                    <View style={{position:"absolute",bottom:0,width:"100%",height:70, backgroundColor:"#F5F5F5", flexDirection:"row", alignItems:"center"}}>
                        <TouchableOpacity 
                        onPress={()=>{navigation.navigate('Login')}}>
                            <Entypo name="home" size={30} color="orange" style={{paddingLeft:40}}/>

                        </TouchableOpacity>
                        
                        <View style={{backgroundColor:"black", padding:15, borderRadius:40, marginLeft:140, position:"absolute", left:40, top:-15}}>
                            <SimpleLineIcons name="microphone" size={24} color="white"/>
                        </View>
                        
                        <TouchableOpacity 
                        style={{marginLeft:290}} onPress={()=>{navigation.navigate('Cart')}}>
                                <SimpleLineIcons name="bag" size={25} color="black" style={{marginLeft:"auto", paddingRight:40}}/>

                        </TouchableOpacity>
                        
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
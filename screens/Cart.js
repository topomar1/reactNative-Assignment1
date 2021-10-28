import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import { Feather, Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome, Entypo,SimpleLineIcons} from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";


export default function Cart({navigation}){
    return <View style={{backgroundColor:"white", flex:1}}>
                    
                <View style={{flexDirection:"row", marginTop:50,paddingHorizontal:20}}>
                    <TouchableOpacity
                        onPress={()=>{navigation.navigate('Home')}}
                    >
                        <Ionicons name="arrow-back-outline" size={24} color="black" />
                    </TouchableOpacity>

                    <View style={{justifyContent:"center"}}>
                        <Text style={{marginLeft:130, fontWeight:"bold"}}>Cart List</Text>  
                        <Text style={{marginLeft:130}}>(3 items)</Text>  
                    </View>
            
                </View>


                <View style={{marginLeft:10,marginRight:10,marginTop:20}}>
                    <View style={{flexDirection:"row"}}>
                        <View style={{backgroundColor:"#F5F5F5", height:100, width:100, borderRadius:15, alignItems:"center", justifyContent:"center"}}>
                            <Image source={require("../assets/bmxx.png")} style={{width:100, position:"absolute",resizeMode:"contain",}}/>
                        </View>

                        <View>
                            <Text style={{marginLeft:20, marginTop:10}}>Pinarello Bike</Text>
                            <Text style={{marginLeft:20, marginTop:15, color: 'grey', fontSize:10}}>Mountain Bike</Text>
                            <Text style={{marginLeft:20, marginTop:15,fontWeight:"bold",fontSize:20}}><Text style={{color:"orange", fontWeight:"700", }}>$ </Text>1,700.00</Text>

                        </View>

                        <View style={{marginRight:40}}>
                            <Ionicons name="ios-trash" size={24} color="orange" style={{paddingLeft:150}}/>

                            <View style={{flexDirection:"row", paddingHorizontal:30,alignItems: "center",justifyContent: "center", marginTop:40, marginLeft:70}}>
                                <Entypo name="circle-with-minus" size={25} color="black" style={{paddingRight:10}}/>
                                <Text style={{fontWeight:"bold",}}>1</Text>
                                <Entypo name="circle-with-minus" size={25} color="orange" style={{paddingLeft:10}}/>
                            </View>
                            
                        </View>


                    </View>

                    
                    <View style={{flexDirection:"row", marginTop:30}}>
                        <View style={{backgroundColor:"#F5F5F5", height:100, width:100, borderRadius:15, alignItems:"center", justifyContent:"center"}}>
                            <Image source={require("../assets/bmn.png")} style={{width:100, position:"absolute",resizeMode:"contain",}}/>
                        </View>

                        <View>
                            <Text style={{marginLeft:20, marginTop:10}}>Brompton Bike</Text>
                            <Text style={{marginLeft:20, marginTop:15, color: 'grey', fontSize:10}}>Road Bike</Text>
                            <Text style={{marginLeft:20, marginTop:15,fontWeight:"bold",fontSize:20}}><Text style={{color:"orange", fontWeight:"700", }}>$ </Text>1,200.00</Text>

                        </View>

                        <View style={{marginRight:40}}>
                            <Ionicons name="ios-trash" size={24} color="orange" style={{paddingLeft:150}}/>

                            <View style={{flexDirection:"row", paddingHorizontal:30,alignItems: "center",justifyContent: "center", marginTop:40, marginLeft:70}}>
                                <Entypo name="circle-with-minus" size={25} color="black" style={{paddingRight:10}}/>
                                <Text style={{fontWeight:"bold",}}>1</Text>
                                <Entypo name="circle-with-minus" size={25} color="orange" style={{paddingLeft:10}}/>
                            </View>
                            
                        </View>


                    </View>


                    <View style={{flexDirection:"row", marginTop:30}}>
                        <View style={{backgroundColor:"#F5F5F5", height:100, width:100, borderRadius:15, alignItems:"center", justifyContent:"center"}}>
                            <Image source={require("../assets/dnn.png")} style={{width:100, position:"absolute",resizeMode:"contain",}}/>
                        </View>

                        <View>
                            <Text style={{marginLeft:20, marginTop:10}}>Norco Bike</Text>
                            <Text style={{marginLeft:20, marginTop:15, color: 'grey', fontSize:10}}>Urban Bike</Text>
                            <Text style={{marginLeft:20, marginTop:15,fontWeight:"bold",fontSize:20}}><Text style={{color:"orange", fontWeight:"700", }}>$ </Text>2,700.00</Text>

                        </View>

                        <View style={{marginRight:40}}>
                            <Ionicons name="ios-trash" size={24} color="orange" style={{paddingLeft:150}}/>

                            <View style={{flexDirection:"row", paddingHorizontal:30,alignItems: "center",justifyContent: "center", marginTop:40, marginLeft:70}}>
                                <Entypo name="circle-with-minus" size={25} color="black" style={{paddingRight:10}}/>
                                <Text style={{fontWeight:"bold",}}>1</Text>
                                <Entypo name="circle-with-minus" size={25} color="orange" style={{paddingLeft:10}}/>
                            </View>
                            
                        </View>


                    </View>

                </View>



                <View style={{backgroundColor:"#F5F5F6", height:180, borderRadius:20, marginTop:20, marginLeft:10, marginRight:10, marginTop:40}}>

                    <View style={{flexDirection:"row", justifyContent:"space-between",padding:20}}>
                        <Text style={{fontSize:15,}}>Subtotal</Text>
                        <Text style={{fontWeight:"bold"}}><Text style={{color:"orange", fontWeight:"bold", }}>$ </Text>5,600.00</Text>

                    </View>
                    <View style={{flexDirection:"row", justifyContent:"space-between",padding:20}}>
                        <Text style={{fontSize:15,}}>Shipping Fee</Text>
                        <Text style={{fontWeight:"bold"}}><Text style={{color:"orange", fontWeight:"bold", }}>$ </Text>1,000 .00</Text>

                    </View>

                    <Text> ..................................................................................................</Text>

                    <View style={{flexDirection:"row", justifyContent:"space-between",paddingHorizontal:20,paddingVertical:10 }}>
                        
                        <Text style={{fontSize:20, fontWeight:"bold"}}>Total</Text>
                        <Text style={{fontWeight:"bold"}}><Text style={{color:"orange", fontWeight:"bold", }}>$ </Text>6,600.00</Text>

                    </View>


                </View>


                <View style={{backgroundColor:"#FB7121", height:70, borderRadius:20, marginTop:20, marginLeft:10, marginRight:10, justifyContent:"center", alignItems: "center"}}>
                    <Text style={{fontSize:20,color:"white"}}>Proceed to Checkout</Text>

                </View>



                
                


                <View style={{position:"absolute",bottom:0,width:"100%",height:70, backgroundColor:"#F5F5F5", flexDirection:"row", alignItems:"center"}}>
                    <TouchableOpacity >
                        <Entypo name="home" size={30} color="orange" style={{paddingLeft:40}}/>

                    </TouchableOpacity>
                        
                    <View style={{backgroundColor:"black", padding:15, borderRadius:40, marginLeft:140, position:"absolute", left:40, top:-15}}>
                        <SimpleLineIcons name="microphone" size={24} color="white"/>
                    </View>


                    <TouchableOpacity 
                        style={{marginLeft:290}} >
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
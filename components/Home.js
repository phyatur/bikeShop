import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome, SimpleLineIcons, AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import CartList from "./CartList";


export default function Home ({navigation})  {
    return(
            <View style={{flex: 1, backgroundColor:'white'}}>
                
                <View style={{flexDirection: "row", paddingTop: 55, paddingHorizontal: 20, justifyContent: "space-between", alignItems: "center",  }}>
                    <TouchableOpacity>
                        <View><Ionicons name='ios-menu-outline' size={24} color='black' />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{paddingLeft: 40,}}><FontAwesome name='motorcycle' size={24} color='black' />
                        </View>
                    </TouchableOpacity>

                    <View style={{flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity>
                        <View><AntDesign name='search1' size={20} color='black' />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity> 
                        <View style={{paddingLeft: 15,}}><Ionicons name='notifications-outline' size={20} color='black' />
                        </View>
                    </TouchableOpacity>
                    </View>
                    </View>

                    <View style={{paddingHorizontal: 20, paddingVertical: 15}}>
                        <Text style={{color: 'rgba(0,0,0,0.4)', fontSize: 24}}>The World's <Text style={{color: 'orange',fontSize: 30,  fontWeight: '800'}}>Best Bike</Text></Text>
                        <Text style={{ marginTop: 25, fontSize: 20,  fontWeight: '800'}}>Categories</Text>
                    </View>

                    <View style={{flexDirection: 'row',}}>
                            <TouchableOpacity>
                                <View style={{marginHorizontal: 20, backgroundColor: '#e3e3e3', height: 45, width: 50, borderRadius: 15, }}>
                                    
                                <Text style={{color: 'orange', fontSize: 20, textAlign: "center", lineHeight: 50}}>All</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={{marginRight: 20, backgroundColor: '#e3e3e3', height: 45, width: 100, borderRadius: 15, }}>
                                    
                                <Text style={{color: 'rgba(0,0,0,0.4)', fontSize: 20, textAlign: "center", lineHeight: 50}}>Roadbike</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={{marginRight: 20, backgroundColor: '#e3e3e3', height: 45, width: 100, borderRadius: 15, }}>
                                    
                                <Text style={{color: 'rgba(0,0,0,0.4)', fontSize: 20, textAlign: "center", lineHeight: 50}}>Mountain</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={{marginRight: 20, backgroundColor: '#e3e3e3', height: 45, width: 75, borderRadius: 15, }}>
                                    
                                <Text style={{color: 'rgba(0,0,0,0.4)', fontSize: 20, textAlign: "center", lineHeight: 50}}>Urban</Text>
                                </View>
                            </TouchableOpacity>
                    </View>


                    <View style={{padding: 20, flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around"}}>
                        {/* 1st Card */}
                        <TouchableOpacity>
                            <View style={{backgroundColor: '#e3e3e3', borderRadius: 20 ,height: 250, width: 170, alignItems: "center", marginBottom: 25,}}>

                                

                                <View>
                                    <Image style={{height: 150, width: 140, marginTop: 18, borderRadius: 20,  position: "relative"}} source={{uri: "https://m.media-amazon.com/images/I/81wGn2TQJeL._SX425_.jpg"}}/>
                                </View>

                                <View>
                                    <View style={{position: "absolute", right: -60, top: -140,}}>
                                    <MaterialIcons name="favorite-border" size={24} color="orange" />
                                    </View>
                                </View>
                            

                            <View style={{flexDirection: "column", alignItems: "center",marginTop: 25, }}>
                                <View>
                                    <Text style={{fontSize: 20, fontWeight: '400', color:'rgba(0,0,0,0.4)',}}>
                                        Pinarollo Bike
                                    </Text>
                                </View>
                                <View>
                                    <Text style={{fontSize: 20, fontWeight: '700',}}>
                                        <Text style={{color: 'orange',}}>$ </Text>1,700.00
                                    </Text>
                                </View>
                            </View>
                        </View>
                            
                        </TouchableOpacity>
                        {/* 2nd Card */}
                        <TouchableOpacity>
                            <View style={{backgroundColor: '#e3e3e3', borderRadius: 20 ,height: 250, width: 170, alignItems: "center", marginBottom: 25,}}>

                                

                                <View>
                                    <Image style={{height: 150, width: 140, marginTop: 18, borderRadius: 20,  position: "relative"}} source={{uri: "https://m.media-amazon.com/images/I/81wGn2TQJeL._SX425_.jpg"}}/>
                                </View>

                                <View>
                                    <View style={{position: "absolute", right: -60, top: -140,}}>
                                    <MaterialIcons name="favorite-border" size={24} color="#e3e3e3" />
                                    </View>
                                </View>
                            

                            <View style={{flexDirection: "column", alignItems: "center",marginTop: 25, }}>
                                <View>
                                    <Text style={{fontSize: 20, fontWeight: '400', color:'rgba(0,0,0,0.4)',}}>
                                        Brompton Bike
                                    </Text>
                                </View>
                                <View>
                                    <Text style={{fontSize: 20, fontWeight: '700',}}>
                                        <Text style={{color: 'orange',}}>$ </Text>1,500.00
                                    </Text>
                                </View>
                            </View>
                        </View>
                            
                        </TouchableOpacity>
                        {/* 3rd Card */}
                        <TouchableOpacity>
                            <View style={{backgroundColor: '#e3e3e3', borderRadius: 20 ,height: 250, width: 170, alignItems: "center", marginBottom: 25,}}>

                                

                                <View>
                                    <Image style={{height: 150, width: 140, marginTop: 18, borderRadius: 20,  position: "relative"}} source={{uri: "https://m.media-amazon.com/images/I/81wGn2TQJeL._SX425_.jpg"}}/>
                                </View>

                                <View>
                                    <View style={{position: "absolute", right: -60, top: -140,}}>
                                    <MaterialIcons name="favorite-border" size={24} color="#e3e3e3" />
                                    </View>
                                </View>
                            

                            <View style={{flexDirection: "column", alignItems: "center",marginTop: 25, }}>
                                <View>
                                    <Text style={{fontSize: 20, fontWeight: '400', color:'rgba(0,0,0,0.4)',}}>
                                        Schwinn Bike
                                    </Text>
                                </View>
                                <View>
                                    <Text style={{fontSize: 20, fontWeight: '700',}}>
                                        <Text style={{color: 'orange',}}>$ </Text>1,200.00
                                    </Text>
                                </View>
                            </View>
                        </View>
                            
                        </TouchableOpacity>
                        {/* 4th Card */}
                        <TouchableOpacity>
                            <View style={{backgroundColor: '#e3e3e3', borderRadius: 20 ,height: 250, width: 170, alignItems: "center", marginBottom: 25,}}>

                                

                                <View>
                                    <Image style={{height: 150, width: 140, marginTop: 18, borderRadius: 20,  position: "relative"}} source={{uri: "https://m.media-amazon.com/images/I/81wGn2TQJeL._SX425_.jpg"}}/>
                                </View>

                                <View>
                                    <View style={{position: "absolute", right: -60, top: -140,}}>
                                    <MaterialIcons name="favorite-border" size={24} color="#e3e3e3" />
                                    </View>
                                </View>
                            

                            <View style={{flexDirection: "column", alignItems: "center",marginTop: 25, }}>
                                <View>
                                    <Text style={{fontSize: 20, fontWeight: '400', color:'rgba(0,0,0,0.4)',}}>
                                        Norco Bike
                                    </Text>
                                </View>
                                <View>
                                    <Text style={{fontSize: 20, fontWeight: '700',}}>
                                        <Text style={{color: 'orange',}}>$ </Text>980.00
                                    </Text>
                                </View>
                            </View>
                        </View>
                            
                        </TouchableOpacity>
                        

                    </View>
                    

                    {/*  for nav */}
                    
                        <View style={{backgroundColor: '#e3e3e3', width:'100%', height: 80, flexDirection: "row", alignItems: "center", justifyContent: "space-around",}}>
                        <TouchableOpacity>
                            <View>
                            <Ionicons name="home" size={24} color="orange" />
                            </View>
                        </TouchableOpacity>

                        
                            <View style={{backgroundColor: 'black', width: 70, height: 70, borderRadius: '50%', borderColor: '#f2f2f2', borderWidth: 7, marginBottom: 80, }}>

                        <TouchableOpacity>
                            <View style={{padding: 13,}}><MaterialCommunityIcons name="microphone-outline" size={32} color="white" /></View>
                        </TouchableOpacity>

                    </View>

                        <TouchableOpacity onPress={() => { navigation.navigate('CartList')}}>
                        <View>
                        <SimpleLineIcons name="handbag" size={24} color="rgba(0,0,0,0.4)" />
                        </View>
                        </TouchableOpacity>

                    </View >
                    

                    
                </View>

                    
            
    );
};


const style = StyleSheet.create({
    container: {

    },
});
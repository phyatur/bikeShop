import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons, Feather, AntDesign, MaterialCommunityIcons, SimpleLineIcons, } from '@expo/vector-icons'
import Home from './Home';

export default function CartList({navigation}) {
    return (
        <View>
            <View style={{flexDirection: "row", paddingTop: 55, paddingHorizontal: 20, alignItems: "center",  }}>
                <TouchableOpacity onPress={() => { navigation.navigate('Home')}}>
                <View><Ionicons name="arrow-back-sharp" size={24} color="black" /></View></TouchableOpacity>
                <View style={{marginLeft: 139, alignItems: 'center'}}>
                    <Text style={{fontSize: 20,  fontWeight: '600'}}>Cart list</Text>
                    <Text style={{color: 'rgba(0,0,0,0.4)',}}>(3 items)</Text>
                </View>
            </View>

                {/* Cart Items */}
            <View style={{padding: 20}}>
                {/* Cart Inividual Items 1*/}
                <TouchableOpacity>
                <View style={{flexDirection: 'row', marginBottom: 40}}>
                    {/* Cart Inividual Items Image */}
                    <View >
                        <Image style={{backgroundColor: '#e3e3e3', height: 90, width: 90, borderRadius: 10,}} source={{uri: "https://images.unsplash.com/photo-1559348349-86f1f65817fe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJpY3ljbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}} />
                    </View>

                    {/* Midddle Box */}
                    <View style={{marginLeft: 30 ,justifyContent: 'space-between'}}>
                        <Text style={{fontSize: 20, fontWeight: '400',}}> Pinarollo Bike</Text>
                        <Text style={{fontSize: 12, fontWeight: '400', color:'rgba(0,0,0,0.4)',}}> Mountain bike</Text>
                        <Text style={{fontSize: 20, fontWeight: '700',}}>
                        <Text style={{color: 'orange',}}>$ </Text>1,700.00
                        </Text>
                    </View>

                    {/* Last Box */}
                    <View  style={{marginLeft: 30 , justifyContent: 'space-between'}}>
                        <View style={{alignItems: 'flex-end',}}>
                            <Feather name="trash-2" size={24} color="orange" />
                        </View>
                        <View style=
                        {{flexDirection:'row'}}>
                            <AntDesign name="minuscircle" size={24} color="black" />
                            <Text style={{fontSize: 24}}>   1   </Text>
                            <AntDesign name="pluscircle" size={24} color="orange" />
                        </View>
                    </View>
                </View>
                </TouchableOpacity>

                {/* Cart Inividual Items 2*/}
                <TouchableOpacity>
                <View style={{flexDirection: 'row', marginBottom: 40}}>
                    {/* Cart Inividual Items Image */}
                    <View >
                        <Image style={{backgroundColor: '#e3e3e3', height: 90, width: 90, borderRadius: 10,}} source={{uri: "https://images.unsplash.com/photo-1559348349-86f1f65817fe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJpY3ljbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}} />
                    </View>

                    {/* Midddle Box */}
                    <View style={{marginLeft: 30 ,justifyContent: 'space-between'}}>
                        <Text style={{fontSize: 20, fontWeight: '400',}}> Brompton Bike</Text>
                        <Text style={{fontSize: 12, fontWeight: '400', color:'rgba(0,0,0,0.4)',}}> Road bike</Text>
                        <Text style={{fontSize: 20, fontWeight: '700',}}>
                        <Text style={{color: 'orange',}}>$ </Text>1,500.00
                        </Text>
                    </View>

                    {/* Last Box */}
                    <View  style={{marginLeft: 20 , justifyContent: 'space-between'}}>
                        <View style={{alignItems: 'flex-end',}}>
                            <Feather name="trash-2" size={24} color="orange" />
                        </View>
                        <View style=
                        {{flexDirection:'row'}}>
                            <AntDesign name="minuscircle" size={24} color="black" />
                            <Text style={{fontSize: 24}}>   1   </Text>
                            <AntDesign name="pluscircle" size={24} color="orange" />
                        </View>
                    </View>
                </View>
                </TouchableOpacity>


                {/* Cart Inividual Items 3*/}
                <TouchableOpacity>
                <View style={{flexDirection: 'row', marginBottom: 40}}>
                    {/* Cart Inividual Items Image */}
                    <View >
                        <Image style={{backgroundColor: '#e3e3e3', height: 90, width: 90, borderRadius: 10,}} source={{uri: "https://images.unsplash.com/photo-1559348349-86f1f65817fe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJpY3ljbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}} />
                    </View>

                    {/* Midddle Box */}
                    <View style={{marginLeft: 30 ,justifyContent: 'space-between'}}>
                        <Text style={{fontSize: 20, fontWeight: '400',}}> Pinarollo Bike</Text>
                        <Text style={{fontSize: 12, fontWeight: '400', color:'rgba(0,0,0,0.4)',}}> Urban bike</Text>
                        <Text style={{fontSize: 20, fontWeight: '700',}}>
                        <Text style={{color: 'orange',}}>$ </Text>1,200.00
                        </Text>
                    </View>

                    {/* Last Box */}
                    <View  style={{marginLeft: 30 , justifyContent: 'space-between'}}>
                        <View style={{alignItems: 'flex-end',}}>
                            <Feather name="trash-2" size={24} color="orange" />
                        </View>
                        <View style=
                        {{flexDirection:'row'}}>
                            <AntDesign name="minuscircle" size={24} color="black" />
                            <Text style={{fontSize: 24}}>   1   </Text>
                            <AntDesign name="pluscircle" size={24} color="orange" />
                        </View>
                    </View>
                </View>
                </TouchableOpacity>


                <View>
                    <View  style={{padding: 20, height: 200,backgroundColor: '#e3e3e3', borderRadius: 25,justifyContent: 'space-around'}}>
                        <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                            <View>
                                <Text style={{fontSize: 22, color:'rgba(0,0,0,0.4)',}}> Subtotal</Text>
                            </View>

                            <View>
                                <Text style={{fontSize: 20, fontWeight: '700',}}>
                                <Text style={{color: 'orange',}}>$ </Text>3,400.00
                                </Text>
                            </View>
                        </View>

                        <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                            <View>
                                <Text style={{fontSize: 22, color:'rgba(0,0,0,0.4)',}}> Shipping fee</Text>
                            </View>

                            <View>
                                <Text style={{fontSize: 20, fontWeight: '700',}}>
                                <Text style={{color: 'orange',}}>$ </Text>100.00
                                </Text>
                            </View>
                        </View>

                        <View style={{borderStyle: 'dotted', borderWidth: 1,}}>
                        </View>

                        <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                            <View>
                                <Text style={{fontSize: 22, fontWeight: '700',}}> Total</Text>
                            </View>

                            <View>
                                <Text style={{fontSize: 20, fontWeight: '700',}}>
                                <Text style={{color: 'orange',}}>$ </Text>3,500.00
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View>
                <TouchableOpacity style={{backgroundColor: 'orange',padding: 10 , paddingHorizontal: 30, borderRadius: 9, flexDirection: "row", alignItems: "center", marginTop: 30, marginHorizontal: 30}}>   
                <Text style={{fontSize:25, fontWeight: '500', color: 'white', marginLeft: 30,}}>Proceed to Checkout </Text></TouchableOpacity>
                </View>
            </View>
            
                            {/*  for nav */}
            <View>
                        <View style={{backgroundColor: '#e3e3e3', width:'100%', height: 80, flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginTop: 20}}>
                        <TouchableOpacity onPress={() => { navigation.navigate('Home')}} >
                            <View>
                            <Ionicons name="home" size={24} color="rgba(0,0,0,0.4)" />
                            </View>
                        </TouchableOpacity>

                        
                            <View style={{backgroundColor: 'black', width: 70, height: 70, borderRadius: '50%', borderColor: '#f2f2f2', borderWidth: 7, marginBottom: 80,}}>

                        <TouchableOpacity>
                            <View style={{padding: 13,}}><MaterialCommunityIcons name="microphone-outline" size={32} color="white" /></View>
                        </TouchableOpacity>

                    </View>

                        <TouchableOpacity>
                        <View>
                        <SimpleLineIcons name="handbag" size={24} color="orange" />
                        </View>
                        </TouchableOpacity>                    

                    
                </View>
            </View>




        </View>
    )
}

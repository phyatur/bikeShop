import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons'

export default function Home (params)  {
    return(
            <View style={{flex: 1, backgroundColor:'white'}}>
                <View style={{flexDirection: "row", paddingTop: 55, paddingHorizontal: 20, justifyContent: "space-between",  }}>
                    <Ionicons name='ios-menu-outline' size={24} color='black' />
                    <FontAwesome name='motorcycle' size={24} color='black' />
                    <View style={{flexDirection: "row" }}>
                    <AntDesign name='search1' size={20} color='black' />
                    <Ionicons name='notifications-outline' size={20} color='black' />
                    
                    </View>
                </View>

                    
            </View>
    );
};


const style = StyleSheet.create({
    container: {

    },
});
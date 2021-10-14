import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import Home from "./Home";


export default function Login ({navigation})  {
    return(
            <View style={style.container}>
                    <Image style={style.img} source={{uri: "https://images.unsplash.com/photo-1559348349-86f1f65817fe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJpY3ljbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}} />

                <Text style={style.text}> Welcome to </Text>
                <Text style={style.textUnder}> Reefy Bike Shop </Text>
                <TouchableOpacity style={style.touchbtn}>
                        <AntDesign name="google" size={24} color="black" /> 
                        
                <Text style={style.login}>Login With Gmail</Text></TouchableOpacity>
                <TouchableOpacity style={style.touchbtn1}>  
                <AntDesign name="apple1" size={24} color="white" /> 
                <Text style={style.login1}>Login With Apple </Text></TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('Home')}} style={style.signup}>
                <Text style={style.signUp1}>Not a member? <Text style={style.signUp2}>Signup</Text></Text>
            </TouchableOpacity>
            </View>
    );
};

// ADD NEW FONTS

const style = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: 'white' ,
    justifyContent: "center",
    alignItems: "center",   
    
    },
    img: {
        height: 200,
        width: 200,
        borderRadius: 10,
        marginBottom: 30, 
        transform: [{rotate: '-45deg'}],
        marginBottom: 50
    },
    text: {
    color: 'rgba(0,0,0,0.4)',
    fontSize: 24
    },
    textUnder:{
        color: 'black',
        fontSize: 30,
        fontWeight: "600",
        marginBottom: 40,
    },
    touchbtn: {
        backgroundColor: '#e3e3e3',
        padding: 10 ,
        paddingHorizontal: 60,
        borderRadius: 9,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    login: {
        fontSize: 25,
        fontWeight: '200' ,
        marginLeft: 30,
    },
    touchbtn1: {
        backgroundColor: 'black',
        padding: 10 ,
        paddingHorizontal: 60,
        borderRadius: 9,
        flexDirection: "row",
        alignItems: "center",
    },
    login1: {
        fontSize:25,
        fontWeight: '200' ,
        color: 'white',
        marginLeft: 30,

    },
    signup:{
        marginTop: 15.
    },
    signUp1:{

    },
    signUp2:{
        color: 'orange'
    },

});
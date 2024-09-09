import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {Entypo} from '@expo/vector-icons'

const Button = ({title,onPress,icon,color}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button} >
        <Entypo name={icon} size={28} color="white" style={{marginRight:title=="Take picture"?10:0}} />
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    button:{
        height:40,
        flexDirection:'row',
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#9966cc",
        borderRadius:20,
        marginTop:10,
        padding:7
    },
    text:{
        fontWeight:'bold',
        fontSize:16,
        color:"black",
        color:"white"
    }
})
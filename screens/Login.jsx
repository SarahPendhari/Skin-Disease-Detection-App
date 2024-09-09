import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity, Touchable } from 'react-native'
import React from 'react'
import login from '../assets/images/Login.gif'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
    const navigation=useNavigation();
    const goto=()=>{
        navigation.navigate('signup')  
      }
      const tab=()=>{
        navigation.navigate('welcome')
      }
  return (
    <View style={{backgroundColor:"white",flex:1}}>
        <View style={{display:"flex",flexDirection:"row",paddingTop:50,justifyContent:"center"}}>
             <Text style={{fontSize:30,fontWeight:"bold",color:"#9966cc"}}>Login</Text>
        </View>
        <View style={{height:'50%'}}>
          <Image style={{width:'100%',height:'100%',objectFit:"cover"}} source={login} />
        </View>
        <View style={{paddingHorizontal:30,paddingVertical:20,display:"flex",gap:10}}>
            <TextInput placeholder='Karan@gmail,com...'
            style={{
               backgroundColor:"#D8B6FC",
               paddingVertical:5,
               paddingHorizontal:10,
               borderWidth:2,
               borderColor:"blue",
               borderRadius:10,
               borderColor:"#8A2BE2"
            }} />
            <TextInput placeholder='Password'
            style={{
               backgroundColor:"#D8B6FC",
               paddingVertical:5,
               paddingHorizontal:10,
               borderWidth:2,
               borderColor:"blue",
               borderRadius:10,
               borderColor:"#8A2BE2"
            }} />
           <TouchableOpacity onPress={tab}  style={{display:"flex",paddingVertical:10, borderRadius:10,paddingHorizontal:10,justifyContent:"center",alignItems:"center",marginTop:10,backgroundColor:"#9966cc"}}>
              <View style={{display:"flex",flexDirection:"row",gap:10,alignItems:"center",borderRadius:30}}>
                 <Text style={{fontWeight:'bold',color:"white",fontSize:20}}>Login</Text>
              </View>
           </TouchableOpacity>
                <View style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
                    <Text>Don't have Account?</Text>
                    <TouchableOpacity  onPress={goto} >
                        <Text style={{color:"#9966cc"}}> SignUp</Text>
                    </TouchableOpacity>
                </View>
        </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})
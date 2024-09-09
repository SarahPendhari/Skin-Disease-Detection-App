import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import {Camera,CameraType} from 'expo-camera';
import * as MediaLibrary from 'expo-media-library'
import { useEffect, useRef, useState } from 'react';
import homelogo from '../assets/images/skin.gif'
import Button from '../components/Button.jsx';
import { useNavigation } from '@react-navigation/native'

export default function App() {

  const navigation=useNavigation()

  const [hasCameraPermissiom,setHasCameraPermission]=useState(null);
  const [image,setImage]=useState(null);
  const [type,setType]=useState(Camera.Constants.Type.back);
  const [flash,setFlash]=useState(Camera.Constants.FlashMode.off);
  const cameraRef=useRef(null);
  
  useEffect(()=>{
    (async()=>{
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync()
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  },[])

  const saveImage=async()=>{
    if(image){
      try{
        await MediaLibrary.createAssetAsync(image);
        alert("Picture is saved");
        setImage(null);
      }catch(err){
        console.log(err)
      }
    }
  }

  const takePicture= async ()=>{
    if(cameraRef){
      try {
        const data= await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri)
      } catch (error) {
        console.log(error)
      }
    }
  }

  if(hasCameraPermissiom == false){
    return(
      <Text>No acces to camera.</Text>
    )
  } 
  const goto=()=>{
     navigation.navigate('camera')
  }
  return (
    <View style={styles.container}>
      <View style={{display:"flex",flexDirection:"row",paddingTop:30,marginLeft:20}}>
        <Text style={{fontSize:30,fontWeight:"bold"}}>Skin</Text>
        <Text style={{fontSize:30,fontWeight:"bold",color:"#9966cc"}}>Care</Text>
      </View>
      <View style={{height:'45%'}}>
        <Image source={homelogo} style={{height:'100%',width:'100%',objectFit:"cover"}} />
      </View>
      <View style={{paddingHorizontal:20,marginTop:25}}>
        <Text style={{fontSize:20,fontWeight:"bold",color:"#9966cc",textAlign:"justify",marginBottom:10}}>Are you concerned about your skin's health?</Text>
        <Text style={{textAlign:"justify",fontSize:15,fontWeight:500}} >SkinCare is here to help you assess and monitor your skin condition with ease. Our advanced technology enables you to capture and analyze photos for potential skin diseases, providing you with valuable insights and peace of mind.</Text>
      </View>
      <View style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:20}} >
        <TouchableOpacity onPress={goto} >
             <Text style={{backgroundColor:"#9966cc",color:"white",paddingHorizontal:20,paddingVertical:10,fontSize:25,fontWeight:"bold",borderRadius:40}} >Take The Test</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom:15
  },
});

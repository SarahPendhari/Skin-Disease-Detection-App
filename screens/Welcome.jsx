import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { requestPermissionsAsync } from 'expo-media-library';

const {height,width} = Dimensions.get("window")

const Welcome = () => {
 
  const navigate=useNavigation();  
  const goto=()=>{
      navigate.navigate("main")
  }
  const doenButton=({...props})=>{
    return(
      <TouchableOpacity style={styles.doenButton} {...props} >
        <Text style={{fontSize:20,fontWeight:"bold"}} >Done</Text>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
      <Onboarding
      onDone={goto}
      onSkip={goto}
      bottomBarHighlight={false}
      DoneButtonComponent={doenButton}
          pages={[
            {
              backgroundColor: '#fbaed2',
              image: 
              <View style={styles.lottie}>
                 <LottieView style={{flex:1}} source={require('../assets/animations/welcome.json')} autoPlay loop /> 
              </View>,
              title: 'Welcome to SkinCare',
              subtitle: 'Done with React Native Onboarding Swiper',
            },
            {
              backgroundColor: '#f8de7e',
              image: 
              <View style={styles.lottie}>
                 <LottieView style={{flex:1}} source={require('../assets/animations/takePhoto.json')} autoPlay loop /> 
              </View>,
              title: 'Click Picture',
              subtitle: 'Take photo of infected area.',
            },
            {
              backgroundColor: '#9966cc',
              image: 
              <View style={styles.lottie}>
                 <LottieView style={{flex:1}} source={require('../assets/animations/upload2.json')} autoPlay loop /> 
              </View>,
              title: 'Upload Picture',
              subtitle: 'Take photo of infected area.',
            },
          ]}
      />
    </View>
  )
}

export default Welcome


const styles = StyleSheet.create({
   container:{
     flex:1,
     backgroundColor:"white"
   },
   lottie:{
     width:width,
     height:width,
     marginBottom:-50

   },
   doenButton:{
    paddingVertical:10,
    paddingHorizontal:20,
    backgroundColor:"white",
    borderTopLeftRadius:25,
    borderBottomLeftRadius:25,
   }
}) 
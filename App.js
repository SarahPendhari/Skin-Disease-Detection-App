import * as React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './screens/Welcome';
import Home from './screens/Home';
import Camera from './screens/Camera';
import { Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from '@expo/vector-icons';
import Login from './screens/Login';
import Signup from './screens/Signup';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function BottomTabs() {
  const windowWidth = Dimensions.get('window').width;
  const widthPercentage = 90; // 80% of the screen width
  const width = (windowWidth * widthPercentage) / 100;
  return (
    <Tab.Navigator screenOptions={{tabBarStyle:{  display:"flex"}}} >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarShowLabel:false,
          headerShown: false,
          tabBarIcon: ({ focused }) => 
            focused ? (
                <Entypo name="home" size={28} color="#9966cc" />
            ) : (
                <AntDesign name="home" size={28} color="#9966cc" />
            ),
        }}
      />
      
      {/* Location  */}
      <Tab.Screen
        name="profile"
        component={Home}
        options={{
          tabBarShowLabel:false,
          headerShown: false,
          tabBarIcon: ({ focused }) => 
            focused ? (
              <Ionicons name="person" size={24} color="#9966cc" />            ) : (
                <Ionicons name="person-outline" size={24} color="#9966cc" />
            ),
        }}
      /> 
      
      {/* contact
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarShowLabel:false,
          headerShown: false,
          tabBarIcon: ({ focused }) => 
            focused ? (
              <MaterialCommunityIcons name="contacts" size={28} color="#FF007F" />
            ) : (
              <MaterialCommunityIcons name="contacts-outline" size={28} color="#FF007F" />
            ),
        }}
      /> */}

    </Tab.Navigator>
  );
}


function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='login' screenOptions={{headerShown:false}} >
        <Stack.Screen name="login" component={Login} options={{ headerShown: false}}/>
        <Stack.Screen name="signup" component={Signup} options={{ headerShown: false}}/>
        <Stack.Screen name="welcome" component={Welcome} options={{ headerShown: false}}/>
        <Stack.Screen
          name="main"
          component={BottomTabs}
          options={{ headerShown: false}}
      />
        {/* <Stack.Screen name="home" component={Home} />*/}
        <Stack.Screen name="camera" component={Camera} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
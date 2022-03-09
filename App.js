import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import LessonScreen from './screens/LessonScreen'
import LessonInfoScreen from './screens/LessonInfoScreen'
import QuestionScreen from './screens/QuestionScreen'
import ResultScreen from './screens/ResultScreen'
import ProfileScreen from './screens/ProfileScreen'
import SettingScreen from './screens/SettingScreen'
import ChoosePicScreen from './screens/ChoosePicScreen'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ResultScreen' //รอเปลี่ยน
      screenOptions={{
        headerStyle: { backgroundColor: '#202225', elevation: 0, shadowOpacity: 0, borderBottomWidth: 0},
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold'},        
      }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="LessonScreen" component={LessonScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="LessonInfoScreen" component={LessonInfoScreen} options={{ title:'Lesson Infomation',headerTitleAlign: 'center'}}/>
        <Stack.Screen name="QuestionScreen" component={QuestionScreen} options={{ title:'Question',headerTitleAlign: 'center'}}/>
        <Stack.Screen name="ResultScreen" component={ResultScreen} options={{ title:'Question',headerTitleAlign: 'center'}}/>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ title:'Profile',headerTitleAlign: 'center'}}/>
        <Stack.Screen name="SettingScreen" component={SettingScreen} options={{ title:'SettingScreen',headerTitleAlign: 'center'}}/>  
        <Stack.Screen name="ChoosePicScreen" component={ChoosePicScreen} options={{ title:'Choose Picture',headerTitleAlign: 'center'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
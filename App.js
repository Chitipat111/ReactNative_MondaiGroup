import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import LessonScreen from './screens/LessonScreen'
import LessonInfoScreen from './screens/LessonInfoScreen'
import QuestionScreen from './screens/QuestionScreen'
import ResultScreen from './screens/ResultScreen'
import ProfileScreen from './screens/ProfileScreen'
import SettingScreen from './screens/SettingScreen'
import ChoosePicScreen from './screens/ChoosePicScreen'
import UserStoreProvider from './context/UserContext';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <UserStoreProvider>
      <NavigationContainer>
      <Tab.Navigator initialRouteName='LoginScreen' //รอเปลี่ยน
      screenOptions={{
        headerStyle: { backgroundColor: '#202225', elevation: 0, shadowOpacity: 0, borderBottomWidth: 0},
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold'},        
      }}>
        <Tab.Screen name="LoginScreen" component={LoginScreen} 
        options={{ headerShown: false,tabBarButton: () => null,tabBarVisible: false, tabBarStyle: {display: 'none'} }}/>

        <Tab.Screen name="RegisterScreen" component={RegisterScreen} 
        options={{ headerShown: false,tabBarButton: () => null,tabBarVisible: false, tabBarStyle: {display: 'none'} }}/>

        <Tab.Screen name="LessonScreen" component={LessonScreen} 
        options={{ headerShown: false }}/>

        <Tab.Screen name="LessonInfoScreen" component={LessonInfoScreen} 
        options={{ title:'Lesson Infomation',headerTitleAlign: 'center',tabBarButton: () => null,tabBarVisible: false}}/>

        <Tab.Screen name="QuestionScreen" component={QuestionScreen} 
        options={{ title:'Question',headerTitleAlign: 'center',tabBarButton: () => null,tabBarVisible: false , tabBarStyle: {display: 'none'} }}/>

        <Tab.Screen name="ResultScreen" component={ResultScreen} 
        options={{ title:'Question',headerTitleAlign: 'center',tabBarButton: () => null,tabBarVisible: false , tabBarStyle: {display: 'none'} }}/>

        <Tab.Screen name="ProfileScreen" component={ProfileScreen} 
        options={{ title:'Profile',headerTitleAlign: 'center'}}/>
        
        <Tab.Screen name="SettingScreen" component={SettingScreen} 
        options={{ title:'SettingScreen',headerTitleAlign: 'center'}}/>
        
        <Tab.Screen name="ChoosePicScreen" component={ChoosePicScreen} 
        options={{ title:'Choose Picture',headerTitleAlign: 'center',tabBarButton: () => null,tabBarVisible: false , tabBarStyle: {display: 'none'} }}/>
        
      </Tab.Navigator>
    </NavigationContainer>
    </UserStoreProvider>
  )
}    

export default App
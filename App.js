import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen'
import LessonScreen from './screens/LessonScreen'
import LessonInfoScreen from './screens/LessonInfoScreen'
import ProfileScreen from './screens/ProfileScreen'
import QuestionScreen from './screens/QuestionScreen'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen' //รอเปลี่ยน
      screenOptions={{
        headerStyle: { backgroundColor: '#202225', elevation: 0, shadowOpacity: 0, borderBottomWidth: 0},
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold'},        
      }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="LessonScreen" component={LessonScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="LessonInfoScreen" component={LessonInfoScreen} options={{ title:''}}/>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ title:'Profile',headerTitleAlign: 'center'}}/>
        <Stack.Screen name="QuestionScreen" component={QuestionScreen} options={{ title:'Question',headerTitleAlign: 'center'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
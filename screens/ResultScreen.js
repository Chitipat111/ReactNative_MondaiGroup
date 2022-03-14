import * as React from 'react';
import { View, Text, Button, Image, TouchableOpacity, SafeAreaView} from 'react-native';

const ResultScreen = ({navigation,route}) =>{
  var {sendScore} = route.params;
  const {maxScore} = route.params;
  const {answer} = route.params;
  const {choice} = route.params;
  sendScore = (answer===choice?sendScore+1:sendScore)
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#2F3136'}}>
      {/*Head title*/}
      <View style={{alignItems:'center',marginTop:30}}>
        <Text style={{fontSize:35, color:'white', fontWeight:'bold'}}>Lesson Complete</Text>
      </View>

      {/*Score*/}
      <View style={{alignItems:'center',marginTop:70}}>
        <Text style={{fontSize:50, color:'white', fontWeight:'bold'}}>{sendScore}/{maxScore}</Text>
      </View>

      {/*Image*/}
      <View style={{alignItems:'center',marginTop:60}}>
        <Image source={require('../assets/result-icon.png')}/>
      </View>

      {/*ConfirmBtn*/}
      <View style={{alignItems:'center',marginTop:100}}>
        <TouchableOpacity style={{backgroundColor:'white',width:250,height:50,borderRadius:6,alignItems:'center',justifyContent:'center'}}>
          <Text onPress={()=>{navigation.navigate('LessonScreen')}} style={{color:'black',fontSize:20}}>Back to lesson</Text>
        </TouchableOpacity>
      </View>


    </SafeAreaView>
  )
}

export default ResultScreen

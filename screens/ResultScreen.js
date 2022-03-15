import * as React from 'react';
import { View, Text, Button, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import axios from'axios';
import jwt_decode from "jwt-decode";
import { UserStoreContext } from '../context/UserContext';

const ResultScreen = ({navigation,route}) =>{
  var {sendScore} = route.params;
  const {maxScore} = route.params;
  const {answer} = route.params;
  const {choice} = route.params;
  const {langg} = route.params;
  const {langChapter} = route.params;
  sendScore = (answer===choice?sendScore+1:sendScore)

  const userStore = React.useContext(UserStoreContext);
  const deToken = jwt_decode(userStore.Token);
  //console.log(deToken);

  console.log(deToken.id);
  console.log(langg);
  console.log(langChapter);
  console.log(sendScore);

  const UpdateDB = async()=>{
    try {
    
    const url = 'http://185.197.195.92:3000/history';
    const res = await axios.post(url,  
      {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }},
      {params:{
        userId : deToken.id,
        lang : langg,
        chapter : langChapter,
        score : sendScore,
      }});
      navigation.navigate('LessonScreen');
    }catch (error) { 
      console.log(error)
    }
  }

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
        <TouchableOpacity onPress={()=>{UpdateDB()}} style={{backgroundColor:'white',width:250,height:50,borderRadius:6,alignItems:'center',justifyContent:'center'}}>
          <Text style={{color:'black',fontSize:20}}>Back to lesson</Text>
        </TouchableOpacity>
      </View>


    </SafeAreaView>
  )
}

export default ResultScreen

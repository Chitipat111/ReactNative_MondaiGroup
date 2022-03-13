import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import { Picker, Form } from 'native-base';

var MESSAGE;

function MessageChange(selectedValue){
    {/*Change Message Condition*/}
  if(selectedValue === "Variable"){
    return "Variable Infomation"
  }
  else if (selectedValue === "Boolean" ){
    return "Boolean Infomation"
  }
  else if (selectedValue === "Output" ){
    return "Output Infomation"
  }
  else if (selectedValue === "Array" ){
    return "Array Infomation"
  }
  else if (selectedValue === "If" ){
    return "If Infomation"
  }
  else if (selectedValue === "Loop" ){
    return "Loop Infomation"
  }
}

const LessonInfoScreen = ({navigation,route}) =>  {

  const { name } = route.params;
  const IMAGE_JAVA = require('../assets/Java-logo.png')
  const IMAGE_HTML = require('../assets/Html-logo.png')

  let IMAGE
  // let MESSAGE

  {/*Message state*/}
  const [message, setMessage] = useState();
  
  // useEffect(()=>{
  //   MESSAGE = MessageChange(selectedValue);
  //   alert(MESSAGE)
  //   setMessage(MESSAGE)
  // });

  {/*Change Image Condition*/}
  if(name === 'JAVA'){
    IMAGE = IMAGE_JAVA
  }
  else if(name === 'HTML'){
    IMAGE = IMAGE_HTML
  }



  {/*picker state*/}
  const [selectedValue, setSelectedValue] = useState("Variable");

  return(
    <SafeAreaView style={{flex:1,backgroundColor:'#2F3136'}}>

    <Text style={{color:'white'}}>{ name }</Text>
    <Text style={{color:'white'}}>{selectedValue}</Text>
         
    {/*image*/}
      <View style={{alignItems:'center',marginTop:80}}>
         <Image source={IMAGE}/>
      </View>

    {/*dropdowm*/}
      <View style={{alignItems:'center',marginTop:60}}>
        <Picker
          style={{width:270, height:45, borderRadius:4, textAlign: 'center',backgroundColor:'white'}}
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Variable" value="Variable" />
          <Picker.Item label="Boolean" value="Boolean" />
          <Picker.Item label="Output" value="Output" />
          <Picker.Item label="Array" value="Array" />
          <Picker.Item label="If" value="If" />
          <Picker.Item label="Loop" value="Loop" />
        </Picker>
      </View>

    {/*InfoBox*/}
      <View style={{alignItems:'center',marginTop:80}}>
        <View style={{width:270, borderRadius:4, padding:20, backgroundColor:'white'}}>
          {/*Info*/}
          <View>
            <Text>Basic Java</Text>
            <Text style={{marginTop:15}}>
             รายละเอียด รายละเอียด รายละเอียด รายละเอียด {MESSAGE}
            </Text>
          </View>
          {/*Btn*/}
          <View style={{alignItems:'flex-end', marginTop:45}}>
            <TouchableOpacity style={{width:120, padding:7, backgroundColor:'#202225'}}>
              <Text onPress={()=>{navigation.navigate('QuestionScreen')}} style={{color:'white', textAlign: 'center'}}>เริ่มทำแบบฝึกหัด</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
    </SafeAreaView> 
  );
};

export default LessonInfoScreen;
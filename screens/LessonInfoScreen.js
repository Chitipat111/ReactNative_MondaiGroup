import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import { Picker, Form } from 'native-base';

const LessonInfoScreen = ({navigation,route}) =>  {

  const { name } = route.params;
  const IMAGE_JAVA = require('../assets/Java-logo.png')
  const IMAGE_HTML = require('../assets/Html-logo.png')

  let IMAGE

  {/*Change Image Condition*/}
  if(name === 'JAVA'){
    IMAGE = IMAGE_JAVA
  }
  else if(name === 'HTML'){
    IMAGE = IMAGE_HTML
  }

  {/*Message state*/}
  const [message, setMessage] = useState();
  {/*picker state*/}
  const [selectedValue, setSelectedValue] = useState();

  {/*Apply Default Picker*/}
  useEffect(()=>{
    const applyPicker = ()=>{
      if(name === 'JAVA'){
          setSelectedValue("Variable_&_Variable_type")
        }
      else if(name === 'HTML'){
          setSelectedValue("ความรู้เบื้องต้นเกี่ยวกับ HTML")
      }
    }
    applyPicker();    
  },[name]);

  {/*Apply Message*/}
  useEffect(()=>{
    const applyMessage = ()=>{
      if(name === 'JAVA'){
          if(selectedValue === "Variable_&_Variable_type"){
            setMessage("Variable Information 1")
          }
          else if(selectedValue === "Boolean"){
            setMessage("Boolean Information 2")
          }
          else if(selectedValue === "การแสดงผล"){
            setMessage("Output Information 3")
          }
          else if(selectedValue === "Array"){
            setMessage("Array Information 4")
          }
          else if(selectedValue === "If"){
            setMessage("If Information 5")
          }
          else if(selectedValue === "Loop"){
            setMessage("Loop Information 6")
          }
      }
      else if(name === 'HTML'){
        if(selectedValue === "ความรู้เบื้องต้นเกี่ยวกับ HTML"){
            setMessage("BasicHtml Information 1")
          }
          else if(selectedValue === "การใช้งาน css เชื่อมต่อกับไฟล์ html"){
            setMessage("Css Information 2")
          }
      }
      
    }
    applyMessage();    
  });

  return(
    <SafeAreaView style={{flex:1,backgroundColor:'#2F3136'}}>
         
    {/*image*/}
      <View style={{alignItems:'center',marginTop:80}}>
         <Image source={IMAGE}/>
      </View>

    {/*dropdowm*/}
      <View style={{alignItems:'center',marginTop:60}}>
      {(() => {
            if(name === 'JAVA') {
              return (
                  <Picker
                  style={{width:270, height:45, borderRadius:4, textAlign: 'center',backgroundColor:'white'}}
                  selectedValue={selectedValue}
                  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                  >
                    <Picker.Item label="Variable" value="Variable_&_Variable_type" />
                    <Picker.Item label="Boolean" value="Boolean" />
                    <Picker.Item label="Output" value="การแสดงผล" />
                    <Picker.Item label="Array" value="Array" />
                    <Picker.Item label="If" value="If" />
                    <Picker.Item label="Loop" value="Loop" />
                </Picker>
              )
            }
            else if(name === 'HTML') {
              return (
                  <Picker
                  style={{width:270, height:45, borderRadius:4, textAlign: 'center',backgroundColor:'white'}}
                  selectedValue={selectedValue}
                  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                  >
                    <Picker.Item label="BasicHtml" value="ความรู้เบื้องต้นเกี่ยวกับ HTML" />
                    <Picker.Item label="Css" value="การใช้งาน css เชื่อมต่อกับไฟล์ html" />
                </Picker>
              )
            }
      })()}
        
      </View>

    {/*InfoBox*/}
      <View style={{alignItems:'center',marginTop:80}}>
        <View style={{width:270, borderRadius:4, padding:20, backgroundColor:'white'}}>
          {/*Info*/}
          <View>
            <Text>{selectedValue}</Text>
            <Text style={{marginTop:15}}>
              {message}
            </Text>
          </View>
          {/*Btn*/}
          <View style={{alignItems:'flex-end', marginTop:45}}>
            <TouchableOpacity style={{width:120, padding:7, backgroundColor:'#202225'}}>
              <Text onPress={()=>{navigation.navigate('QuestionScreen', { lang : name, chapter: selectedValue })}} style={{color:'white', textAlign: 'center'}}>เริ่มทำแบบฝึกหัด</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
    </SafeAreaView> 
  );
};

export default LessonInfoScreen;

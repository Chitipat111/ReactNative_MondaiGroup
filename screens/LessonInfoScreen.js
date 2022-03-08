import * as React from 'react';
import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, Picker} from 'react-native';

const LessonInfoScreen = () =>  {

  const [selectedValue, setSelectedValue] = useState("basic");

  return(
    <SafeAreaView style={{flex:1,backgroundColor:'#2F3136'}}>
    {/*image*/}
      <View style={{alignItems:'center',marginTop:80}}>
         <Image source={require('../assets/Java-logo.png')}/>
      </View>

    {/*dropdowm*/}
      <View style={{alignItems:'center',marginTop:60}}>
        <Picker
          style={{width:270, height:45, borderRadius:4, textAlign: 'center'}}
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Basic Java" value="basic" />
          <Picker.Item label="Object-oriented programming" value="oop" />
        </Picker>
      </View>

    {/*InfoBox*/}
      <View style={{alignItems:'center',marginTop:80}}>
        <View style={{width:270, borderRadius:4, padding:20, backgroundColor:'white'}}>
          {/*Info*/}
          <View>
            <Text>Basic Java</Text>
            <Text style={{marginTop:15}}>
              รายละเอียด รายละเอียด รายละเอียด รายละเอียด รายละเอียด รายละเอียด
            </Text>
          </View>
          {/*Btn*/}
          <View style={{alignItems:'flex-end', marginTop:45}}>
            <TouchableOpacity style={{width:120, padding:7, backgroundColor:'#202225'}}>
              <Text style={{color:'white', textAlign: 'center'}}>เริ่มทำแบบฝึกหัด</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
    </SafeAreaView> 
  );
};

export default LessonInfoScreen;

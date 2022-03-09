import * as React from 'react';
import { View, Text, Button, Image, TouchableOpacity, SafeAreaView} from 'react-native';

const ResultScreen = () =>{
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#2F3136'}}>
      {/*Head title*/}
      <View style={{alignItems:'center',marginTop:80}}>
        <Text style={{fontSize:35, color:'white', fontWeight:400}}>Lesson Complete</Text>
      </View>

      {/*Score*/}
      <View style={{alignItems:'center',marginTop:70}}>
        <Text style={{fontSize:50, color:'white', fontWeight:500}}>7/10</Text>
      </View>

      {/*Image*/}
      <View style={{alignItems:'center',marginTop:60}}>
        <Image source={require('../assets/result-icon.png')}/>
      </View>

      {/*ConfirmBtn*/}
      <View style={{alignItems:'center',marginTop:130}}>
        <TouchableOpacity style={{backgroundColor:'white',width:250,height:50,borderRadius:6,alignItems:'center',justifyContent:'center'}}>
          <Text style={{color:'black',fontSize:20}}>Back to lesson</Text>
        </TouchableOpacity>
      </View>


    </SafeAreaView>
  )
}

export default ResultScreen
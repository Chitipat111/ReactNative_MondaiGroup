import * as React from 'react';
import { View, Text, Button, Image, TouchableOpacity, SafeAreaView} from 'react-native';

const QuestionScreen = () =>  {
  return(
    <SafeAreaView style={{flex:1, backgroundColor:'#2F3136'}}>
    {/*Quiz*/}
      <View style={{alignItems:'center', marginTop:40}}>
        <Text style={{color:'white', fontSize:18}}>1/10</Text>
        <Text style={{color:'white', fontSize:24, marginTop:50}}>คำถามนะจ๊ะ คำถามนะจ๊ะ</Text>
      </View>

    {/*Choice*/}
      <View style={{flex:1, backgroundColor:'white', marginTop:160}}>
        <View style={{marginTop:70,alignItems:'center'}}>
          <TouchableOpacity style={{backgroundColor:'#2F3136',width:250,height:35,borderRadius:7,justifyContent:'center',paddingLeft:15}}>
            <Text style={{color:'white',fontSize:18}}>A) eiei</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{color:'white',backgroundColor:'#2F3136',marginTop:30,width:250,height:35,borderRadius:7,justifyContent:'center',paddingLeft:15}}>
            <Text style={{color:'white',fontSize:18}}>B) eiei</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{color:'white',backgroundColor:'#2F3136',marginTop:30,width:250,height:35,borderRadius:7,justifyContent:'center',paddingLeft:15}}>
            <Text style={{color:'white',fontSize:18}}>C) eiei</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{color:'white',backgroundColor:'#2F3136',marginTop:30,width:250,height:35,borderRadius:7,justifyContent:'center',paddingLeft:15}}>
            <Text style={{color:'white',fontSize:18}}>D) eiei</Text>
          </TouchableOpacity>
        </View>        
      </View>

    {/*Nextbtn*/}
      <View style={{flex:0.105,backgroundColor:'white',flexDirection:'row',justifyContent:'flex-end',padding:20}}>
        <TouchableOpacity style={{backgroundColor:'#2F3136',width:100,height:35,alignItems:'center',justifyContent:'center',borderRadius:7}}>
          <Text style={{color:'white'}}>Next</Text>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  )
}

export default QuestionScreen;

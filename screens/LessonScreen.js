import * as React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';

const LessonScreen = () =>  {
  return(
    <SafeAreaView style={{flex:1,backgroundColor:'#2F3136'}}>
    {/*title*/}
      <View style={{alignItems:'center',marginTop:80}}>
        <Text style={{fontSize:35, color:'white', fontWeight:500}}>Which Lesson?</Text>
      </View>

    {/*btnLesson*/}
      <View style={{flexDirection: "row",justifyContent:'space-evenly',marginTop:80}}>
        <TouchableOpacity style={{width:100, height:100, borderRadius:20, alignItems:"center", justifyContent:'center'}}>
          <Image source={require('../assets/Java-logo.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={{width:100, height:100, borderRadius:20, alignItems:"center",justifyContent:'center'}}>
          <Image source={require('../assets/Html-logo.png')}/>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: "row",justifyContent:'space-evenly',marginTop:30}}>
        <TouchableOpacity style={{width:100, height:100, borderRadius:20, alignItems:"center",justifyContent:'center'}}>
          <Image source={require('../assets/Css-logo.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={{width:100, height:100, borderRadius:20, alignItems:"center",justifyContent:'center'}}>
          <Image source={require('../assets/JavaScript-logo.png')}/>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: "row",justifyContent:'space-evenly',marginTop:30}}>
        <TouchableOpacity style={{width:100, height:100, borderRadius:20, alignItems:"center",justifyContent:'center'}}>
          <Image source={require('../assets/Sql-logo.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={{width:100, height:100, borderRadius:20, alignItems:"center",justifyContent:'center'}}>
          <Image source={require('../assets/ReactNative-logo.png')}/>
        </TouchableOpacity>
      </View>

    </SafeAreaView> 
  );
};

export default LessonScreen;

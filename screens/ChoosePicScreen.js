import * as React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';

const ChoosePicScreen = () =>  {
  return(
    <SafeAreaView style={{flex:1,backgroundColor:'#2F3136'}}>

    {/*PictureBtn*/}
      <View style={{flexDirection: "row",justifyContent:'space-evenly',marginTop:80}}>
        <TouchableOpacity style={{width:100, height:100, borderRadius:'50%', alignItems:"center", justifyContent:'center',backgroundColor:'#C4C4C4'}}>
          <Image source={require('../assets/Cat-paw1.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={{width:100, height:100, borderRadius:'50%', alignItems:"center",justifyContent:'center',backgroundColor:'#C4C4C4'}}>
          <Image source={require('../assets/Cat-paw2.png')}/>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: "row",justifyContent:'space-evenly',marginTop:30}}>
        <TouchableOpacity style={{width:100, height:100, borderRadius:'50%', alignItems:"center",justifyContent:'center',backgroundColor:'#C4C4C4'}}>
          <Image source={require('../assets/Cat-paw3.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={{width:100, height:100, borderRadius:'50%', alignItems:"center",justifyContent:'center',backgroundColor:'#C4C4C4'}}>
          <Image source={require('../assets/Cat-paw4.png')}/>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: "row",justifyContent:'space-evenly',marginTop:30}}>
        <TouchableOpacity style={{width:100, height:100, borderRadius:'50%', alignItems:"center",justifyContent:'center',backgroundColor:'#C4C4C4'}}>
          <Image source={require('../assets/Cat-paw5.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={{width:100, height:100, borderRadius:'50%', alignItems:"center",justifyContent:'center',backgroundColor:'#C4C4C4'}}>
          <Image source={require('../assets/Cat-paw6.png')}/>
        </TouchableOpacity>
      </View>

      {/*ConfirmBtn*/}
      <View style={{alignItems:'center',marginTop:200}}>
        <TouchableOpacity style={{backgroundColor:'white',width:200,height:40,borderRadius:6,alignItems:'center',justifyContent:'center'}}>
          <Text style={{color:'black',fontSize:20}}>Confirm</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView> 
  );
};

export default ChoosePicScreen;

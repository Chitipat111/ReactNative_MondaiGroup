import * as React from 'react';
import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import { Icon } from 'native-base';
import axios from'axios';
import jwt_decode from "jwt-decode";
import { UserStoreContext } from '../context/UserContext';

const ChoosePicScreen = ({navigation}) =>  {

  const userStore = React.useContext(UserStoreContext);
  
  const pic = async(image_index_in)=>{
    try {
    const deToken = jwt_decode(userStore.Token);
    //console.log(deToken);
    UID = deToken.id;
    const url = 'http://185.197.195.92:3000/users/updatePic';
    const res = await axios.put(url,  
      {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }},
      {params:{
        id : UID,
        image : image_index_in
      }});
      userStore.updatePicture(image_index_in); //Send Picture
      navigation.navigate('ProfileScreen');
    }catch (error) { 
      console.log(error.response)
    }
  }

  const [image_index, set_image_index] = useState(1);

  return(
    <SafeAreaView style={{flex:1,backgroundColor:'#2F3136'}}>
      {/*header*/}
      <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center',backgroundColor: '#202225', height:64}}>
        <Icon onPress={()=>{navigation.navigate('SettingScreen')}} type="FontAwesome" name="angle-left" style={{color:'white', marginRight:50, marginLeft:30}}/>
        <Text style={{color:'white',fontWeight: 'bold',fontSize:18}}>Choose Picture</Text>
      </View>

    {/*PictureBtn*/}
      <View style={{flexDirection: "row",justifyContent:'space-evenly',marginTop:80}}>
        <TouchableOpacity onPress={()=> set_image_index(1)} style={{width:100, height:100, borderRadius: 50, alignItems:"center", justifyContent:'center',backgroundColor:'#C4C4C4'}}>
          <Image source={require('../assets/Cat-paw1.png')}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> set_image_index(2)} style={{width:100, height:100, borderRadius: 50, alignItems:"center",justifyContent:'center',backgroundColor:'#C4C4C4'}}>
          <Image source={require('../assets/Cat-paw2.png')}/>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: "row",justifyContent:'space-evenly',marginTop:30}}>
        <TouchableOpacity onPress={()=> set_image_index(3)} style={{width:100, height:100, borderRadius: 50, alignItems:"center",justifyContent:'center',backgroundColor:'#C4C4C4'}}>
          <Image source={require('../assets/Cat-paw3.png')}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> set_image_index(4)} style={{width:100, height:100, borderRadius: 50, alignItems:"center",justifyContent:'center',backgroundColor:'#C4C4C4'}}>
          <Image source={require('../assets/Cat-paw4.png')}/>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: "row",justifyContent:'space-evenly',marginTop:30}}>
        <TouchableOpacity onPress={()=> set_image_index(5)} style={{width:100, height:100, borderRadius: 50, alignItems:"center",justifyContent:'center',backgroundColor:'#C4C4C4'}}>
          <Image source={require('../assets/Cat-paw5.png')}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> set_image_index(6)} style={{width:100, height:100, borderRadius: 50, alignItems:"center",justifyContent:'center',backgroundColor:'#C4C4C4'}}>
          <Image source={require('../assets/Cat-paw6.png')}/>
        </TouchableOpacity>
      </View>

      {/*ConfirmBtn*/}
      <View style={{alignItems:'center',marginTop:80}}>
        <TouchableOpacity onPress={()=>{pic(image_index)}} style={{backgroundColor:'white',width:200,height:40,borderRadius:6,alignItems:'center',justifyContent:'center'}}>
          <Text style={{color:'black',fontSize:20}}>Confirm</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView> 
  );
};

export default ChoosePicScreen;
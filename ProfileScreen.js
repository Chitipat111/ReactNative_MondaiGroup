import React,{useEffect,useState}  from 'react';
import { View, Text, Button, Image, TouchableOpacity, SafeAreaView} from 'react-native';

import axios from 'axios';


const ProfileScreen = () => { 
  
  const [jsonread,setjsonread]=useState([]);
  const [name,setName]=useState("Kornwara");
  const [userID,setUserID]=useState(1);


  const test = async()=>{ 
    const url = 'http://185.197.195.92:3000/history';
    const res =  await axios.get(url,
      {params:{
     userId : 1}
    })
    setjsonread(res.data);
    // console.log(Object.keys(res.data).length-1)
    // console.log(res.data[0]['hisChapter']);
  }

  useEffect(()=>{
    test();
  },[]);

  console.log(Object.keys(jsonread).length);
  console.log(jsonread[jsonread.length-1]["hisScore"]);
  
  return (
  

    <SafeAreaView style={{flex:1, backgroundColor:'#2F3136'}}>
      {/*Personal info*/}
      <View style={{flexDirection: "row",justifyContent:'space-evenly',marginTop:80}}>
        {/*image*/}
        <Image source={require('../assets/User-icon-default.png')} style={{width:105,height:105}}/>
        <View>
          {/*name*/}
          <Text style={{color:'white', fontSize:25}}>{name}</Text>
          {/*setting & logout*/}
          <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop:20}}>
            <TouchableOpacity style={{backgroundColor:'white', marginRight:10, width:100, height:30, borderRadius:5, alignItems:"center", justifyContent:'center'}}>
              <Text>Setting</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../assets/Logout-icon.png')}/>
            </TouchableOpacity>
          </View>
        </View>        
      </View>

      {/*Laguage*/}
      <View style={{alignItems:'center',marginTop:60}}>
        <View style={{width:270, borderRadius:4, padding:20, backgroundColor:'white'}}>
          {/*Info*/}
          <Text style={{fontSize:23, marginBottom:20}}>Language</Text>
          <View style={{flexDirection:'row', justifyContent:'flex-start'}}>            
            <Image source={require('../assets/Java-logo.png')} style={{width:40,height:40, marginRight:10, borderRadius:7}}/>
            <Image source={require('../assets/Java-logo.png')} style={{width:40,height:40, marginRight:10, borderRadius:7}}/>
            <Image source={require('../assets/Java-logo.png')} style={{width:40,height:40, marginRight:10, borderRadius:7}}/>
          </View>
        </View>
      </View>

      {/*Recent Score*/}
      <View style={{alignItems:'center',marginTop:20}}>
        <View style={{width:270, borderRadius:4, padding:20, backgroundColor:'white'}}>
          {/*Info*/}
          <Text style={{fontSize:23, marginBottom:20}}>Recent Score</Text>
          <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>            
            <Text>{jsonread[jsonread.length-1]["hisLanguage"]} {jsonread[jsonread.length-1]["hisChapter"]}</Text>
            <Text>{jsonread[jsonread.length-1]["hisScore"]}/5</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center', marginTop:10 }}>            
            <Text>{jsonread[jsonread.length-2]["hisLanguage"]} {jsonread[jsonread.length-2]["hisChapter"]}</Text>
            <Text>{jsonread[jsonread.length-2]["hisScore"]}/5</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center', marginTop:10 }}>            
            <Text>{jsonread[jsonread.length-3]["hisLanguage"]} {jsonread[jsonread.length-3]["hisChapter"]}</Text>
            <Text>{jsonread[jsonread.length-3]["hisScore"]}/5</Text>
          </View>

        </View>
      </View>

    </SafeAreaView>
  );
};

export default ProfileScreen;
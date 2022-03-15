import React,{useEffect,useState}  from 'react';
import { View, Text, Button, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { UserStoreContext } from '../context/UserContext';
import { Icon } from 'native-base';
import { set } from 'react-native-reanimated';

const ProfileScreen = ({navigation}) => { 
  
  const [jsonread,setjsonread]=useState([]);
  const [UName,setUName] = useState();
  const [UID,setUID] = useState();
  const userStore = React.useContext(UserStoreContext);
  const deToken = jwt_decode(userStore.Token);

  
  let testo = userStore.Picture
  const [IMG,setIMG] = useState();
  var path = "";
  let langs =[];
  let uniqlangs=[];
  let checkjava=false;
  let checkhtml=false;
  let checkJavascp=false;
  let checksql=false;
  let checkreact=false;
  let checkcss=false;
  const test = async()=>{
    try {
    
 
    setUID(deToken.id);
    setUName(deToken.username);
    
    const url = 'http://185.197.195.92:3000/history';
    const res = await axios.get(url,  
      {params:{
        userId : UID,
      }});
   
      setjsonread(res.data);
      // setIMG(deToken.image);
    }catch (error) { 
      console.log(error);
    }
  }
//  const test2 =async()=>{
//   const url2 = 'http://185.197.195.92:3000/users/findUser';
//   const res2 =await axios.get(url2,{params:{
//     id :UID
//   }})
//   setIMG(res2.data.userImage);
//  }
//   useEffect(()=>{
//     test2();
//  },[num]);

 useEffect(()=>{
  test();
 })

  const checklang=()=>{
    for (let i = 0; i < jsonread.length; i++) {
      langs.push(jsonread[i]['hisLanguage']);
    }
    uniqlangs=[...new Set(langs)];
    for (let u = 0; u < uniqlangs.length; u++) {
      if(uniqlangs[u].toLowerCase()=='java'){
          checkjava=true;
      }
      else if(uniqlangs[u].toLowerCase()=='html'){
        checkhtml=true;
      }
      else if(uniqlangs[u].toLowerCase()=='javascript'){
      checkJavascp=true;
     } 
     else if(uniqlangs[u].toLowerCase()=='sql'){
      checksql=true;
     }  
     else if(uniqlangs[u].toLowerCase()=='reactnative'){
      checkreact=true;
     } else if(uniqlangs[u].toLowerCase()=='css'){
      checkcss=true;
     } 

    }
  }



  
  // if (IMG==1) {
  //   path=require('../assets/Cat-paw1.png') ;
  // } else if(IMG==2){
  //   path=require('../assets/Cat-paw2.png') ;
  // }else if(IMG==3){
  //   path=require('../assets/Cat-paw3.png') ;
  // }else if(IMG==4){
  //   path=require('../assets/Cat-paw4.png') ;
  // }else if(IMG==5){
  //   path=require('../assets/Cat-paw5.png') ;
  // }else if(IMG==6){
  //   path=require('../assets/Cat-paw6.png') ;
  // }

  if (testo==1) {
    path=require('../assets/Cat-paw1.png') ;
  } else if(testo==2){
    path=require('../assets/Cat-paw2.png') ;
  }else if(testo==3){
    path=require('../assets/Cat-paw3.png') ;
  }else if(testo==4){
    path=require('../assets/Cat-paw4.png') ;
  }else if(testo==5){
    path=require('../assets/Cat-paw5.png') ;
  }else if(testo==6){
    path=require('../assets/Cat-paw6.png') ;
  }
  
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#2F3136'}}>
      {/*Personal info*/}
      {checklang()}
      <View style={{flexDirection: "row",justifyContent:'space-evenly',marginTop:80}}>
        {/*image*/}
        <Image source={path} style={{width:105,height:105}}/>
        <View>
          {/*name*/}
          <Text style={{color:'white', fontSize:25}}>{UName}</Text>
          {/*setting & logout*/}
          <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop:20}}>
            <TouchableOpacity onPress={()=>{navigation.navigate('SettingScreen')}} style={{backgroundColor:'white', marginRight:10, width:100, height:30, borderRadius:5, alignItems:"center", justifyContent:'center'}}>
              <Text>Setting</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('LoginScreen')}}>
              <Image source={require('../assets/Logout-icon.png')}/>
            </TouchableOpacity>
          </View>
        </View>        
      </View>

      {/*Laguage*/}
      <View style={{alignItems:'center',marginTop:60}}>
        <View style={{width:330, borderRadius:4, padding:20, backgroundColor:'white'}}>
          {/*Info*/}
          <Text style={{fontSize:23, marginBottom:20}}>Language</Text>
          <View style={{flexDirection:'row', justifyContent:'flex-start'}}>            
          <Image source={checkjava?require('../assets/Java-logo.png'):'-'} style={{width:40,height:40, marginRight:10, borderRadius:7}}/>
          <Image source={checkhtml?require('../assets/Html-logo.png'):'-'} style={{width:40,height:40, marginRight:10, borderRadius:7}}/>
          <Image source={checkJavascp?require('../assets/JavaScript-logo.png'):'-'} style={{width:40,height:40, marginRight:10, borderRadius:7}}/>
          <Image source={checkreact?require('../assets/ReactNative-logo.png'):'-'} style={{width:40,height:40, marginRight:10, borderRadius:7}}/>
          <Image source={checksql?require('../assets/Sql-logo.png'):'-'} style={{width:40,height:40, marginRight:10, borderRadius:7}}/>
          <Image source={checkcss?require('../assets/Css-logo.png'):'-'} style={{width:40,height:40, marginRight:10, borderRadius:7}}/>
          </View>
        </View>
      </View>

      {/*Recent Score*/}
      <View style={{alignItems:'center',marginTop:20}}>
        <View style={{width:330, borderRadius:4, padding:20, backgroundColor:'white'}}>
          {/*Info*/}
          <Text style={{fontSize:23, marginBottom:20}}>Recent Score</Text>
          <View  style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>  
            <Text>{jsonread[jsonread.length-1]== undefined?'-':jsonread[jsonread.length-1]['hisLanguage']+' '+jsonread[jsonread.length-1]['hisChapter']}</Text>
            <Text>{jsonread[jsonread.length-1]== undefined ?'-':jsonread[jsonread.length-1]["hisScore"]}/5</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center', marginTop:10 }}>            
            <Text>{jsonread[jsonread.length-2] == undefined?'-':jsonread[jsonread.length-2]['hisLanguage']+' '+jsonread[jsonread.length-2]['hisChapter']}</Text>
            <Text>{jsonread[jsonread.length-2] ==undefined ?'-':jsonread[jsonread.length-2]["hisScore"]}/5</Text>
          </View>
          <View  style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center', marginTop:10 }}>            
            <Text>{jsonread[jsonread.length-3]==undefined ?'-':jsonread[jsonread.length-3]["hisLanguage"]+' '+jsonread[jsonread.length-3]["hisChapter"]}</Text>
            <Text>{jsonread[jsonread.length-3]==undefined ?'-':jsonread[jsonread.length-3]["hisScore"]}/5</Text>
          </View>

        </View>
      </View>

    </SafeAreaView>
  );
};

export default ProfileScreen;
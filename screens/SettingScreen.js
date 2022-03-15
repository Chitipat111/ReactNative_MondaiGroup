import React,{useEffect,useState}  from 'react';
import {  Text,  View,  SafeAreaView,  Button,  TextInput,  TouchableOpacity, Image,} from 'react-native';
import {  Container,  Form,  Icon,  Content,  Item,  Input,  Label} from 'native-base';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import axios from'axios';
import jwt_decode from "jwt-decode";
import { UserStoreContext } from '../context/UserContext';
import { Component } from 'react/cjs/react.production.min';

const ValidateSchema = Yup.object().shape({
  OldPassword: Yup.string()
    .required('Invalid Old Password')
    .min(6, 'Password must contain at least 6'),
  NewPassword: Yup.string()
    .required('Invalid Password')
    .min(6, 'Password must contain at least 6'),
  ConPassword: Yup.string()
    .required('Invalid Password')
    .min(6, 'Password must contain at least 6')
    .oneOf([Yup.ref('NewPassword')], 'Passwords does not match'),
});

const SettingScreen = ({navigation}) => {
  
  const [jsonread,setjsonread]=useState();
 
  const userStore = React.useContext(UserStoreContext);
  const deToken = jwt_decode(userStore.Token);
  //console.log(deToken);
  const UIMG = deToken.image;
  //console.log(UIMG);
  var path = "";

  const test = async()=>{
    try {
    //console.log(deToken.id);
    const url = 'http://185.197.195.92:3000/users/findUser';
    const res = await axios.get(url,  
      {params:{
        id : deToken.id,
      }});
      setjsonread(res.data.userImage);
    }catch (error) { 
      console.log(error);
    }
  }

  useEffect(()=>{
    test();
 });

  const imgchange =()=>{
  if (jsonread==1) {
    return require('../assets/Cat-paw1.png') ;
  } else if(jsonread==2){
    return require('../assets/Cat-paw2.png') ;
  }else if(jsonread==3){
    return require('../assets/Cat-paw3.png') ;
  }else if(jsonread==4){
    return require('../assets/Cat-paw4.png') ;
  }else if(jsonread==5){
    return require('../assets/Cat-paw5.png') ;
  }else if(jsonread==6){
    return require('../assets/Cat-paw6.png') ;
  }}
  
  
  
  return (
    
    //Mondai
    <SafeAreaView style={{ flex: 1, backgroundColor: '#2F3136' }}>
      {/* Formik */}
      <Formik
        initialValues={{
          OldPassword: '',
          NewPassword: '',
          ConPassword: '',
        }}
        validationSchema={ValidateSchema}
        onSubmit={async (values, {setSubmitting}) => {

         try {
            //console.log(deToken);
            UID = deToken.id;
            const url = 'http://185.197.195.92:3000/users';
            const res = await axios.put(url,  
            {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }},
            {params:{
              id : UID,
              oldPass : values.OldPassword,
              newPass : values.NewPassword
            }});
           alert('Password Updated !');
           navigation.navigate('ProfileScreen');
         } catch (error) { 
           alert(error.response.data.message);
           console.log(error.response)
         } finally{
           setSubmitting(false);
         }
       }}
     >
       
        {({errors,touched,values,handleBlur,handleChange,handleSubmit,isSubmitting}) => (

          
          <View style={{ padding: 25 }}>
            {/*white box*/}
            <View style={{ backgroundColor:'white',borderRadius:15,marginTop:30}}>
              {/* Profile Pic */}
              <View style={{alignItems:'center',marginTop:20}}>
                <Image source={imgchange()} style={{width:105,height:105}}/>
                <TouchableOpacity onPress={()=>{navigation.navigate('ChoosePicScreen') }} style={{marginTop:20,borderColor:'black',borderWidth:1,borderRadius:6,padding:3}}>
                  <Text style={{fontSize:18}}>Choose Profile Picture</Text>
                </TouchableOpacity>                
              </View>              
              
              {/* Form */}
              <Form style={{marginTop:30,paddingRight:15}}>

              {/* Old Password */}
                <View style={{marginBottom:10}}>                  
                  <Item fixedLabel error={errors.OldPassword && touched.OldPassword ? true : false}>
                    <Icon type="FontAwesome" name="lock" /> 
                    <Input value={values.OldPassword} placeholder="Old Password" onChangeText={handleChange('OldPassword')} onBlur={handleBlur('OldPassword')} secureTextEntry={true} />
                    {errors.OldPassword && touched.OldPassword}
                  </Item>
                  {/*Error Display */}
                  {errors.OldPassword && touched.OldPassword && (
                  <Item>
                    <Label style={{ color: 'indianred' }}>
                      {errors.OldPassword}
                    </Label>
                  </Item>
                  )}
                </View>

                {/* New Password */}
                <View style={{marginBottom:10}}>                  
                  <Item fixedLabel error={errors.NewPassword && touched.NewPassword ? true : false}>
                   <Icon type="FontAwesome" name="lock" /> 
                    <Input value={values.NewPassword} placeholder="New Password" onChangeText={handleChange('NewPassword')} onBlur={handleBlur('NewPassword')} secureTextEntry={true} />
                    {errors.NewPassword && touched.NewPassword}
                  </Item>
                  {/*Error Display */}
                  {errors.NewPassword && touched.NewPassword && (
                  <Item>
                    <Label style={{ color: 'indianred' }}>
                      {errors.NewPassword}
                    </Label>
                  </Item>
                  )}
                </View>
                  
                {/* Confirm Password */}
                <View style={{marginBottom:25}}>                  
                  <Item fixedLabel error={errors.ConPassword && touched.ConPassword ? true : false}>
                    <Icon type="FontAwesome" name="lock" />
                    <Input value={values.ConPassword} placeholder="Confirm Password" onChangeText={handleChange('ConPassword')} onBlur={handleBlur('Password')} secureTextEntry={true} />
                    {errors.ConPassword && touched.ConPassword}
                  </Item>
                  {/*Error Display */}
                  {errors.ConPassword && touched.ConPassword && (
                  <Item>
                    <Label style={{ color: 'indianred' }}>
                      {errors.ConPassword}
                    </Label>
                  </Item>
                  )}
                </View>

                {/* Apply Btn */}
                <View style={{alignItems:'center',marginTop:30, marginBottom:25}}>
                  <TouchableOpacity onPress={handleSubmit}  disabled={isSubmitting} style={{backgroundColor:'#202225',width:200,height:40,alignItems:'center',justifyContent:'center',borderRadius:6}}>
                    <Text style={{color:'white', fontSize:18}}>Apply Changes</Text>
                  </TouchableOpacity>
                </View>                
                
                
              </Form>

            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
    
  );
};

export default SettingScreen;
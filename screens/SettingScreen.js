import * as React from 'react';
import {  Text,  View,  SafeAreaView,  Button,  TextInput,  TouchableOpacity, Image,} from 'react-native';
import {  Container,  Form,  Icon,  Content,  Item,  Input,  Label,} from 'native-base';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import axios from'axios';

const ValidateSchema = Yup.object().shape({
  OldPassword: Yup.string()
    .required('Invalid Old Password')
    .min(6, 'Password must contain at least 6'),
  Password: Yup.string()
    .required('Invalid Password')
    .min(6, 'Password must contain at least 6'),
  ScdPassword: Yup.string()
    .required('Invalid Password')
    .min(6, 'Password must contain at least 6')
    .oneOf([Yup.ref('Password')], 'Passwords does not match'),
});

const SettingScreen = () => {
  return (
    //Mondai
    <SafeAreaView style={{ flex: 1, backgroundColor: '#2F3136' }}>
      {/* Formik */}
      <Formik
        initialValues={{
          OldPassword: '',
          Password: '',
          ScdPassword: '',
        }}
        validationSchema={ValidateSchema}
        onSubmit={async (values, {setSubmitting}) => {

         try {
           const url = 'http://185.197.195.92:3000/users';
           const res = await axios.post(url,{
             username : values.UserName,
             oldPassword : values.OldPassword,
             password : values.Password,
           });
           alert(res.data.message)
           //navigation.navigate('HomeScreen');
         } catch (error) { 
           alert(error);
         }finally{
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
                <Image source={require('../assets/User-icon-default.png')} style={{width:105,height:105}}/>
                <TouchableOpacity style={{marginTop:20,borderColor:'black',borderWidth:1,borderRadius:6,padding:3}}>
                  <Text style={{fontSize:18}}>Choose Profile Picture</Text>
                </TouchableOpacity>                
              </View>              
              
              {/* Form */}
              <Form style={{marginTop:30,paddingRight:15}}>

              {/* OldPassword */}
                <View style={{marginBottom:10}}>                  
                  <Item fixedLabel error={errors.OldPassword && touched.OldPassword ? true : false}>
                    <Icon type="FontAwesome" name="user" /> 
                    <Input value={values.OldPassword} placeholder="OldPassword" onChangeText={handleChange('OldPassword')} onBlur={handleBlur('Password')} secureTextEntry={true} />
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

                {/* Password */}
                <View style={{marginBottom:10}}>                  
                  <Item fixedLabel error={errors.Password && touched.Password ? true : false}>
                   <Icon type="FontAwesome" name="user" /> 
                    <Input value={values.Password} placeholder="Password" onChangeText={handleChange('Password')} onBlur={handleBlur('Password')} secureTextEntry={true} />
                    {errors.Password && touched.Password}
                  </Item>
                  {/*Error Display */}
                  {errors.Password && touched.Password && (
                  <Item>
                    <Label style={{ color: 'indianred' }}>
                      {errors.Password}
                    </Label>
                  </Item>
                  )}
                </View>

                {/* 2ndPassword */}
                <View style={{marginBottom:25}}>                  
                  <Item fixedLabel error={errors.ScdPassword && touched.ScdPassword ? true : false}>
                    <Icon type="FontAwesome" name="user" />
                    <Input value={values.ScdPassword} placeholder="Confirm Password" onChangeText={handleChange('ScdPassword')} onBlur={handleBlur('ScdPassword')} secureTextEntry={true} />
                    {errors.ScdPassword && touched.ScdPassword}
                  </Item>
                  {/*Error Display */}
                  {errors.ScdPassword && touched.ScdPassword && (
                  <Item>
                    <Label style={{ color: 'indianred' }}>
                      {errors.ScdPassword}
                    </Label>
                  </Item>
                  )}
                </View>

                {/* Apply Btn */}
                <View style={{alignItems:'center',marginTop:30, marginBottom:25}}>
                  <TouchableOpacity onPress={handleSubmit} disabled={isSubmitting} style={{backgroundColor:'#202225',width:200,height:40,alignItems:'center',justifyContent:'center',borderRadius:6}}>
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
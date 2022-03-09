import * as React from 'react';
import {  Text,  View,  SafeAreaView,  Button,  TextInput,  TouchableOpacity,} from 'react-native';
import {  Container,  Form,  Icon,  Content,  Item,  Input,  Label,} from 'native-base';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { FontAwesome } from '@expo/vector-icons';
import axios from'axios';

const ValidateSchema = Yup.object().shape({
  UserName: Yup.string()
    .required('Invalid UserName')
    .matches(/^[a-zA-Z0-9]+$/, 'Only Text and Numbers'),
  Password: Yup.string()
    .required('Invalid Password')
    .min(6, 'Password must contain at least 6'),
  ScdPassword: Yup.string()
    .required('Invalid Password')
    .min(6, 'Password must contain at least 6')
    .oneOf([Yup.ref('Password')], 'Passwords does not match'),
});

const RegisterScreen = () => {
  return (
    //Mondai
    <SafeAreaView style={{ flex: 1, backgroundColor: '#2F3136' }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 80,
        }}>
        <Text style={{ color: 'white', fontSize: 35, marginTop:40}}>Mondai</Text>
      </View>

      {/* Formik */}
      <Formik
        initialValues={{
          UserName: '',
          Password: '',
          ScdPassword: '',
        }}
        validationSchema={ValidateSchema}
        onSubmit={async (values, {setSubmitting}) => {

         try {
           const url = 'http://185.197.195.92:3000/users';
           const res = await axios.post(url,{
             username : values.UserName,
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
            <View style={{ backgroundColor:'white',borderRadius:15,marginTop:80}}>
              {/* Head title Register */}
              <View style={{alignItems:'center',marginTop:20}}>
                <Text style={{fontSize:25}}>Register</Text>
              </View>              
              
              {/* Form */}
              <Form style={{marginTop:25,paddingRight:15}}>

              {/* Username */}
                <View style={{marginBottom:10}}>                  
                  <Item fixedLabel error={errors.UserName && touched.UserName ? true : false}>
                   <FontAwesome name="user" size={20} color="black" style={{padding: 5}} /> 
                    <Input value={values.UserName} placeholder="UserName" onChangeText={handleChange('UserName')} />
                    {errors.UserName && touched.UserName}
                  </Item>
                  {/*Error Display */}
                  {errors.UserName && touched.UserName && (
                  <Item>
                    <Label style={{ color: 'indianred' }}>
                      {errors.UserName}
                    </Label>
                  </Item>
                  )}
                </View>

                {/* Password */}
                <View style={{marginBottom:10}}>                  
                  <Item fixedLabel error={errors.Password && touched.Password ? true : false}>
                    <FontAwesome name="lock" size={20} color="black" style={{padding: 5}}/> 
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
                   <FontAwesome name="lock" size={20} color="black" style={{padding: 5}}/>
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

                {/* Register Btn */}
                <View style={{alignItems:'center',marginTop:30, marginBottom:25}}>
                  <TouchableOpacity onPress={handleSubmit} disabled={isSubmitting} style={{backgroundColor:'#202225',width:200,height:40,alignItems:'center',justifyContent:'center',borderRadius:6}}>
                    <Text style={{color:'white', fontSize:18}}>Register</Text>
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

export default RegisterScreen;
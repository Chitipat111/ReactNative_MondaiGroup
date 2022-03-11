import * as React from 'react';
import { Text, View, SafeAreaView, Button, TextInput, TouchableOpacity,} from 'react-native';
import { Container, Form, Icon, Content, Item, Input, Label,} from 'native-base';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import axios from'axios';

const ValidateSchema = Yup.object().shape({
  UserName: Yup.string()
    .required('Invalid UserName')
    .matches(/^[a-zA-Z0-9]+$/, 'Only Text and Numbers'),
  Password: Yup.string()
    .required('Invalid Password')
    .min(6, 'Password must contain at least 6'),
}); 

const LoginScreen = () => {
  return (
    //Mondai
    <SafeAreaView style={{ flex: 1, backgroundColor: '#2F3136' }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 80,
        }}>
        <Text style={{ color: 'white', fontSize: 35,marginTop:40}}>Mondai</Text>
      </View>

      {/* Formik */}
      <Formik
        initialValues={{
          UserName: '',
          Password: '',
        }}
        validationSchema={ValidateSchema}
        onSubmit={async (values, {setSubmitting}) => {
          try {
            const url = 'http://185.197.195.92:3000/users/login';
            const res = await axios.post(url,  
            {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }},
            {params:{
            username : values.UserName,
            password : values.Password
            }});
            alert(JSON.stringify(res['data']))
          } catch (error) { 
           console.log(error.response)
          }finally{
            setSubmitting(false);
          }
        }}>
        {({ errors, touched, values, handleBlur, handleChange, handleSubmit, isSubmitting,}) => (
          <View style={{ padding: 25 }}>
            {/*white box*/}
            <View style={{ backgroundColor:'white',borderRadius:15,marginTop:80}}>
              {/* Head title login */}
              <View style={{alignItems:'center',marginTop:20}}>
                <Text style={{fontSize:25}}>Login</Text>
              </View>              
              
              {/* Form */}
              <Form style={{marginTop:25,paddingRight:15}}>

              {/* Username */}
                <View style={{marginBottom:10}}>                  
                  <Item fixedLabel error={errors.UserName && touched.UserName ? true : false}>
                   <Icon type="FontAwesome" name="user" />
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
                <View style={{marginBottom:25}}>                  
                  <Item fixedLabel error={errors.Password && touched.Password ? true : false}>
                    <Icon type="FontAwesome" name="lock" />
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

                {/* Login Btn */}
                <View style={{alignItems:'center',marginTop:30}}>
                  <TouchableOpacity onPress={handleSubmit} disabled={isSubmitting} style={{backgroundColor:'#202225',width:200,height:40,alignItems:'center',justifyContent:'center',borderRadius:6}}>
                    <Text style={{color:'white', fontSize:18}}>Login</Text>
                  </TouchableOpacity>
                </View>                
                
                {/* Register */}
                <View style={{flexDirection:'row',justifyContent:'flex-end',paddingRight:15,marginTop:20,marginBottom:20}}>
                  <Text>Don't have an account ? </Text>
                  <TouchableOpacity>
                    <Text style={{textDecorationLine: 'underline'}}>Register</Text>
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

export default LoginScreen;

import {TextInput, Text, Button, Alert, View, StyleSheet} from 'react-native';import React from 'react'

import * as yup from 'yup'
import { Formik } from 'formik';


const loginValidationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(10, 'Password should not excced 10 chars.').required(),
  name: yup.string().min(4).required(),

})

const inputStyle = {
  borderWidth: 1,
  borderColor: '#4e4e4e',
  padding: 12,
  marginBottom: 5,
};

export const LoginScreen = ({navigation}) => {

  const onSubmit = values => {
    console.log("fom values", values);
    navigation.navigate("home", {})
  }
  return (
    
      <Formik
          initialValues={{
            email: '',
            password: '',
            name:'',
          }}
          onSubmit={onSubmit}
          validationSchema = { loginValidationSchema}>
            {({values,  handleChange, errors, setFieldTouched, touched, isValid, handleSubmit,
            }) => (
              <View style={styles.container}>
                {/* name */}
                <TextInput  style={inputStyle} 
                onChangeText={handleChange( 'name')}
                value= {values.name}
                onBlur={() => setFieldTouched('name')} placeholder="Name"
              />
              {touched.name && errors.name && (
                <Text style={{fontSize: 12, color: '#FF0D10'}}>
                    {errors.name}
                </Text>

            )}


                {/* email */}
       
              <TextInput  style={inputStyle} 
                onChangeText={handleChange( 'email')}
                value= {values.email}
                onBlur={() => setFieldTouched('email')} placeholder="E-mail"
              />
              {touched.email && errors.email && (
                <Text style={{fontSize: 12, color: '#FF0D10'}}>
                    {errors.email}
                </Text>

            )}
            <TextInput  style={inputStyle}
             onChangeText={handleChange( 'password')}

             value = {values.password}
                // handleChange('password')}}
                    placeholder="Password" onBlur={() => setFieldTouched('password')} secureTextEntry={true}
            />
              {touched.password && errors.password && (
              <Text style={{fontSize: 12, color: '#FF0D10'}}>
              {errors.password}
              </Text>
              )}
              <Button color="#3740FE" title="Submit" disabled={!isValid} onPress={handleSubmit }/>
              </View>
        )}

      </Formik>
    
    
  )
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
      backgroundColor: "white",
  
      
      

  },
  inputContainer: {
      width: 300
  },
  button: {
      width: 200,
      marginTop: 10,

   },
 

})
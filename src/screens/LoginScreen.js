import {TextInput, Text, Button,  View, StyleSheet, TouchableOpacity, Pressable} from 'react-native';import React from 'react'

import * as yup from 'yup'
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { userActions } from '../features/user/userSlice';
import COLORS from '../constants/colors';


const loginValidationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(10, 'Password should not excced 10 chars.').required(),
  name: yup.string().min(4).required(),

})

const inputStyle = {
  borderWidth: 1,
  borderColor: '#4e4e4e',
  padding: 12,
  marginBottom: 15,
};

export const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch()


  const onSubmit = values => {
    // console.log("fom values", values);
    dispatch(userActions.setUser(values))
    navigation.navigate("jokes", {})

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
                <Text style= {{ color: COLORS.black, fontSize: 40, fontWeight:'bold' , paddingBottom : 30}}>Login </Text>
                <Text style= {{ color: '#4C0033', fontSize: 18, fontWeight:'bold' ,   paddingBottom : 30}}>Enter Details to login </Text>

                {/* name */}
                <TextInput  style={inputStyle} 
                onChangeText={handleChange( 'name')}
                value= {values.name}
                onBlur={() => setFieldTouched('name')} placeholder="Enter your username" />
              {touched.name && errors.name && (
                <Text style={{fontSize: 12, color: '#FF0D10'}}>
                    {errors.name}
                </Text>

            )}


                {/* email */}
       
              <TextInput  style={inputStyle} 
                onChangeText={handleChange( 'email')}
                value= {values.email}
                onBlur={() => setFieldTouched('email')} placeholder="enter your email"
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
                    placeholder="enter password" onBlur={() => setFieldTouched('password')} secureTextEntry={true}
            />
              {touched.password && errors.password && (
              <Text style={{fontSize: 12, color: '#FF0D10'}}>
              {errors.password}
              </Text>
              )}
              <Button color="#25316D"    title="Submit" disabled={!isValid} onPress={handleSubmit }/>
          
{/* 
              <Pressable style={styles.button} onPress={handleSubmit}>
                <Text style={styles.text}>Hell</Text>
              </Pressable> */}


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
  text: {
  },

  inputContainer: {
      width: 600,
      
  },
  button: {
   
      marginTop: 10,
      color :"yellow", 

   },
 

})
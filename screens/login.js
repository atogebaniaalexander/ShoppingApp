import {TextInput} from 'react-native-gesture-handler';

import React, { useState,useEffect } from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  
} from 'react-native';

const loginScreen = ({ navigation,route}) => {
  return (
    
    //container starts here
    <ScrollView
      style={{ flex: 1, backgroundColor: '#ffff' }}
      showsVerticalScrollIndicator={false}>
      <View style={styles.brand}>
        <ImageBackground
        source={require('../assets/images/logo1.jpg')}
        style={{ height: Dimensions.get('window').height / 1.7,width:Dimensions.get('window').width }}>
        <TouchableOpacity style={styles.brandView}>
           <Image source={require('../assets/images/ugbuylogo.jpg')} style={{width: 150, height: 70,position:'top',}} />
          <Text style={styles.brandText}>ug buy</Text>
        </TouchableOpacity>
      </ImageBackground>
      <ImageBackground
        source={require('../assets/images/2background.jpg')}
        style={{ height: Dimensions.get('window').height/2.5 }}>
      <View style={styles.mainView}>
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={styles.brandViewText,{ color: '#4632A1',fontSize: 20}}>Welcome to</Text>
          <Text style={{ color: 'yellow',fontSize: 25,fontWeight: '600'}}>UG buy</Text>
        </View>
        <View style={{ paddingHorizontal: 30}}>
          <SafeAreaView>
            <TextInput style={styles.bottomView,{backgroundColor:'#cfd5fa',
              borderRadius: 10,
              padding:10,
              paddingHorizontal: 60,
              marginTop:10,
              top:5,
              }}
               placeholder="username or email"
           />
          <TextInput style={{backgroundColor:'#cfd5fa',
           borderRadius: 10,
           padding:10,
           paddingHorizontal: 60,
           marginTop:6,
           top:10,
           }}
            placeholder="password"
          />
          </SafeAreaView>
          <TouchableOpacity onPress={()=>{navigation.navigate('Home')}}
          style={{backgroundColor:'purple', 
          padding:10,
          borderRadius: 10,
          marginBottom:19,
          marginTop:7,
          paddingHorizontal:10,
          flexDirection:30,
          margin:90,
          top:0,
          bottom:0,
          alignItems:'center',
          justifyContent:'center',
          }}>
            <Text style={{fontSize:10,justifyContent:'center'}}> Log in</Text>
          </TouchableOpacity>
          <Text style={{color:'red', paddingHorizontal:15,paddingVertical:0,marginTop:0}}>Don't have an account?
        <TouchableOpacity onPress={()=>{navigation.navigate('signUp')}} title="Sign Up Page">
        <Text style={{color: 'blue', fontStyle: 'italic',textDecorationLine:'underline',paddingHorizontal:10}}>Register now</Text></TouchableOpacity>
           </Text>
        </View>
      </View>
      </ImageBackground>
      </View>
    </ScrollView>
  );
};
export default loginScreen;
const styles = StyleSheet.create({
  brand:{
    flex:1,
    
  },
  brandView: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandViewText: {
    color: '#ffff',
    fontSize: 40,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    paddingTop:0,
  },
  mainView: {
    flex: 1.3,
    flexDirection:"center",
    backgroundColor: 'white',
    top:-180,
    bottom:50,
    paddingTop:0,
    paddingBottom:16,
    borderTopStartRadius: 2,
    borderTopEndRadius:100,
    borderBottomStartRadius:80,
    borderBottomEndRadius:0,
    paddingVertical:80,
    
    
  },
   brandText: {
    color: '#694ADA',
    fontSize: 40,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    backgroundColor: '#B1A993'
  },
});

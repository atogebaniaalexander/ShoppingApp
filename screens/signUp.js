import {TextInput} from 'react-native-gesture-handler';
import React from 'react';
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
const SignUpScreen = ({navigation}) => {
    return (
      <ScrollView>
        <ImageBackground
        source={require('../assets/images/signUpBackground.jpg')}
        style={{ height: Dimensions.get('window').height,width:Dimensions.get('window').width }}>
          <View style={styles.mainView}>
            <View>
              <Text style={styles.signUpText}> SIGN UP</Text>
            </View>
            <View style={styles.formView}>
            <Text style={styles.textstyle}>USERNAME</Text>
            <TextInput style={styles.textinputstyle}
                placeholder="username"
            />
            <Text style={styles.textstyle}>EMAIL ADDRESS</Text>
             <TextInput style={styles.textinputstyle}
                placeholder="example@gmail.com"
            />
            <Text style={styles.textstyle}>PHONE</Text>
             <TextInput style={styles.textinputstyle}
                placeholder="+223"
            />
            <Text style={styles.textstyle}>PASSWORD</Text>
              <TextInput style={styles.textinputstyle}
            placeholder="************"
           />
           <TouchableOpacity style={{fontSize:12,
            marginLeft: 20,
            borderRadius: 15,
            padding:11,
            paddingHorizontal:20,
            margin:90,
            borderWidth:2,
            backgroundColor:'purple',
          marginTop:9,
          top:1,
          }} onPress={()=>{navigation.navigate('Login')}}>
          
           <Text>Create Account</Text>
           </TouchableOpacity>
            </View>a
          </View>
        </ImageBackground>
      </ScrollView>
      );
  };
export default SignUpScreen;
const styles = StyleSheet.create({
  mainView:{
      flex: 1.5,
    flexDirection:"center",
    backgroundColor: 'rgba(0,0,0,0.4)',
    top:0,
    bottom:23,
    paddingTop:30,
    paddingBottom:90,
    borderTopStartRadius: 10,
    borderTopEndRadius:10,
    borderBottomStartRadius:100,
    borderBottomEndRadius:10,
 
  },
  signUpText: {
    fontSize: 30,
    color: 'white',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop:1,
    top:53,
    flexDirection:'column',
    paddingLeft:80,
    paddingTop:-80,
  },
  formView: {
     flex: 1.5,
    flexDirection:"flex-start",
    backgroundColor: 'rgba(3,2,0,0.7)',
    top:-40,
    bottom:10,
    paddingTop:10,
    paddingBottom:10,
    borderTopStartRadius: 10,
    borderTopEndRadius:10,
    borderBottomStartRadius:10,
    borderBottomEndRadius:10,
    paddingVertical:20,
    marginTop:100,
    marginHorizontal:10,
  },
  textstyle: {
    color: 'blue',
    fontSize:12,
    marginLeft: 20,
    flexDirection: 'flex-start',
  },
  textinputstyle: {
    backgroundColor:'white',
    borderRadius: 13,
    padding:9,
    paddingHorizontal:10,
    marginHorizontal:10,
    marginLeft:5,
    borderWidth:2,
    borderColor:'blue',
    marginTop:6,
    top:10,
  }

});

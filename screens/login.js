import { Icon } from 'native-base';
import React from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const loginScreen = ({ navigation }) => {
  return (
    //container starts here
    <ScrollView
      style={{ flex: 1, backgroundColor: '#ffff' }}
      showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={require('../assets/images/logo1.jpg')}
        style={{ height: Dimensions.get('window').height / 2.5 }}>
        
        <View style={styles.brandView}>
          <Image source={require('../assets/images/ugbuylogo.jpg')} style={{width: 150, height: 70}} />
          <Text style={styles.brandText}>ug buy</Text>
        </View>
      </ImageBackground>
        {/*bottom view*/}
      <View style={styles.bottomViewText}>
        <View style={{ padding: 40 }}>
          <Text style={{ color: '#4632A1',fontSize: 34}}>Welcome</Text>
          <Text>Don't have an account?
            <Text style={{color: 'blue', fontStyle: 'italic'}}>Register now</Text>
          </Text>
          {/* form inputs view */}
          <View style={{marginTop:50}}>
                 <label>Email</label>
                 <TextInput value="person@gmail.com" keyboardType="email-address"></TextInput>
                 <Icon name="checkmark" style={{color: '#632A1'}}></Icon>
          </View>
        </View>
      </View>
    </ScrollView>
    //container stops here
  );
};
export default loginScreen;
const styles = StyleSheet.create({
  brandView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'blue',
  },
  brandText: {
    color: '#694ADA',
    fontSize: 40,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    backgroundColor: '#B1A993'
  },
  brandViewText: {
    color: '#FFCD33',
    fontSize: 40,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  bottomView: {
    flex: 1.5,
    backgroundColor: '#ffff',
    bottom: 50,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
  },
});

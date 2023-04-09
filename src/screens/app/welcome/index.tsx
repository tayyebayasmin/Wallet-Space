import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {useForm} from 'react-hook-form';
import {Image, View} from 'react-native';
import {Button, Text, TextInput, useTheme} from 'react-native-paper';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {ScreenNames} from '~routes';
import styles from './styles';
import {yupResolver} from '@hookform/resolvers/yup';
import {height, width} from '~utils';
import { WhiteContainer } from '~components';

const Welcome = ({navigation}: NativeStackScreenProps<any>) => {
  const theme = useTheme();
 
  return (
    <ScreenWrapper translucent barStyle="dark-content">
      <View style={styles.container}>
        <View>
          <Image
          style={{marginTop:height(4)}}
          source={require('../../../assets/images/logo.png')}
          />
        </View>
      <WhiteContainer style={styles.whiteContainer} height={height(70)}>
      <View
      style={styles.spaceContainer}
      >
      </View>
      <View style={{marginTop:height(23)}}>
      <Text
          style={{
            fontFamily: 'Outfit-normal',
            fontWeight: '700',
            fontSize: width(6),
            color: '#0040FF',
            alignSelf: 'center',
            marginTop: width(2),
          }}>
          Welcome to Space Wallet
        </Text>
        <Text
          style={{
            fontFamily: 'Outfit-normal',
            fontWeight: '400',
            fontSize: width(3),
            width: width(70),
            alignItems: 'center',
            textAlign: 'center',
            letterSpacing: 1,
            color: ' rgba(0, 64, 255, 0.51)',
            alignSelf: 'center',
            marginTop: width(2),
          }}>
          Crpto payments made easy
        </Text>
          <Button
        color='#0040FF'
        onPress={()=>navigation.navigate(ScreenNames.RESTORE_WALLET)}
        style={{width:width(80),backgroundColor:'white',borderColor:'#0040FF', borderWidth:width(0.5),marginTop:width(10),paddingVertical:width(2)}}
        >
        Import Wallet
        </Button>
        <Button
        color='white'
        onPress={()=>navigation.navigate(ScreenNames.CREATE_ACCOUNT)}
        style={{width:width(80),backgroundColor:'#0040FF',marginTop:width(5),paddingVertical:width(2)}}
        >
        Create new Wallet
        </Button>
        <Text
          style={{
            fontFamily: 'Outfit-normal',
            fontWeight: '400',
            fontSize: width(3),
            width: width(80),
            alignItems: 'center',
            textAlign: 'center',
            letterSpacing: 2,
            color: ' rgba(0, 64, 255, 0.51)',
            alignSelf: 'center',
            marginTop: width(8),
          }}>
         By creating an account, you agree to our
        </Text>
        <View style={{flexDirection:'row',alignSelf:'center'}}>
        <Text
          style={{
            fontFamily: 'Outfit-normal',
            fontWeight: 'bold',
            fontSize: width(3),
            alignItems: 'center',
            textAlign: 'center',
            letterSpacing: 2,
            color: '#0040FF',
            alignSelf: 'center',
            marginTop: width(2),
          }}>
          Privacy Policy
        </Text>
        <Text
          style={{
            fontFamily: 'Outfit-normal',
            fontWeight: '400',
            fontSize: width(3),
            alignItems: 'center',
            textAlign: 'center',
            letterSpacing: 2,
            color: 'rgba(0, 64, 255, 0.51)',
            alignSelf: 'center',
            marginTop: width(2),
            marginHorizontal:width(2)
          }}>
          and
        </Text>
        <Text
          style={{
            fontFamily: 'Outfit-normal',
            fontWeight: 'bold',
            fontSize: width(3),
            alignItems: 'center',
            textAlign: 'center',
            letterSpacing: 2,
            color: '#0040FF',
            alignSelf: 'center',
            marginTop: width(2),
          }}>
          Terms of use.
        </Text>
        </View>
        </View>
        </WhiteContainer>
      </View>     
    </ScreenWrapper>
  );
};

export default Welcome;

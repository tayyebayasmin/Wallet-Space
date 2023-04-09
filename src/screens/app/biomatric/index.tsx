import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {useForm} from 'react-hook-form';
import {Image, View} from 'react-native';
import {Button, Text, TextInput, useTheme} from 'react-native-paper';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {ScreenNames} from '~routes';
import styles from './styles';
import {height, width} from '~utils';
import Header from '~components/header';

const BiomatricAuthentication = ({navigation}: NativeStackScreenProps<any>) => {
  const theme = useTheme();

  return (
    <ScreenWrapper translucent barStyle="dark-content">
      <View style={styles.container}>
        <Header active3 onPressBack={() => navigation.goBack()} />
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('../../../assets/images/biometric.png')}
        />
        <Text
          style={{
            fontFamily: 'Outfit-normal',
            fontWeight: '600',
            textAlign:'center',
            fontSize: width(7.5),
            color: '#0040FF',
            marginTop: width(10),
          }}>
          Enable Biometric Authentication
        </Text>
        <Text
          style={{
            alignSelf: 'center',
            fontFamily: 'Outfit-normal',
            fontWeight: '400',
            fontSize: width(3.5),
            alignItems: 'center',
            textAlign: 'justify',
            letterSpacing: 1,
            color: ' rgba(0, 64, 255, 0.51)',
            marginTop: width(4),
          }}>
          Enjoy simpler and faster verification
        </Text>
        <Button
          color="#0040FF"
          style={{
            width: width(85),
            backgroundColor: 'white',
            borderColor: '#0040FF',
            borderWidth: width(0.5),
            marginTop: width(40),
            paddingVertical: width(2),
          }}
          onPress={()=>navigation.navigate(ScreenNames.TRANSACTION_SUCCESSFUL)}>
          Cancel
        </Button>
        <Button
          color="white"
          style={{
            marginTop: width(5),
            width: width(85),
            backgroundColor: '#0040FF',
            paddingVertical: width(2),
          }}
          // onPress={() => navigation.navigate(ScreenNames.WELCOME)}
        >
          Enable
        </Button>
      </View>
    </ScreenWrapper>
  );
};

export default BiomatricAuthentication;

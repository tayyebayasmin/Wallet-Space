import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Alert, Image, Share, TouchableOpacity, View} from 'react-native';
import {Button, Text, TextInput, useTheme} from 'react-native-paper';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import Clipboard from '@react-native-clipboard/clipboard';
import styles from './styles';
import {height, width} from '~utils';
import Header from '~components/header';
import {WhiteContainer} from '~components';
import HeaderText from '~components/header2';

const BitcoinDeposit = ({navigation}: NativeStackScreenProps<any>) => {
  const copyToClipboard = () => {
    Clipboard.setString('bct7686dgdghvhwgvfghcasshjahsjc.vnmsjikl');
  };
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'bct7686dgdghvhwgvfghcasshjahsjc.vnmsjikl',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };
  return (
    <ScreenWrapper translucent barStyle="light-content">
      <View style={styles.container}>
        <HeaderText
          color="white"
          title="Bitcoin Deposit"
          onPressBack={() => navigation.goBack()}
        />
        <WhiteContainer style={styles.whiteContainer} height={height(80)}>
          <View style={styles.imageQr}>
            <Image
              resizeMode="contain"
              source={require('../../../assets/images/qr.png')}
            />
            <Text
              style={{
                alignSelf: 'center',
                fontFamily: 'Outfit-normal',
                fontWeight: '700',
                fontSize: width(3.5),
                alignItems: 'center',
                textAlign: 'center',
                letterSpacing: 1,
                color: '#5A6B73',
                marginTop: width(4),
              }}>
              (bct7686dgdghvhwgvfghcasshjahsjc.vnmsjikl)
            </Text>
          </View>
          <Text
            style={{
              alignSelf: 'center',
              fontFamily: 'Outfit-normal',
              fontWeight: '400',
              fontSize: width(3),
              alignItems: 'center',
              textAlign: 'center',
              letterSpacing: 1,
              color: '#040330',
              marginTop: width(10),
            }}>
            Send only Bitcoin to this address
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              fontFamily: 'Outfit-normal',
              fontWeight: '400',
              fontSize: width(3.2),
              alignItems: 'center',
              textAlign: 'center',
              letterSpacing: 1,
              color: '#040330',
            }}>
            sending any other digital assets may result to permanent loss
          </Text>
          <View
            style={{
              flexDirection: 'row',
              width: width(30),
              alignSelf: 'center',
              justifyContent: 'space-between',
              marginTop: width(5),
            }}>
            <TouchableOpacity
              onPress={() => copyToClipboard()}
              style={{
                alignItems: 'center',
              }}>
              <View style={styles.blueCircle}>
                <Image source={require('../../../assets/images/copy.png')} />
              </View>
              <Text>Copy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onShare()}
              style={{
                alignItems: 'center',
              }}>
              <View style={styles.blueCircle}>
                <Image source={require('../../../assets/images/share.png')} />
              </View>
              <Text>Share</Text>
            </TouchableOpacity>
          </View>
          <Button
            color="white"
            style={{
              marginTop: width(5),
              width: width(85),
              backgroundColor: '#0040FF',
              paddingVertical: width(2),
              position: 'absolute',
              bottom: width(5),
            }}
            // onPress={() => navigation.navigate(ScreenNames.WELCOME)}
          >
            Done
          </Button>
        </WhiteContainer>
      </View>
    </ScreenWrapper>
  );
};

export default BitcoinDeposit;

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {useForm} from 'react-hook-form';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {ScreenNames} from '~routes';
import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
interface Props {
  onPressBack?: () => void;
  title?: string;
  justify?:boolean;
  color?:string
}
const HeaderText = ({onPressBack, title,justify,color}: Props) => {
  const styles = StyleSheet.create({
    headerContainer: {
      width: width(90),
      paddingTop: width(2),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:justify ? 'center' :undefined
    }
  });
  return (
    <View style={styles.headerContainer}>
      {onPressBack && (
        <TouchableOpacity onPress={onPressBack}>
          <Image
            style={{height: width(5), width: width(8), tintColor:color? color: '#0040FF'}}
            source={require('../../assets/images/back.png')}
          />
        </TouchableOpacity>
      )}
      {title && (
        <Text
          style={{
            width:width(70),
            textAlign:'center',
            // marginLeft: width(20),
            fontFamily: 'Outfit-normal',
            fontWeight: 'bold',
            fontSize: width(5),
            color:color? color : '#0040FF',
          }}>
          {title}
        </Text>
      )}
    </View>
  );
};

export default HeaderText;

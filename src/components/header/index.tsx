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
  onPressBack: () => void;
  active1?: boolean;
  active2?: boolean;
  active3?: boolean;
  title?: string;
}
const Header = ({onPressBack, active1, active2, active3, title}: Props) => {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: height(1.5),
      flex: 1,
      backgroundColor: 'white',
    },
    headerContainer: {
      width: width(90),
      paddingTop: width(2),
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    circle: {
      height: width(6),
      marginLeft: width(1),
      borderRadius: width(6),
      width: width(6),
      borderColor: active1 ? '#0040FF' : '#D9D9D9',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: width(0.5),
    },
    innerCircle: {
      height: width(3),
      width: width(3),
      borderRadius: width(8),
      backgroundColor: active1 ? '#0040FF' : '#D9D9D9',
    },
    circle2: {
      height: width(6),
      marginLeft: width(1),
      borderRadius: width(6),
      width: width(6),
      borderColor: active2 ? '#0040FF' : '#D9D9D9',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: width(0.5),
    },
    innerCircle2: {
      height: width(3),
      width: width(3),
      borderRadius: width(8),
      backgroundColor: active2 ? '#0040FF' : '#D9D9D9',
    },
    circle3: {
      height: width(6),
      marginLeft: width(1),
      borderRadius: width(6),
      width: width(6),
      borderColor: active3 ? '#0040FF' : '#D9D9D9',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: width(0.5),
    },
    innerCircle3: {
      height: width(3),
      width: width(3),
      borderRadius: width(8),
      backgroundColor: active3 ? '#0040FF' : '#D9D9D9',
    },
    row: {
      flexDirection: 'row',
    },
  });
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onPressBack}>
        <Image
          style={{height: width(5), width: width(8)}}
          source={require('../../assets/images/back.png')}
        />
      </TouchableOpacity>
      <View style={styles.row}>
        <View style={styles.circle}>
          <View style={styles.innerCircle}></View>
        </View>
        <View style={styles.circle2}>
          <View style={styles.innerCircle2}></View>
        </View>
        <View style={styles.circle3}>
          <View style={styles.innerCircle3}></View>
        </View>
      </View>
    </View>
  );
};

export default Header;

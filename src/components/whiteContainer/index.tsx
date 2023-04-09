import React from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import {View} from 'react-native-animatable';
import { height as h, width as w} from '~utils';
interface Props{
  children?:any;
  height?:number;
  width?:number;
  backgroundColor?:string;
  style?:ViewStyle
}
export default function WhiteContainer({
  children,
  height = h(70),
  width = w(100),
  backgroundColor = 'white',
  style = {},
}:Props) {
  const customStyles = {height, width, backgroundColor, ...style};
  return (
    <View
      animation={'slideInUp'}
      useNativeDriver={true}
      duration={400}
      style={[styles.container, customStyles]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: w(10),
    borderTopRightRadius: w(10),
    paddingVertical: h(5),
  },
});
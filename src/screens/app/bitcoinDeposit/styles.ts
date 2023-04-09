import {StyleSheet} from 'react-native';
import {height, width} from '~utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0040FF',
    paddingVertical: height(5),
    paddingHorizontal: width(7),
  },
  imageQr:{
    width: width(80),
    padding: width(5),
    borderRadius: width(3),
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  whiteContainer: {
    backgroundColor:'#f5f6f6',
    paddingHorizontal: width(10),
    position:'absolute',
    bottom:0,
    alignItems: 'center',
  },
  headerContainer: {
    width: width(90),
    alignItems: 'center',
    paddingTop: width(2),
    flexDirection: 'row',
    marginVertical: width(5),
  },
  blueCircle:{
    width:width(12),
    height:width(12),
    alignItems:'center',
    justifyContent:'center',
    padding:width(3),
    borderRadius:width(8),
    backgroundColor:'#0040FF'
  }
});
export default styles;

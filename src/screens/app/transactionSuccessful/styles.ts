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
  whiteContainer: {
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
});
export default styles;

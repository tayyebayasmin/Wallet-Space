import { StyleSheet } from "react-native";
import { height, width } from "~utils";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: height(1.5),
        flex: 1,
        backgroundColor:'#0040FF'
    },
    image:{
        marginTop:height(15),
        alignSelf:'center'
    },
    whiteContainer: {
        paddingHorizontal: width(10),
        alignItems: 'center',
      },
      spaceContainer:{
        width:width(85),
        height:height(40),
        position:'absolute',
        top:-90,
        borderTopLeftRadius:width(15),
        borderTopRightRadius:width(15),
        borderBottomRightRadius:width(5),
        borderBottomLeftRadius:width(5),
        backgroundColor:'#CDCDE2',
      }
})
export default styles;
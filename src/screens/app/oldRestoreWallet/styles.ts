import { StyleSheet } from "react-native";
import { height, width } from "~utils";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        paddingVertical: height(5),
        alignItems:'center',
        paddingHorizontal: width(7),
    },
    image:{
        marginTop:height(15),
        alignSelf:'center'
    },
    outerContainer:{
        marginTop:width(5),
        height:height(35),
        width:width(87),
       borderColor: '#0040FF',
        padding: width(3),
        borderWidth: width(0.5),
        borderRadius:width(5),
      },
      container2: {
        marginVertical: width(3),
      },
      ScrollVew:{
        // justifyContent: 'center',
        backgroundColor: 'white',
     
        paddingVertical:width(5),
      },
      activeText:{
        backgroundColor:'white',
        color:'#0040FF',
        fontFamily: 'Outfit-normal',
        fontWeight: '600',
        // fontSize: width(4),
        // padding:width(2),
        // margin:width(1)
      }
})
export default styles;
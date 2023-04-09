import { StyleSheet } from "react-native";
import { height, width } from "~utils";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        paddingVertical: height(5),
        paddingHorizontal: width(7),
    },
    image:{
        marginTop:height(15),
        alignSelf:'center'
    },
    circle:{
        alignSelf:'center',
        borderRadius:width(8),
        borderColor:'#040330',
        borderWidth:width(0.5),
        width:width(15),
        height:width(15),
        alignItems:'center',
        justifyContent:'center'
    },
    outerContainer:{
        marginTop:height(12),
        alignSelf:'center',
        width:width(35),
        paddingVertical:width(5),
        borderRadius:width(2),
        backgroundColor:'#A7A7B6'
    }
})
export default styles;
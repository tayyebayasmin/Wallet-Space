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
        marginTop:height(12),
        alignSelf:'center',
        alignItems:'center',
        width:width(80),
        paddingVertical:width(10),
        borderRadius:width(2),
        backgroundColor:'#D1D1D61F'
    }
})
export default styles;
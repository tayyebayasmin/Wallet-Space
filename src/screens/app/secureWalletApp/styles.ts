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
    }
})
export default styles;
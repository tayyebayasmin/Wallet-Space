import { StyleSheet } from "react-native";
import { height, width } from "~utils";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        paddingVertical: height(5),
        paddingHorizontal: width(7),
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor:'white'
      },
})
export default styles;
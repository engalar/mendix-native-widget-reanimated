import { memo, useCallback, useRef, createElement } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import { View } from "react-native-animatable";

const styles = StyleSheet.create({
    cell: {
        padding: 16,
        marginBottom: 10,
        marginHorizontal: 10
    },
    name: {
        color: "white",
        fontSize: 16,
        textAlign: "center"
    }
});
function AnimationCell({ useNativeDriver, color, onPress, animationType }) {
    const ref = useRef(null);
    const handlePress = useCallback(() => {
        if (ref.current && onPress) {
            onPress(ref.current, animationType);
        }
    }, [ref, onPress, animationType]);

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View ref={ref} style={[{ backgroundColor: color }, styles.cell]} useNativeDriver={useNativeDriver}>
                <Text style={styles.name}>{animationType}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}
// export default memo(AnimationCell);
export default AnimationCell;

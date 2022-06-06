import * as React from 'react';
import { View, Animated, Dimensions, StyleSheet } from 'react-native';

export default function LogoImage() {
    let [opacity, setOpacity] = React.useState(new Animated.Value(0));
    let width = Dimensions.get('window').width;

    const onLoad = () => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }

    return <View style={{ width: width }}>
        <Animated.Image
            onLoad={onLoad}
            source={ require("../../assets/Logo.png") }
            style={[
                {
                    opacity: opacity,
                    width: Dimensions.get('window').width * 0.4,
                    height: Dimensions.get('window').width * 0.3,
                    transform: [
                        {
                            scale: opacity.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0.85, 1],
                            })
                        },
                    ],
                },
                styles.logo,
            ]}
        />
    </View>
}
const styles = StyleSheet.create({
    logo: {
        alignSelf: 'center',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "#333",
        shadowOpacity: 0.7,
        shadowRadius: 3,
        marginVertical: 6,
    },
});
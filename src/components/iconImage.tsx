import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

export default function IconImage(item: any) {
    if (!item) return null;
    return (
        <TouchableOpacity onPress={()=>console.log("pressed: ", item.props.image)}>
            <Image
                source={require(`../../assets/icon/${item.props.image}.png`)}
                fadeDuration={0}
                style={{ 
                    marginHorizontal: 10,
                    width: 20 * item.props.size, 
                    height: 20 * item.props.size }}
            />
        </TouchableOpacity>
    )
}

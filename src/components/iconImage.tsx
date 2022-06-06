import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

export default function IconImage(item: any) {
    if (!item || !item.props.image) return null;
    
    return (
        <TouchableOpacity onPress={()=>console.log("pressed: ", item.props.name)}>
            <Image
                source={item.props.image} 
                fadeDuration={0}
                style={{ 
                    marginHorizontal: 10,
                    width: 20 * item.props.size, 
                    height: 20 * item.props.size }}
            />
        </TouchableOpacity>
    )
}

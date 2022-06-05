import * as React from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import IconImage from '../../../components/iconImage';

export default function Categories({props}:any) {
    let viewRef = React.useRef(null);
    const sizeIcon = 3.5;
    const categories = [{
        name:"Peças",
        code:"pecas",
        image: "pecas",
        size: sizeIcon,
    },{
        name:"Temaki",
        code:"temaki",
        image: "temaki",
        size: sizeIcon,
    },{
        name:"Yakisoba",
        code:"yakisoba",
        image: "yakisoba",
        size: sizeIcon,
    },{
        name:"Combinados",
        code:"combinado",
        image: "combinado",
        size: sizeIcon,
    }
]
    return <View ref={viewRef} style={{flexDirection:'row', justifyContent:'space-around'}}>
            { categories.map((item, index) =>
            <View key={index} style={{flexDirection:"column", alignItems:'center'}}>
                <IconImage props={ item }/>
                <Text style={{fontFamily:'SourceSansPro_600SemiBold', fontSize:18}}>{item.name}</Text>
            </View> 
            )}
         </View>
}
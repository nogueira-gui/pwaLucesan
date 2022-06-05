import * as React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Card from '../../../components/card';


export default function CardItem({ props }: any) {
    return (
        <Card>
            <TouchableOpacity onPress={() => { console.log("Open detail to ", props.name) }}>
                <Image style={styles.logo} source={{
                    uri: props.image,
                }}></Image>
                <Text style={{ fontFamily: 'SourceSansPro_900Black', fontSize: 30 }}>{props.name}</Text>
                <Text style={{ fontFamily: 'SourceSansPro_300Light', fontSize: 25 }}>{props.category}</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row' , alignItems:'center'}}>
                <Text style={{ fontFamily: 'SourceSansPro_700Bold', fontSize: 20 }}>R$ {props.price.toFixed(2)}</Text>
                <TouchableOpacity style={{marginLeft: 10}} onPress={()=>console.log("add buuton")}>
                        <Ionicons backgroundColor="transparent" name="add-circle" size={35} color="black" />
                </TouchableOpacity>
            </View>
        </Card>);
}
const styles = StyleSheet.create({
    logo: {
        width: 140,
        height: 140,
        borderRadius: 10
    },
});
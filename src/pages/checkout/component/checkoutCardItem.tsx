import * as React from 'react';
import { StyleSheet, Text, Image, View, Dimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Card from '../../../components/card';
import { ItemBasic } from '../../../models/item';

export default function CheckoutCardItem({props}:any) {
    const {height, width} = Dimensions.get('window');
    return props.map((item : ItemBasic, id: number)=>
        <Card key={id}>
            <View style={{ flexDirection:'row'}}>
                <Image style={{width: 140,height: 140,borderRadius: 10, marginRight:5}} source={{
                    uri: item.image,
                }}></Image>
                <View style={{flexDirection:'column'}}>
                    <Text style={{ fontFamily: 'SourceSansPro_900Black', fontSize: 20 }}>{item.name}</Text>
                    <Text style={{ fontFamily: 'SourceSansPro_300Light', fontSize: 25 }}>{item.category}</Text>
                    <Text style={{ fontFamily: 'SourceSansPro_700Bold', fontSize: 20 }}>R$ {item.price.toFixed(2)}
                        <Ionicons.Button backgroundColor="transparent" borderRadius={25} name="remove-circle" size={28} color="black" />
                        <Text style={{ fontFamily: 'SourceSansPro_400Regular', fontSize: 25, 
                    borderWidth:0.5, borderRadius:25, paddingHorizontal:14, }}>1</Text>
                        <Ionicons.Button backgroundColor="transparent" borderRadius={25} name="add-circle" size={28} color="black" />
                    </Text>
                </View>
            </View>
        </Card>
    );
}
const styles = StyleSheet.create({

  });
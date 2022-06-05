import * as React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ItemBasic } from '../../../models/item';
import CardItem from './cardItem';

export default function GridItem({props}: any) {
    return <SafeAreaView 
            style={{
                flexDirection:'row', 
                flexWrap:'wrap', 
                justifyContent: 'center'
                }}>
        {props.map((item: ItemBasic, id: number) =>
                <CardItem key={id} props={item}/> )}
    </SafeAreaView> 
}
const styles = StyleSheet.create({
    logo: {
        width: 300,
        height: 125,
        borderRadius: 10
    },
});
import React from 'react';
import { StyleSheet, Dimensions, View, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function SearchInput(props: any) {
    const [text, onChangeText] = React.useState("");
    return (
        <View style={styles.searchSection}>
        <Ionicons style={styles.searchIcon} name="ios-search" size={20} color="#000"/>
        <TextInput
            style={styles.input}
            placeholder="Buscar"
            onChangeText={(text)=>onChangeText(text)}
            value={text}
            maxLength={40}
            underlineColorAndroid="transparent"
        />
        {text != "" &&
        <Ionicons onPress={()=>onChangeText("")}
        style={styles.searchIcon} name="ios-close" size={20} color="#000"/>}
        </View>
    )
}
const styles = StyleSheet.create({
    searchSection: {
        alignSelf:'center',
        width: Dimensions.get("window").width*0.8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        borderWidth: 2,
        borderRadius: 20,
        backgroundColor: '#fff',
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        fontSize: 18,
        paddingRight: 10,
        paddingLeft: 0,
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal:5,
        backgroundColor: 'transparent',
        color: '#424242',
    },
});
import * as React from 'react';
import { View, Animated, Dimensions, FlatList, StyleSheet, Text } from 'react-native';
import CardItem from './cardItem';

let CurrentSlide: number = 0;
let IntervalTime: number = 4000;
let _timerId: number = 0;
export default function HorizontalItemList({ props }: any) {
  const width = Dimensions.get('window').width;

  React.useEffect(() => {
  }, []);

  //Adding this View with width: Dimensions.get('window').width 
  //   to resolve autoScroll on horizontal
  return <View style={{ width: width }}>
    <FlatList
      data={props}
      keyExtractor={(item) => String(item)}
      horizontal={true}
      scrollEventThrottle={16}
      snapToAlignment={'start'}
      decelerationRate={'fast'}
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      renderItem={({ item })=><CardItem props={item}/>}
    />
  </View>
}
const styles = StyleSheet.create({
  logo: {
    borderRadius: 10,
    alignSelf: 'center',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.7,
    shadowRadius: 3,
    marginVertical: 6,
    marginHorizontal: 4,
  },
});
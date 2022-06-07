import * as React from 'react';
import { View, Animated, Dimensions, FlatList, StyleSheet } from 'react-native';

let CurrentSlide: number = 0;
let IntervalTime: number = 4000;
let _timerId: number = 0;
export default function BannerSlider({ props }: any) {
  let [opacity, setOpacity] = React.useState(new Animated.Value(0));
 
  let width = Dimensions.get('window').width;
  const flatList = React.useRef(null);
  let banners = props;
  React.useEffect(() => {
    _stopAutoPlay();
    _startAutoPlay();
    /*
    banners.push({
      id: props[props.length-1].id+1,
      name: "EMPTY",
      category: "EMPTY",
      image: null,
      price: 0
    })*/
    return function cleanup(): void {
      _stopAutoPlay();
    }
  }, []);


  const onLoad = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }

  const _goToNextPage = () => {
    if (CurrentSlide >= props.length - 1) CurrentSlide = -1;

    flatList.current.scrollToIndex({
      index: ++CurrentSlide,
      animated: true,
    });
  };

  const _startAutoPlay = () => {
    _timerId = setInterval(_goToNextPage, IntervalTime);
  };

  const _stopAutoPlay = () => {
    if (_timerId) {
      clearInterval(_timerId);
        _timerId = 0;
      // _timerId = null;
    }
  }

  //Adding this View with width: Dimensions.get('window').width 
  //   to resolve autoScroll on horizontal
  return <View style={{ width: width }}>
    <FlatList
      data={banners}
      ref={flatList}
      keyExtractor={(item) => `${item.id}`}
      horizontal={true}
      scrollEventThrottle={16}
      snapToAlignment={'center'}
      decelerationRate={'fast'}
      //pagingEnabled
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index })=><Animated.Image
        onLoad={onLoad}
        key={index}
        source={{ uri: item.image }}
        resizeMode={'cover'}
        style={[
          {
            opacity: opacity,
            marginLeft: Dimensions.get('window').width*0.05,
            width: Dimensions.get('window').width * 0.9,
            height: Dimensions.get('window').width * 0.4,
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
      />}
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

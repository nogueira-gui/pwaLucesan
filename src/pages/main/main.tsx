import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import WhatsappButton from '../../components/whatsappButton';
import BannerSlider from '../../components/bannerSlider';
import CheckoutCardItem from '../../pages/checkout/component/checkoutCardItem';
import GridItem from '../../pages/main/component/gridItem';
import HorizontalItemList from '../../pages/main/component/horizontalItemList';
import SearchInput from '../../components/searchInput';
import LogoImage from '../../components/logo';
import Categories from './component/categories';

export default function Main() {

  const dataBanner = [
    {
      id: 1,
      name: "Barco",
      image: "http://www.leikosushi.com.br/assets/website/images/cardapio/17042019180130.jpg",
      category: "Médio",
      price: 18.98,
    },
    {
      id: 2,
      name: "Sashimi",
      image: "http://www.leikosushi.com.br/assets/website/images/cardapio/06092018172155.jpg",
      category: "Médio",
      price: 18.90,
    },
    {
      id: 3,
      name: "Sashimi",
      image: "http://www.leikosushi.com.br/assets/website/images/cardapio/06092018171802.jpg",
      category: "Especial",
      price: 18.98,
    },
    {
      id: 4,
      name: "HotHoll",
      image: "https://www.kindpng.com/picc/m/113-1138053_sushi-png-image-file-sushi-png-transparent-png.png",
      category: "ROLL",
      price: 18.98,
    },
  ];

  const data = [
    {
      id: 0,
      name: "Barco",
      image: "http://www.leikosushi.com.br/assets/website/images/cardapio/17042019180130.jpg",
      category: "Médio",
      price: 18.98,
    },
    {
      id: 1,
      name: "Sashimi",
      image: "http://www.leikosushi.com.br/assets/website/images/cardapio/06092018172155.jpg",
      category: "Médio",
      price: 18.90,
    },
    {
      id: 2,
      name: "Sashimi",
      image: "http://www.leikosushi.com.br/assets/website/images/cardapio/06092018171802.jpg",
      category: "Especial",
      price: 18.98,
    },
    {
      id: 3,
      name: "HotHoll",
      image: "https://www.kindpng.com/picc/m/113-1138053_sushi-png-image-file-sushi-png-transparent-png.png",
      category: "ROLL",
      price: 18.98,
    },
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <LogoImage />
        <SearchInput />
        <Text style={{
          fontSize: 20,
          fontFamily: 'SourceSansPro_600SemiBold',
          textAlign: 'left',
          paddingLeft:20,
          marginTop:10
        }}>Destaques</Text>
        <BannerSlider props={dataBanner}></BannerSlider>
        <Categories/>
        <Text style={{
          fontSize: 20,
          fontFamily: 'SourceSansPro_600SemiBold',
          textAlign: 'left',
          paddingLeft:20,
          marginTop:25,
        }}>Os mais pedidos</Text>
        <HorizontalItemList props={data} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

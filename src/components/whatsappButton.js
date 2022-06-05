import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function WhatsappButton({props}) {
  async function placeOrderWhatsapp() {
      // existe um limite para url !!!
      let result = await WebBrowser.openBrowserAsync(`https://api.whatsapp.com/send?phone=5511963592561&text=I%27d%20like%20to%20chat%20with%20you`);
      setResult(result);
  }
  return (
    <View style={styles.container}>
      <FontAwesome.Button name="whatsapp" size={30} backgroundColor="#25D366" 
      onPress={placeOrderWhatsapp}>
      {props}
      </FontAwesome.Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

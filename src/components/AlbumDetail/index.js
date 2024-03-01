import { Text,View,Image } from "react-native";
import styles from "./style";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();

export default function AlbumDetail({ albumData }){

    const [fontsLoaded, fontError] = useFonts({
        'MPLUS1-Light' : require('../../../assets/fonts/MPLUS1-Light.ttf'),
      });
    
      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded, fontError]);
    
      if (!fontsLoaded && !fontError) {
        return null;
      }

    return(
        <View style={styles.albumCard} onLayout={onLayoutRootView}>
            <Text style={[styles.title,{ fontFamily:'MPLUS1-Light'}]}> { albumData.id } 、 { albumData.name }</Text>
            <Text style={styles.text}> Artist : { albumData.artist } ／ Writer : { albumData.writer }</Text>
            <Image style={styles.img} source={{uri:albumData.image }}  />
        </View>
    );
}
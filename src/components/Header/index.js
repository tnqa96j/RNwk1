import { Text,View,Image } from "react-native";
import styles from "./style";

import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();

export default function Header(){
    

    const [fontsLoaded, fontError] = useFonts({
        'Gruppo-Regular': require('../../../assets/fonts/Gruppo-Regular.ttf'),
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
        <View style = {styles.headerStyle} onLayout={onLayoutRootView}>
            <Image style={styles.avatar} source={require('../../../assets/avatar.jpg')} />
            <Text style = {[styles.title,{fontFamily:'Gruppo-Regular'}]}>
                EGOIST
            </Text>
            <Text style = {[styles.textStyle,{ fontFamily : 'Gruppo-Regular'}]}>
             Greatest Hits 2011~2023 Alter Ego
            </Text>
            
        </View>
    );
}
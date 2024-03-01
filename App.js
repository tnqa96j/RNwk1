import { StyleSheet, Text, View  , SafeAreaView , StatusBar,ImageBackground ,ScrollView} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


export default function App() {

  return (
    <SafeAreaView style = {styles.container}>
      <StatusBar />
      <ImageBackground source={{uri:'https://www.sonymusic.co.jp/adm_image/common/artist_image/73100000/73100499/jacket_image/164704.jpg'}} resizeMode='cover' style={styles.BG}>
        <ImageBackground source={require('./assets/bg.png')} resizeMode='cover' style={styles.BG}>
          <ScrollView>
            <Header />
            <AlbumList />
          </ScrollView>
        </ImageBackground>
       
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  text:{
    fontSize:60,
    color:'red',
  },
  BG:{
    flex:1,
  }
});

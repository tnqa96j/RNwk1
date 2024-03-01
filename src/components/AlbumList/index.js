import { Text,View,ScrollView } from "react-native";
import styles from "./style";
import AlbumDetail from "../AlbumDetail";
import albumData from "../../json/album.json"

export default function AlbumList (){
    return(
        <ScrollView style={styles.list}>
            {
                albumData.map( data => {
                    return <AlbumDetail key={data.id} albumData={data} />
                })
            }

        </ScrollView>
    );
}
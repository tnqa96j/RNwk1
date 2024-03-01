import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    albumCard: {
        padding: 20,
        backgroundColor: 'rgba(256, 256, 256, 0.85)',
        marginBottom: 20,
        borderRadius: 10,
        paddingTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 3.84,

        elevation: 3,
        
    },
    title: {
        fontSize: 24,
        height: 40,
        textAlignVertical: 'center'
    },
    text: {
        color: 'gray'
    },
    img: {
        marginTop: 15,
        height: 350,
        borderRadius: 10,

    },
});

export default styles;
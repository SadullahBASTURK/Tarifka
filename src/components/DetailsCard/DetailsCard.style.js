import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 15,
        marginBottom: 20,
    },
    image_container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        minHeight: 300,
        resizeMode: 'cover',
        borderWidth: 0.8,
        borderColor: '#A8A196',
        borderRadius: 15,
        overflow: 'hidden',
    },
    text: {
        textAlign: 'left',
        color: '#BE3144',
        fontWeight: 'bold',
        fontSize: 28,
        paddingTop: 10,
    },
    area: {
        color: '#BE3144',
        fontWeight: 'bold',
        fontSize: 16,
        borderBottomWidth: 0.8,
        borderBottomColor: '#A8A196',
        paddingBottom: 10,
    },
    desc: {
        color: '#000',
        paddingTop: 15,
        paddingBottom: 20,
        fontSize: 16,
        lineHeight: 23,
        textAlign: 'justify',
    },
    button: {
        backgroundColor: '#BE3144',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    button_text: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
})
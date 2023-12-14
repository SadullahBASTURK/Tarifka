import { StyleSheet } from "react-native";

export default StyleSheet.create({
    main_container: {
        alignItems: 'center',
        backgroundColor: '#ffb534',
    },
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        width: '95%',
        padding: 5,
        borderTopLeftRadius: 60,
        borderBottomLeftRadius: 60,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        marginVertical: 8,
        alignItems: 'center',
        borderColor: '#B0A695',
        borderWidth: 1,
    },
    image: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
        borderRadius: 10,
        marginLeft: 10,
    },
    title: {
        color: '#000',
        fontSize: 22,
        paddingLeft: 15,
        paddingBottom: 5,
    },
});
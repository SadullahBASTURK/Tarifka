import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    body_container: {
        marginVertical: 7,
        alignItems: 'center',
    },
    image: {
        width: deviceSize.width * 0.9,
        height: deviceSize.height / 4,
        resizeMode: 'contain',
        justifyContent: 'flex-end',
        borderRadius: 15,
        overflow: 'hidden',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#fff',
        textAlign: 'right',
        backgroundColor: '#BE3144',
        paddingRight: 10,
        paddingLeft: 10,
    },
})
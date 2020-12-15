import { StyleSheet, Platform } from 'react-native';
const styles = StyleSheet.create({

    centerLeft: {
        flex: 1,
        marginTop: 150,
        alignItems: 'flex-start',
        padding: 10
    },
    btnGreen: {
        backgroundColor: '#015744',
        padding: 15,
        margin: 10,
        borderRadius: 5,
    },
    btnWhite: {
        backgroundColor: '#fff',
        padding: 15,
        margin: 10,
        borderRadius: 5,
        borderColor: '#015744',
        borderWidth: 1
    },
    
    btnallWhite: {
        backgroundColor: '#fff',
        padding: 15,
        margin: 10,
        borderRadius: 5,
    },
    fontWhite: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center'
    },
    fontGreen: {
        color: '#015744',
        fontSize: 14,
        textAlign: 'center'
    },
    btnConfirm: {
        backgroundColor: '#015744',
        borderRadius: 5,
        padding: 15,
        margin: 10,
        width: '40%'
    },
    btnReject: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        margin: 10,
        borderColor: '#015744',
        borderWidth: 1,
        width: '40%'

    },
    inputs: {
        // height: 45,
        flex: 1,
        color: '#000',
        fontSize: 16,
        width: '100%'
    },
    btnPhone: {
        width: 80,
        height: 80,
        backgroundColor: '#fff',
        borderRadius: 90,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.25)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnNull: {
        width: 80,
        height: 80,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnNullDel: {
        width: 80,
        height: 80,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnPinWhite: {
        width: 15,
        height: 15,
        backgroundColor: '#fff',
        borderRadius: 90,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.25)',
        margin: 5
    },
    btnPinGreen: {
        width: 15,
        height: 15,
        backgroundColor: '#015744',
        borderRadius: 90,
        margin: 5
    },
});

export default styles;
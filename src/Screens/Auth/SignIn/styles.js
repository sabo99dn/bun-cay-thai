import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '$bgLogin',
        padding: 10,
    },
    logo: {
        alignSelf: 'center',
        marginLeft: 25
    },
    content: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-evenly',
    },
    btnGroup: {
        width: '100%',
        paddingLeft: 15,
        paddingRight: 15,
        alignItems: 'center',
    },
    btnLogin: {
        marginBottom: 20,
        backgroundColor: '$btnRed',
        borderWidth: 0
    },
    textLogin: {
        color: '$white',
        fontWeight: 'bold',
    },
    textSignUp: {
        fontWeight: 'bold',
    },
    security: {
        padding: 10,
    },
    txt: {
        textAlign: 'center',
        color: '$black',
        fontWeight: '$fontWeightNormal',
        fontSize: "$normalText",
        fontFamily: '$font',
    },
    txtClick: {
        color: '$textClick',
        fontFamily: '$font',
        fontWeight: '$fontWeightBold',
    },
});

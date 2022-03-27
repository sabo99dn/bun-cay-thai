import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    btn: {
        width: '100%',
        flexDirection: 'row',
        borderRadius: '$borderBtnRadius',
        height: '$btnHeight',
        backgroundColor: '$btnWhite',
        fontFamily: '$font',
        fontSize: '$largeText',
        lineHeight: '$maxLineHeight',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '$btnBorderColor',
        borderWidth: '$borderButtonWidth',
    },
    text: {
        alignItems: 'center',
        color: '$btnColorBlack',
        fontSize: "$largeText",
        fontWeight: '$fontWeightNormal'
    },
});

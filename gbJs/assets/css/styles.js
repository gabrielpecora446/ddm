// assets/css/styles.js
import { StyleSheet, Dimensions, Animated } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    layout: {
        flex: 1,
        backgroundColor: '#0a0a0a',
        paddingHorizontal: 16,
        paddingVertical: 20,
    },

    containerCenter: {
        alignItems: 'center',
    },

    titulo: {
        fontSize: width > 400 ? 34 : 28,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        marginBottom: 10,
        letterSpacing: 3,
        textTransform: 'uppercase',
        textShadowColor: 'rgba(0, 255, 200, 0.6)',
        textShadowOffset: { width: 0, height: 3 },
        textShadowRadius: 8,
    },

    subtitulo: {
        fontSize: width > 400 ? 18 : 15,
        fontWeight: '300',
        color: '#b2bec3',
        textAlign: 'center',
        marginBottom: 20,
        letterSpacing: 1.2,
        textTransform: 'uppercase',
    },

    img: {
        width: '90%',
        height: width > 400 ? 220 : 180,
        borderRadius: 18,
        marginVertical: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        borderWidth: 1,
        borderColor: 'rgba(0, 255, 200, 0.2)',
        shadowColor: '#00fff7',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.7,
        shadowRadius: 16,
        elevation: 10,
        transform: [{ scale: 1 }],
    },

    input: {
        width: '90%',
        height: width > 400 ? 52 : 45,
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        borderRadius: 14,
        paddingHorizontal: 16,
        fontSize: width > 400 ? 16 : 14,
        color: '#ffffff',
        borderWidth: 1,
        borderColor: 'rgba(0, 255, 200, 0.2)',
        marginBottom: 14,
        shadowColor: '#00fff7',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 6,
        // animação suave ao focar
        transition: 'border-color 0.2s ease',
    },

    buttonsContainer: {
        flexDirection: width > 400 ? 'row' : 'column',
        justifyContent: 'space-between',
        width: '90%',
        marginTop: 14,
    },

    buttonReset: {
        flex: 1,
        height: width > 400 ? 58 : 48,
        backgroundColor: '#ff1744',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: width > 400 ? 10 : 0, // espaço horizontal em telas grandes
        marginBottom: width <= 400 ? 10 : 0, // espaço vertical em telas pequenas
        shadowColor: '#ff1744',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.6,
        shadowRadius: 12,
        elevation: 6,
        transform: [{ scale: 1 }],
    },

    buttonConfirm: {
        flex: 1,
        height: width > 400 ? 58 : 48,
        backgroundColor: '#00e676',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: width > 400 ? 0 : 0, // opcional, não precisa se for coluna
        shadowColor: '#00e676',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.6,
        shadowRadius: 12,
        elevation: 6,
        transform: [{ scale: 1 }],
    },


    buttonText: {
        color: '#0a0a0a',
        fontSize: width > 400 ? 18 : 15,
        fontWeight: '700',
        letterSpacing: 1.5,
        textTransform: 'uppercase',
    },

    mensagemErro: {
        fontSize: width > 400 ? 15 : 13,
        color: '#ff5252',
        fontWeight: '600',
        marginBottom: 10,
        textAlign: 'center',
        opacity: 0.95,
        transform: [{ translateY: 0 }],
        transition: 'opacity 0.3s, transform 0.3s',
    },

    mensagemSucesso: {
        fontSize: width > 400 ? 15 : 13,
        color: '#00e676',
        fontWeight: '600',
        marginBottom: 10,
        textAlign: 'center',
        opacity: 0.95,
        transform: [{ translateY: 0 }],
        transition: 'opacity 0.3s, transform 0.3s',
    },

    footer: {
        fontSize: 11,
        color: '#777777',
        letterSpacing: 1,
        textAlign: 'center',
        marginTop: 18,
        marginBottom: 18,
    },
});

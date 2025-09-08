// App.js
import React, { useState, useRef, useEffect } from 'react';
import {
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
  View,
  Platform,
  Keyboard,
  Animated,
  useWindowDimensions,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import css from './assets/css/styles.js';

export default function App() {
  const { width } = useWindowDimensions();

  const imagemPadrao = require('./assets/logo.webp');
  const [img, setImg] = useState(imagemPadrao);
  const [mensagem, setMensagem] = useState('');
  const [foto, setFoto] = useState('');
  const [fotoConfirmada, setFotoConfirmada] = useState('');

  // Animations
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(-10)).current;
  const imageScale = useRef(new Animated.Value(1)).current;
  const scaleReset = useRef(new Animated.Value(1)).current;
  const scaleConfirm = useRef(new Animated.Value(1)).current;

  const imagens = {
    ferrari: require('./assets/imgs/ferrari.jpg'),
    lamborghini: require('./assets/imgs/lamborghini.jpg'),
    porsche: require('./assets/imgs/porsche.jpg'),
    bmw: require('./assets/imgs/bmw.jpg'),
    mercedes: require('./assets/imgs/mercedes.jpg'),
    audi: require('./assets/imgs/audi.jpg'),
    tesla: require('./assets/imgs/tesla.jpg'),
    mclaren: require('./assets/imgs/mclaren.jpg'),
    bugatti: require('./assets/imgs/bugatti.jpg'),
    jaguar: require('./assets/imgs/jaguar.jpg'),
  };

  const validarFoto = (nomeDaFoto = '') => {
    const fotoInput = nomeDaFoto.toLowerCase().trim();
    return imagens[fotoInput] ? imagens[fotoInput] : null;
  };

  const showMensagem = () => {
    fadeAnim.setValue(0);
    slideAnim.setValue(-10);
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 300, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 300, useNativeDriver: true }),
    ]).start();
  };

  const Resetar = () => {
    setImg(imagemPadrao);
    setMensagem('');
    setFoto('');
    setFotoConfirmada('');

    Animated.sequence([
      Animated.timing(scaleReset, { toValue: 0.95, duration: 100, useNativeDriver: true }),
      Animated.timing(scaleReset, { toValue: 1, duration: 100, useNativeDriver: true }),
    ]).start();
  };

  const Confirmar = () => {
    const imagemSelecionada = validarFoto(foto);
    if (imagemSelecionada) {
      setImg(imagemSelecionada);
      setFotoConfirmada(foto);
      setMensagem(`Modelo ${foto.toUpperCase()} confirmado!`);
      showMensagem();
      Animated.sequence([
        Animated.timing(scaleConfirm, { toValue: 0.95, duration: 100, useNativeDriver: true }),
        Animated.timing(scaleConfirm, { toValue: 1, duration: 100, useNativeDriver: true }),
      ]).start();

      // Pequena animação de escala na imagem
      Animated.sequence([
        Animated.timing(imageScale, { toValue: 0.97, duration: 100, useNativeDriver: true }),
        Animated.timing(imageScale, { toValue: 1, duration: 100, useNativeDriver: true }),
      ]).start();

      Alert.alert('Confirmado', `Você confirmou a seleção do modelo ${foto.toUpperCase()}!`);
    } else {
      setMensagem('Modelo não encontrado. Digite corretamente!');
      showMensagem();
    }
  };

  const handleInputChange = (value) => {
    setFoto(value);
    if (value.trim() === '') {
      setMensagem('');
    } else if (validarFoto(value)) {
      setMensagem(`Modelo ${value.toUpperCase()} encontrado!`);
    } else {
      setMensagem('Modelo não encontrado.');
    }
    showMensagem();
  };

  return (
    <SafeAreaView style={[css.layout, { justifyContent: 'space-between' }]}>
      <StatusBar barStyle="light-content" backgroundColor="#111" />

      <KeyboardAwareScrollView
        contentContainerStyle={[css.containerCenter, { paddingBottom: 50 }]}
        enableOnAndroid={true}
        extraScrollHeight={20}
        keyboardShouldPersistTaps="handled"
        enableAutomaticScroll={true}
      >
        <Text style={css.titulo}>Garage</Text>
        <Text style={css.subtitulo}>Descubra os carros mais desejados do mundo!</Text>

        <TextInput
          style={[
            css.input,
            foto
              ? validarFoto(foto)
                ? { borderColor: '#00e676' }
                : { borderColor: '#ff5252' }
              : { borderColor: 'rgba(0,255,200,0.2)' },
          ]}
          placeholder="Digite: ferrari, tesla, porsche..."
          placeholderTextColor="#95a5a6"
          value={foto}
          onChangeText={handleInputChange}
          autoCorrect={false}
          autoCapitalize="none"
        />

        {mensagem !== '' && (
          <Animated.Text
            style={[
              mensagem.includes('não') ? css.mensagemErro : css.mensagemSucesso,
              { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
            ]}
          >
            {mensagem}
          </Animated.Text>
        )}

        <Animated.Image source={img} style={[css.img, { transform: [{ scale: imageScale }] }]} resizeMode="cover" />

        <View style={css.buttonsContainer}>

          <Animated.View style={{ flex: 1, marginRight: width > 400 ? 10 : 0, marginBottom: width > 400 ? 0 : 10, transform: [{ scale: scaleConfirm }] }}>
            <TouchableOpacity style={css.buttonConfirm} onPress={Confirmar} activeOpacity={0.7}>
              <Text style={css.buttonText}>Confirmar</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View style={{ flex: 1, marginRight: width > 400 ? 10 : 0, marginBottom: width > 400 ? 0 : 10, transform: [{ scale: scaleReset }] }}>
            <TouchableOpacity style={css.buttonReset} onPress={Resetar} activeOpacity={0.7}>
              <Text style={css.buttonText}>Resetar</Text>
            </TouchableOpacity>
          </Animated.View>

        </View>
      </KeyboardAwareScrollView>

      <View style={{ paddingVertical: 10, backgroundColor: '#0a0a0a' }}>
        <Text style={css.footer}>© 2025 AutoShow Motors</Text>
      </View>
    </SafeAreaView>
  );
}

// App.js
import {
  Text,
  SafeAreaView,
  Image,
  Button,
  TextInput,
  View
} from 'react-native';
import { useState } from 'react';
import styles from './assets/css/styles';  // Importando o arquivo de estilos

export default function App() {
  let [img, setImg] = useState(require('./assets/imgs/num1.png'));
  let [texto, setTexto] = useState(null);

  // Array com as imagens
  const imagens = [
    require('./assets/imgs/num1.png'),
    require('./assets/imgs/num2.png'),
    require('./assets/imgs/num3.png'),
    require('./assets/imgs/num4.png'),
    require('./assets/imgs/num5.png'),
    require('./assets/imgs/num6.png'),
    require('./assets/imgs/num7.png'),
    require('./assets/imgs/num8.png'),
    require('./assets/imgs/num9.png'),
    require('./assets/imgs/num10.png')
  ];

  function TrocaImg(foto) {
    // Verificando a escolha do usuário entre 1 e 10
    if (foto) {
      const fotoNumero = parseInt(foto);
      if (fotoNumero >= 1 && fotoNumero <= 10) {
        setImg(imagens[fotoNumero - 1]);
        setTexto('');
      } else {
        setTexto('Imagem não encontrada');
        setImg(null);
      }
    }
  }

  // Função para trocar para uma imagem aleatória
  function TrocarImagemAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * imagens.length);
    setImg(imagens[indiceAleatorio]);
    setTexto('');
  }

  return (
    <SafeAreaView style={styles.layout}>
      <Text style={styles.paragrafo}>Escolha um número</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite um número entre 1 e 10"
        onChangeText={(value) => TrocaImg(value)}
        keyboardType="numeric"
      />

      <Text style={styles.textoMensagem}>{texto}</Text>

      {img && <Image source={img} style={styles.image} />}
      
      <View style={styles.buttonContainer}>
        <Button
          title="Trocar Imagem Aleatória"
          color="#ffffff"
          onPress={TrocarImagemAleatoria}
        />
      </View>
    </SafeAreaView>
  );
}

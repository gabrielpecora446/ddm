// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#e9f5f4',
    padding: 20,
    alignItems: 'center',
  },
  paragrafo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#00796b',
    marginBottom: 20,
  },
  input: {
    height: 45,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#00796b',
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 18,
    width: '80%',
    backgroundColor: '#ffffff',
  },
  textoMensagem: {
    fontSize: 16,
    color: '#d32f2f',
    marginVertical: 10,
    fontStyle: 'italic',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#00796b',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  buttonContainer: {
    marginTop: 20,
    width: '80%',
    backgroundColor: '#00796b',
    borderRadius: 10,
  },
});

export default styles;

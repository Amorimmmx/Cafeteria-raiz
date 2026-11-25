import { StyleSheet } from 'react-native';

const casca = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#F5EFE6',
  },
  conteudo: {
    alignItems: 'center',
    padding: 22,
    paddingTop: 30,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4B2E1E',
  },
  texto: {
    fontSize: 15,
    color: '#6F625A',
    marginTop: 8,
    marginBottom: 16,
    textAlign: 'center',
  },
  imagem: {
    width: '100%',
    height: 280,
    borderRadius: 22,
    marginBottom: 20,
  },
  botao: {
    width: '100%',
    backgroundColor: '#9A5528',
    paddingVertical: 16,
    borderRadius: 14,
    marginBottom: 14,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartao: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
  },
  cartaoTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4B2E1E',
  },
  cartaoTexto: {
    fontSize: 13,
    color: '#6F625A',
    marginTop: 6,
  },
  produto: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    marginBottom: 14,
  },
  fotoProduto: {
    width: 88,
    height: 88,
    borderRadius: 12,
    marginRight: 14,
  },
  info: {
    flex: 1,
  },
  preco: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#9A5528',
    marginTop: 6,
  },
});

export default casca;
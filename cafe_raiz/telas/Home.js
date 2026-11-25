import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import casca from '../css/estilo';

export default function Home({ navigation }) {
  return (
    <ScrollView style={casca.tela} contentContainerStyle={casca.conteudo}>
      <Image source={require('../img/cafer.jpg')} style={casca.imagem} />

      <Text style={casca.titulo}>Café Raiz</Text>
      <Text style={casca.texto}>Tradição em cada detalhe</Text>

      <TouchableOpacity style={casca.botao} onPress={() => navigation.navigate('Cafés')}>
        <Text style={casca.textoBotao}>Ver cardápio</Text>
      </TouchableOpacity>

      <View style={casca.cartao}>
        <Text style={casca.cartaoTitulo}>Aberto de segunda a sábado</Text>
        <Text style={casca.cartaoTexto}>Das 8h às 19h</Text>
      </View>
    </ScrollView>
  );
}
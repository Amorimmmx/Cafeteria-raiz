import { ScrollView, View, Text, TouchableOpacity, Linking } from 'react-native';
import casca from '../css/estilo';

export default function Contatos() {
  return (
    <ScrollView style={casca.tela} contentContainerStyle={casca.conteudo}>
      <Text style={casca.titulo}>Contatos</Text>
      <Text style={casca.texto}>Fale com a gente</Text>

      <TouchableOpacity style={casca.botao} onPress={() => Linking.openURL('https://wa.me/')}>
        <Text style={casca.textoBotao}>Chamar no WhatsApp</Text>
      </TouchableOpacity>

      <TouchableOpacity style={casca.botao} onPress={() => Linking.openURL('https://www.instagram.com/')}>
        <Text style={casca.textoBotao}>Seguir no Instagram</Text>
      </TouchableOpacity>

      <TouchableOpacity style={casca.botao} onPress={() => Linking.openURL('https://www.google.com/maps')}>
        <Text style={casca.textoBotao}>Ver no mapa</Text>
      </TouchableOpacity>

      <View style={casca.cartao}>
        <Text style={casca.cartaoTitulo}>Onde estamos</Text>
        <Text style={casca.cartaoTexto}>Venha conhecer nosso espaço e aproveitar um bom café. Será sempre muito bem-vindo!</Text>
      </View>
    </ScrollView>
  );
}
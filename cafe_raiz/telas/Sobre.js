import { ScrollView, View, Text, Image } from 'react-native';
import casca from '../css/estilo';

export default function Sobre() {
  return (
    <ScrollView style={casca.tela} contentContainerStyle={casca.conteudo}>
      <Text style={casca.titulo}>Sobre nós</Text>
      <Text style={casca.texto}>Conheça a cafeteria</Text>

      <Image source={require('../cafeteria.jpg')} style={casca.imagem} />

      <View style={casca.cartao}>
        <Text style={casca.cartaoTitulo}>Nossa história</Text>
        <Text style={casca.cartaoTexto}>
          O Café Raiz surgiu da vontade de reunir pessoas em torno de coisas simples: um café quentinho, um doce fresquinho e uma boa conversa. Criamos um espaço acolhedor, onde cada detalhe é pensado para fazer você se sentir em casa. Aqui, o importante é aproveitar cada momento.
        </Text>
      </View>

      <View style={casca.cartao}>
        <Text style={casca.cartaoTitulo}>Horário de funcionamento</Text>
        <Text style={casca.cartaoTexto}>Segunda a sábado, das 8h às 19h</Text>
      </View>
    </ScrollView>
  );
}
import { ScrollView, View, Text, Image } from 'react-native';
import casca from '../css/estilo';

export default function Cafe() {
  return (
    <ScrollView style={casca.tela} contentContainerStyle={casca.conteudo}>
      <Text style={casca.titulo}>Cafés</Text>
      <Text style={casca.texto}>Um café para cada momento.</Text>

      <View style={casca.produto}>
        <Image source={require('../img/expresso.jpg')} style={casca.fotoProduto} />
        <View style={casca.info}>
          <Text style={casca.cartaoTitulo}>Espresso</Text>
          <Text style={casca.cartaoTexto}>Curto, forte e encorpado</Text>
          <Text style={casca.preco}>R$ 6,00</Text>
        </View>
      </View>

      <View style={casca.produto}>
        <Image source={require('../img/Cappuccino.jpg')} style={casca.fotoProduto} />
        <View style={casca.info}>
          <Text style={casca.cartaoTitulo}>Cappuccino</Text>
          <Text style={casca.cartaoTexto}>Espresso, leite e espuma</Text>
          <Text style={casca.preco}>R$ 12,00</Text>
        </View>
      </View>

      <View style={casca.produto}>
        <Image source={require('../img/suave.jpg')} style={casca.fotoProduto} />
        <View style={casca.info}>
          <Text style={casca.cartaoTitulo}>Latte</Text>
          <Text style={casca.cartaoTexto}>Suave, com bastante leite</Text>
          <Text style={casca.preco}>R$ 13,00</Text>
        </View>
      </View>

      <View style={casca.produto}>
        <Image source={require('../Cafe_choco.jpg')} style={casca.fotoProduto} />
        <View style={casca.info}>
          <Text style={casca.cartaoTitulo}>Mocha</Text>
          <Text style={casca.cartaoTexto}>Café, chocolate e leite</Text>
          <Text style={casca.preco}>R$ 14,00</Text>
        </View>
      </View>
    </ScrollView>
  );
}
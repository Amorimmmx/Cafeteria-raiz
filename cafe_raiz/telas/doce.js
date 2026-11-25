import { ScrollView, View, Text, Image } from 'react-native';
import casca from '../css/estilo';

export default function Doce() {
  return (
    <ScrollView style={casca.tela} contentContainerStyle={casca.conteudo}>
      <Text style={casca.titulo}>Doces</Text>
      <Text style={casca.texto}>Pequenos prazeres para adoçar o dia.</Text>

      <View style={casca.produto}>
        <Image source={require('../ko.jpg')} style={casca.fotoProduto} />
        <View style={casca.info}>
          <Text style={casca.cartaoTitulo}>Cookie</Text>
          <Text style={casca.cartaoTexto}>Com gotas de chocolate</Text>
          <Text style={casca.preco}>R$ 8,00</Text>
        </View>
      </View>

      <View style={casca.produto}>
        <Image source={require('../img/Massa.jpg')} style={casca.fotoProduto} />
        <View style={casca.info}>
          <Text style={casca.cartaoTitulo}>Croissant</Text>
          <Text style={casca.cartaoTexto}>Massa folhada e amanteigada</Text>
          <Text style={casca.preco}>R$ 11,00</Text>
        </View>
      </View>

      <View style={casca.produto}>
        <Image source={require('../img/amargo.jpg')} style={casca.fotoProduto} />
        <View style={casca.info}>
          <Text style={casca.cartaoTitulo}>Brownie</Text>
          <Text style={casca.cartaoTexto}>Chocolate meio amargo</Text>
          <Text style={casca.preco}>R$ 10,00</Text>
        </View>
      </View>

      <View style={casca.produto}>
        <Image source={require('../img/cenoura.jpg')} style={casca.fotoProduto} />
        <View style={casca.info}>
          <Text style={casca.cartaoTitulo}>Bolo de cenoura</Text>
          <Text style={casca.cartaoTexto}>Com cobertura de chocolate</Text>
          <Text style={casca.preco}>R$ 9,00</Text>
        </View>
      </View>
    </ScrollView>
  );
}
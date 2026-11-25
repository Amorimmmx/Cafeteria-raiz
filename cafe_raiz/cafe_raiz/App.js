import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import Home from './telas/Home';
import Cafe from './telas/cafe';
import Doce from './telas/doce';
import Sobre from './telas/Sobre';
import Contatos from './telas/Contatos';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
       screenOptions={{
    headerShown: false,
    tabBarActiveTintColor: '#FFFFFF',
    tabBarInactiveTintColor: '#D8C2AF',
    tabBarActiveBackgroundColor: '#C47A3F',
    tabBarStyle: {
    backgroundColor: '#4B2E1E',
  },
}}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Cafés"
          component={Cafe}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="coffee" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Doces"
          component={Doce}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cupcake" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Sobre"
          component={Sobre}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="bank" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Contatos"
          component={Contatos}
          options={{
          tabBarIcon: ({ color, size }) => (<MaterialIcons name="contacts" size={24} color="#D8C2AF" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
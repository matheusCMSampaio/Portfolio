import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import Projeto from './Projeto';
import Contatos from './Contatos';


const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerShown: true,
            headerTransparent: true, 
            headerStyle: {
            backgroundColor: 'transparent', 
            },
            headerTitle: '',
            headerTintColor: '#fff', 
            drawerStyle: {
            backgroundColor: '#121212', 
            },
            drawerActiveTintColor: '#6200ee', 
            drawerInactiveTintColor: '#ffffff', 
            drawerItemStyle: { marginVertical: 5 }, 
            drawerLabelStyle: { fontSize: 16 }, 
      }}
    >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Projetos" component={Projeto} />
        <Drawer.Screen name="Contatos" component={Contatos} />
      </Drawer.Navigator>
    
  );
}

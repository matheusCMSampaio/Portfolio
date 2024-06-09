import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Image } from 'react-native';

export default function Home({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.cabecalho}>
        <Image
          source={{ uri: 'https://media.licdn.com/dms/image/D4D35AQG9QBRCkJGK7g/profile-framedphoto-shrink_200_200/0/1678139717738?e=1718575200&v=beta&t=H3iXDCz_nZ-rLfHak6AZSAcIoJ7WnjzovBaM1gx2eM0' }} 
          style={styles.imagem}
        />
        <Text style={styles.nome}>Matheus Sampaio</Text>
        <Text style={styles.titulo}>Desenvolvedor Full Stack</Text>
      </View>

      <View style={styles.sessao}>
        <Text style={styles.sessaoTitulo}>Sobre Mim</Text>
        <Text style={styles.sessaoContent}>
        Olá! Sou Matheus, um entusiasta da tecnologia atualmente cursando Tecnologia em Análise e Desenvolvimento de Sistemas na FIAP. Minha paixão pela programação começou com aulas particulares em Java, onde desenvolvi uma sólida compreensão da lógica de programação e da programação orientada a objetos.
        </Text>
      </View>

      <View style={styles.sessao}>
        <Text style={styles.sessaoTitulo}>Projetos</Text>
        <Button
          title="Ver Projetos"
          onPress={() => navigation.navigate('Projetos')}
          color="#6200ee"
        />
      </View>

      <View style={styles.sessao}>
        <Text style={styles.sessaoTitulo}>Experiência</Text>
        <Text style={styles.sessaoContent}>
          - Desenvolvimento de API Rest em Java para a Porto Seguro (2023){'\n'}
          - Projeto atual para a Plusoft (2024 - Presente)
        </Text>
      </View>

      <View style={styles.sessao}>
        <Text style={styles.sessaoTitulo}>Educação</Text>
        <Text style={styles.sessaoContent}>
          - Tecnologo em Análise e Desenvolvimento de Sistemas - FIAP (atualmente) 
        </Text>
      </View>

      <View style={styles.sessao}>
        <Text style={styles.sessaoTitulo}>Contato</Text>
        <Button
          title="Fale Comigo"
          onPress={() => navigation.navigate('Contatos')}
          color="#6200ee"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  cabecalho: {
    alignItems: 'center',
    marginVertical: 20,
  },
  imagem: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  nome: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  titulo: {
    color: '#bbbbbb',
    fontSize: 20,
    marginBottom: 20,
  },
  sessao: {
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
  },
  sessaoTitulo: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sessaoContent: {
    color: '#dddddd',
    fontSize: 16,
  },
});

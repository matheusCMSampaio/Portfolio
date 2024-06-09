import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import ProjetoItens from './ProjetoItens';

export default function Projeto({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Meus Projetos</Text>

        <ProjetoItens 
            title="API Drinks - Python"
            description="Este projeto é uma aplicação web que permite aos usuários buscar receitas de coquetéis, visualizar as instruções e informações traduzidas para o português, e salvar suas bebidas favoritas em um banco de dados Oracle. A aplicação é desenvolvida em Flask, uma micro framework em Python, e utiliza a API TheCocktailDB para buscar informações sobre coquetéis. O projeto também integra o Google Translator para tradução automática das descrições."
            technologies='Flask, HTML, SQL Developer '
            githubUrl="https://github.com/matheusCMSampaio/api-drinks"
        />
        <ProjetoItens
            title='API Rest - Java'
            description="Este projeto é uma API Restful desenvolvida em Java usando Spring Boot, com quatro principais entidades: Usuário, Produto, Avaliação, e Formulário. A API permite operações CRUD (Criar, Ler, Atualizar, Deletar) para cada uma dessas entidades, facilitando a gestão de usuários, produtos, avaliações e formulários. O código segue boas práticas de desenvolvimento e inclui endpoints para cadastrar, buscar, atualizar e deletar informações das entidades mencionadas."
            technologies="Spring Boot, Java, Lombok, Banco de Dados Oracle"
        />
        <ProjetoItens
            title='Aplicativo Mobile de Cadastro e Autenticação com API REST'
            description='Este projeto consiste em um aplicativo móvel desenvolvido com React Native, conectado a uma API REST construída com Spring Boot. O aplicativo permite aos usuários se cadastrarem, fazerem login e navegarem por diferentes seções do aplicativo. Ele inclui funcionalidades como navegação por abas, navegação por pilha e comunicação com a API REST para persistência de dados. As principais telas incluem a tela de login, tela de cadastro, tela de usuário, tela de chat e tela de formulários. Cada tela é bem estruturada com componentes reutilizáveis, garantindo um código limpo e modular.'
            technologies='React Native, Axios, React Navigation, JavaScript, '
        />
      <Button
        title="Voltar"
        onPress={() => navigation.goBack()}
        color="#6200ee"
        style={{ marginBottom: 20 }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  projectItem: {
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    flexDirection: 'row',
  },
  projectImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  projectInfo: {
    flex: 1,
  },
  projectTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  projectDescription: {
    color: '#dddddd',
    fontSize: 16,
    marginBottom: 10,
  },
  projectLink: {
    color: '#6200ee',
    fontSize: 16,
    textDecorationLine: 'underline',
    marginBottom: 5,
  },
});

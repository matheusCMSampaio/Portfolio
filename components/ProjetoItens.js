import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function ProjetoItens({title, description, technologies, githubUrl }){
    return (
        <View style={styles.projectItem}>
          <View style={styles.projectInfo}>
            <Text style={styles.projectTitle}>{title}</Text>
            <Text style={styles.projectDescription}>{description}</Text>
            <Text style={styles.projectTechnologies}>Tecnologias: {technologies}</Text>
            <TouchableOpacity onPress={() => Linking.openURL(githubUrl)}>
              <Text style={styles.projectLink}>Ver no GitHub</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
};
    
const styles = StyleSheet.create({
    projectItem: {
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
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
    projectTechnologies: {
    color: '#bbbbbb',
    fontSize: 16,
    marginBottom: 10,
    },
    projectLink: {
    color: '#6200ee',
    fontSize: 16,
    textDecorationLine: 'underline',
    },
});
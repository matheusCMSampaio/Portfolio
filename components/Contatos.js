import React from 'react';
import { View, Text, Button, StyleSheet, Linking } from 'react-native';

export default function Contatos({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contato</Text>

      <View style={styles.contactItem}>
        <Text style={styles.contactTitle}>Email:</Text>
        <Text style={styles.contactInfo}>matheuschagas415@gmail.com</Text>
      </View>

      <View style={styles.contactItem}>
        <Text style={styles.contactTitle}>Telefone:</Text>
        <Text style={styles.contactInfo}>(11) 98973-1278</Text>
      </View>

      <View style={styles.contactItem}>
        <Text style={styles.contactTitle}>LinkedIn:</Text>
        <Text 
          style={styles.contactInfo} 
          onPress={() => Linking.openURL('https://www.linkedin.com/in/matheus-sampaio-3b9370257/')}
        >
          linkedin.com/in/matheus-sampaio
        </Text>
      </View>

      <View style={styles.contactItem}>
        <Text style={styles.contactTitle}>GitHub:</Text>
        <Text 
          style={styles.contactInfo} 
          onPress={() => Linking.openURL('https://github.com/matheusCMSampaio')}
        >
          github.com/matheusCMSampaio
        </Text>
      </View>

      <Button
        title="Voltar"
        onPress={() => navigation.goBack()}
        color="#6200ee"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  contactItem: {
    marginBottom: 20,
    alignItems: 'center',
  },
  contactTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactInfo: {
    color: '#6200ee',
    fontSize: 16,
  },
});

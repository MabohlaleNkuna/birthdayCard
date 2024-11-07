import React, { useState } from 'react';
import { View, TextInput, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const BirthdayCard = () => {
  const [readerName, setReaderName] = useState('');
  const [creatorMessage, setCreatorMessage] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LinearGradient colors={['#8A2BE2', '#FF69B4', '#FFB6C1']} start={[0, 0]} end={[1, 1]} style={styles.card}>
        <Image source={require('../assets/birthday-decoration.jpg')} style={styles.image} />
       
        <TextInput
          style={styles.input}
          placeholder="Reader's Name"
          value={readerName}
          onChangeText={setReaderName}
        />
        <TextInput
          style={[styles.input, styles.messageInput]}
          placeholder="Birthday Message"
          value={creatorMessage}
          onChangeText={setCreatorMessage}
          multiline
        />
      
        <Text style={styles.previewText}>
          🎉🎈 Happy Birthday, {readerName}! 🎈🎉
        </Text>
        <Text style={styles.messageText}>{creatorMessage}</Text>
        
      </LinearGradient>
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => {
          setReaderName('');
          setCreatorMessage('');
        }}
      >
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  card: {
    width: '100%',
    maxWidth: 400,
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '100%',
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  messageInput: {
    height: 60,
  },
  previewText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'cursive',
  },
  messageText: {
    fontSize: 16,
    marginTop: 5,
    textAlign: 'center',
    color: '#fff',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default BirthdayCard;

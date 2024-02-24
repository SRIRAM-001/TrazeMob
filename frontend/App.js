import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode';

export default function App() {
  const [inputText, setInputText] = useState('3roses');
  const [qrCodeData, setQRCodeData] = useState('');

  const generateQRCode = () => {
    setQRCodeData(inputText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter text for QR code"
        value={inputText}
        onChangeText={(text) => setInputText(text)}
      />
      <TouchableOpacity style={styles.button} onPress={generateQRCode}>
        <Text style={styles.buttonText}>Generate QR Code</Text>
      </TouchableOpacity>
      {qrCodeData !== '' && (
        <View style={styles.qrCodeContainer}>
          <QRCode value={qrCodeData} size={200} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 20,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  qrCodeContainer: {
    marginTop: 20,
  },
});

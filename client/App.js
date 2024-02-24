import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function App() {
  const [inputText, setInputText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter text for QR code"
        value={inputText}
        onChangeText={(text) => setInputText(text)}
      />
      {inputText !== '' && (
        <View style={styles.qrCodeContainer}>
          <QRCode value={inputText} size={200} />
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
  qrCodeContainer: {
    marginTop: 20,
  },
});

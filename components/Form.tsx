import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Platform } from 'react-native';

const FormComponent = () => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    // Handle form submission here
    console.log(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Enter text"
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    ...Platform.select({
      web: {
        width: '100%',
      },
      default: {
        width: '80%',
      },
    }),
  },
});

export default FormComponent;
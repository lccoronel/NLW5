import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import Button from '../../Components/Button';
import colors from '../../styles/colors';

import styles from './styles';

const UserIndentification: React.FC = () => {
  const [isFocused, setFocused] = useState(false);
  const [isFilled, setFilled] = useState(false);
  const [name, setName] = useState<string>('');

  function handleInputBlur() {
    setFocused(false);
    setFilled(!!name);
  }

  const handleInputFocus = () => setFocused(true);

  function handleInputChange(value: string) {
    setFilled(!!value);
    setName(value);
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.content}>
          <View style={styles.form}>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.emoji}>{isFilled ? '😄' : '😀'}</Text>
              <Text style={styles.title}>Como podemos {'\n'} chamar você?</Text>
            </View>

            <TextInput
              style={[
                styles.input,
                (isFocused || isFilled) && { borderColor: colors.green },
              ]}
              placeholder="Digite um nome"
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={handleInputChange}
            />

            <Button title="Confirmar" />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default UserIndentification;

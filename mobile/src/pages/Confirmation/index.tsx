import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import Button from '../../Components/Button';

import styles from './styles';

const Confirmation: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>😀</Text>

        <Text style={styles.title}>Prontinho</Text>

        <Text style={styles.subTitle}>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </Text>
      </View>

      <View style={styles.footer}>
        <Button title="Começar" />
      </View>
    </SafeAreaView>
  );
};

export default Confirmation;

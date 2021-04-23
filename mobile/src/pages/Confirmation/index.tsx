import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../Components/Button';
import styles from './styles';

const Confirmation: React.FC = () => {
  const { navigate } = useNavigation();
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
        <Button title="Começar" onPress={() => navigate('PlantSelection')} />
      </View>
    </SafeAreaView>
  );
};

export default Confirmation;

import React from 'react';
import { Text, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import waterdropImg from '../../assets/watering.png';
import Button from '../../Components/Button';

import styles from './styles';

const Welcome: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'} suas plantas de forma fácil
      </Text>
      <Image source={waterdropImg} />
      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>

      <Button title="Começar" onPress={() => navigate('UserIndentification')} />
    </SafeAreaView>
  );
};

export default Welcome;

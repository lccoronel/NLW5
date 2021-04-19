import React from 'react';
import { 
  Text, 
  SafeAreaView, 
  Image, 
  StyleSheet 
} from 'react-native';

import waterdropImg from '../assets/watering.png';
import Button from '../Components/Button';
import colors from '../styles/colors';

const Welcome: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}> 
      <Text style={styles.title}>Gerencie {'\n'} suas plantas de forma fácil</Text>
      <Image source={waterdropImg} />
      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. 
        Nós cuidamos de lembrar você sempre que precisar.
      </Text>

      <Button title=">" />
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38
  },
  subtitle: {
    fontSize: 18,
    paddingHorizontal: 28,
    textAlign: 'center',
    color: colors.heading,
  },
});

export default Welcome;
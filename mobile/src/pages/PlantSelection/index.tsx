import React from 'react';
import { Text, View } from 'react-native';
import EnviromentButton from '../../Components/EnviromentButton';
import Header from '../../Components/Header';

import styles from './styles';

const PlantSelection: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />

        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subTitle}>Você quer colocar sua planta?</Text>
      </View>

      <EnviromentButton title="teste" active />
    </View>
  );
};

export default PlantSelection;

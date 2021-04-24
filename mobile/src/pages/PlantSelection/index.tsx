import React, { useEffect, useState } from 'react';
import { Text, View, FlatList } from 'react-native';

import EnviromentButton from '../../Components/EnviromentButton';
import Header from '../../Components/Header';
import api from '../../services/api';

import styles from './styles';

interface EnviromentsProps {
  key: string;
  title: string;
}

const PlantSelection: React.FC = () => {
  const [enviroments, setEnviroments] = useState<EnviromentsProps[]>([]);

  useEffect(() => {
    api
      .get('plants_environments')
      .then(response =>
        setEnviroments([{ key: 'all', title: 'Todos' }, ...response.data]),
      );
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />

        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subTitle}>Você quer colocar sua planta?</Text>
      </View>

      <View>
        <FlatList
          horizontal
          contentContainerStyle={styles.enviromentList}
          showsHorizontalScrollIndicator={false}
          data={enviroments}
          renderItem={({ item: enviroment }) => (
            <EnviromentButton title={enviroment.title} />
          )}
        />
      </View>

      <View style={styles.plants}>
        <FlatList
          contentContainerStyle={styles.enviromentList}
          showsHorizontalScrollIndicator={false}
          data={enviroments}
          renderItem={({ item: enviroment }) => (
            <EnviromentButton title={enviroment.title} />
          )}
        />
      </View>
    </View>
  );
};

export default PlantSelection;

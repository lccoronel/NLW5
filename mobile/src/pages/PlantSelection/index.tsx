import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, FlatList, ActivityIndicator } from 'react-native';

import EnviromentButton from '../../Components/EnviromentButton';
import Header from '../../Components/Header';
import Load from '../../Components/Load';
import PlantCardPrimary from '../../Components/PlantCardPrimary';

import api from '../../services/api';
import colors from '../../styles/colors';

import styles from './styles';

interface EnviromentsProps {
  key: string;
  title: string;
}

interface PlantProps {
  id: string;
  name: string;
  about: string;
  walter_tips: string;
  photo: string;
  environments: string[];
  frequency: {
    times: number;
    repeat_every: string;
  };
}

const PlantSelection: React.FC = () => {
  const [environments, setEnvironments] = useState<EnviromentsProps[]>([]);
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
  const [environmentsSelected, setEnvironmentsSelected] = useState('all');
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    Promise.all([
      api.get('plants_environments?_sort=title&_order=asc'),
      api.get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`),
    ])
      .then(([enviromentsResponse, plantsResponse]) => {
        if (!plantsResponse.data) {
          setLoading(true);
          return;
        }

        if (page > 1) {
          setPlants(oldValue => [...oldValue, ...plantsResponse.data]);
          setFilteredPlants(oldValue => [...oldValue, ...plantsResponse.data]);
        } else {
          setPlants(plantsResponse.data);
          setFilteredPlants(plantsResponse.data);
        }

        setEnvironments([
          { key: 'all', title: 'Todos' },
          ...enviromentsResponse.data,
        ]);
      })
      .finally(() => {
        setLoading(false);
        setLoadingMore(false);
      });
  }, [page]);

  const handleSelectPlant = useCallback(
    (environment: string) => {
      setEnvironmentsSelected(environment);

      if (environment === 'all') {
        setFilteredPlants(plants);
        return;
      }

      const filtered = plants.filter(plant =>
        plant.environments.includes(environment),
      );

      setFilteredPlants(filtered);
    },
    [plants],
  );

  const handleFetchMore = useCallback((distance: number) => {
    if (distance < 1) {
      return;
    }

    setLoadingMore(true);
    setPage(oldValue => oldValue + 1);
  }, []);

  if (loading) {
    return <Load />;
  }

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
          data={environments}
          renderItem={({ item: environment }) => (
            <EnviromentButton
              title={environment.title}
              active={environment.key === environmentsSelected}
              onPress={() => handleSelectPlant(environment.key)}
            />
          )}
        />
      </View>

      <View style={styles.plants}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={filteredPlants}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) =>
            handleFetchMore(distanceFromEnd)
          }
          renderItem={({ item: plant }) => <PlantCardPrimary data={plant} />}
          ListFooterComponent={
            loadingMore ? <ActivityIndicator color={colors.green} /> : <></>
          }
        />
      </View>
    </View>
  );
};

export default PlantSelection;

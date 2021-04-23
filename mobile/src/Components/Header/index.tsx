import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>Lucas</Text>
      </View>

      <Image
        source={{ uri: 'https://avatars.githubusercontent.com/u/54275445?v=4' }}
        style={styles.image}
      />
    </View>
  );
};

export default Header;

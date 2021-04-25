import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import styles from './styles';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  };
}

const PlantCardPrimary: React.FC<PlantProps> = ({ data, ...rest }) => {
  return (
    <RectButton style={styles.container} {...rest}>
      <Text style={styles.text}>{data.name}</Text>
    </RectButton>
  );
};

export default PlantCardPrimary;

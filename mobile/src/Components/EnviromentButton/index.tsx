import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import styles from './styles';

interface EnviromentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

const EnviromentButton: React.FC<EnviromentButtonProps> = ({
  title,
  active = false,
  ...rest
}) => {
  return (
    <RectButton
      {...rest}
      style={[styles.container, active && styles.containerActive]}
    >
      <Text style={[styles.text, active && styles.textActive]}>{title}</Text>
    </RectButton>
  );
};

export default EnviromentButton;

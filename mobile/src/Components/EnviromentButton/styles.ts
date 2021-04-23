import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 76,
    height: 40,
    borderRadius: 12,
  },

  containerActive: {
    backgroundColor: colors.green_light,
  },

  text: {
    color: colors.heading,
    fontFamily: fonts.text,
  },

  textActive: {
    fontFamily: fonts.heading,
    color: colors.green_dark,
  },
});

export default styles;

import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
    fontFamily: fonts.heading,
  },

  subtitle: {
    fontSize: 18,
    paddingHorizontal: 28,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.text,
  },
});

export default styles;

import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 30,
  },

  emoji: {
    fontSize: 78,
  },

  title: {
    fontSize: 22,
    fontFamily: fonts.heading,
    textAlign: 'center',
    marginTop: 15,
    color: colors.heading,
  },

  subTitle: {
    fontSize: 17,
    fontFamily: fonts.text,
    textAlign: 'center',
    marginTop: 15,
    color: colors.heading,
    paddingVertical: 20,
  },

  footer: {
    width: '100%',
    paddingHorizontal: 55,
  },
});

export default styles;

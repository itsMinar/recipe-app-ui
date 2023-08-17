import { StyleSheet } from 'react-native';
import { colors } from '../../constant/Data';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  recipeText: {
    color: colors.COLOR_PRIMARY,
    fontSize: 22,
    fontWeight: 'bold',
  },
  tagLine: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#3c444c',
    marginTop: 44,
    marginBottom: 40,
  },
  btn: {
    backgroundColor: colors.COLOR_PRIMARY,
    borderRadius: 18,
    paddingVertical: 18,
    width: '80%',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 18,
    color: colors.COLOR_LIGHT,
    fontWeight: '700',
  },
});

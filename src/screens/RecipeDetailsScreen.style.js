import { StyleSheet } from 'react-native';
import { colors } from '../../constant/Data';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.COLOR_LIGHT,
    flex: 1,
    marginTop: 190,
    borderTopLeftRadius: 56,
    borderTopRightRadius: 56,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  secondContainer: {
    height: 300,
    width: 300,
    position: 'absolute',
    top: -150,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  title: {
    marginTop: 160,
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 20,
    marginVertical: 16,
  },
  extraInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  commonContainer: {
    alignSelf: 'flex-start',
    marginVertical: 22,
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 6,
  },
  ingredientsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  ingredientsDot: {
    backgroundColor: 'red',
    height: 10,
    width: 10,
    borderRadius: 5,
  },
  steps: {
    fontSize: 18,
    marginVertical: 5,
  },
});

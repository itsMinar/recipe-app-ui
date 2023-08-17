import { StyleSheet, TextInput, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../../constant/Data';

const SearchFilter = ({ icon, placeholder }) => {
  return (
    <View style={styles.container}>
      <FontAwesome name={icon} size={20} color={colors.COLOR_PRIMARY} />
      <TextInput style={styles.placeholderTxt} placeholder={placeholder} />
    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.COLOR_LIGHT,
    flexDirection: 'row',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginVertical: 16,

    shadowColor: colors.COLOR_DARK,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
  },
  placeholderTxt: {
    paddingLeft: 8,
    fontSize: 16,
  },
});

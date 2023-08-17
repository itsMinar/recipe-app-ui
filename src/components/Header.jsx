import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../../constant/Data';

const Header = ({ headerText, headerIcon }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{headerText}</Text>
      <FontAwesome name={headerIcon} size={24} color={colors.COLOR_PRIMARY} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  headerText: {
    flex: 1,
    fontSize: 22,
    fontWeight: '700',
  },
});
